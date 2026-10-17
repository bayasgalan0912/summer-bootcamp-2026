// helper.js — карт бүрийг өөрийн функцтэй холбоно. Энэ файлыг ЗАСАХГҮЙ.
//
// Карт:  <div class="kart" data-fn="funktsiinNer" data-test='[[[оролт...], хариу], ...]'>
//          <input type="number"> ... <button>Ажиллуулах</button>
//          <p class="hariu"></p>  <p class="tailbar"></p>  <span class="tuluv"></span>
//        </div>
// Хуудсанд <p id="dun"></p> байвал "5 / 8 ✅" гэж бичнэ.

(function () {
  let kodAldaa = null;
  window.addEventListener("error", function (e) {
    kodAldaa = e.message + " — мөр " + e.lineno;
  });

  function utga(input) {
    let v = input.value.trim();
    if (input.dataset.type === "list") {
      return v === "" ? [] : v.split(",").map(function (x) { return Number(x.trim()); });
    }
    if (input.type === "number") return v === "" ? NaN : Number(v);
    return v;
  }

  function haruulah(x) {
    if (Array.isArray(x)) return x.join(", ");
    if (x === "") return "(хоосон)";
    return String(x);
  }

  function adil(a, b) {
    if (typeof a === "number" && typeof b === "number") return Math.abs(a - b) < 1e-9;
    if (typeof a === "string" && typeof b === "string") return a.trim() === b.trim();
    return JSON.stringify(a) === JSON.stringify(b);
  }

  function funktsAvah(ner) {
    let fn = window[ner];
    if (typeof fn !== "function" && kodAldaa) throw new Error("Кодонд алдаа байна (дээрх улаан мөрийг хар)");
    if (typeof fn !== "function") throw new Error("`" + ner + "` функц олдсонгүй — нэрийг нь өөрчилсөн үү?");
    return fn;
  }

  function ajilluulah(ner, args) {
    let hariu = funktsAvah(ner).apply(null, args);
    if (hariu === undefined) throw new Error("Хариу ирсэнгүй — `return` бичсэн үү?");
    return hariu;
  }

  function shalgah(kart) {
    let testuud = JSON.parse(kart.dataset.test || "[]");
    let tailbar = kart.querySelector(".tailbar");
    let tuluv = kart.querySelector(".tuluv");
    let zov = true;
    let medee = "";

    for (let i = 0; i < testuud.length; i++) {
      let args = testuud[i][0];
      let hulee = testuud[i][1];
      try {
        let gar = ajilluulah(kart.dataset.fn, args.slice());
        if (!adil(gar, hulee)) {
          zov = false;
          medee = "Оролт: " + args.map(haruulah).join(" · ") +
            "\nХүлээж буй: " + haruulah(hulee) + "\nЧиний: " + haruulah(gar);
          break;
        }
      } catch (e) {
        zov = false;
        medee = e.message;
        break;
      }
    }

    kart.classList.toggle("zov", zov);
    kart.classList.toggle("buruu", !zov);
    if (tuluv) tuluv.textContent = zov ? "✅" : "❌";
    if (tailbar) tailbar.textContent = zov ? "" : medee;
    return zov;
  }

  function bugdShalgah() {
    let kartuud = document.querySelectorAll(".kart[data-fn]");
    let too = 0;
    kartuud.forEach(function (k) { if (shalgah(k)) too++; });
    let dun = document.getElementById("dun");
    if (dun) dun.textContent = too + " / " + kartuud.length + " ✅";
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (kodAldaa) {
      let anhaar = document.createElement("p");
      anhaar.style.cssText = "background:#fdecea;color:#c0392b;border:2px solid #c0392b;border-radius:8px;padding:12px;font-weight:bold;";
      anhaar.textContent = "⚠️ Кодонд алдаа: " + kodAldaa + ". Хаалт { } ( ), хашилт \" \" дутуу эсэхийг шалга. Засахгүй бол бүх карт ажиллахгүй.";
      document.body.prepend(anhaar);
    }
    document.querySelectorAll(".kart[data-fn]").forEach(function (kart) {
      let tovch = kart.querySelector("button");
      let hariuP = kart.querySelector(".hariu");
      if (!tovch) return;
      tovch.addEventListener("click", function () {
        let args = Array.from(kart.querySelectorAll("input")).map(utga);
        if (args.some(function (a) { return a === "" || Number.isNaN(a); })) {
          hariuP.textContent = "Утгаа оруул";
          return;
        }
        try {
          hariuP.textContent = haruulah(ajilluulah(kart.dataset.fn, args));
        } catch (e) {
          hariuP.textContent = e.message;
        }
      });
    });
    bugdShalgah();
  });
})();
