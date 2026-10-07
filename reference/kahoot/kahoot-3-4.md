# Хичээл 3–4 — Kahoot

16 асуулт: 1–6 Хичээл 3 (Emmet, холбоос), 7–16 Хичээл 4 (Flexbox). Зөв хариу — ✅.

Зураг, xlsx: `python3 reference/kahoot/template/build.py reference/kahoot/kahoot-3-4.md`
`preview` блок → хуудасны зураг (хүрээлж буй хайрцаг тасархай хүрээтэй, доторх хайрцгууд 1, 2, 3 …).

---

<details>
<summary><b>1. Emmet: .</b> · 60 сек</summary>

<br>

```text
div.card   ← Tab
```

**VSCode-д ингэж бичээд Tab дарвал юу гарах вэ?**

| #   | Хариулт                      |     |
| --- | ---------------------------- | --- |
| 1   | div дотор "card" гэсэн текст |     |
| 2   | card гэсэн шинэ таг          |     |
| 3   | class="card"-тэй div         | ✅  |
| 4   | Юу ч гарахгүй                |     |

<details><summary>Тайлбар</summary>

Emmet-д CSS-тэй адил: `.` → `class`.

</details>
</details>

---

<details>
<summary><b>2. .html-гүй холбоос</b> · 60 сек</summary>

<br>

```html
<!-- Хавтсанд: dream-job.html -->

<a href="dream-job">Мөрөөдлийн ажил</a>
```

**Холбоос дээр дарвал юу болох вэ?**

| #   | Хариулт                          |     |
| --- | -------------------------------- | --- |
| 1   | dream-job.html нээгдэнэ          |     |
| 2   | Хуудас олдсонгүй гэсэн алдаа     | ✅  |
| 3   | Google-ээс dream-job хайна       |     |
| 4   | Холбоос хуудсан дээр харагдахгүй |     |

<details><summary>Тайлбар</summary>

Файлын нэр **яг адилхан** байх ёстой — `.html`-ээ ч оруулж.

</details>
</details>

---

<details>
<summary><b>3. Буцах холбоос</b> · 60 сек</summary>

<br>

```html
1 <a href="dream-job.html">Нүүр</a> 2 <a href="my-first-page">Нүүр</a> 3
<a>my-first-page.html</a> 4 <a href="my-first-page.html">Нүүр</a>
```

**dream-job.html дээр байна. Нүүр хуудас (my-first-page.html) руу буцах аль мөр зөв вэ?**

| #   | Хариулт |     |
| --- | ------- | --- |
| 1   | 1-р мөр |     |
| 2   | 2-р мөр |     |
| 3   | 3-р мөр |     |
| 4   | 4-р мөр | ✅  |

<details><summary>Тайлбар</summary>

1 — өөр рүүгээ. 2 — `.html` дутуу. 3 — `href` байхгүй, хаашаа ч очихгүй.

</details>
</details>

---

<details>
<summary><b>4. target="_blank"</b> · 60 сек</summary>

<br>

```html
<a href="https://www.youtube.com" target="_blank">YouTube</a>
```

**Дарвал юу болох вэ?**

| #   | Хариулт                                 |     |
| --- | --------------------------------------- | --- |
| 1   | Одоогийн хуудас YouTube болж солигдоно  |     |
| 2   | YouTube хуудсан дотор суугдаж харагдана |     |
| 3   | YouTube шинэ таб/цонхонд нээгдэнэ       | ✅  |
| 4   | Хоосон цагаан цонх нээгдэнэ             |     |

<details><summary>Тайлбар</summary>

`_blank` — шинэ цонх. Хуудсан дотор суулгах бол `iframe` (Хичээл 2).

</details>
</details>

---

<details>
<summary><b>5. text-decoration</b> · 60 сек</summary>

<br>

```css
a {
  text-decoration: none;
}
```

**Энэ мөр юу хийх вэ?**

| #   | Хариулт                        |     |
| --- | ------------------------------ | --- |
| 1   | Холбоос ажиллахаа больно       |     |
| 2   | Холбоосын текст алга болно     |     |
| 3   | Холбоосын өнгө арилж хар болно |     |
| 4   | Доогуур зураас арилна          | ✅  |

<details><summary>Тайлбар</summary>

Зөвхөн харагдах байдал өөрчлөгдөнө — дарахад ажилласаар.

</details>
</details>

---

<details>
<summary><b>6. Emmet: #</b> · 60 сек</summary>

<br>

```text
h1#name   ← Tab
```

**div.card → class="card" гарсан. Харин үүнийг бичвэл юу гарах вэ?**

| #   | Хариулт                      |     |
| --- | ---------------------------- | --- |
| 1   | id="name"-тэй h1             | ✅  |
| 2   | class="name"-тэй h1          |     |
| 3   | h1 дотор "#name" гэсэн текст |     |
| 4   | name гэсэн шинэ таг          |     |

<details><summary>Тайлбар</summary>

CSS-д `#name` нь `id` (Хичээл 2). Emmet ч мөн адил: `#` → `id`.

</details>
</details>

---

<details>
<summary><b>7. flex-ийг доторх хайрцагт бичвэл</b> · 60 сек</summary>

<br>

```html
<style>
  .box {
    display: flex;
  }
</style>

<div class="parent">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

**1, 2, 3 хайрцгууд яаж байрлах вэ?**

| #   | Хариулт                   |     |
| --- | ------------------------- | --- |
| 1   | Хажуу хажууд              |     |
| 2   | Бүгд голдоо               |     |
| 3   | Дээрээс доош хэвээр       | ✅  |
| 4   | Нэгнийхээ дээр давхарлана |     |

<details><summary>Тайлбар</summary>

`display: flex`-ийг **хүрээлж буй** хайрцагт (`.parent`) бичнэ — доторх хайрцгуудыг тэр эгнүүлнэ.

</details>
</details>

---

<details>
<summary><b>8. Зургаас код: дээд голд</b> · 60 сек</summary>

<br>

```html
<style>
  .parent {
    display: flex;
    justify-content: center;
  }
</style>
<div class="parent">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

**display: flex-ийн доор аль мөрийг нэмбэл ингэж харагдах вэ?**

| #   | Хариулт                        |     |
| --- | ------------------------------ | --- |
| 1   | align-items: center;           |     |
| 2   | justify-content: center;       | ✅  |
| 3   | justify-content: space-around; |     |
| 4   | flex-direction: column;        |     |

<details><summary>Тайлбар</summary>

Дээд талдаа, хэвтээ голд → `justify-content`. `align-items: center` бол босоо голд очих байсан.

</details>
</details>

---

<details>
<summary><b>9. height-гүй align-items</b> · 60 сек</summary>

<br>

```css
.parent {
  display: flex;
  align-items: flex-end;
  /* height бичээгүй */
}
```

**Доторх хайрцгууд хүрээлж буй хайрцгийн доод захад очих уу?**

| #   | Хариулт                          |     |
| --- | -------------------------------- | --- |
| 1   | Тийм, доод захад наалдана        |     |
| 2   | Үгүй, баруун тийш явна           |     |
| 3   | Хайрцгууд алга болно             |     |
| 4   | Харагдах өөрчлөлт бараг гарахгүй | ✅  |

<details><summary>Тайлбар</summary>

Хүрээлж буй хайрцаг доторхтойгоо ижил өндөр — доош явах **зай алга**. `height` өг.

</details>
</details>

---

<details>
<summary><b>10. column үед justify-content</b> · 60 сек</summary>

<br>

```css
.parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
}
```

**Доторх хайрцгууд аль чиглэлд голдох вэ?**

| #   | Хариулт              |     |
| --- | -------------------- | --- |
| 1   | Хэвтээ → голд        |     |
| 2   | Босоо ↓ голд         | ✅  |
| 3   | Хоёр чиглэлд яг голд |     |
| 4   | Огт голдохгүй        |     |

<details><summary>Тайлбар</summary>

`column` үед сум **эргэнэ**: `justify-content` босоо, `align-items` хэвтээ.

</details>
</details>

---

<details>
<summary><b>11. Зургаас код: баруун багана</b> · 60 сек</summary>

<br>

```html
<style>
  .parent {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
</style>
<div class="parent">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

**flex-direction: column бичсэн. Ингэж харагдуулах аль хослол вэ?**

| #   | Хариулт                                           |     |
| --- | ------------------------------------------------- | --- |
| 1   | justify-content: flex-end; align-items: center;   |     |
| 2   | align-items: center; justify-content: center;     |     |
| 3   | align-items: flex-end; justify-content: center;   | ✅  |
| 4   | justify-content: flex-end; align-items: flex-end; |     |

<details><summary>Тайлбар</summary>

`column` үед: баруун тийш → `align-items: flex-end`, босоо голд → `justify-content: center`.

</details>
</details>

---

<details>
<summary><b>12. Зургаас код: баруун доод булан</b> · 60 сек</summary>

<br>

```html
<style>
  .parent {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
</style>
<div class="parent">
  <div class="box">🐑</div>
</div>
```

**Хонь хашааны баруун доод буланд орсон. Аль код вэ?**

| #   | Хариулт                                             |     |
| --- | --------------------------------------------------- | --- |
| 1   | justify-content: flex-end; align-items: flex-end;   | ✅  |
| 2   | justify-content: flex-end; align-items: center;     |     |
| 3   | justify-content: flex-start; align-items: flex-end; |     |
| 4   | justify-content: center; align-items: flex-end;     |     |

<details><summary>Тайлбар</summary>

→ баруун = `justify-content: flex-end`, ↓ доош = `align-items: flex-end`.

</details>
</details>

---

<details>
<summary><b>13. Дэлгэц хуваах: аль хайрцагт flex</b> · 60 сек</summary>

<br>

```html
<div class="page">
  <div class="sidebar">Цэс</div>
  <div class="videos">Видеонууд</div>
</div>
```

**Цэс зүүн талд, видеонууд баруун талд хажуу хажууд байх ёстой. display: flex-ийг хаана бичих вэ?**

| #   | Хариулт                      |     |
| --- | ---------------------------- | --- |
| 1   | .sidebar                     |     |
| 2   | .videos                      |     |
| 3   | .sidebar ба .videos хоёуланд |     |
| 4   | .page                        | ✅  |

<details><summary>Тайлбар</summary>

Хажуу хажууд тавих хоёр хайрцгийг **хүрээлж буй** `.page`-д бичнэ.

</details>
</details>

---

<details>
<summary><b>14. Зургаас код: header</b> · 60 сек</summary>

<br>

```html
<style>
  .header {
    width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #7c3aed;
    color: #fff;
    padding: 30px 40px;
    box-sizing: border-box;
    border-radius: 20px;
    font-size: 48px;
    font-weight: bold;
  }
  .nav {
    display: flex;
    gap: 20px;
  }
  .nav span {
    background: #fff;
    color: #7c3aed;
    padding: 12px 28px;
    border-radius: 14px;
    font-size: 36px;
  }
</style>
<div class="header">
  <div>🎮 Лого</div>
  <div class="nav"><span>Нүүр</span><span>Тоглоом</span><span>Оноо</span></div>
</div>
```

**Лого зүүн, цэс баруун захад. .header-т аль мөр ингэж харагдуулах вэ?**

| #   | Хариулт                         |     |
| --- | ------------------------------- | --- |
| 1   | justify-content: flex-end;      |     |
| 2   | justify-content: space-between; | ✅  |
| 3   | justify-content: space-around;  |     |
| 4   | align-items: space-between;     |     |

<details><summary>Тайлбар</summary>

2 хайрцаг → `space-between` нэгийг нь зүүн, нөгөөг нь баруун захад тавина. `flex-end` бол хоёулаа баруун тийш.

</details>
</details>

---

<details>
<summary><b>15. wrap-гүй нарийн дэлгэц</b> · 60 сек</summary>

<br>

```css
.cards {
  display: flex;
  gap: 20px;
  /* flex-wrap бичээгүй */
}
.card {
  min-width: 200px;
}
```

**5 карт, утасны нарийн дэлгэц. Картууд яах вэ?**

| #   | Хариулт                                   |     |
| --- | ----------------------------------------- | --- |
| 1   | Нэг мөрөндөө үлдэж, дэлгэцээс хальж гарна | ✅  |
| 2   | Автоматаар доод мөр рүү бууна             |     |
| 3   | Дээрээс доош нэг багана болно             |     |
| 4   | Сүүлийн картууд алга болно                |     |

<details><summary>Тайлбар</summary>

Доош буулгах бол `flex-wrap: wrap;` заавал бичнэ.

</details>
</details>

---

<details>
<summary><b>16. Зургаас код: 2 мөр</b> · 60 сек</summary>

<br>

```html
<style>
  .parent {
    width: 700px;
    height: auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
</style>
<div class="parent">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</div>
```

**6 хайрцаг 2 мөр болж буусан. Аль мөр үүнийг хийсэн бэ?**

| #   | Хариулт                 |     |
| --- | ----------------------- | --- |
| 1   | flex-direction: column; |     |
| 2   | gap: 20px;              |     |
| 3   | flex-wrap: wrap;        | ✅  |
| 4   | align-items: flex-end;  |     |

<details><summary>Тайлбар</summary>

`wrap` — багтахгүй бол доод мөр рүү. `column` бол бүгд нэг багана болох байсан.

</details>
</details>
