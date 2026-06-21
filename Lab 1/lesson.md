# 🚀 Lab 1 — Танилцъя & Эхний вэбээ интернэтэд тавья

> 🎯 **Today's promise:** Lab дуусахад таны гарт **live вэбсайтын линк (URL)** байх ба та **structured prompt** бичиж сурсан байна.

|                    |                                                        |
| ------------------ | ------------------------------------------------------ |
| 🎓 **Track**       | Adults (бүтээмж + бизнес)                              |
| ⏱️ **Duration**    | 4 цаг (240 мин)                                        |
| 🧩 **Build today** | Portfolio website → deploy → QR                        |
| 📱 **Discord**     | [discord.gg/h8MHmusCKm](https://discord.gg/h8MHmusCKm) |

---

## ✅ Outcomes — Өнөөдөр юу хийж үзэх вэ?

- Гараараа энгийн **HTML** хуудас бичиж танилцъя (`h1`, `p`, `img`).
- **Google AI Studio**-д prompt бичээд бүтэн **portfolio website** үүсгэнэ.
- Сайтаа **deploy** хийж, **QR**-аар share хийнэ.
- AI-д / олон нийтэд тавьж **болохгүй 3 зүйлийг** нэрлэнэ (AI Reality Check).

---

## 🧭 Хичээлийн задаргаа

> Доорх сэдвүүд дээр дарж **шууд шилжинэ.**

| Цаг         | Сэдэв                                                                                                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| 00:00–00:20 | [🎬 Intro](https://docs.google.com/presentation/d/1MZa9MbeeZ4we3Kulk5tbjqmMftkk9MaqCpXOlCkZzeI/edit?usp=sharing) |
| 00:30–00:50 | [🗺️ Roadmap](#sec-roadmap)                                                                                       |
| 00:50–01:00 | [📱 Discord-д нэгдэх](#sec-discord)                                                                              |
| 01:00–01:05 | ☕ Break (5 мин)                                                                                                 |
| 01:05–01:40 | [👩‍💻 First code: HTML](#sec-html)                                                                                 |
| 01:40–02:10 | [🎨 Exercise: HTML intro + зорилго](#sec-exercise)                                                               |
| 02:10–02:20 | ☕ Break (10 мин)                                                                                                |
| 02:20–03:05 | [🌐 Portfolio site (AI Studio)](#sec-aistudio)                                                                   |
|             |
| 03:20–03:50 | [🚀 Deploy + QR + Share](#sec-deploy)                                                                            |
| 03:50–04:00 | [📦 Wrap + homework](#sec-homework)                                                                              |

</details>

---

<details open id="sec-roadmap">
<summary><strong>🗺️ Хичээлийн - Roadmap</strong></summary>

> 📅 **3 долоо хоног · долоо хоног бүр 3 хичээл** (2 online ~1.5–2 цаг + 1 lab 4 цаг). Дасгал бүрийг **өөрийн жинхэнэ санаа / бизнес** дээр хийнэ — хийсвэр жишээ биш.

| Week   | Сэдэв             | Юу сурах вэ                                                                                                 | 🏁 Долоо хоногийн үр дүн                                                     |
| ------ | ----------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **W1** | AI Foundations    | AI юу вэ & хэрхэн ажилладаг (LLM, model, training data) · Анхны HTML код · structured prompt · agentic эрин | Интернэтэд **live portfolio website** + structured prompt бичиж чаддаг       |
| **W2** | Deep-dive Claude  | Claude desktop, global instructions, connectors, **skills**, automations (Cowork), өөрийн дата дээр visual  | Цаг хэмнэх **1 ажиллаж буй automation** + өөрийн дата дээрх **1 visual**     |
| **W3** | MVP + first users | Scoping → idea/design (Figma · Claude Design · Stitch) → vibe coding (.claude) → deploy → анхны хэрэглэгчид | Ажиллах **prototype** + анхны хэрэглэгчид + **Demo Day** (2–3 мин live demo) |

> 🎯 **MVP гэж юу вэ?** Эцсийн app биш — **Гол функцууд, Эхний дизайн хувилбар, deploy хийсэн** жижиг ажиллах prototype. Зорилго нь эхний жинхэнэ хэрэглэгчид дээр бизнес ээ турших.

**🔁 Хичээл бүр дээр:**

- 🛡️ **AI Reality Check:** AI-д 100% итгэж болохгүй, нягтлах (hallucination), хувийн/customer дата бүү оруулах
- 🗂️ **Prompt Library:** хичээл бүрийн шилдэг prompt-уудаа хувийн санд хадгалж дахин ашиглах.

</details>

---

<details open id="sec-discord">
<summary><strong>📱 Discord-д нэгдэх</strong></summary>

- **Discord**-д ор: [discord.gg/h8MHmusCKm](https://discord.gg/h8MHmusCKm)

<img src="image.png" width="250"/>

- Богино танилцуулга бич, асуулт/ажлаа энд хуваалцана.

</details>

---

<details open id="sec-html">
<summary><strong>👩‍💻 First code: HTML (кодын амт)</strong></summary>

> 💡 HTML = вэб хуудасны **араг яс**. Айх юм байхгүй — хамт бичнэ.

VSCode-д `intro.html` нээ → доорхийг **гараараа** бич → **Live Server**-ээр хар:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background: #f5f5f4;
        color: #1f2937;
        text-align: center;
        font-family: sans-serif;
      }
      h1 {
        color: #7c3aed;
      }
      img {
        border-radius: 16px;
      }
    </style>
  </head>
  <body>
    <h1>Сайн байна уу, намайг ___ гэдэг 👋</h1>
    <img src="my-photo.png" width="260" />
    <p>Ажил мэргэжил: ___</p>
    <p>Сонирхол, хобби: ___</p>
    <h2>🎯 Энэ сургалтаас хүрэх зорилго</h2>
    <p>Юу сурахыг хүсэж байна: ___</p>
    <p>Төгсөхдөө бүтээсэн байхыг хүсэж буй зүйл: ___</p>
  </body>
</html>
```

> 🔁 `<h1>` текстээ соль → **save** → browser шууд шинэчлэгдэнэ. Энэ бол таны хүч.

<details>
<summary>📖 Tags & CSS — тайлбар</summary>

| Tag / CSS        | Юу хийдэг             |
| ---------------- | --------------------- |
| `<html>`         | Үндсэн хүрээ          |
| `<body>`         | Харагдах бүх агуулга  |
| `<h1>`           | Том гарчиг (heading)  |
| `<h2>`           | Дэд гарчиг            |
| `<p>`            | Догол мөр (paragraph) |
| `<img>`          | Зураг                 |
| `background:`    | Арын өнгө             |
| `color:`         | Текстийн өнгө         |
| `border-radius:` | Булан мөлгөр          |

</details>

</details>

---

<details open id="sec-exercise">
<summary><strong>🎨 Exercise: Өөрийнхөө тухай HTML intro</strong></summary>

Дээрх кодыг ашиглан **өөрийнхөө тухай** товч танилцуулга бич:

- 🔠 **Нэр** (`<h1>`)
- 📝 **Ажил мэргэжил · сонирхол** (`<p>`)
- 🖼️ **Зураг** (`<img>`) — өөрийн зургаа `my-photo.png` нэрээр хадгалаад оруул
- 🎯 **Зорилгоо нэм** (`<h2>` + `<p>`): энэ сургалтаас юу сурахыг хүсэж байгаа, төгсөхдөө яг юу **бүтээсэн** байхыг хүсэж буйгаа бич
  _(жишээ: landing page · automation · MVP app · AI-тай ажлын процесс)_

> 💡 Багш эдгээр зорилгод тулгуурлан дасгал ажлуудыг тааруулна.

</details>

---

<details open id="sec-aistudio">
<summary><strong>🌐 Portfolio website — Google AI Studio</strong></summary>

HTML гараар бичихгүйгээр **AI-аар бүтэн website** үүсгэе.

**1. Setup**

- [aistudio.google.com](https://aistudio.google.com) нээ → товч tour
- **Үндсэн заавар (instructions)** тохируул:

<details>
<summary>📋 Жишээ System instructions <em>(хуулж тавь — copy)</em></summary>

```text
- Монгол хэлээр харилц.
- Цэвэр, ойлгомжтой, мэргэжлийн код бич.
- Бүх кодыг нэг файлд бөөгнөрүүлэхгүй. Тохиромжтой бүтэц, файл, модуль болгон хуваа.
- Код бүрийг maintainable, reusable байдлаар бич.
- Шаардлага тодорхойгүй бол таамаглахгүй, эхлээд асуулт асуу.
- Том өөрчлөлт хийхээс өмнө төлөвлөгөөгөө товч тайлбарла.
- Илүүдэл код, шаардлагагүй dependency, overengineering-ээс зайлсхий.
- Шилдэг практик (best practices)-ийг баримтал.
- Алдаа гарвал шалтгааныг тайлбарлаж, засах аргыг санал болго.
- Эхлэгч хэрэглэгч гэж үзээд энгийн, ойлгомжтой тайлбар өг.
- Кодын өөрчлөлтийг алхам алхмаар тайлбарла.
- Боломжтой бол нэг дор бүх шийдлийг биш, хамгийн энгийн шийдлээс эхэл.
- Эргэлзээтэй үед баримтгүй зүйл зохиохгүй. Мэдэхгүй бол шууд хэл.
- Хариултыг товч боловч хангалттай дэлгэрэнгүй байлга.
```

</details>

**2. Build — 4 алхам**

| #   | Алхам                | Тайлбар                                                                                                                                                 |
| --- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | 🎨 **Design prompt** | Орчин үеийн загвараас санаа ав ([motion.ai](https://motionsites.ai/)) — таалагдсан сайтынхаа **screenshot**-ыг хавсаргаж "ийм загвартай" гэж зааж болно |
| 2   | 🧱 **Structure**     | Hero · About · Services/Products · Contact                                                                                                              |
| 3   | 👤 **Reuse info**    | HTML intro-д бичсэн мэдээллээ дахин ашигла                                                                                                              |
| 4   | ✍️ **Final prompt**  | Бүгдийг нэгтгэсэн structured prompt → Generate                                                                                                          |

<details>
<summary>✍️ Жишээ structured prompt <em>(хуулж тавь — copy)</em></summary>

```text
Role: Чи 10+ жилийн туршлагатай senior web designer бөгөөд frontend developer.
       Орчин үеийн, конверс өндөртэй (conversion-focused) сайт хийдэг.

Task: Доорх хүний хувийн брэндийг тусгасан, нэг хуудастай (single-page),
      responsive portfolio/landing website-ийг бүтэн HTML/CSS-ээр үүсгэ.

Who:
  - Нэр: [Нэр]
  - Мэргэжил / бизнес: [...]
  - Онцлог давуу тал (value): [...]
  - Зорилтот хэрэглэгч: [хэнд зориулсан]

Structure:
  - Sticky navbar: нэр/лого + хэсгүүд рүү шилжих холбоос
  - Hero: гарчиг (1 хүчтэй өгүүлбэр) + дэд өгүүлбэр + үндсэн CTA товч
  - About: 2–3 өгүүлбэр танилцуулга + зураг
  - Services / Products: 3 card (icon + гарчиг + товч тайлбар)
  - Testimonials эсвэл онцлох тоо баримт (нэг хэсэг)
  - Contact: имэйл, утас, нийгмийн сүлжээ + энгийн холбоо барих форм
  - Footer: copyright + холбоосууд

Design:
  - Хэв маяг: цэвэрхэн, минимал, мэргэжлийн; уншихад амар
  - Өнгө: [гол өнгө] + саармаг дэвсгэр; тогтвортой палитр (3–4 өнгө)
  - Typography: тод hierarchy (гарчиг/текст), уншигдахуйц фонт
  - Layout: сайхан зайтай (whitespace), grid дээр суурилсан
  - Микро-эффект: hover, зөөлөн scroll, энгийн appear animation
  - Responsive: mobile / tablet / desktop бүгдэд төгс харагдана

Constraints:
  - Гадны framework ашиглахгүй — цэвэр HTML + CSS (хэрэгтэй бол бага зэрэг JS)
  - Бүх контент монгол хэл дээр, дүрэм зөв
  - Бэлэн дуусгасан, шууд ажиллахуйц нэг файл буцаа

Style reference: [таалагдсан сайтын screenshot хавсаргасан бол түүн шиг загвартай хий]
```

</details>

> 💡 **Business angle:** Бизнестэй бол → landing page. Бизнесгүй бол → **personal brand**-ийн нэрийн хуудас.

</details>

---

> AI бол **co-pilot** — шийдвэр гаргагч биш. Эцсийн хариуцлага **танд**.

| Дүрэм                | Тайлбар                                                 |
| -------------------- | ------------------------------------------------------- |
| ⚠️ **Hallucination** | AI итгэлтэйгээр буруу хэлдэг → чухал баримтыг **шалга** |
| 🔒 **Privacy**       | Хувийн дата AI-д **бүү оруул**                          |

| 🌐 **Public** | ✅ нэр, бизнес, дуртай зүйл · ❌ хаяг, утас, нууц үг, customer data |

</details>

---

<details open id="sec-deploy">
<summary><strong>🚀 Deploy + QR + Share</strong></summary>

> 🟢 **Кредит карт шаардахгүй.** Кодоо **GitHub**-д тавиад **Vercel**-ээр deploy хийнэ — мэргэжлийн хувилбар, дараа нь шинэчлэхэд хялбар.

```
1️⃣ Export   — AI Studio-гоос кодоо татаж ав (Download / Copy code)
              → файлуудаа нэг folder-т хий (index.html гэх мэт)

2️⃣ GitHub    — github.com-д үнэгүй бүртгэл үүсгэ (картгүй)
              → шинэ repository үүсгэ → файлуудаа upload/чирээд тавь → Commit

3️⃣ Vercel    — vercel.com-д "Continue with GitHub"-ээр нэвтэр
              → Add New → Project → дээрх repo-гоо Import
              → Deploy дар → хэдхэн секундэд live URL гарна 🎉

4️⃣ QR        — qr-code-generator.com-д URL → QR код

5️⃣ Share     — Discord-д URL + QR тавь → бусдынхыг үз → 👏
```

> 🎉 **Энэ бол таны интернэтэд тавьсан анхны live сайт!** Линкээ хэнд ч илгээж чадна.
>
> 🔁 **Дараа нь:** кодоо GitHub дээр шинэчлэхэд Vercel **автоматаар** дахин deploy хийнэ — нэг л холбосон бол цаашид амар.

</details>

---

<details open id="sec-promptlib">
<summary><strong>🗂️ Prompt Library — шилдэг prompt-уудаа хадгал</strong></summary>

Хичээл бүрийн хамгийн сайн prompt-уудаа нэг газар хадгал → **дахин ашиглах** хувийн хэрэгсэл. Олон апп туршихгүй — нэг л энгийн хэрэгсэл хангалттай: **[Google Keep](https://keep.google.com)**.

**Яаж эхлэх вэ:**

1. [keep.google.com](https://keep.google.com) нээ (Google account-аар шууд ажиллана, утас+комп хоёулаа sync).
2. **«Prompt Library»** нэртэй **label** үүсгэ.
3. Prompt бүрийг **1 note** болгож хадгал, label-аа залга.

> 📌 Өнөөдрөөс хадгалах: ① AI Studio website-ийн final prompt ② таалагдсан design prompt.

</details>

---

<details open id="sec-tools">
<summary><strong>🧰 Tools</strong></summary>

| Tool                 | Линк                                                   | Юунд                | Үнэ  |
| -------------------- | ------------------------------------------------------ | ------------------- | ---- |
| VSCode + Live Server | [code.visualstudio.com](https://code.visualstudio.com) | HTML бичих/харах    | Free |
| Google AI Studio     | [aistudio.google.com](https://aistudio.google.com)     | Website үүсгэх      | Free |
| GitHub               | [github.com](https://github.com)                       | Код хадгалах (repo) | Free |
| Vercel               | [vercel.com](https://vercel.com)                       | Deploy (картгүй)    | Free |
| QR Generator         | [qr-code-generator.com](https://qr-code-generator.com) | URL → QR            | Free |
| Google Keep          | [keep.google.com](https://keep.google.com)             | Prompt Library      | Free |
| Discord              | [discord.gg/h8MHmusCKm](https://discord.gg/h8MHmusCKm) | Анги + share        | Free |

</details>

---

<details open id="sec-homework">
<summary><strong>📦 Homework</strong></summary>

```
1️⃣ Portfolio сайтаа AI Studio-д prompt-оо сайжруулж дахин үүсгэн ГҮЙЦЭЭ
   → дуусгаад deploy хийж, шинэ линкээ Discord-д тавь
2️⃣ Google Keep-д "Prompt Library" label үүсгээд өнөөдрийн prompt-уудаа хадгал
3️⃣ Google NotebookLM-тэй танилц → notebooklm.google.com
4️⃣ Бодоод ир: «AI энэ сайтыг хэрхэн хэдхэн минутад үүсгэв?»
```

> 📱 **Утаснаасаа ч хийж болно:** [aistudio.google.com](https://aistudio.google.com)-д утсаараа нэвтрээд prompt-оо сайжруулаад үргэлжлүүлээрэй — гэртээ, замдаа ч бай ажиллана.
>
> 🔜 **Next:** AI-н үндэс — _«What is AI? How does it work?»_

</details>
