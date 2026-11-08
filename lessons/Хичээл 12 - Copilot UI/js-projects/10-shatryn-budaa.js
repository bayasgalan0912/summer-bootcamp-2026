// Хичээл 10 · Бонус — Шатрын будаа

let nud = Number(prompt("Хэдэн нүд?"));
let budaa = 1;
let niitBudaa = 0;

for (let i = 1; i <= nud; i++) {
  niitBudaa = niitBudaa + budaa;
  budaa = budaa * 2;
}

alert(niitBudaa + " будаа");
