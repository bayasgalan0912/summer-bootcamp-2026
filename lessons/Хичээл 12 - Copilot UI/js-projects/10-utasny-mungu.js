// Хичээл 10 · Дасгал 9 — Утасны мөнгө

let sarBur = Number(prompt("Сар бүр хэдэн төгрөг хадгалах вэ?"));
let sar = Number(prompt("Хэдэн сар?"));

let mungu = 0;
let t = "";

for (let i = 1; i <= sar; i++) {
  mungu = mungu + sarBur;
  t = t + i + "-р сар: " + mungu + "₮\n";
}

alert(t);
