// Хичээл 10 · Дасгал 7 — Үнийн хүснэгт

let une = Number(prompt("Нэг ширхэгийн үнэ?"));
let t = "";

for (let i = 1; i <= 10; i++) {
  t = t + i + " ширхэг: " + i * une + "₮\n";
}

alert(t);
