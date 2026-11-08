// Хичээл 10 · Дасгал 10 — Чихэр хуваах

let chiher = Number(prompt("Хэдэн чихэр байна?"));
let t = "";
let huvaagch = 0;

for (let i = 1; i <= chiher; i++) {
  if (chiher % i === 0) {
    t = t + i + " хүнд " + chiher / i + " ширхэг\n";
    huvaagch = huvaagch + 1;
  }
}

if (huvaagch === 2) {
  t = t + "Анхны тоо";
}

alert(t);
