# Хичээл 8 — Багшид

**Зорилго:** `function`, `return`, параметр. **Алгоритм** гэдгийг ойлгох: хайлт, эрэмбэлэх, хурд.

## Явц

| Цаг  | Юу хийх                                                                         |
| ---- | ------------------------------------------------------------------------------- |
| 0:00 | Давтлага: Хичээл 7-ын "Юу хэвлэх вэ?" 3 асуулт                                   |
| 0:10 | **Тоо таах:** эхлээд нэг хүүхэд 1, 2, 3... гэж таана. Дараа нь хагаслах аргаар. Тоолуулна |
| 0:18 | **Хүн-bubble sort:** 5 хүүхэд санамсаргүй тоотой эгнэнэ. Хөрш хоёр л харьцуулж солино |
| 0:25 | `double` жишээ, pythontutor-оор функц руу орж гарах                              |
| 0:40 | Бие даан                                                                          |
| 1:20 | Тэмцээн                                                                           |
| 1:50 | **Code Cup**-ийн багийг зарла (3 хүн, чадвар холимог)                            |

## Тэмцээн

**Раунд 1 — Юу хэвлэх вэ?**

| #   | Код                                                                           | Хариу       |
| --- | ----------------------------------------------------------------------------- | ----------- |
| 1   | `function f(x) { return x + 1 } console.log(f(f(3)))`                         | `5`         |
| 2   | `function f(a, b) { return a * b } console.log(f(2, 5) + f(1, 1))`            | `11`        |
| 3   | `function f(x) { console.log(x) } let r = f(7); console.log(r)`              | `7` дараа нь `undefined` |
| 4   | `function f(n) { if (n > 0) { return "+" } return "-" } console.log(f(-2))`  | `-`         |
| 5   | 1–1000 дотроос тоо таах. Хагаслах аргаар хамгийн муудаа хэдэн удаа?          | `10`        |

**Раунд 2 — Код бич**

1. `sumTo(n)` — 1-ээс n хүртэлх нийлбэр. `sumTo(10)` → `55`
2. `isPalindrome(text)` — урдаас, хойноос уншихад ижил уу? `"level"` → `true`
3. `average(arr)` — дундаж. `[2, 4, 9]` → `5`

## Хариу — bodlogo.html

```js
function triple(n) { return n * 3 }
function isEven(n) { return n % 2 === 0 }
function maxOf(arr) {
  let best = arr[0];
  for (let i = 1; i < arr.length; i++) { if (arr[i] > best) { best = arr[i] } }
  return best;
}
function countLetter(text, letter) {
  let c = 0;
  for (let i = 0; i < text.length; i++) { if (text[i] === letter) { c++ } }
  return c;
}
function reverseText(text) {
  let r = "";
  for (let i = text.length - 1; i >= 0; i--) { r = r + text[i] }
  return r;
}
function findIndex(arr, x) {
  for (let i = 0; i < arr.length; i++) { if (arr[i] === x) { return i } }
  return -1;
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) { let t = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = t }
    }
  }
  return arr;
}
```
