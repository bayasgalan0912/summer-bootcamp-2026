# Эцсийн тест — Kahoot

25 асуулт: Хичээл 2, 3–4, 8, 9, 10-ын Kahoot-оос сонгосон (шинэ асуулт биш). Зөв хариу — ✅.

Зураг, xlsx, cover: `python3 reference/kahoot/template/build.py reference/kahoot/kahoot-final.md`

| Хичээл | Эх асуулт (тухайн kahoot-ын дугаар) |
| --- | --- |
| Хичээл 2 | `kahoot-2.md` → 1, 5, 12 |
| Хичээл 3–4 | `kahoot-3-4.md` → 1, 2, 8, 14, 16 |
| Хичээл 8 | `kahoot-8.md` → 2, 4, 6, 9, 10 |
| Хичээл 9 | `kahoot-9.md` → 1, 3, 5, 7, 8, 14 |
| Хичээл 10 | `kahoot-10.md` → 1, 2, 3, 6, 8, 11 |

```cover
Хичээл 2–10
Эцсийн тест
HTML · CSS · Flexbox · JS
for (let i = 1; i <= 25; i++) { ... }
```

---

<details>
<summary><b>1. class-ыг CSS-д сонгох</b> · 60 сек</summary>

<br>

```html
<div class="goal">
  <h2>Миний зорилго</h2>
</div>
```

**Энэ хайрцгийг CSS-д яаж сонгох вэ?**

| # | Хариулт | |
| - | ------- | - |
| 1 | `#goal { }` | |
| 2 | `goal { }` | |
| 3 | `.goal { }` | ✅ |
| 4 | `class=goal { }` | |

<details><summary>Тайлбар</summary>

`#` нь `id`-д. `.` нь `class`-д.

</details>
</details>

---

<details>

---

<details>
<summary><b>2. Урт зураг дугуйлах</b> · 60 сек</summary>

<br>

```css
img {
  width: 300px;
  height: 150px;
  border-radius: 50%;
}
```

**Зураг ямар хэлбэртэй болох вэ?**

| # | Хариулт | |
| - | ------- | - |
| 1 | Төгс дугуй | |
| 2 | Өөрчлөгдөхгүй, дөрвөлжин | |
| 3 | Зөвхөн дээд 2 булан мөлгөр | |
| 4 | Зууван (oval) | ✅ |

<details><summary>Тайлбар</summary>

Дугуй болохын тулд өргөн = өндөр байх ёстой. 300 ≠ 150 → зууван.

</details>
</details>

---

<details>

---

<details>
<summary><b>3. Өөрчлөлт гарахгүй байна</b> · 60 сек</summary>

<br>

```css
body {
  background: pink;
}
```

**`pink` гэж бичээд браузерт refresh хийлээ. Өнгө өөрчлөгдсөнгүй. Юуг мартсан бэ?**

| # | Хариулт | |
| - | ------- | - |
| 1 | Ctrl + Enter | |
| 2 | Ctrl + S | ✅ |
| 3 | Format Document | |
| 4 | Ctrl + Z | |

<details><summary>Тайлбар</summary>

Хадгалаагүй бол браузер хуучин файлыг харуулна. VSCode-ийн таб дээр ● байвал хадгалаагүй гэсэн үг.

</details>
</details>

---

<details>
<summary><b>4. Emmet: .</b> · 60 сек</summary>

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

---

<details>
<summary><b>5. .html-гүй холбоос</b> · 60 сек</summary>

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

---

<details>
<summary><b>6. Зургаас код: дээд голд</b> · 60 сек</summary>

<br>

```preview
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

---

<details>
<summary><b>7. Зургаас код: header</b> · 60 сек</summary>

<br>

```preview
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

---

<details>
<summary><b>8. Зургаас код: 2 мөр</b> · 60 сек</summary>

<br>

```preview
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

---

<details>
<summary><b>9. Хувьсагч хашилтанд</b> · 60 сек</summary>

<br>

```js
let ner = "Сараа";
console.log("ner");
```

**ner хувьсагчийг хашилтанд хийж хэвлэвэл юу гарах вэ?**
| #   | Хариулт     |     |
| --- | ----------- | --- |
| 1   | Сараа       |     |
| 2   | ner         | ✅  |
| 3   | "Сараа"     |     |
| 4   | Алдаа гарна |     |

<details><summary>Тайлбар</summary>

`"ner"` хашилттай → зүгээр текст. Хайрцгийн утгыг авахын тулд хашилтгүй: `console.log(ner)`.

</details>
</details>

---

<details>

---

<details>
<summary><b>10. Аль нь эхэлж бодогдох вэ?</b> · 60 сек</summary>

<br>

```js
console.log(10 - 4 / 2);
```

**10 - 4 / 2 — Console-д ямар тоо гарах вэ?**
| #   | Хариулт |     |
| --- | ------- | --- |
| 1   | 3       |     |
| 2   | 8       | ✅  |
| 3   | 6       |     |
| 4   | 2       |     |

<details><summary>Тайлбар</summary>

Хуваах эхэлнэ: `4 / 2 = 2`, дараа нь `10 - 2 = 8`. 3 гаргах бол `(10 - 4) / 2`.

</details>
</details>

---

<details>

---

<details>
<summary><b>11. Схемийг гүйцэтгэ</b> · 60 сек</summary>

<br>

```flow
start Эхлэл
op x = 5
op x = x + 1
op x = x * 2
io x гаргах
end Төгсгөл
```

**Энэ блок схемийг дагавал юу гарах вэ?**

| #   | Хариулт |     |
| --- | ------- | --- |
| 1   | 11      |     |
| 2   | 10      |     |
| 3   | 6       |     |
| 4   | 12      | ✅  |

<details><summary>Тайлбар</summary>

Дээрээс доош: 5 → 6 → 12. 11 бол дарааллыг эсрэгээр нь бодсон.

</details>
</details>

---

<details>

---

<details>
<summary><b>12. Текст + тоо + тоо</b> · 60 сек</summary>

<br>

```js
console.log("Нас: " + 10 + 2);
```

**Текст дээр 10, 2 тоог + -ээр залгавал юу гарах вэ?**
| #   | Хариулт     |     |
| --- | ----------- | --- |
| 1   | Нас: 12     |     |
| 2   | Нас: 102    | ✅  |
| 3   | Нас: 10 + 2 |     |
| 4   | Алдаа гарна |     |

<details><summary>Тайлбар</summary>

Зүүнээс баруун: `"Нас: " + 10` → текст `"Нас: 10"`, дараа нь `+ 2` → наалдана. 12 гаргах бол `"Нас: " + (10 + 2)`.

</details>
</details>

---

<details>

---

<details>
<summary><b>13. Хайрцаг солих — алдаа</b> · 60 сек</summary>

<br>

```js
let a = "cola";
let b = "water";
a = b;
b = a;
console.log(a, b);
```

**a, b-г солих гэсэн код. Console-д юу гарах вэ?**

| #   | Хариулт     |     |
| --- | ----------- | --- |
| 1   | water cola  |     |
| 2   | cola water  |     |
| 3   | cola cola   |     |
| 4   | water water | ✅  |

<details><summary>Тайлбар</summary>

`a = b` → a нь water, cola алга болсон. `b = a` → b нь мөн water. Солихын тулд 3 дахь хайрцаг хэрэгтэй.

</details>
</details>

---

<details>

---

<details>
<summary><b>14. CU-д гоймон</b> · 60 сек</summary>

<br>

```flow
start Эхлэл
op nas = 16
dec nas < 16 ?
| io Гоймон авч болохгүй | io Гоймон авч болно
end Төгсгөл
```

**Бат яг 16 настай. Энэ схемээр юу гарах вэ?**

| #   | Хариулт                                 |     |
| --- | --------------------------------------- | --- |
| 1   | Гоймон авч болохгүй                     |     |
| 2   | Гоймон авч болно                        | ✅  |
| 3   | Хоёулаа гарна                           |     |
| 4   | Юу ч гарахгүй                           |     |

<details><summary>Тайлбар</summary>

`16 < 16` → Үгүй (тэнцүү нь бага биш) → баруун зам. Хоёр замын зөвхөн **нэг** нь ажиллана.

</details>
</details>

---

<details>

---

<details>
<summary><b>15. Утасны PIN</b> · 60 сек</summary>

<br>

```js
let pin = "1234";   // хүний дарсан PIN
if (pin === 1234) {
  console.log("Түгжээ нээгдлээ");
} else {
  console.log("PIN буруу");
}
```

**Сараа зөв PIN 1234-өө дарлаа. Утас нээгдэх үү?**

| #   | Хариулт                        |     |
| --- | ------------------------------ | --- |
| 1   | Нээгдэнэ — Түгжээ нээгдлээ     |     |
| 2   | Нээгдэхгүй — PIN буруу         | ✅  |
| 3   | Алдаа гарна                    |     |
| 4   | Хоёулаа гарна                  |     |

<details><summary>Тайлбар</summary>

`"1234"` — текст, `1234` — тоо. Төрөл өөр тул `===` → false.

</details>
</details>

---

<details>

---

<details>
<summary><b>16. Уралдааны шагнал</b> · 60 сек</summary>

<br>

```js
let bair = 1;   // уралдаанд эзэлсэн байр
if (bair <= 3) {
  console.log("Медаль");
} else if (bair === 1) {
  console.log("Алтан аяга");
} else {
  console.log("Баярлалаа");
}
```

**Тэргүүн байр эзэлсэн хүүхэд юу авах вэ?**

| #   | Хариулт               |     |
| --- | --------------------- | --- |
| 1   | Алтан аяга            |     |
| 2   | Медаль                | ✅  |
| 3   | Медаль, Алтан аяга    |     |
| 4   | Баярлалаа             |     |

<details><summary>Тайлбар</summary>

`1 <= 3` → Тийм → зогсоно. "Алтан аяга" хэзээ ч гарахгүй. Хатуу нөхцөл (`=== 1`) эхэнд байх ёстой.

</details>
</details>

---

<details>

---

<details>
<summary><b>17. Кино театр</b> · 60 сек</summary>

<br>

```js
let nas = 15;
let mongo = 12000;   // халаасанд байгаа мөнгө
if (nas >= 12 && mongo >= 15000) {
  console.log("Кинонд орно");
} else {
  console.log("Гэртээ үлдэнэ");
}
```

**15 настай Тэмүүлэн 12000₮-тэй. Кинонд орох уу?**

| #   | Хариулт                            |     |
| --- | ---------------------------------- | --- |
| 1   | Орно — нас нь хүрч байна           |     |
| 2   | Хоёулаа гарна                      |     |
| 3   | Гэртээ үлдэнэ                      | ✅  |
| 4   | Алдаа гарна                        |     |

<details><summary>Тайлбар</summary>

`&&` — **хоёулаа** true байх ёстой. Нас OK, мөнгө дутуу → бүхэлдээ false.

</details>
</details>

---

<details>

---

<details>
<summary><b>18. Амралтын өдөр</b> · 60 сек</summary>

<br>

```js
let odor = "Ням";
if (odor === "бямба" || odor === "ням") {
  console.log("Амралт!");
} else {
  console.log("Хичээлдээ яв");
}
```

**Өнөөдөр "Ням" (том Н). Амрах уу?**

| #   | Хариулт            |     |
| --- | ------------------ | --- |
| 1   | Амралт!            |     |
| 2   | Хичээлдээ яв       | ✅  |
| 3   | Хоёулаа гарна      |     |
| 4   | Алдаа гарна        |     |

<details><summary>Тайлбар</summary>

`"Ням"` ≠ `"ням"` — том, жижиг үсэг өөр. Хоёр нөхцөл хоёулаа false → `||` false.

</details>
</details>

---

<details>

---

<details>
<summary><b>19. Замын камер</b> · 60 сек</summary>

<br>

```js
let hurd = ?;   // км/ц
if (hurd > 100) {
  console.log("Торгууль 50000₮");
} else if (hurd > 80) {
  console.log("Торгууль 20000₮");
} else {
  console.log("Сайн жолооч");
}
```

**Аль хурдтай машин 20000₮ торгууль төлөх вэ?**

| #   | Хариулт      |     |
| --- | ------------ | --- |
| 1   | 80 км/ц      |     |
| 2   | 100 км/ц     | ✅  |
| 3   | 101 км/ц     |     |
| 4   | 120 км/ц     |     |

<details><summary>Тайлбар</summary>

`100 > 100` → false, `100 > 80` → true → 20000₮. 80 нь `> 80` биш, 101 ба 120 нь 50000₮.

</details>
</details>

---

<details>

---

<details>
<summary><b>20. Дэлгүүрийн сагс</b> · 60 сек</summary>

<br>

```js
let niit = "";   // сагсны нийт үнэ
for (let i = 1; i <= 3; i++) {
  niit = niit + 1000;
}
alert(niit);
```

**1000₮-ийн 3 талх сагсалсан. Кассын дэлгэцэнд юу гарах вэ?**

| #   | Хариулт       |     |
| --- | ------------- | --- |
| 1   | 3000          |     |
| 2   | 100010001000  | ✅  |
| 3   | 1000          |     |
| 4   | Алдаа гарна   |     |

<details><summary>Тайлбар</summary>

`""` — текст. Текст + тоо → наалдана. Тоо нэмэх бол `let niit = 0`.

</details>
</details>

---

<details>

---

<details>
<summary><b>21. Шатаар өгсөх</b> · 60 сек</summary>

<br>

```js
let alham = "";
for (let i = 1; i < 5; i++) {
  alham = alham + i + " ";
}
alert(alham);
```

**Дүү 5 шаттай шатаар өгсөхдөө тоолж байна. Цонхонд юу гарах вэ?**

| #   | Хариулт      |     |
| --- | ------------ | --- |
| 1   | 1 2 3 4 5    |     |
| 2   | 0 1 2 3 4    |     |
| 3   | 1 2 3 4      | ✅  |
| 4   | 2 3 4 5      |     |

<details><summary>Тайлбар</summary>

`5 < 5` → худал → 5 дээр зогсоно. 5-ыг оруулах бол `i <= 5`.

</details>
</details>

---

<details>

---

<details>
<summary><b>22. Алхам тоолуур</b> · 60 сек</summary>

<br>

```js
let alham = 0;
for (let odor = 1; odor <= 3; odor++) {
  alham = 0;
  alham = alham + 5000;
}
alert(alham + " алхам");
```

**Ухаалаг цаг: 3 өдөр, өдөр бүр 5000 алхсан. Нийт хэд гэж гарах вэ?**

| #   | Хариулт       |     |
| --- | ------------- | --- |
| 1   | 5000 алхам    | ✅  |
| 2   | 15000 алхам   |     |
| 3   | 0 алхам       |     |
| 4   | 10000 алхам   |     |

<details><summary>Тайлбар</summary>

`alham = 0` давталтын **дотор** → өдөр бүр тэглэгдэнэ. Зөвхөн сүүлийн өдрийн 5000 үлдэнэ.

</details>
</details>

---

<details>

---

<details>
<summary><b>23. Микровейвийн таймер</b> · 60 сек</summary>

<br>

```js
let t = "";
for (let sec = 30; sec >= 1; sec++) {
  t = t + sec + " ";
}
alert(t + "Дзинь!");
```

**Хоолоо 30 секунд халаалаа. Хуудсаа нээхэд юу болох вэ?**

| #   | Хариулт                   |     |
| --- | ------------------------- | --- |
| 1   | 30 29 28 … 1 Дзинь!       |     |
| 2   | Дзинь!                    |     |
| 3   | Хуудас гацна              | ✅  |
| 4   | 30 Дзинь!                 |     |

<details><summary>Тайлбар</summary>

`sec++` → 30, 31, 32 … үргэлж 1-ээс их → хэзээ ч зогсохгүй. Буурах бол `sec--`.

</details>
</details>

---

<details>

---

<details>
<summary><b>24. Автобусны буудал</b> · 60 сек</summary>

<br>

```js
let avtobus = 0;
for (let min = 1; min <= 60; min++) {
  if (min % 15 === 0) {
    avtobus = avtobus + 1;
  }
}
alert(avtobus);
```

**Автобус 15 минут тутамд ирнэ. 1 цагт хэдэн автобус ирэх вэ?**

| #   | Хариулт |     |
| --- | ------- | --- |
| 1   | 3       |     |
| 2   | 4       | ✅  |
| 3   | 5       |     |
| 4   | 15      |     |

<details><summary>Тайлбар</summary>

15, 30, 45, 60-р минутад л `min % 15 === 0` → 4. 60-р минут ч тоологдоно (`<=`).

</details>
</details>

---

<details>

---

<details>
<summary><b>25. Ирц бүртгэл</b> · 60 сек</summary>

<br>

```js
let durdsan = 0;   // нэр дуудсан тоо
for (let i = 0; i <= 25; i++) {
  durdsan = durdsan + 1;
}
alert(durdsan);
```

**Ангид 25 сурагч бий. Багш хэдэн удаа нэр дуудах вэ?**

| #   | Хариулт |     |
| --- | ------- | --- |
| 1   | 24      |     |
| 2   | 25      |     |
| 3   | 26      | ✅  |
| 4   | 0       |     |

<details><summary>Тайлбар</summary>

`i` = 0, 1, 2 … 25 → 26 удаа. 0-ээс эхэлбэл `i < 25`, эсвэл 1-ээс эхэл.

</details>
</details>

---

<details>

