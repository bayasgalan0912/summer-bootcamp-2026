# Хичээл 3

### Өнөөдөр хоёр хуудсаа **холбоос**-оор холбож, **Flexbox**-оор цэгцэлнэ.

> **Агуулга:** VSCode-ийн код бөглөлт (Emmet), `<a>` таг, хоёр хуудсаа хооронд нь холбох, Flexbox-оор цэс, хайрцгуудыг байрлуулах.

---

> Алхам бүр дээр **дарж нээнэ**.

---

<details>
<summary><b>1. Гэрийн даалгавар үзүүлэх</b></summary>

<br>

`dream-job.html` хуудсаа ангийнхандаа үзүүл. `dream-job.html`-ээ `my-first-page.html`-тэй **нэг хавтсанд** хий.

</details>

---

<details>
<summary><b>2. Код бөглөлт — хурдан бичих</b></summary>

<br>

VSCode-д товчилж бичээд **Tab** (эсвэл **Enter**) дар:

| Бичих        | Гарах                                         |
| ------------ | --------------------------------------------- |
| `!`          | HTML суурь код                                |
| `div.card`   | `<div class="card"></div>`                    |
| `h1#name`    | `<h1 id="name"></h1>`                          |
| `p*3`        | 3 ширхэг `<p></p>`                             |
| `a`          | `<a href=""></a>`                              |

CSS дотор: `bg` → `background`, `dis` → `display` — жагсаалтаас сонгоно.

<details>
<summary>Юу ч гарахгүй бол</summary>

<br>

Файлын нэр `.html`-ээр төгссөн эсэхийг шалга. Жагсаалт гарвал **↑ ↓** сумаар сонгоод **Enter**.

</details>

</details>

---

<details>
<summary><b>3. a — холбоос</b></summary>

<br>

`href` — хаашаа очих.

```html
<a href="https://www.youtube.com">YouTube</a>
```

Шинэ цонхонд нээх бол `target="_blank"` нэм:

```html
<a href="https://www.youtube.com" target="_blank">YouTube</a>
```

</details>

---

<details>
<summary><b>4. Хоёр хуудсаа холбох</b></summary>

<br>

Нэг хавтсанд байгаа файл руу зөвхөн **нэрээр** нь холбоно.

`my-first-page.html` дотор:

```html
<a href="dream-job.html">Миний мөрөөдлийн ажил</a>
```

`dream-job.html` дотор — буцах холбоос:

```html
<a href="my-first-page.html">Нүүр хуудас</a>
```

Дарж үз → хуудас хооронд шилжих ёстой.

<details>
<summary>Холбоос ажиллахгүй бол</summary>

<br>

- Хоёр файл **нэг хавтсанд** байгаа эсэх
- Файлын нэр **яг адилхан** эсэх (том жижиг үсэг, `.html`)

</details>

</details>

---

<details>
<summary><b>5. Flexbox — цэс хийх</b></summary>

<br>

Холбоосуудаа нэг хайрцагт хий → `display: flex` → **хажуу хажууд** эгнэнэ.

```html
<div class="nav">
  <a href="my-first-page.html">Нүүр</a>
  <a href="dream-job.html">Мөрөөдлийн ажил</a>
  <a href="https://www.youtube.com" target="_blank">YouTube</a>
</div>
```

```css
.nav {
  display: flex; /* хажуу хажууд */
  justify-content: center; /* голлуулах */
  gap: 20px; /* хоорондын зай */
}
.nav a {
  color: white;
  background: #7c3aed;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none; /* доогуур зураасгүй */
}
```

Энэ цэсийг **хоёр хуудсандаа** хоёуланд нь хуул.

</details>

---

<details>
<summary><b>6. Flexbox — хайрцгууд эгнүүлэх</b></summary>

<br>

Зорилго, факт гэх мэт хайрцгуудаа нэг мөрөнд тавь.

```html
<div class="row">
  <div class="box">
    <h2>Зорилго</h2>
    <p>Вэб сайт хийж сурах</p>
  </div>
  <div class="box">
    <h2>Бүтээх зүйл</h2>
    <p>Өөрийн тоглоом</p>
  </div>
  <div class="box">
    <h2>Сонирхолтой факт</h2>
    <p>Зүүн гараараа бичдэг</p>
  </div>
</div>
```

```css
.row {
  display: flex;
  flex-wrap: wrap; /* багтахгүй бол доош */
  gap: 10px;
}
.box {
  flex: 1; /* ижил өргөн */
  min-width: 150px;
  background: #fef3c7;
  padding: 10px;
  border-radius: 10px;
}
```

<details>
<summary>justify-content утгууд</summary>

<br>

| Утга            | Байрлал         |
| --------------- | --------------- |
| `center`        | Голд            |
| `flex-start`    | Зүүн талд       |
| `flex-end`      | Баруун талд     |
| `space-between` | Хоёр захад тарна |

Сольж туршаарай. Босоо чиглэлд: `flex-direction: column`.

</details>

</details>

---

<details>
<summary><b>7. ✨ Бонус</b></summary>

<br>

Бүрэн жишээ: **[index.html](index.html)**

- Гурав дахь хуудас нэмж цэсэндээ холбо (жишээ нь: `games.html`)
- Утсан дээр хар: Chrome → **F12** → утасны дүрс — хайрцгууд доош бууж байна уу?

</details>

---

<details>
<summary><b>Гэрийн даалгавар</b></summary>

<br>

| #   | Юу хийх                                                    | ✔️  |
| --- | ---------------------------------------------------------- | --- |
| 1   | `dream-job.html`-д мөн **цэс** + **flex хайрцгууд** нэм           | ⬜  |
| 2   | Хоёр хуудас хоорондоо **хоёр тийш** холбогдсон байх          | ⬜  |
| 3   | Хуудсынхаа screenshot-ыг Discord-д тавь                     | ⬜  |

Дараагийн хичээлд: Flexbox-ыг **тоглоомоор** гүнзгийрүүлнэ.

</details>
