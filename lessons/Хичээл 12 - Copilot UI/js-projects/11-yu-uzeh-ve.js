// Хичээл 11 · Бонус — Өнөөдөр юу үзэх вэ?

let anime = ["Naruto", "One Piece", "Dragon Ball", "Attack on Titan", "Demon Slayer"];
let emoji = ["🍥🦊🍜", "🏴‍☠️👒🍖", "🐉🟠⭐", "🧱👊⚔️", "👹🗡️🌸"];
let angi = [220, 1150, 153, 89, 63];

let r = Math.floor(Math.random() * anime.length);

alert("Өнөөдөр: " + emoji[r] + " " + anime[r] + " (" + angi[r] + " анги)");
