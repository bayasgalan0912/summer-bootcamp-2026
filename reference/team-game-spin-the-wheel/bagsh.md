# Хүрд эргүүлэх — Багшид

## Бэлтгэл

1. **Баг хосло (leaderboard-оор):** 1-р байр + сүүлийн байр, 2-р + сүүлээсээ 2-р … Ингэвэл баг бүр тэнцүү, сайн нь нөгөөдөө заана.
2. Хүрд + шагнал (тоо хязгаартай), самбарт багуудын жагсаалт.

## Явц

1. Баг бодлого дуусгамагц багшийг дуудна.
2. Код ажиллуулж үзүүлнэ → багийн **аль нэгнээс нь** (багш сонгоно) тайлбарлуулна.
3. Зөв бол: самбарт оноо тэмдэглэ. Түвшин/хэсэг дуусвал **ирсэн дарааллаар** хүрд эргүүлнэ.
4. Хичээлийн төгсгөлд оноог leaderboard-д оруул (багийн **хоёуланд** ижил).

## Оноо

| Ангилал | Leaderboard (дээд) | Хүрд (дээд) |
| ------- | ------------------ | ----------- |
| Web: 3 хэсэг × +3 | 9 | 3 |
| JS: 3 × 1 + 2 × 2 + 2 × 3 | 13 | 4 |

## Хүрд (Wheel of Names)

| Шагнал | Нүд | Зураг |
| ------ | --- | ----- |
| Кино билет | 1 | [kino-bilet.png](shagnal/kino-bilet.png) |
| 20,000₮ | 1 | [20k.png](shagnal/20k.png) |
| Pepero | 3 | [pepero.png](shagnal/pepero.png) |
| Супер Контик | 2 | [super-kontik.png](shagnal/super-kontik.png) |
| Snickers | 2 | [snickers.png](shagnal/snickers.png) |
| Мульти Витамин | 2 | [juice.png](shagnal/juice.png) |
| +5 оноо | 2 | [plus5.png](shagnal/plus5.png) |
| +10 оноо | 1 | [plus10.png](shagnal/plus10.png) |
| Тасалсан оноо буцаах | 1 | [butsaah.png](shagnal/butsaah.png) |
| Дахин эргүүл | 2 | [dahin.png](shagnal/dahin.png) |
| Цэвэр агаар | 3 | [tsever-agaar.png](shagnal/tsever-agaar.png) |

Нийт 20 нүд — 1 нүд = 5% магадлал ([shagnal/prompt.md](shagnal/prompt.md)). Бодит бэлэг гарвал тэр **1 мөрийг устга** — бэлэг илүү гарахгүй.

<details>
<summary><b>Wheel of Names-д үүсгэх</b></summary>

1. [wheelofnames.com](https://wheelofnames.com) → **Entries**-ийг цэвэрлэ.
2. Доорх текстийг хуулж тавь.
3. Мөр бүрийн хажууд зургийн icon → `shagnal/`-аас зохих зургийг сонго.
4. **Customize** → **Display duplicates** асаалттай эсэхийг шалга.
5. **Save** (Google-ээр нэвтэрч) → дараагийн удаа **Open**.

```
Кино билет
20,000₮
Pepero
Pepero
Pepero
Супер Контик
Супер Контик
Snickers
Snickers
Мульти Витамин
Мульти Витамин
+5 оноо
+5 оноо
+10 оноо
Тасалсан оноо буцаах
Дахин эргүүл
Дахин эргүүл
Цэвэр агаар
Цэвэр агаар
Цэвэр агаар
```

</details>

<details>
<summary><b>Web шийдэл</b></summary>

[shiidel/index.html](shiidel/index.html) — зөвхөн заасан CSS (flex, `border-radius`, `:hover`). Хүүхдэд бүү өг.

</details>

<details>
<summary><b>JS шийдлүүд (node-оор шалгасан)</b></summary>

```js
// 1. Дэлгүүр
let zairmag = Number(prompt("Хэдэн зайрмаг?"));
let chips = Number(prompt("Хэдэн чипс?"));
alert(zairmag * 1500 + chips * 2500);

// 2. Кино
let nas = Number(prompt("Хэдэн настай вэ?"));
if (nas >= 13) {
  alert("Үзэж болно");
} else {
  alert("Арай эрт байна");
}

// 3. Утасны цэнэг
let tsenleg = Number(prompt("Цэнэг хэдэн хувь вэ?"));
if (tsenleg < 20) {
  alert("Цэнэглэ!");
} else {
  alert("Зүгээр");
}

// 4. Тоглоомын цол
let xp = Number(prompt("Хэдэн XP?"));
if (xp < 100) {
  alert("Шинэхэн");
} else if (xp < 500) {
  alert("Дадлагатай");
} else {
  alert("Мастер");
}

// 5. Инээд
let n = Number(prompt("Хэдэн удаа инээх вэ?"));
let t = "";
for (let i = 1; i <= n; i++) {
  t = t + "ха";
}
alert(t);

// 6. Лифт
let davhar = Number(prompt("Хэдэн давхар вэ?"));
let t6 = "";
for (let i = 1; i <= davhar; i++) {
  if (i !== 13) {
    t6 = t6 + i + " ";
  }
}
alert(t6);

// 7. Хамгийн өндөр оноо
let ih = 0;
for (let i = 1; i <= 5; i++) {
  let onoo = Number(prompt(i + "-р тоглолтын оноо?"));
  if (onoo > ih) {
    ih = onoo;
  }
}
alert("Хамгийн өндөр: " + ih);
```

</details>

<details>
<summary><b>Түгээмэл алдаа</b></summary>

| Бодлого | Алдаа |
| ------- | ----- |
| 2, 3 | `>=` / `<`-ийн хил: 13 → "Үзэж болно", 20 → "Зүгээр" |
| 4 | `else if`-ийн дараалал: `xp < 500`-г эхэнд тавивал 50 → "Дадлагатай" |
| 5, 6 | `let t = ""`-г давталт **дотор** бичих → зөвхөн сүүлийнх үлдэнэ |
| 7 | `alert`-ийг давталт дотор бичих → 5 удаа гарна |

</details>
