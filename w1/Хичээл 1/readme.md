# 🎒 Хичээл 1

### ✨ Өнөөдөр өөрийнхөө тухай **вэб хуудас** үүсгэж, ангийхантайгаа танилцана!

🎮 [Хичээлийн слайд](https://docs.google.com/presentation/d/1CN9uhCejRB8ouXW7FF_JXq0rSZEA5ud48B8FAhyxqwg/edit?usp=sharing)

> Доорх алхам дээр **дарж нээнэ** 👇

---

<details>
<summary><b>1️⃣ 👯 Найзтайгаа танилц + Discord</b></summary>

<br>

Ширээний найзтайгаа танилц → [Discord группдээ](https://discord.gg/h8MHmusCKm) ор.

<img src="image.png" width="250" />

</details>

---

<details>
<summary><b>2️⃣ 💻 VSCode нээх</b></summary>

<br>

VSCode нээ → шинэ файл үүсгэ: **`my-first-page.html`**

</details>

---

<details>
<summary><b>3️⃣ ✍️ HTML — өөрийнхөө тухай бич</b></summary>

<br>

Доорх кодыг бичээд өөрийн мэдээллээ тавь 👇

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Миний хуудас</title>
  </head>
  <body>
    <h1>Сайн уу, намайг Бат гэдэг! 👋</h1>
    <img src="my-photo.png" width="250" />
    <p>🎂 Би 13 настай.</p>
    <p>🏀 Хобби: сагс тоглох</p>
    <p>🎵 Дуртай хамтлаг: BTS</p>
    <p>🕷️ Дуртай кино: Spider-Man</p>

    <h2>🤩 Сонирхолтой фактууд</h2>
    <p>🍕 Дуртай хоол: пицца</p>
    <p>🎮 Дуртай тоглоом: Roblox</p>
    <p>🐶 Гэрт минь Бобби гэдэг нохой байдаг</p>
    <p>😆 One piece анимийг бүтэн үзсэн!</p>
    <p>🤫 Хэн ч мэдэхгүй: би зүүн гараараа бичдэг</p>
  </body>
</html>
```

🤩 **Фактууд** дээр найзаа гайхшруулах зүйлээ бич!

<details>
<summary>❓ Таг гэж юу вэ?</summary>

<br>

| Таг      | Тайлбар                     |
| -------- | --------------------------- |
| `body`   | Харагдах бүх агуулга        |
| `h1`     | Том гарчиг                  |
| `h2`     | Жижиг гарчиг                |
| `p`      | Жирийн текст                |
| `img`    | Зураг 🖼️                    |
| `audio`  | Дуу 🎵                      |
| `iframe` | YouTube бичлэг 📺           |

💡 Таг = `< >` дотор бичигдэх тушаал. VSCode-д `!` бичээд Enter дарвал HTML бүтэц автоматаар гарна.

</details>

</details>

---

<details>
<summary><b>4️⃣ 🌈 CSS — өнгө нэмэх</b></summary>

<br>

`<head>` дотор доорхийг нэм → **save** → өнгө солигдохыг хар 🎨

```html
<style>
  body {
    background: beige; /* 🎨 арын өнгө */
    color: black; /* ✏️ текстийн өнгө */
    text-align: center;
    font-family: Arial, sans-serif;
  }
  h1 {
    color: #7c3aed;
  } /* 🟣 гарчгийн өнгө */
  img {
    border-radius: 20px;
  } /* 🖼️ булан мөлгөр */
  p {
    font-size: 18px;
  } /* 🔤 текстийн хэмжээ */
</style>
```

👉 Өнгө, хэмжээг сольж туршаарай!

<details>
<summary>📄 Бүтэн код харах</summary>

<br>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Миний хуудас</title>
    <style>
      body {
        background: beige; /* 🎨 арын өнгө */
        color: black; /* ✏️ текстийн өнгө */
        text-align: center;
        font-family: Arial, sans-serif;
      }
      h1 {
        color: #7c3aed;
      } /* 🟣 гарчгийн өнгө */
      img {
        border-radius: 20px;
      } /* 🖼️ булан мөлгөр */
      p {
        font-size: 18px;
      } /* 🔤 текстийн хэмжээ */
    </style>
  </head>
  <body>
    <h1>Сайн уу, намайг Бат гэдэг! 👋</h1>
    <img src="my-photo.png" width="250" />
    <p>🎂 Би 13 настай.</p>
    <p>🏀 Хобби: сагс тоглох</p>
    <p>🎵 Дуртай хамтлаг: BTS</p>
    <p>🕷️ Дуртай кино: Spider-Man</p>

    <h2>🤩 Сонирхолтой фактууд</h2>
    <p>🍕 Дуртай хоол: пицца</p>
    <p>🎮 Дуртай тоглоом: Roblox</p>
    <p>🐶 Гэрт минь Бобби гэдэг нохой байдаг</p>
    <p>😆 One piece анимийг бүтэн үзсэн!</p>
    <p>🤫 Хэн ч мэдэхгүй: би зүүн гараараа бичдэг</p>

    <p>🎵 Миний зохиосон дуу:</p>
    <audio src="my-song.mp3" controls></audio>

    <p>📺 Дуртай аниме бичлэг:</p>
    <iframe
      width="400"
      height="220"
      src="https://www.youtube.com/embed/xxxxx"
    ></iframe>
  </body>
</html>
```

</details>

</details>

---

<details>
<summary><b>5️⃣ 🖼️ Зураг нэмэх (Gemini)</b></summary>

<br>

[gemini.google.com](https://gemini.google.com) → өөрийн профайл зураг үүсгэ → татаж авч **`my-photo.png`** болгон хадгал.

```html
<img src="my-photo.png" width="250" />
```

</details>

---

<details>
<summary><b>6️⃣ 🎵 Өөрийн дуу зохиох (Gemini)</b></summary>

<br>

[gemini.google.com](https://gemini.google.com) → ингэж бич 👇

```
Намайг Бат гэдэг, 13 настай. Сагс тоглох дуртай.
Дуртай хамтлаг BTS, дуртай хоол пицца.
Миний тухай хөгжилтэй богино дуу зохиож, дуулж өгөөч 🎶
```

⬇️ **Download** → нэрийг **`my-song.mp3`** болго → кодоо нэм:

```html
<p>🎵 Миний зохиосон дуу:</p>
<audio src="my-song.mp3" controls></audio>
```

</details>

---

<details>
<summary><b>7️⃣ 📺 Дуртай аниме бичлэг (YouTube)</b></summary>

<br>

YouTube → бичлэг ол → **Share** → **Embed** → **Copy** → `</body>`-ын дээр paste:

```html
<p>📺 Дуртай аниме бичлэг:</p>
<iframe
  width="400"
  height="220"
  src="https://www.youtube.com/embed/xxxxx"
></iframe>
```

<details>
<summary>❓ Яагаад <code>video</code> таг болохгүй вэ?</summary>

<br>

`<video>` нь `.mp4` файл шаарддаг. YouTube линк mp4 файл биш.

- YouTube → `<iframe>`
- Татсан mp4 файл → `<video src="my-video.mp4" controls>`

</details>

</details>

---

<!--
1. Meet teachers
2. Meet buddy, Your teammate: Front and back desk
3. Teacher presentation:
   1. Roadmap
      1. (What we learn): Web + AI + Web based game development
      - Week 1: First website + how AI works
      - Week 2: Game development in AI Studio.
      - Week 3: Custom game development & Demo Day (Team up)
      2. Team game contest: best game + best gamer with prize
   2. Show prototype of websites and game idea
   3. Job market and Ai engineer salary
   4. How website works: Html, css, js
4. Time break
5. First code
   1. Vs code
   2. Html?
   3. Introduce yourself: Suno, gemini
6. What is next: show modern website
7. Homework
   1. Gmail
   2. Google LM -->
