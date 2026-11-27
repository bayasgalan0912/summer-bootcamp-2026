# AI Summer Bootcamp — хичээлийн материал

Хүүхдүүдэд (~10–15 нас) зориулсан вэб + AI + тоглоом хөгжүүлэлтийн курс. Монгол хэлээр.

## Бүтэц

- 2 сар, амралтын 2 өдөр, хичээл бүр ~2 цаг, **нийт 18 хичээл**. Хуваарь: [readme.md](readme.md) (7 AI portfolio → 8–11 JS → 12 Copilot UI + Netlify → 13 Anime Guess + Firestore leaderboard → 14 GitHub/Vercel → 15 Firestore форм → 16 тулааны тоглоом → 17 тоглоом сайжруулах + Demo бэлтгэл / Adult Claude Skill → 18 Demo Day). Сэдвийн дараалал шинэчлэгдэж болно, тоо нь 18.
- Дараалал: HTML/CSS → JavaScript + алгоритм (кодын суурь) → AI-аар код бичүүлэх, апп, тоглоом.
- **`lessons/`** — эцсийн хичээлүүд энд л байна: `lessons/Хичээл 1`, `lessons/Хичээл 2` … Шинэ хичээлийг энд бич.
- `w1/` … `w8/` — хуучин төлөвлөгөө. Зөвхөн **reference, санаа** авах. Шууд засахгүй, линк хийхгүй.
- `lessons/AI/` — AI сэдэвт хичээлүүд: `Anime Guess` (нэмэлт, хуучин хувилбар — JSON нь одоо Хичээл 13-д орсон), `Idol Coach` (нэмэлт, сайтдаа Gemini чат — key нь Vercel env `GEMINI_API_KEY`), `Service захиалга` (Adult 16+, for-ийн дараа: portfolio-д үйлчилгээ + форм → Firestore `leads`, Vercel `api/notify.js` → Discord webhook, key нь Vercel env `DISCORD_WEBHOOK_URL`), `Админ хэсэг` (Adult 16+, Service захиалгын дараа: Firebase Auth email/нууц үг, Rules-д админ UID, `#/admin` — dashboard, `leads` хүснэгт, `status`, `notes` subcollection; эх: GitHub `adult` branch Lab 3,4 + Lab 5), `NotebookLM` (нэг удаагийн, хүүхэд + Adult: сурах бичгийн бүлэг → Audio Overview podcast, эшлэлтэй чат, Quiz / Flashcards / Mind Map, бонус YouTube, Share линкээр portfolio-д карт; эхлээд багшийн `source.md` — Тэмүжиний бага нас, Монголын нууц товчоо §59–110-ын хураангуй; дараа нь өөрийнх), `Live translation…`.
- Street Fighter (Хичээл 16–17): тоглоомын код тусдаа repo — `bayasgalan0912/vibe-fighter` (Phaser 4 + Vite). Сурагч зураг **засахгүй**, файл гараар зөөхгүй: түүхий sheet-ээ (`idle` `walk` `punch` `kick` `hit` `ko` + бонус) AI Studio chat-д хавсаргаад "`ADD_CHARACTER.md`-г дага" гэж prompt өгнө (агент `public/assets/<id>/`-д хадгалж `myFighters.ts`-д 1 мөр нэмнэ). Алдартай баатрыг AI Studio өөрөө зурна, **өөрийгөө** Gemini-ээр. Gemini prompt-д дүрмийг бүтнээр нь бич (LAYOUT / EVERY POSE / MOVE / BACKGROUND / DO NOT DRAW) — товчилбол pose шүргэлцэж, буруу гардаг. Агентын дүрэм, зургийн prompt-ыг зөвхөн repo-ийн `ADD_CHARACTER.md`-д засна; тоглоом ачаалахдаа дэвсгэр арилгаж, pose салгаж, 256px нүдэнд тааруулна (`src/game/rawSheet.ts`, дүрэм: repo-ийн `ADD_CHARACTER.md`). Хуучин `teenage` branch-ийн `w3/Хичээл 7, 8` (remove.bg, ezgif, sprites.json, хитбокс) — зөвхөн reference.
- `_archive/` — хуучин round, ашиглахгүй.
- `reference/` — Өмнөх хичээлийн сэдвүүд
- Хичээл бүрийн `readme.md` эхэнд `> **Агуулга:**` мөр — ангид **бодитоор юу заасныг** 1–2 өгүүлбэрээр. Хичээл орсны дараа шинэчил.
- Гэрийн даалгавар: хичээлийн `readme.md`-ийн төгсгөлд эсвэл `homework.md`.
- **Portfolio:** Хүүхэд бүр `my-first-web/` хавтсаа (жишээ: `lessons/Хичээл 5/my-first-web/`) Netlify-д байршуулна (Хичээл 5, 6-д амжаагүй → Хичээл 7-ийн эхэнд). Хичээл 7-оос хойш portfolio = AI Studio Build апп (хуучин хуудсууд руу Netlify линкээр холбоно), Хичээл 14-өөс GitHub `my-portfolio` → Vercel. JS (Хичээл 8–12): `my-first-web/js.html` ("Миний JavaScript") → `js-N.html`, portfolio-д **нэг** "JavaScript" карт (Хичээл 8, 8-р алхам). Цаашид HTML/CSS дасгал бага — portfolio-гоо AI Studio-д vibe coding-оор сайжруулж, JS + алгоритм үзнэ. Хичээл бүрийн бүтээлийг карт болгон **гараараа** нэмүүл (Хичээл 7, 6-р алхам). Demo Day дээр Vercel линкээр үзүүлнэ.
- CSS хичээл: тайлбарын жишээ + `images/` screenshot (playwright-аар), тоглоом `togloom.html` (түвшин, автомат шалгагч), төсөл `tusul.html` + `ehlel.png`/`zorilgo.png`.
- JS хичээл: `readme.md` (хүүхдэд), `js-N.html` (бодлогын карт: HTML/CSS бэлэн, хүүхэд **зөвхөн функцийн дотор** бичиж `return` хийнэ), `helper.js` (карт ↔ функц, `data-test`-ээр автомат ✅, syntax алдааны анхааруулга — хичээл бүрт ижил хуулбар, `Хичээл 8/helper.js` эх), `tulaan-N.html` (тэмцээний карт). Хичээл бүр: блок схем 15–20 мин → JS → карт (Анхан/Дунд/Ахисан) → тэмцээн (Code / Debug / Build Battle ээлжилнэ) → `js.html`-д мөр + Netlify.
- JS-д **DOM заахгүй** (`document`, `querySelector` г.м.) — AI бичнэ. Scratch, Flowgorithm ашиглахгүй — блок схемийг зураг/самбараар.

## Шат 2 (одоо)

- 2 анги нийлсэн, **нэг материал** (хүүхэд + Adult хамт, Adult-д бонус). **20 хичээл** (18 + Agentic AI 2 нэмэгдсэн). Том зураг: [lessons/Шат 2/readme.md](lessons/Шат%202/readme.md).
- Зорилго: асуудал → шийдэл → хэрэглэгч → мөнгө. ~30% AI tool (жижгийг хичээл дотор, дадлагыг тусдаа хичээлд), ~70% бодит систем + сурталчилгаа + monetize.
- Модуль: 0 Agentic AI (1: Codex дээр тайлбарлана — Claude, Antigravity ижил санаа; Black Friday → `deal-finder` skill, үс засалт 3x3 · 2: Claude-ийн боломжууд (эх: `reference/Lab 8 - Claude`), өнгө → `ai-stylist` skill; сурагчийн материалд "Wow" гэж бүү бич) → A Санаа → Төлөвлөгөө (3–4) → B Систем (5–8) → C Сурталчилгаа + Launch (9–13) → D Өөрийн төсөл (14–19) → Pitch Day (20). n8n хувилбар: `lessons/Шат 2/backup/` (ашиглахгүй).
- Хичээл: `lessons/Шат 2/Хичээл N - ...`. Санаа/төлөвлөгөөнд **2-оос илүү хичээл бүү зарцуул**.
- Бодит борлуулалт эцэг эхийн зөвшөөрөлтэй, төлбөр эцэг эхийн данс руу.
- Апп/tool санал болгохдоо **бүү санал болго**: төлбөртэй API шаарддаг (caption/постер generator), үнэгүй tool аль хэдийн хийдэг (NotebookLM-ийн quiz), ганц prompt-оор болох (CV бичигч) зүйл. AI tool — үнэгүй давхарга / free trial; олон шинэ tool биш, гол tool-уудыг **хослуулсан workflow**. **Canva бүү ашигла.** Хасагдсан апп: AI merch дэлгүүр, дэлгүүрийн mini game/купон, сайтын AI туслах.
- Хичээл Бямба + Ням дараалж ордог — 2 хичээлийг нэг цикл (Бямба эхлүүлэх → Ням дуусгаж ship) болгож холбо. Эхний 2 хичээл "вов" байх ёстой.
- Доорх "Заасан зүйл" = Шат 1 — Шат 2-т үндэслэж ашигла, дахин заахгүй.

## Заасан зүйл (дараагийн хичээлд давтахгүй, үндэслэж ашигла)

| Хичээл           | Сэдэв                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1                | Вэбийн бүтэц, HTML таг (`h1`, `h2`, `p`, `img`), `<style>` өнгө, зураг (интернэт хаяг / Gemini), VSCode Open Folder                                           |
| 2                | VSCode товчлол (Ctrl+Enter, Win+←/→ хагаслах, Ctrl+Shift+P → Format Document), `div`, `class`, `id`, хайрцагт өнгө; YouTube `iframe` embed, `<video>` файлаар |
| 3                | VSCode код бөглөлт (Emmet), `<a>` таг, 2 хуудас холбох, Flexbox танилцуулга (nav: `display`, `gap`, `justify-content`, `flex-wrap`), `:hover`                          |
| 4 _(төлөвлөсөн)_ | Flexbox гүнзгий: эцэг/хүүхэд, `justify-content`, `align-items`, `flex-direction`, `gap`, `flex-wrap` — 3 хайрцаг (`hairtsag.html`), "Малаа хашаандаа" тоглоом, `tusul.html`, `dream-job.html` хуваах; ГД: `youtube.html` бөглөх |
| 5 _(төлөвлөсөн)_ | YouTube нүүрийг хоосон файлаас алхам алхмаар (`my-youtube.html`): эхлээд хуваалт (`div { border }`), дараа нь элемент; интернэтийн лого/icon/зураг, `input`, `button`, `<a target="_blank">` видео, `:hover`; `my-first-page.html` → `index.html`, хуудсаа `my-first-web/`-д холбож **Netlify Drop**-оор байршуулах — HTML/CSS төгсгөл; ГД: portfolio ноорог |
| 6                | HTML/CSS давтлага, `my-first-web`-ийн 3 хуудсаа сайжруулсан. Netlify-д байршуулж амжаагүй |
| 7 _(төлөвлөсөн)_ | Гараар хийсэн сайт vs мэргэжлийн загвар, AI Studio танилцуулга (видео, System instructions), загвар олох 2 арга (motionsites.ai, screenshot) → AI Studio **Build**-д portfolio (Хичээл 5-ын `index.html`-ээс зөвхөн мэдээлэл, хуучин хуудсууд Netlify линкээр), vibe coding, бүтээлээ Code-д гараараа нэмэх, AI-г зөв хэрэглэх. React/JS-ийг заагаагүй |
| 8 _(төлөвлөсөн)_ | `main.js` + `console.log`, F12 Console (HTML/карттай холбохгүй). Блок схем (эхлэл, оролт/гаралт, үйлдэл) ↔ код, `let` / `const`, текст / тоо / true, `+ - * /`, `( )`, хувьсагч = математикийн x, текст нийлүүлэх (хувьсагчтай), `x = x + 1`, утга солих; `Math.floor`, `%` (Battle 6); Code Battle (6 раунд); VSCode Copilot (Agent) — JS кодоо UI-тай болгох |
| 9 _(төлөвлөсөн)_ | Блок схемийн ромбо, `if / else`, `else if` (дараалал), `>` `<` `>=` `<=` `===` `!==`, `%`, `&&` `\|\|`; Debug Battle |
| 10 _(төлөвлөсөн)_ | Буцах сум, `for`, хуримтлагч (`s = s + i`, `t = t + "⭐"`), давталт дотор `if`; `main.js`, оролт `Number(prompt())`, гаралт `alert` (`"\n"` олон мөр), 10 дасгал + бонус |
| 11 _(төлөвлөсөн)_ | Массив `[ ]`, `a[i]` (0-ээс), `.length`, `for (i = 0; i < a.length)`, for + if (шүүж тоолох), нийлбэр / дундаж / хамгийн их, 2 массив зэрэгцүүлэх (`anime[i]` ↔ `emoji[i]`), гаралт `console.log`; `Math.random` (бонус) |
| 12 _(төлөвлөсөн)_ | VSCode GitHub Copilot **Agent** mode: Хичээл 8–11-ийн **8** бодлого (багш сонгосон, `js-projects/` бодолттой `prompt`/`alert` + `js-projects.zip`; файл засвал zip-ийг дахин үүсгэ) → **нэг ерөнхий prompt**-оор `index.html`-ээс сонгодог UI апп, шалгах хүснэгт, Netlify Drop (шинэ сайт), AI Studio portfolio-д "JS Projects" карт **prompt-оор** |
| 13 _(төлөвлөсөн)_ | Anime Guess: массив → object (JSON array), `data.json`-д 3 асуултаа өөрөө + ChatGPT-аар 10–15, AI Studio-д "Тоглоомууд" жагсаалт (тусдаа цонх/modal) + 3 горим (Emoji / Anime зураг / Баатар), хариулсны дараа зураг; зөвхөн датаг сольж өөр төрөл (Sport, Movie…); Firestore `scores` + Leaderboard |
| 14 _(төлөвлөсөн)_ | AI Studio → GitHub sync, `git clone` → `npm install` → `npm run dev`, `git pull`, Vercel (Push бүрт автомат) |
| 16 _(төлөвлөсөн)_ | Street Fighter 1: [`vibe-fighter`](https://github.com/bayasgalan0912/vibe-fighter) repo-г AI Studio Build-д **Import from GitHub**, жишээ дүр (`jishee/` 6 зургийг chat-д хавсаргаж prompt-оор), sprite sheet-ийн 7 дүрэм (цул ногоон дэвсгэр, нэг эгнээ 4 pose, зайтай, бүтэн бие, зүүн тийш, 1-р pose зогсоо, текст/сүүдэргүй), **алдартай баатар** — AI Studio өөрөө зурна (`ADD_CHARACTER.md` 4B), **өөрийгөө баатар болгох** — Gemini-д өөрийн зураг → эх зураг → `idle` `walk` `punch` (дүрэмтэй prompt) → AI Studio-д хавсаргаж нэмэх (4A) |
| 17 _(төлөвлөсөн)_ | Хүүхэд (`readme.md`) + Adult (`adult.md`) тусдаа файл. Kahoot → Хүүхэд: тоглоомоо сайжруулах (өөрийгөө баатар болгох эсвэл portrait / тааруулах; нэмэлт хөдөлгөөн, арена **хасагдсан** — AI Studio өөрөө үүсгэдэг) → AI Studio → GitHub → **Vercel** → "Тоглоомууд"-д Vercel линк. Adult (`adult.md`, тоглоом хийгээгүй): **Claude Skill** — эх: `adult` branch `Lab 8 - Claude/1-cowork/claude-cowork-skill.md` (агуулгыг өөрчлөхгүй; Skill гэж юу, Customize Claude → Skills → Create Skill, Skill Creator, Save / `/` дуудах / Download `.skill`, дасгал: `fashion-shoot-prompt` → Gemini постер) + 8. даалгавар: Skill-ийг өөрийн үйлчилгээнд тааруулж постер → сайтын banner (AI Studio → Vercel). Хүүхэд: "Миний сургалтын аялал" (Би хэн бэ / Юу бүтээсэн, сурсан / Хамгийн хэцүү, гоё мөч — дэвтэрт өөрийн үгээр → prompt, slide-гүй) → Demo Day давтлага |
| 18 _(төлөвлөсөн)_ | Demo Day — нэг `readme.md` (хүүхэд + Adult хамт, 90 мин): угтах + Kahoot, багшийн илтгэл (сурагчдын сайтын линк), сурагчдын төсөл 30 мин (эцэг эх 3 асуулт), Q&A, дараагийн курс (Project 01 бодит апп, 02 AI-аар асуудал шийдэх), бүртгэл, сертификат + зураг |

CSS-д **сүүдэр (shadow) заагаагүй** — жишээ кодонд бүү оруул.

## Бичих дүрэм

- **Товч, ойлгомжтой, бага тексттэй.** Нэг алхам = 1–2 өгүүлбэр. Тайлбарыг `<details>` дотор нуу.
- **Emoji бага.** Зөвхөн цөөн тодотгох газарт (жишээ нь: "өнөөдөр" тэмдэг, бонус, шагнал). Гарчиг, жагсаалт, код, тайлбар бүрт бүү тавь.
- Хүснэгт, алхамын дугаар ашиглан бүтэцжүүл — урт догол мөрөөс зайлсхий.
- Хичээлийн дугаарыг өөрчилбөл бусад файл дахь "Хичээл N" лавлагааг ч шинэчил.

## Kahoot

- Файл: `reference/kahoot/kahoot-N.md` (N = хичээлийн дугаар). Асуулт бүр `<details>` дотор, гарчигт хугацаа `· 60 сек`.
- **Хугацаа: бүх асуулт 60 сек.** Өөрчлөх бол `build.py --time N` (5/10/20/30/60/90/120/240); Kahoot дотор: Time limit → **Apply to all questions**.
- **Илт биш, tricky** асуулт — түгээмэл андуурал, буруу хэрэглээ, edge case (жишээ нь `class`-д `#` бичих, урт зурагт `border-radius: 50%`).
- **Кодтой асуулт = код блок.** Кодыг текстээр тайлбарлахгүй, асуултын дээр жижиг код (3–8 мөр) тавь → script автоматаар PNG зураг болгоно (доор). Асуулт нь кодын доор богино: "Юу болох вэ?"
- **Хоёр чиглэлд асуу:** код → үр дүн ("Юу болох вэ?") ба **хуудасны зураг → код** ("Аль код ингэж харагдуулах вэ?"). Хуудасны зураг: ` ```preview ` блок (README). CSS/Flex-д layout, дэлгэц хуваах асуулт оруул.
- Нэр томъёо: "эцэг/хүүхэд" биш — **хүрээлж буй хайрцаг**, **доторх хайрцгууд**.
- Заасантай төстэй ч заагаагүй зүйлийг (жишээ нь Emmet `#`) заасан хэсгийнхээ (`.`) **араас**, хэдэн асуултын дараа тавь — хүүхэд холбож бодно.
- Ойролцоо 2 асуулт бүү тавь — нэг сэдвийг өөр өнцгөөс асуу.
- 4 хариулт (эсвэл Үнэн/Худал), зөв хариуг ✅, байрлалыг холь. Тайлбар 1–2 өгүүлбэр, `<details>` дотор.
- Kahoot хязгаар: асуулт ≤120, хариулт ≤75 тэмдэгт.
- Зөвхөн тухайн хичээлд заасан зүйлээс асуу.
- Блок схемийн дүрс/онолын асуулт (жишээ нь "давталтыг юу харуулдаг вэ?") бүү тавь — ач холбогдол бага. Кодтой асуулт тавь.
- Хичээлийн дасгалын жишээг (гахайн хадгаламж, бууз г.м.) давтахгүй — ижил санааг **өөр, амьдралд ойр** жишээгээр асуу.
- Зөв хариуг заавал **кодыг ажиллуулж** (node) шалга.

- Нуршсан урт текст ашиглахгүй
- Товч тодорхой цэгцтэй байх
- Хичээлийн section-уудыг accordion буюу нээж хаах боломжтой байх

### Kahoot template (`reference/kahoot/template/`)

- `kahoot-N.md` бичсэний дараа: `python3 reference/kahoot/template/build.py reference/kahoot/kahoot-N.md` → `reference/kahoot/out/kahoot-N/` дотор `kahoot-N.xlsx` (Kahoot import) + `qNN.png` (кодтой асуулт бүрийн зураг). Гараар screenshot хийхгүй.
- Блок схемийн асуулт: ` ```flow ` блок (`start` / `io` / `op` / `end`, `op!` = шар "?" дүрс) → хичээлийн SVG-тэй ижил өнгийн зураг. Cover: ` ```cover ` блок → `cover.png`, Kahoot Settings → Cover image-д заавал upload хий.
- Kahoot дээрх асуултын текст асуулт бүрд өөр, тодорхой байх (бүгд "Юу гарах вэ?" биш).
- Кодын зургийн style тогтмол: Monokai, 1600×900, дэвсгэр `#272822`, mono фонт. Өөрчлөхгүй; шаардлагатай бол `build.py`-ийн `STYLE` хэсэгт.
- `.md`-д `<` `>` , backtick бүү санаа зов — script Kahoot-д тохируулж цэвэрлэнэ. Хязгаар хэтэрвэл script алдаа өгнө.
- Kahoot-д оруулах алхам, style-ийн дэлгэрэнгүй, **өмнө гарсан алдаанууд**: [reference/kahoot/template/README.md](reference/kahoot/template/README.md). Шинэ алдаа гарвал тэнд нэм.
