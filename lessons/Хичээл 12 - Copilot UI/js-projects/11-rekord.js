// Хичээл 11 · Дасгал 5 — Рекорд

let record = [1200, 3400, 900, 5100, 2800];

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

alert("Рекорд: " + max + "\nХамгийн бага: " + min);
