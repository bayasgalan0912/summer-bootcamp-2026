# 🌞 AI SUMMER BOOTCAMP 2026 — Хөтөлбөрийн бүтэц

**Трек:** Children · Vibe Coding (AI Explorer, 13–22 нас)
**Бүтэц:** 9 үндсэн хичээл + 2 туслах заавар (deploy) + Demo Day
**Хугацаа:** нэг хичээл ~135 мин (120–150 буфертэй)

**Гол сурган зүйн зарчим:** код гараар бичихгүй — AI-д *зөв тушаал (prompt)* өгч бүтээх.

**Хичээлийн стандарт хэлбэр:**
`Kahoot давталт → шинэ ойлголт (10 мин, багштай хамт) → хосоороо бүтээх (driver/navigator, 15 мин тутам үүрэг солино) → Publish/Deploy → Discord-д хуваалцах → гэрийн даалгавар`

---

## 🧩 Хөтөлбөрийн 3 үе (arc)

| Долоо хоног | Сэдэв | Гол гарц (artifact) |
| --- | --- | --- |
| **W1 — Эхлэл: Веб + AI-н үндэс** | Код гэж юу вэ, AI гэж юу вэ | 🌐 Интернэтэд байршсан Portfolio сайт |
| **W2 — Бүтээх: AI-г удирдах + тоглоом** | System prompt, JSON дата, Database | 🤖 Idol Coach + 🎮 Anime Guesser + 🏆 Leaderboard |
| **W3 — Дуусгах: Өөрийн бүтээл + танилцуулга** | Бие даан бүтээх, pitch | ⌨️ Typeracer + 🎤 Demo Day танилцуулга |

---

## 📚 Хичээл бүрийн задаргаа

### Долоо хоног 1 — «Би бүтээж чадна»

| # | Хичээл | Шинэ ойлголт | Гарц |
| --- | --- | --- | --- |
| 1 | 🎒 Өөрийнхөө тухай вэб хуудас | HTML, CSS, зураг/дуу нэмэх · VSCode · Discord | `my-first-page.html` |
| 2 | 🚀 Эхний вэбээ интернэтэд тавья | Google AI Studio · Structured prompt (Role/Task/Structure/Design/Constraints) · Screenshot & бэлэн загвараар үүсгэх · Hallucination, Privacy | Deploy хийсэн portfolio + QR |
| 3 | 🦸 AI гэж юу вэ? Яаж тэгж хурдан вэб хийчихэв? | AI = сурсан программ · **DATA = супер хүч** · LLM-ууд (ChatGPT / Claude / Gemini / Suno / Midjourney) · prompt = who · what · style | «AI баатруудын тэмцээн» сохор шүүлт + hallucination барих |
| ➕ 4 | 🛠 GitHub + Vercel ашиглан deploy хийх | Repo, AI Studio ↔ GitHub холбоос, auto-deploy, сайтаа шинэчлэх | Интернэтэд байршсан сайт |

### Долоо хоног 2 — «AI-г удирдаж, дата ажиллуулна»

| # | Хичээл | Шинэ ойлголт | Гарц |
| --- | --- | --- | --- |
| 5 | 🎯 AI-гаа ухаалгаар хэрэглэ + Idol Coach | **Token · Context · Usage limit (RPM/TPM/RPD)** · хэмнэх дүрмүүд · **System prompt** · iterate · 🛡 safety rules · "Чи AI юу?" тест | Idol Coach (+ сайтад «My Idol» чат цонх, Gemini API key) |
| 6 | 🎮 Anime Guesser + JSON-той танилцах | Тоглоомын 3 хэсэг · **JSON `{ }` vs `[ ]`** · дүрэм (хугацаа / амь / оноо / bonus) · «амьд» мэдрэмж (feedback) | Ажиллаж байгаа emoji-таах тоглоом + `data.json` |
| 7 | 🦸 Баатар таах горим + оноо хадгалах | **Database яагаад хэрэгтэй** (refresh → оноо алга) · Firestore = үүлэн дэвтэр · Collection / Document · frontend ↔ DB урсгал | Зураг таах горим + Firestore `scores` + ТОП-10 Leaderboard |

### Долоо хоног 3 — «Өөрөө бүтээж, тайзан дээр гарна»

| # | Хичээл | Шинэ ойлголт | Гарц |
| --- | --- | --- | --- |
| 8 | ⌨️ Өөрийн Typeracer + Live Leaderboard | Өмнөх мэдлэгээ **шинэ төсөлд дахин хэрэглэх** (WPM, real-time) · Portfolio-д tab нэмэх · (stretch: multiplayer өрөө) | Өөрийн typeracer + ангийн уралдаан |
| 9 | 🏁 Бүтээлээ дуусгах + Pitch бэлтгэл | Чеклистээр төслөө бүрэн болгох · слайд бэлдэх · 3–5 мин **pitch** загвар | Demo Day-д бэлэн бүтээл + слайд + дадлагажсан яриа |
| ➕ | 🌐 GitLab + Vercel (нөөц заавар) | ZIP татах → задлах → GitLab → Vercel | Альтернатив deploy |
| 🎤 | **DEMO DAY** | — | Эцэг эх, найзуудын өмнөх танилцуулга (3–5 мин) |

---

## 🧠 Хөндлөн урсдаг 5 гол ур чадвар (эргэлдэн бататгагдана)

1. **Prompt engineering** — муу vs сайн prompt (Х2) → who · what · style (Х3) → system prompt (Х5) → feature prompt (Х6–8)
2. **Ship it (байршуулах)** — хичээл бүр Publish → Vercel → Discord линк (Х2, 4, 5, 7, 8, 9)
3. **AI Smart & Safe** — hallucination, privacy, API key = нууц үг, safety rules дүрээс дээгүүр (Х2, 3, 5, 6)
4. **Дата сэтгэлгээ** — DATA = хүч (Х3) → token (Х5) → JSON (Х6) → DB / Firestore (Х7–8)
5. **Хамтын ажиллагаа** — driver / navigator хос, Kahoot, share-back wall, Discord, тэмцээн / ✨ оноо

---

## 🎮 Хөдөлгөгч механизмууд (engagement)

- **Kahoot** — хичээл тус бүрийн өмнөх давталт, ✨ оноотой
- **Тэмцээн:** AI баатруудын тулаан (Х3) · Idol-Coach Showdown (W2 Баасан) · Typeracer уралдаан (Х8) · Leaderboard 🥇🥈🥉
- **Discord** — бүх ажлаа тавьж, харилцан харах
- **Дүр / поп соёл** — аниме, NBA, One Piece зүйрлэлээр ойлголт бүрийг тайлбарлах

---

## 🛠 Ашигладаг технологи

| Хэрэгсэл | Зориулалт | Хичээл |
| --- | --- | --- |
| VSCode | Анхны HTML/CSS файл | 1 |
| Google AI Studio (Gemini) | Вэб/тоглоом үүсгэх, System instructions, API key | 2, 5–9 |
| GitHub / GitLab | Кодоо хадгалах | 4, W3 нөөц заавар |
| Vercel | Интернэтэд байршуулах (auto-deploy) | 4, 7–9 |
| Firebase Firestore | Оноо хадгалах, Leaderboard | 7, 8 |
| Kahoot / Discord / Google Slides | Давталт, хуваалцах, танилцуулга | бүх хичээл |

---

## 📁 Repo дэх файлын бүтэц

```
w1/Хичээл 1  · Хичээл 2  · Хичээл 3
w2/Хичээл 4  · Хичээл 5 (readme + plan + homework) · Хичээл 6 · Хичээл 7
w3/lesson8   · lesson9  · «GitLab, Vercel ашиглаж … байршуулах»
```

> Сурагчийн заавар = `readme.md` / `lesson.md`, багшийн төлөвлөгөө = `plan.md` / `instructor-companion.md`, гэрийн даалгавар = `homework.md`, слайд = `slides.md` / `.pdf`.
