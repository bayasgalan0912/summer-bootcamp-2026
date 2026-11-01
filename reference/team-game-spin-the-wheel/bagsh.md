# Хүрд эргүүлэх — Багшид

**Бэлтгэл:** Хүрдэн дээрх шагнал (тоо хязгаартай), онооны самбар (баг × оноо).

**Шалгах:** Код ажиллуулж үзүүлнэ → багийн **аль нэгнээс нь** (багш сонгоно) тайлбарлуулна.

**Хамгийн их оноо:** Анхан 4 + Дунд 8 + Ахисан 6 = **18 оноо = 6 хүрд**. Хүрд хэт олон бол "4 оноо = 1 хүрд" болго.

<details>
<summary><b>Шийдлүүд (node-оор шалгасан)</b></summary>

```js
// 1
let on = Number(prompt("Төрсөн он?"));
alert(2026 - on);

// 2
let n2 = Number(prompt("Тоо?"));
if (n2 % 2 === 0) {
  alert("Тэгш");
} else {
  alert("Сондгой");
}

// 3
let nom = Number(prompt("Хэдэн ном?"));
let uzeg = Number(prompt("Хэдэн үзэг?"));
alert(nom * 23000 + uzeg * 1850);

// 4
let n4 = Number(prompt("Тоо?"));
let t4 = "";
for (let i = 1; i <= 10; i++) {
  t4 = t4 + n4 + " x " + i + " = " + n4 * i + "\n";
}
alert(t4);

// 5
let jil = Number(prompt("Хэдэн жил?"));
alert(jil * 52 * 15);

// 6
let tsag = Number(prompt("Хэдэн цаг?"));
if (tsag < 300) {
  alert("A0");
} else if (tsag < 600) {
  alert("A1");
} else if (tsag < 900) {
  alert("A2");
} else if (tsag < 1200) {
  alert("B1");
} else if (tsag < 1500) {
  alert("B2");
} else if (tsag < 1800) {
  alert("C1");
} else {
  alert("Төгс");
}

// 7
let n7 = Number(prompt("n = ?"));
let t7 = "";
for (let i = 1; i <= n7; i++) {
  if (i % 5 !== 0) {
    t7 = t7 + i + " ";
  }
}
alert(t7);

// 8
let n8 = Number(prompt("Тоо?"));
if (n8 % 3 === 0 && n8 % 11 === 0) {
  alert("33-д хуваагдана");
} else {
  alert("33-д хуваагдахгүй");
}

// 9
let n9 = Number(prompt("3 оронтой тоо?"));
let a = Math.floor(n9 / 100);
let b = Math.floor(n9 / 10) % 10;
let c = n9 % 10;
alert(a * b * c);

// 10
const dugaar = "99112233";
const nuutsUg = "nuuts123";
let d = prompt("Утасны дугаар?");
let p = prompt("Нууц үг?");
if (d === dugaar && p === nuutsUg) {
  alert("Амжилттай нэвтэрлээ");
} else if (d === dugaar) {
  alert("Нууц үгээ дахин оруулна уу");
} else if (p === nuutsUg) {
  alert("Утасны дугаараа шалгана уу");
} else {
  alert("Ийм бүртгэл байхгүй байна");
}
```

</details>

<details>
<summary><b>Эх хувилбараас өөрчилсөн</b></summary>

| Эх | Өөрчлөлт |
| -- | -------- |
| 1. Олон оронтой тооны цифр | **3 оронтой** болгосон (`while` заагаагүй) → №9 |
| 2. "33-ын бүх хуваагчид" | "3 ба 11-д" гэж тодорхой, `&&` → №8 |
| 3. Дүн (ойлгомжгүй) | Хэдэн ном, хэдэн үзэг асуух → №3 |
| 4. Англи хэл | 1 жил = 52 долоо хоног гэж заасан → №5 |
| 5. Нөгцөл | **Нөхцөл**, хил давхцахгүй (0–299 …) → №6 |
| 6. 5-ыг алгас | Жишээ засав (9 дутуу байсан) → №7 |
| 7. Массив `splice` | **Хассан** (массив заагаагүй) |
| 8. Facebook | Зөв утгыг `const`-оор кодонд, 2 `prompt` → №10 |
| — | Анхан шинэ: №1 нас, №2 тэгш/сондгой, №4 үржүүлэх хүснэгт |
| `console.log` | `alert` (Хичээл 10-тай ижил) |

</details>
