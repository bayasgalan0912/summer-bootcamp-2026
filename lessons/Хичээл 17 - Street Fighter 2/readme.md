# Хичээл 17 — Street Fighter 2: Дүрээ гүйцээж, тоглоомоо гаргах

> **Агуулга:** _(хичээл орсны дараа бөглөнө)_

### Дүрийнхээ үлдсэн хөдөлгөөнийг нэмж, тааруулаад, тоглоомоо portfolio-доо тавина.

Өмнөх: [Хичээл 16](../Хичээл%2016%20-%20Street%20Fighter%201) · Хэрэгсэл: [AI Studio](https://aistudio.google.com) · [Gemini](https://gemini.google.com)

| #   | Алхам                         | Хугацаа |
| --- | ----------------------------- | ------- |
| 1   | kick, hit, ko зуруулах        | 35 мин  |
| 2   | Portrait — сонгох дэлгэцийн зураг | 10 мин  |
| 3   | Дүрээ тааруулах               | 10 мин  |
| 4   | Бонус хөдөлгөөн               | 20 мин  |
| 5   | Бонус: өөрийн арена           | 15 мин  |
| 6   | Portfolio-д нэмэх             | 15 мин  |
| 7   | Ангийн тэмцээн                | 15 мин  |

> Алхам бүр дээр **дарж нээнэ**.

| Баатар | Энэ хичээлд |
| ------ | ----------- |
| **Чи өөрөө** | Gemini-ээр үлдсэн зургаа зуруулж, AI Studio-д хавсаргана |
| Алдартай | 6 зураг нь бий — буруу гарсныг AI Studio-оор дахин зуруулна |

---

<details>
<summary><b>1. kick, hit, ko зуруулах</b></summary>

<br>

Хичээл 16-д **өөрийгөө** `idle`, `walk`, `punch`-тай оруулсан. Одоо үлдсэн 3-ыг нэмнэ.

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

---

<details>
<summary><b>2. Portrait — сонгох дэлгэцийн зураг</b></summary>

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

---

<details>
<summary><b>3. Дүрээ тааруулах</b></summary>

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

> Тэмцээн шударга байхын тулд **хязгаараас хэтрүүлэхгүй**. Хурдан бол сул, хүчтэй бол удаан — тэнцвэрээ өөрөө ол.

</details>

---

<details>
<summary><b>4. Бонус хөдөлгөөн</b></summary>

<br>

1-р алхмын prompt, зөвхөн `[ХӨДӨЛГӨӨН]` өөр. Зураг байхгүй бол тоглоом өөр зургаар орлуулна — **дуртайгаа** л хий.

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

---

<details>
<summary><b>5. Бонус: өөрийн арена</b></summary>

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

---

<details>
<summary><b>6. Portfolio-д нэмэх</b></summary>

<br>

1. Тоглоомын AI Studio апп → **Share** → линкээ хуул.
2. Тулааны үеэр **screenshot** ав (`Win+Shift+S`).
3. Portfolio-гоо AI Studio-д нээ → "Тоглоомууд" жагсаалтад карт нэм (Хичээл 13-т хийсэн шиг):

```text
"Тоглоомууд" жагсаалтад шинэ карт нэм.
Нэр: "Street Fighter — [ДҮРИЙН НЭР]". Зураг: хавсаргасан screenshot.
"Тоглох" товч дарахад энэ линк шинэ tab-д нээгдэнэ: [ЛИНК]
Картын доор жижгээр: "Sprites: AI (Gemini) + миний дизайн".
```

| Шалгах | |
| ------ | --- |
| Карт дээр дарахад тоглоом нээгдэнэ | ☐ |
| Өөр компьютер / утаснаас нээгдэнэ | ☐ |

</details>

---

<details>
<summary><b>7. Ангийн тэмцээн</b></summary>

<br>

| Дүрэм | |
| ----- | --- |
| Горим | **1v1**, нэг компьютер, нэг гар |
| Дүр | хоёулаа **өөрөөрөө** (өөрийн зурсан баатраар) |
| Ялагч | 2 раунд түрүүлж авсан нь |
| Тохиргоо | 3-р алхмын хязгаараас хэтрээгүй байх |

Хожигдсон нь ялагчийн дүрд **1 сайн тал, 1 сайжруулах зүйл** хэлнэ.

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
| Console-д `kick 2` (4 биш) | Pose шүргэлцсэн — дахин зуруул: `Make the gaps between the poses twice as wide.` |

</details>

<details>
<summary><b>Гэрийн даалгавар — Demo Day бэлтгэл</b></summary>

<br>

Хичээл 18-д portfolio-гоо **3 минутад** танилцуулна.

1. Portfolio-гийн бүх карт (линк) ажиллаж байгааг шалга.
2. Өөрийн баатраа дуусга — дор хаяж `idle` `walk` `punch` `kick` `hit` `ko`.
3. 3 өгүүлбэр бэлд: **юу хийсэн**, **юу хамгийн хэцүү байсан**, **юугаараа бахархдаг**.

</details>
