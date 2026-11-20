# Хичээл 17 — Тоглоомоо сайжруулж, Demo Day-д бэлдэх

> **Агуулга:** _(хичээл орсны дараа бөглөнө)_

### Хүүхэд: тоглоомоо сайжруулж Vercel-д гаргана. Adult 16+: сурталчилгааны постер хийнэ. Бүгд portfolio-доо "Миний сургалтын аялал" нэмж, маргаашийн Demo Day-д бэлдэнэ.

Өмнөх: [Хичээл 16](../Хичээл%2016%20-%20Street%20Fighter%201) · Дараах: [Хичээл 18 — Demo Day](../Хичээл%2018%20-%20Demo%20Day) · Хэрэгсэл: [AI Studio](https://aistudio.google.com) · [Gemini](https://gemini.google.com) · [Vercel](https://vercel.com)

| #   | Алхам                                  | Хүүхэд | Adult 16+ |
| --- | -------------------------------------- | ------ | --------- |
| 0   | Kahoot                                 | 15 мин | 15 мин    |
| 1   | Тоглоомоо сайжруулах                   | 40 мин | —         |
| 2   | Сайтаа эцэслэх                         | —      | 15 мин    |
| 3   | Тоглоомоо Vercel-д гаргаж, линк нэмэх  | 25 мин | —         |
| 4   | Сурталчилгааны постер — Gemini         | —      | 35 мин    |
| 5   | Миний сургалтын аялал                  | 20 мин | 25 мин    |
| 6   | Demo Day-д бэлдэх                      | 20 мин | 30 мин    |

> Алхам бүр дээр **дарж нээнэ**. Өөрийн баганагүй алхмыг алгас.

**Өнөөдрийн дүрэм:** том шинэ feature **нэмэхгүй**. Байгаагаа сайжруулж, интернэтэд гаргана.

---

<details>
<summary><b>0. Kahoot</b></summary>

<br>

Багш Kahoot нээнэ → утсаараа/компьютероороо [kahoot.it](https://kahoot.it)-д PIN оруулна.

</details>

---

<details>
<summary><b>1. Тоглоомоо сайжруулах</b> — Хүүхэд</summary>

<br>

Тоглоом ажиллаж байгаа. **Нэгийг сонго** — дууссан бол дараагийнх руу:

| Сонголт | Хэнд |
| ------- | ---- |
| **А. Өөрийгөө баатар болгох** | Хараахан өөрийгөө нэмээгүй бол — **эхлээд үүнийг** |
| Б. Portrait | Сонгох дэлгэцэд царай чинь гоё харагдана |
| В. Дүрээ тааруулах | Хурд, хүч, хэмжээ |
| Г. Нэмэлт хөдөлгөөн | `special` `jump` `block` `crouch` |
| Д. Өөрийн арена | Өөрийн газрыг тулааны талбай болгох |

**Шалгах:** `F12` → Console:

```text
[my-fighter] bayasaa: idle 4, walk 4, punch 4, kick 4, hit 4, ko 4, ...
```

`4`-өөс бага (`kick 2`) бол тэр зургаа дахин зуруул (доорх **Гацвал**).

> 40 минут болоход зогсоод **3-р алхам** руу. Дутуу зүйл тоглоомыг эвдэхгүй — зураг байхгүй хөдөлгөөнийг тоглоом өөр зургаар орлуулна.

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

<details>
<summary><b>Г. Нэмэлт хөдөлгөөн</b></summary>

<br>

"kick, hit, ko зуруулах"-ын prompt, зөвхөн `[ХӨДӨЛГӨӨН]` өөр. Зураг байхгүй бол тоглоом өөр зургаар орлуулна — **дуртайгаа** л хий.

| Файл          | Товч |
| ------------- | ---- |
| `special.png` | `V` (meter дүүрсэн үед) |
| `jump.png`    | `W`  |
| `block.png`   | `C`  |
| `crouch.png`  | `S`  |

**`special.png`**

```text
MOVE: a special attack: [ӨӨРИЙН SPECIAL — жишээ: spinning kick]
- Pose 1: normal fighting stance
- Pose 2: charging, body pulled back
- Pose 3: the attack fully extended forward
- Pose 4: finishing, returning to the stance
```

**`jump.png`**

```text
MOVE: a jump
- Pose 1: normal fighting stance
- Pose 2: crouching to jump
- Pose 3: in the air with knees up
- Pose 4: landing with bent knees
```

**`block.png`**

```text
MOVE: blocking
- Pose 1: normal fighting stance
- Pose 2: raising both arms
- Pose 3: both arms covering the face
- Pose 4: both arms covering the face
```

**`crouch.png`**

```text
MOVE: crouching down
- Pose 1: normal fighting stance
- Pose 2: knees bending
- Pose 3: crouched low
- Pose 4: crouched low
```

> Special-д галт бөмбөг, гэрэл **зуруулахгүй** — зөвхөн биеийн хөдөлгөөн. Эффект pose-уудыг хооронд нь нийлүүлчихдэг (7-р дүрэм).

Алдартай баатартаа нэмэх бол AI Studio-д:

```text
ADD_CHARACTER.md-ийн 4B хэсгээр naruto баатарт special.png, jump.png нэм.
Одоо байгаа idle.png-г reference болгож ашигла. Бусад зургийг бүү өөрчил.
```

</details>

<details>
<summary><b>Д. Өөрийн арена</b></summary>

<br>

1. Gemini:

```text
Create a 2D fighting game stage background in 16-bit pixel art style.
Place: [ГАЗРАА ТАЙЛБАРЛА — жишээ: Улаанбаатарын Сүхбаатарын талбай, шөнө]
Side view, flat ground across the bottom quarter of the image, no characters, no text.
Very wide 21:9 image.
```

2. Татаад `my-stage.png` гэж нэрлэж `public/assets/backgrounds/` хавтаст оруул.
3. Зургийн хэмжээг хар (файл дээр баруун товч → Properties → Details).
4. AI Studio chat:

```text
src/game/stageConfig.ts-ийн STAGE_DEFINITIONS-д шинэ арена нэм:
id 'my-stage', label 'МИНИЙ АРЕНА', url '/assets/backgrounds/my-stage.png',
width [ӨРГӨН], height [ӨНДӨР]. Бусад арена шиг яг ижил бүтэцтэй. Өөр юу ч бүү өөрчил.
```

</details>

</details>

---

<details>
<summary><b>2. Сайтаа эцэслэх</b> — Adult 16+</summary>

<br>

Vercel линкээ **Incognito** цонхонд нээгээд шалга:

| Шалга                                                    | ✔ |
| -------------------------------------------------------- | - |
| Нүүр хуудас, "Миний тухай" бүрэн, алдаагүй                |   |
| Үйлчилгээний форм илгээхэд Discord-д мессеж ирнэ          |   |
| `#/admin` → нэвтэрч захиалгаа харна, `status` солигдоно   |   |
| NotebookLM карт дарахад notebook нээгдэнэ                 |   |
| Утсаар нээхэд эвдрэхгүй                                   |   |

Ажиллахгүй зүйлийг AI Studio-д засуул → GitHub push → Vercel автоматаар шинэчлэгдэнэ.

```text
[ЮУ БУРУУ БАЙГААГ ТОДОРХОЙ БИЧ — жишээ: утсаар нээхэд цэс дэлгэцнээс гарч байна].
Үүнийг зас. Өөр юу ч бүү өөрчил.
```

Demo Day-д эцэг эхчүүд **жинхэнэ захиалга** илгээнэ — `leads`-ийн туршилтын захиалгуудаа устга.

</details>

---

<details>
<summary><b>3. Тоглоомоо Vercel-д гаргаж, линк нэмэх</b> — Хүүхэд</summary>

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
| Өөрийнхөөрөө тоглоход 6 хөдөлгөөн ажиллана |   |

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
<summary><b>4. Сурталчилгааны постер — Gemini</b> — Adult 16+</summary>

<br>

Үйлчилгээндээ постер хийж Demo Day-д **ширээн дээрээ** тавина (A4, хэвлэсэн) + сайтдаа нэмнэ. Gemini-ийн зураг (Nano Banana) **үнэгүй**.

**А. Эхлээд бөглө**

| Асуулт | Жишээ |
| ------ | ----- |
| Үйлчилгээ | Хумсны засвар |
| Хэнд | 18–30 насны эмэгтэйчүүд |
| Гол санал (≤ 5 үг) | Анхны захиалга −20% |
| Өнгө, мэдрэмж | Ягаан, цагаан, тансаг |

**Б. Gemini** → [gemini.google.com](https://gemini.google.com) → **Create image**. Сайтынхаа screenshot-ыг хавсаргаад:

```text
Advertising poster for my service. Use the colours and style of the attached website screenshot.

SERVICE: [ҮЙЛЧИЛГЭЭ]
AUDIENCE: [ХЭНД]
HEADLINE (exact text, nothing else): "[ГОЛ САНАЛ]"

LAYOUT
- Portrait A4 (3:4). One strong main image in the centre.
- Headline large at the top. Empty space at the bottom right for a QR code.

STYLE
- [ӨНГӨ, МЭДРЭМЖ]. Clean, modern, professional photo style.

DO NOT DRAW
- No other text, no fake logos, no fake phone numbers or website addresses.
- No QR code.
```

**В. Сайжруулах** — шинэ chat нээхгүй, **засвараа хэл**:

```text
Keep everything the same, only change: [жишээ: make the headline bigger / brighter background].
```

| Анхаар | Яагаад |
| ------ | ------ |
| Гарчгийг **англиар** эсвэл маш богино | Gemini кирилл үсгийг буруу зурж болно. Буруу бол текстгүй зуруулаад Canva/PowerPoint-д нэм |
| QR-ыг Gemini-д **зуруулахгүй** | Уншигдахгүй болдог. Chrome → сайт → хаягийн мөр → **Share → QR code** татаад хоосон зайд тавь |

**Г. Сайтдаа нэмэх** — AI Studio-д постероо хавсаргаад:

```text
Нүүр хуудсанд хавсаргасан постерыг сурталчилгааны banner болгож нэм. Дарахад захиалгын форм руу гүйлгэнэ. Бусдыг бүү өөрчил.
```

| Шалга | ✔ |
| ----- | - |
| Постер хэвлэх файл (PNG) + QR | |
| Утсаар QR уншуулахад сайт нээгдэнэ | |
| Сайтын нүүрэнд banner | |

<details>
<summary>Veo (видео) яагаад биш вэ?</summary>

<br>

Veo / Flow-оор видео хийх нь ихэвчлэн **Google AI Pro (төлбөртэй)** шаарддаг. Эрхтэй бол бонус: постероо хавсаргаад "8 секундын сурталчилгааны видео болго".

</details>

</details>

---

<details>
<summary><b>5. Миний сургалтын аялал</b></summary>

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

Adult 16+: Service захиалга (Discord), Админ хэсэг, NotebookLM.

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
<summary><b>6. Demo Day-д бэлдэх</b></summary>

<br>

Маргааш 2 хэсэгтэй:

| Хэсэг | Хүүхэд | Adult 16+ |
| ----- | ------ | --------- |
| **Тайз** | 20 сек: "Би [НЭР]. Миний баатар [НЭР], special нь [...]" — багш баатрыг чинь дэлгэцэнд үзүүлнэ | 2 мин илтгэл (доор) |
| **Ширээ** (30 мин) | Эцэг эхдээ өөрийн компьютер дээр тайлбарлаж, тоглуулна | Постер + QR ширээн дээр, эцэг эхчүүдээр захиалга илгээлгэнэ |

**Ширээн дээр — хүүхэд (2–3 мин, эцэг эх бүрд):**

1. **Аялал** хэсгээ нээж: "Би ... хийсэн" — timeline-аа гүйлгэ.
2. **Тоглуул:** эцэг эхдээ товчоо заагаад өөрийнхөөрөө тулалд.
3. **Хамгийн хэцүү / гоё мөч.**

**Тайз дээр — Adult (2 мин):**

| Хугацаа | Юу |
| ------- | -- |
| 20 сек | Би хэн бэ |
| 30 сек | Асуудал → шийдэл: "... хэцүү байсан, тиймээс ..." + постер |
| 50 сек | Live: танхимаас нэг хүнээр QR уншуулж захиалга илгээлгэ → Discord + `#/admin`-д гарч ирнэ |
| 20 сек | Хамгийн хэцүү / гоё мөч |

**Хосоороо давт:** нэг нь эцэг эхийн дүрд тоглож асуулт асууна, нөгөө нь тайлбарлана. Дараа нь солино.

**Гэртээ:**

| Бэлтгэл | ✔ |
| ------- | - |
| Тоглоомынхоо / сайтынхаа **30 сек бичлэг** (интернэт тасарвал) — `Win+Alt+R` эсвэл утсаар | |
| Vercel линкээ утсандаа хадгал | |
| Adult: постероо хэвлэ | |

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
| Special ажиллахгүй | Meter дүүрээгүй — эхлээд хэд цохи |
| Vercel-д өөрийн дүр алга | GitHub-д `public/assets/<id>/` хавтас байгаа эсэхийг шалга. Байхгүй бол AI Studio-д дахин **Push** |
| Vercel линк 404 / цагаан дэлгэц | Vercel → Deployments → сүүлийнх → **Logs**-ын алдааг AI Studio chat-д хуулж "засаад push хий" |
| Console-д `kick 2` (4 биш) | Pose шүргэлцсэн — дахин зуруул: `Make the gaps between the poses twice as wide.` |

</details>
