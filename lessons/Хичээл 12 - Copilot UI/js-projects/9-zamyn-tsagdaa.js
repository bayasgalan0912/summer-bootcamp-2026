// Хичээл 9 · Дасгал 8 — Замын цагдаа

let speed = Number(prompt("Хурд (км/ц)?"));

if (speed <= 80) {
  alert("Хурд хэвийн");
} else {
  let onoo = Math.floor((speed - 80) / 5);
  if (onoo >= 5) {
    alert(onoo + " оноо алдсан. Эрх хасагдсан");
  } else {
    alert(onoo + " оноо алдсан. Эрх хасагдаагүй");
  }
}
