// Хичээл 9 · Бонус — Өндөр жил

let on = Number(prompt("Он?"));

if ((on % 4 === 0 && on % 100 !== 0) || on % 400 === 0) {
  alert(on + " — өндөр жил");
} else {
  alert(on + " — энгийн");
}
