# Хичээл 7 — Багшид

**Зорилго:** массив, index, `length`, массивыг давталтаар гүйх. Нийлбэр, max, тоолох, хайх — 4 **суурь алгоритм**.

## Явц

| Цаг  | Юу хийх                                                                    |
| ---- | -------------------------------------------------------------------------- |
| 0:00 | Давтлага: Хичээл 6-ын "Юу хэвлэх вэ?" 3 асуулт                              |
| 0:10 | **Хүн-массив:** 5 хүүхэд эгнээнд, гартаа тоотой цаас. "index 2 хэн бэ?"    |
| 0:15 | Хамгийн ихийг олох: нэг хүүхэд эгнээгээр явж "одоогийн хамгийн их"-ээ барина |
| 0:25 | Кодоор + pythontutor                                                        |
| 0:35 | Бие даан                                                                     |
| 1:20 | Тэмцээн                                                                      |

## Тэмцээн

**Раунд 1 — Юу хэвлэх вэ?**

| #   | Код                                                              | Хариу         |
| --- | ---------------------------------------------------------------- | ------------- |
| 1   | `let a = [5, 8, 2]; console.log(a[1])`                           | `8`           |
| 2   | `let a = [5, 8, 2]; console.log(a.length)`                       | `3`           |
| 3   | `let a = [5, 8, 2]; console.log(a[3])`                           | `undefined`   |
| 4   | `let a = [1, 2]; a.push(9); console.log(a)`                      | `[1, 2, 9]`   |
| 5   | `let a = [3, 1, 4]; let s = 0; for (let i = 0; i < a.length; i++) { s = s + a[i] } console.log(s)` | `8` |

**Раунд 2 — Код бич**

1. `[4, 7, 1, 9, 3]`-ийн хамгийн **бага** → `1`
2. `[2, 5, 8, 11]`-ийн бүх тоог 2 дахин өсгөсөн шинэ массив → `[4, 10, 16, 22]`
3. `["а", "б", "а", "в", "а"]`-д `"а"` хэдэн удаа байна → `3`

## Хариу — bodlogo.html

```js
let first = scores[0];  let last = scores[scores.length - 1];
for (let i = 0; i < scores.length; i++) { total = total + scores[i] }
for (let i = 1; i < scores.length; i++) { if (scores[i] > best) { best = scores[i] } }
for (let i = 0; i < scores.length; i++) { if (scores[i] > 60) { count++ } }
for (let i = scores.length - 1; i >= 0; i--) { reversed.push(scores[i]) }
for (let i = 0; i < names.length; i++) { if (names[i] === "Сараа") { where = i } }
for (let i = 0; i < names.length; i++) { if (names[i].length > longest.length) { longest = names[i] } }
```
