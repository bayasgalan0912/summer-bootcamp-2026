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

**Сануулга:** зураг → `public/assets/<дүрийн id>/` хавтас. Шинэ мөр бичихгүй — дүр чинь аль хэдийн бүртгэлтэй.

---

<details>
<summary><b>1. kick, hit, ko зуруулах</b></summary>

<br>

1. Gemini-д шинэ chat → `eh-zurag.png`-ээ **хавсарга**.
2. Хичээл 16-гийн prompt, `[ХӨДӨЛГӨӨН]`-ийг хүснэгтээс:

```text
Use this exact character: same face, same clothes, same colors.
Make a sprite sheet of 4 poses in ONE horizontal row, with empty space between the poses.
Animation: [ХӨДӨЛГӨӨН]
Every pose: full body, same size, side view, facing LEFT, feet on the same ground line.
Plain solid green background (#00FF00).
No text, no numbers, no shadow, no effects. Wide 16:9 image.
```

| Файл       | `[ХӨДӨЛГӨӨН]` |
| ---------- | ------------- |
| `kick.png` | `a high kick. Pose 1 normal stance, pose 2 knee lifted, pose 3 leg fully straight kicking forward, pose 4 leg coming down` |
| `hit.png`  | `getting hit in the face. Pose 1 normal stance, pose 2 head snapping back, pose 3 leaning back in pain, pose 4 recovering` |
| `ko.png`   | `getting knocked out. Pose 1 standing and hit, pose 2 falling backward, pose 3 landing on the ground, pose 4 lying flat on the ground` |

3. [7 дүрмээр](../Хичээл%2016%20-%20Street%20Fighter%201/readme.md) шалга → дүрийнхээ хавтаст оруул → Preview дахин ачаал.

**Шалгах:** `F12` → Console:

```text
[my-fighter] naruto: idle 4, walk 4, punch 4, kick 4, hit 4, ko 4, jump -, crouch -, block -, special -
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

Portrait байхгүй бол тоглоом `idle`-ийн эхний pose-ыг харуулна. Өөрийнхийг хийе:

```text
Use this exact character.
Make a character select portrait: head and shoulders, facing the viewer, confident look.
16-bit pixel art style, simple dark background. Square 1:1 image. No text.
```

Татаад **`portrait.png`** гэж нэрлэж, дүрийнхээ хавтаст оруул.

</details>

---

<details>
<summary><b>3. Дүрээ тааруулах</b></summary>

<br>

AI Studio-ийн chat-д (`naruto`-г өөрийн `id`-аар соль):

```text
src/game/fighterConfig.ts файлд 'naruto' дүрд тохиргоо нэм:
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

1-р алхмын prompt-оор. Файл байхгүй бол тоглоом өөр зургаар орлуулна — тиймээс **дуртайгаа** л хий.

| Файл          | Товч | `[ХӨДӨЛГӨӨН]` |
| ------------- | ---- | ------------- |
| `special.png` | `V`  | `a special attack: [ӨӨРИЙН SPECIAL]. Pose 1 normal stance, pose 2 charging, pose 3 the attack fully extended forward, pose 4 finishing` |
| `jump.png`    | `W`  | `a jump. Pose 1 normal stance, pose 2 crouching to jump, pose 3 in the air with knees up, pose 4 landing` |
| `block.png`   | `C`  | `blocking. Pose 1 normal stance, pose 2 raising both arms, pose 3 arms covering the face, pose 4 arms covering the face` |
| `crouch.png`  | `S`  | `crouching down. Pose 1 normal stance, pose 2 knees bending, pose 3 crouched low, pose 4 crouched low` |

> Special-д галт бөмбөг зэрэг **эффект зуруулахгүй** — зөвхөн биеийн хөдөлгөөн. Эффект pose-уудыг хооронд нь нийлүүлчихдэг.

Special нь **meter** дүүрсэн үед л ажиллана (цохих тусам дүүрнэ).

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
| Дүр | хоёулаа **өөрийн** дүрээр (зочны дүрийг `my-hero`-гоор) |
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
| Console-д `kick 2` (4 биш) | Pose шүргэлцсэн — `frames: { kick: 4 }` нэм эсвэл дахин зуруул |

</details>

<details>
<summary><b>Гэрийн даалгавар — Demo Day бэлтгэл</b></summary>

<br>

Хичээл 18-д portfolio-гоо **3 минутад** танилцуулна.

1. Portfolio-гийн бүх карт (линк) ажиллаж байгааг шалга.
2. Тулааны дүрээ дуусга — дор хаяж `idle` `walk` `punch` `kick` `hit` `ko`.
3. 3 өгүүлбэр бэлд: **юу хийсэн**, **юу хамгийн хэцүү байсан**, **юугаараа бахархдаг**.

</details>
