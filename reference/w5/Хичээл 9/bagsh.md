# Хичээл 9 — Code Cup · Багшид

**Зорилго:** Хичээл 4–8-ыг тэмцээнээр бататгах. Дараагийн хичээлээс AI-аар бүтээнэ — тэр үед AI-н бичсэн кодыг **уншиж, засаж** чаддаг байх.

## Бэлтгэл

- Самбарт онооны хүснэгт: баг × раунд.
- Баг: Хичээл 8-ийн төгсгөлд зарласан 3 хүнтэй баг (чадвар холимог).
- Шагнал: 3 ангилал (readme-д).
- Раунд 1-ийн кодыг слайд эсвэл самбарт нэг нэгээр гарга, баг бүр **цаасан** дээр бичнэ, 1 минут.

## Раунд 1 — Юу хэвлэх вэ? (1 оноо)

| #   | Код                                                                                  | Хариу       |
| --- | ------------------------------------------------------------------------------------ | ----------- |
| 1   | `let a = 4; a = a * a; a = a - 6; console.log(a)`                                     | `10`        |
| 2   | `console.log(2 + "2" + 2)`                                                            | `"222"`     |
| 3   | `let x = 15; if (x % 3 === 0 && x % 5 === 0) { console.log("A") } else { console.log("B") }` | `A` |
| 4   | `let s = ""; for (let i = 3; i > 0; i--) { s = s + i } console.log(s)`               | `"321"`     |
| 5   | `let a = [1, 2, 3]; a.push(a.length); console.log(a)`                                 | `[1, 2, 3, 3]` |
| 6   | `let c = 0; for (let i = 0; i < 10; i = i + 3) { c++ } console.log(c)`               | `4`         |
| 7   | `function f(n) { return n * n } console.log(f(3) + f(4))`                             | `25`        |
| 8   | `function f(a) { a.push(0) } let b = [1]; f(b); console.log(b.length)`               | `2`         |

## Хариу — bodlogo.html

```js
function toF(c) { return c * 9 / 5 + 32 }

function countNegative(arr) {
  let c = 0;
  for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) { c++ } }
  return c;
}

function ageGroup(age) {
  if (age <= 12) { return "хүүхэд" }
  if (age <= 17) { return "өсвөр" }
  return "том хүн";
}

function digitSum(n) {
  let s = 0;
  while (n > 0) { s = s + n % 10; n = Math.floor(n / 10) }
  return s;
}

function countVowels(text) {
  let v = "аэиоуөү", c = 0;
  for (let i = 0; i < text.length; i++) { if (v.includes(text[i])) { c++ } }
  return c;
}

function common(a, b) {
  let r = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) { if (a[i] === b[j]) { r.push(a[i]) } }
  }
  return r;
}

function top3(players) {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players.length - 1; j++) {
      if (players[j].score < players[j + 1].score) {
        let t = players[j]; players[j] = players[j + 1]; players[j + 1] = t;
      }
    }
  }
  return [players[0].name, players[1].name, players[2].name];
}
```

> Раунд 4-т объект (`{ name, score }`) анх гарч байна. Эхлэхийн өмнө 2 минут тайлбарла: `players[0].name`.

## Дараа нь

Шагнал гардуулсны дараа: **"Хичээл 10-аас эхлэн AI код бичнэ. Та нар одоо тэр кодыг уншиж чадна."**
