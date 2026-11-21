# Хичээл 17 — Тоглоомоо сайжруулж, Demo Day-д бэлдэх (Хүүхэд)

> **Агуулга:** _(хичээл орсны дараа бөглөнө)_

### Тоглоомоо сайжруулж Vercel-д гаргана, portfolio-доо "Миний сургалтын аялал" нэмж, маргаашийн Demo Day-д бэлдэнэ.

Өмнөх: [Хичээл 16](../Хичээл%2016%20-%20Street%20Fighter%201) · Дараах: [Хичээл 18 — Demo Day](../Хичээл%2018%20-%20Demo%20Day) · Adult 16+: [adult.md](adult.md) · Хэрэгсэл: [AI Studio](https://aistudio.google.com) · [Gemini](https://gemini.google.com) · [Vercel](https://vercel.com)

| #   | Алхам                                  | Хугацаа |
| --- | -------------------------------------- | ------- |
| 0   | Kahoot                                 | 15 мин  |
| 1   | Тоглоомоо сайжруулах                   | 40 мин  |
| 2   | Тоглоомоо Vercel-д гаргаж, линк нэмэх  | 25 мин  |
| 3   | Миний сургалтын аялал                  | 20 мин  |
| 4   | Demo Day-д бэлдэх                      | 20 мин  |

> Алхам бүр дээр **дарж нээнэ**.

**Өнөөдрийн дүрэм:** том шинэ feature **нэмэхгүй**. Байгаагаа сайжруулж, интернэтэд гаргана.

---

<details>
<summary><b>0. Kahoot</b></summary>

<br>

Багш Kahoot нээнэ → утсаараа/компьютероороо [kahoot.it](https://kahoot.it)-д PIN оруулна.

</details>

---

<details>
<summary><b>1. Тоглоомоо сайжруулах</b></summary>

<br>

**Нэгийг сонго** — дууссан бол дараагийнх руу:

| Сонголт | Хэнд |
| ------- | ---- |
| **А. Өөрийгөө баатар болгох** | Хараахан өөрийгөө нэмээгүй бол — **эхлээд үүнийг** |
| Б. Portrait | Сонгох дэлгэцэд царай чинь гоё харагдана |
| В. Дүрээ тааруулах | Хурд, хүч, хэмжээ |

**Шалгах:** `F12` → Console:

```text
[my-fighter] bayasaa: idle 4, walk 4, punch 4, kick 4, hit 4, ko 4, ...
```

`4`-өөс бага (`kick 2`) бол тэр зургаа дахин зуруул (доорх **Гацвал**).

> 40 минут болоход зогсоод **2-р алхам** руу.

<details>
<summary><b>А. Өөрийгөө баатар болгох</b></summary>

<br>

1. [Хичээл 16-ын 4A](../Хичээл%2016%20-%20Street%20Fighter%201/readme.md) — Gemini-д өөрийн зураг → эх зураг (`eh-zurag.png`) → `idle`, `walk`, `punch`.
2. Доорх "kick, hit, ko зуруулах".

<details>
<summary>kick, hit, ko зуруулах</summary>

<br>

Хичээл 16-д **өөрийгөө** `idle`, `walk`, `punch`-тай оруулсан. Үлдсэн 3-ыг нэмнэ. Алдартай баатар бол бүх зураг нь бий — дутуу бол AI Studio-оор дахин зуруул.

1. Gemini-д **шинэ chat** → `eh-zurag.png`-ээ **хавсарга**.
2. Доорх prompt-ын `[ХӨДӨЛГӨӨН]` мөрийг блокоор сольж явуул. Зураг бүрд **шинэ chat**.

```text
Sprite sheet of the attached character. Same face, hair, clothes and colours as the attached image.

LAYOUT
- Exactly 4 poses of the same character, side by side in ONE horizontal row.
- Wide 16:9 image. Each pose stays inside its own quarter of the width.
- Wide empty green gap between neighbouring poses. No pose touches or overlaps another.

EVERY POSE
- Whole body from head to feet, nothing cut off by the image edge.
- Same body size in all 4 poses. Feet on the same horizontal line.
- Side view, facing LEFT.

[ХӨДӨЛГӨӨН]

BACKGROUND
- One flat pure green colour (#00FF00) everywhere. No floor, no gradient, no pattern.

DO NOT DRAW
- No text, numbers, labels, frames or grid lines.
- No shadows, dust, speed lines, glow, energy or projectiles.
- No second character.
```

**`kick.png`**

```text
MOVE: a high kick
- Pose 1: normal fighting stance
- Pose 2: knee lifted
- Pose 3: leg fully straight, kicking forward
- Pose 4: leg coming down
```

**`hit.png`**

```text
MOVE: getting hit in the face
- Pose 1: normal fighting stance
- Pose 2: head snapping back
- Pose 3: leaning back in pain
- Pose 4: recovering to the stance
```

**`ko.png`**

```text
MOVE: getting knocked out
- Pose 1: standing, hit hard
- Pose 2: falling backward
- Pose 3: landing on the ground
- Pose 4: lying flat on the ground
```

3. [7 дүрмээр](../Хичээл%2016%20-%20Street%20Fighter%201/readme.md) шалга → татаж, дээрх нэрээр хадгал.
4. AI Studio chat-д 3 зургаа **хавсаргаад** (`bayasaa`-г өөрийн `id`-аар):

```text
ADD_CHARACTER.md-г уншаад 4A хэсгийг дага.
Хавсаргасан зургуудыг bayasaa баатарт нэм.
Зургуудыг өөрчлөхгүй, файлын нэрээр нь хадгал. Шинэ зураг бүү зур.
```

**Шалгах:** `F12` → Console:

```text
[my-fighter] bayasaa: idle 4, walk 4, punch 4, kick 4, hit 4, ko 4, jump -, crouch -, block -, special -
```

| Товч | Юу харагдах ёстой |
| ---- | ----------------- |
| `G`  | өшиглөнө |
| өрсөлдөгч цохиход | арагшаа хазайна |
| HP дуусахад | унана |

</details>

</details>

<details>
<summary><b>Б. Portrait — сонгох дэлгэцийн зураг</b></summary>

<br>

Portrait байхгүй бол тоглоом `idle`-ийн эхний pose-ыг харуулна.

1. Gemini → `eh-zurag.png`-ээ хавсаргаад:

```text
Character select portrait of the attached character. Same face, hair, clothes and colours.
Head and shoulders only, facing the viewer, confident look.
16-bit pixel art style, simple dark background. Square 1:1 image.
No text, no frame.
```

2. Татаад **`portrait.png`** гэж нэрлэ → AI Studio-д хавсаргаад:

```text
Хавсаргасан portrait.png-г bayasaa баатрын хавтаст өөрчлөхгүйгээр нэм.
```

</details>

<details>
<summary><b>В. Дүрээ тааруулах</b></summary>

<br>

AI Studio-ийн chat-д (`bayasaa`-г өөрийн `id`-аар соль):

```text
src/game/fighterConfig.ts файлд 'bayasaa' дүрд тохиргоо нэм:
- FIGHTER_STAT_OVERRIDES: scale 1.5, walkSpeed 260
- FIGHTER_COMBAT_OVERRIDES: maxHealth 100, highDamage 8, lowDamage 12
Өөр юу ч бүү өөрчил.
```

| Тохиргоо     | Юу вэ               | Анхны утга | Хязгаар |
| ------------ | ------------------- | ---------- | ------- |
| `scale`      | дүрийн хэмжээ       | 1.4        | 1.2–1.8 |
| `walkSpeed`  | алхах хурд          | 230        | 180–300 |
| `jump`       | үсрэлтийн хүч       | 980        | 800–1100 |
| `maxHealth`  | амь                 | 100        | ≤ 110   |
| `highDamage` | хөнгөн цохилтын хүч (`F`) | 7    | ≤ 9     |
| `lowDamage`  | хүнд цохилтын хүч (`G`)   | 12   | ≤ 15    |

> Demo Day-ийн тулаан шударга байхын тулд **хязгаараас хэтрүүлэхгүй**. Хурдан бол сул, хүчтэй бол удаан — тэнцвэрээ өөрөө ол.

</details>

</details>

---

<details>
<summary><b>2. Тоглоомоо Vercel-д гаргаж, линк нэмэх</b></summary>

<br>

AI Studio-ийн Share линк зөвхөн нэвтэрсэн хүнд нээгддэг. Маргааш эцэг эх **утсаараа** нээнэ — тиймээс Vercel (Хичээл 14-т хийсэн шиг).

1. Тоглоомын AI Studio апп → баруун дээд **GitHub** → шинэ repo: `my-fighter` → **Create / Push**.
2. [vercel.com](https://vercel.com) → **Add New → Project** → `my-fighter` → **Import**.
3. Framework: **Vite** (өөрөө танина) → **Deploy**.
4. Линкээ хуул: `https://my-fighter-xxx.vercel.app`

| Шалга (утсаар эсвэл Incognito)         | ✔ |
| -------------------------------------- | - |
| Тоглоом нээгдэнэ                        |   |
| Сонгох дэлгэцэд **өөрийн дүр** байна    |   |
| Өөрийнхөөрөө тоглоход бүх хөдөлгөөн ажиллана |   |

> Цаашид AI Studio-д засвар хийгээд **GitHub → Push** дарахад Vercel автоматаар шинэчлэгдэнэ.

**Portfolio-д линк нэмэх:**

5. Тулааны үеэр **screenshot** ав (`Win+Shift+S`).
6. Portfolio-гоо AI Studio-д нээ → screenshot-оо хавсаргаад:

```text
"Тоглоомууд" жагсаалтад шинэ карт нэм.
Нэр: "Street Fighter — [ДҮРИЙН НЭР]". Зураг: хавсаргасан screenshot.
"Тоглох" товч дарахад энэ линк шинэ tab-д нээгдэнэ: [VERCEL ЛИНК]
Картын доор жижгээр: "Sprites: AI (Gemini) + миний дизайн".
Бусад картыг бүү өөрчил.
```

7. GitHub → Push → portfolio-гийн Vercel линкээс шалга.

| Шалга                                        | ✔ |
| -------------------------------------------- | - |
| Portfolio → Тоглоомууд → Street Fighter нээгдэнэ |   |
| Anime Guess ч ажилласаар байна               |   |

</details>

---

<details>
<summary><b>3. Миний сургалтын аялал</b></summary>

<br>

Portfolio-доо 3 хэсэгтэй **аялал** нэмнэ. Маргааш эцэг эхдээ үүгээрээ тайлбарлана — тусдаа slide хэрэггүй.

**А. Эхлээд дэвтэр дээрээ бөглө** (10 мин). AI биш — **өөрийн үгээр**.

| Хэсэг | Бөглөх |
| ----- | ------ |
| **1. Би хэн бэ** | Нэр, нас, сургууль, дуртай зүйл — 2 өгүүлбэр |
| **2. Юу бүтээсэн, сурсан бэ** | Доорх хүснэгтээс **хийснээ** сонго, бүрд 1 өгүүлбэр "юу сурсан" |
| **3. Хамгийн хэцүү / гоё мөч** | 1 хэцүү мөч + яаж давсан, 1 гоё мөч |

| Хичээл | Бүтээл | Линк |
| ------ | ------ | ---- |
| 1–6   | Анхны вэб хуудас, YouTube хуудас (HTML, CSS) | Netlify |
| 7     | Portfolio — AI Studio | энэ сайт |
| 8–11  | JavaScript картууд — хувьсагч, if, for, массив | Netlify |
| 12    | JS Projects апп — Copilot | Netlify |
| 13    | Anime Guess + Leaderboard | Тоглоомууд |
| 16–17 | Street Fighter — өөрийгөө баатар болгосон | Vercel |

**Б. AI Studio-д** (бөглөснөө хуулж тавь):

```text
Portfolio-д "Миний сургалтын аялал" хэсэг нэм. Цэсэнд ч нэм.
3 хэсэгтэй, доош гүйлгэхэд нэг нэгээрээ гарч ирнэ:

1. Би хэн бэ
[ЭНД БИЧ]

2. Юу бүтээсэн, сурсан бэ — босоо timeline. Алхам бүр: хичээл, бүтээлийн нэр, 1 өгүүлбэр, "Үзэх" товч (линк шинэ tab-д).
[ЭНД ЖАГСАА — жишээ: Хичээл 1–6 | Анхны вэб хуудас | HTML, CSS-ээр хуудас хийж сурсан | https://...]

3. Хамгийн хэцүү / гоё мөч
[ЭНД БИЧ]

Миний бичсэн текстийг өөрчлөхгүй, засварлахгүй. Бусад хэсгийг бүү өөрчил.
```

**В.** GitHub → Push → Vercel линкээс шалга: "Үзэх" товч бүр ажиллана.

</details>

---

<details>
<summary><b>4. Demo Day-д бэлдэх</b></summary>

<br>

Маргааш 2 хэсэгтэй:

| Хэсэг | Юу хийх |
| ----- | ------- |
| **Тайз** (20 сек) | Багш баатрыг чинь дэлгэцэнд үзүүлнэ. Чи: "Би [НЭР]. Миний баатар [НЭР]. Хамгийн хүчтэй цохилт нь [...]" |
| **Ширээ** (35 мин) | Эцэг эхдээ өөрийн компьютер дээр тайлбарлаж, тоглуулна |

**Ширээн дээр (эцэг эх бүрд 2–3 мин):**

1. **Аялал** хэсгээ нээж: "Би ... хийсэн" — timeline-аа гүйлгэ.
2. **Тоглуул:** эцэг эхдээ товчоо заагаад өөрийнхөөрөө тулалд.
3. **Хамгийн хэцүү / гоё мөч.**

**Хосоороо давт:** нэг нь эцэг эхийн дүрд тоглож асуулт асууна, нөгөө нь тайлбарлана. Дараа нь солино.

**Гэртээ:**

| Бэлтгэл | ✔ |
| ------- | - |
| Тоглоомынхоо **30 сек бичлэг** (интернэт тасарвал) — `Win+Alt+R` эсвэл утсаар | |
| Vercel линкээ утсандаа хадгал | |
| Гэрийнхэндээ нэг удаа үзүүл | |

</details>

---

<details>
<summary><b>Гацвал</b></summary>

<br>

| Асуудал | Шийдэл |
| ------- | ------ |
| Өшиглөлт хүрэхгүй | `kick.png`-ийн 3-р pose-д хөл **бүрэн тэнийсэн** үү? Тоглоом хамгийн хол сунгасан pose-оор цохилтыг тооцно |
| HP дуусахад дүр унахгүй | `ko.png`-ийн сүүлийн pose **хэвтсэн** байх ёстой — дахин зуруул |
| Дүр хөдөлгөөн бүрт том, жижиг болно | 1-р pose **зогсоо** биш байна (6-р дүрэм) |
| Vercel-д өөрийн дүр алга | GitHub-д `public/assets/<id>/` хавтас байгаа эсэхийг шалга. Байхгүй бол AI Studio-д дахин **Push** |
| Vercel линк 404 / цагаан дэлгэц | Vercel → Deployments → сүүлийнх → **Logs**-ын алдааг AI Studio chat-д хуулж "засаад push хий" |
| Console-д `kick 2` (4 биш) | Pose шүргэлцсэн — дахин зуруул: `Make the gaps between the poses twice as wide.` |

</details>
