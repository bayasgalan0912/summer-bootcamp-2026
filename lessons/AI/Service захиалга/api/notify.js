// Vercel serverless function: POST /api/notify
// Discord webhook URL нь Vercel env-д (DISCORD_WEBHOOK_URL) нууц хадгалагдана.
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });

  const { name = "", contact = "", service = "", message = "" } = req.body || {};
  if (!name || !contact) return res.status(400).json({ error: "name, contact шаардлагатай" });

  const cut = (s, n) => String(s).slice(0, n);

  const r = await fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      allowed_mentions: { parse: [] }, // @everyone-оор spam хийлгэхгүй
      embeds: [
        {
          title: "Шинэ захиалга",
          color: 0x5865f2,
          fields: [
            { name: "Үйлчилгээ", value: cut(service, 100) || "-" },
            { name: "Нэр", value: cut(name, 100), inline: true },
            { name: "Холбоо барих", value: cut(contact, 100), inline: true },
            { name: "Мессеж", value: cut(message, 1000) || "-" },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  });

  if (!r.ok) return res.status(502).json({ error: "Discord алдаа" });
  res.status(200).json({ ok: true });
}
