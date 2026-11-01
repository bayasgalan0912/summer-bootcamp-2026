# Хичээл 11 — Багшид

**Зорилго:** Массив (`[ ]`, `a[i]`, `length`) + `for` + `if`. Бодлого цөөн, амархан. Гаралт `console.log`.

**Гол санаа:** "Массив = дугаартай хайрцгууд, 0-ээс эхэлнэ". Дасгал 6, 7-ийн anime массив Хичээл 12-т тоглоом болно.

## Хичээлийн өмнө

- Самбарт 3 нүдтэй хайрцаг зур: `0 | 1 | 2` дугаартай, дотор нь anime нэр.
- Самбарт 3-р алхамын мөшгих хүснэгтийг хоосноор зур (`i`, `temp[i]`, `< 0`?, `huiten`).

## Явц

| Цаг  | Юу хийх |
| ---- | ------- |
| 0:00 | Бэлтгэл (0) |
| 0:05 | **Хүн-массив:** 5 хүүхэд эгнээнд зогсоно, нэг бүр anime нэр барина. "`anime[0]` хэн бэ?" Эхнийх нь 0. `length` = хэдэн хүн (1) |
| 0:15 | for + массив (2). Хичээл 10-тай харьцуул (`i = 0`, `<`) |
| 0:25 | for + if (3): мөшгих хүснэгтийг самбарт хамт бөглө |
| 0:35 | Дасгал 1, 2 хамт |
| 0:45 | Дасгал 3–5 бие даан |
| 1:00 | Завсарлага |
| 1:10 | Дасгал 6 хамт эхлүүл, өөрийн anime нэмүүл. Дасгал 7 бие даан |
| 1:40 | Түрүүлсэн нь Бонус |
| 1:50 | Дүгнэлт: 2–3 хүүхэд кодоо тайлбарлана. ГД: anime-гаа 10 болгох (Хичээл 12-ын тоглоомын дата) |

## Түгээмэл алдаа

| Алдаа | Засвар |
| ----- | ------ |
| `i <= a.length` → сүүлд `undefined` | `<` байх ёстой |
| `let i = 1` → эхнийх алга | Массив 0-ээс |
| Дугаар `01. Dynamite` | `(i + 1)` хаалттай. Хаалтгүй бол текст нийлнэ |
| Нийлбэрт `s = s + i` | `i` биш `a[i]` |
| Дундаж давталт бүрт гарна | `console.log`-ыг давталтын **дараа** |
| `Identifier 'anime' has already been declared` | Дасгал 7-д `let anime` дахин бичсэн — устга |
| Дасгал 6: emoji, anime зөрсөн | Хоёр массивын дараалал ижил байх ёстой |
| Хамгийн их = 0 гарна | `max = a[0]`-ээс эхэл, 0-ээс биш |

## Хариу

```js
// 1
for (let i = 0; i < duu.length; i++) {
  console.log((i + 1) + ". " + duu[i]);
}

// 2
let s2 = 0;
for (let i = 0; i < minut.length; i++) {
  s2 = s2 + minut[i];
}
console.log("Нийт: " + s2 + " минут"); // 380

// 3
let s3 = 0;
for (let i = 0; i < ug.length; i++) {
  s3 = s3 + ug[i];
}
console.log("Дундаж: " + s3 / ug.length + " оноо"); // 10

// 4
let too = 0;
for (let i = 0; i < shalgalt.length; i++) {
  if (shalgalt[i] >= 60) {
    too = too + 1;
  }
}
console.log(too + " хүн тэнцсэн"); // 5

// 5
let max = record[0];
let min = record[0];
for (let i = 0; i < record.length; i++) {
  if (record[i] > max) {
    max = record[i];
  }
  if (record[i] < min) {
    min = record[i];
  }
}
console.log("Рекорд: " + max); // 5100, min 900

// 6
for (let i = 0; i < anime.length; i++) {
  console.log(emoji[i] + " → " + anime[i]);
}

// 7
let niit = 0;
for (let i = 0; i < angi.length; i++) {
  if (angi[i] > 100) {
    console.log(anime[i]); // а: Naruto, One Piece, Dragon Ball
  }
  niit = niit + angi[i];
}
console.log(niit + " анги"); // б: 1675
console.log(Math.floor(niit * 20 / 60) + " цаг"); // в: 558

// Бонус
let r = Math.floor(Math.random() * anime.length);
console.log("Өнөөдөр: " + emoji[r] + " " + anime[r] + " (" + angi[r] + " анги)");

let maxI = 0;
for (let i = 0; i < angi.length; i++) {
  if (angi[i] > angi[maxI]) {
    maxI = i;
  }
}
console.log(anime[maxI]); // One Piece
```
