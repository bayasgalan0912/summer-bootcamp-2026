// Хичээл 8 · Code Battle 6 — Тонгорогсон тоо (4 оронтой)

let too = Number(prompt("4 оронтой тоо?"));

let a = too % 10;                      // 4-р орон
let b = Math.floor(too / 10) % 10;     // 3-р орон
let c = Math.floor(too / 100) % 10;    // 2-р орон
let d = Math.floor(too / 1000);        // 1-р орон

let urvuu = a * 1000 + b * 100 + c * 10 + d;

alert(too + " → " + urvuu);
