# Хичээл 4 — Багшид

**Зорилго:** 3-р хичээлд flex-ийг ойлгоогүй хүүхдүүд **биеэрээ мэдэрч**, 3 хайрцгаар харж, тоглоомоор дасгалжуулж, эцэст нь жинхэнэ хуудсан дээр хэрэглэнэ.

**Гол санаа (дахин дахин хэл):** "flex-ийг **эцэгт** бичнэ", "**→** justify, **↓** align".

## Явц

| Цаг  | Юу хийх                                                                  |
| ---- | ------------------------------------------------------------------------ |
| 0:00 | Гэрийн даалгавар — 2–3 хүүхэд хуудсаа үзүүлнэ                           |
| 0:10 | **Хүний Flexbox** тоглоом (доор)                                         |
| 0:25 | `hairtsag.html` — проектор дээр мөр мөрөөр нэмж, хүүхдүүд дагаж бичнэ (readme 1–4) |
| 0:40 | `togloom.html` — 1–3-р түвшнийг хамт, дэлгэц дээр                       |
| 0:45 | Бие даан 4–14. Түрүүлсэн 3 хүүхэд бусдад туслана                         |
| 1:10 | Завсарлага                                                               |
| 1:20 | `tusul.html` — №1-ийг хамт, 2–5-ыг бие даан                             |
| 1:45 | Хурдан тэмцээн (доор)                                                    |
| 1:55 | Гэрийн даалгавар: `youtube.html`-ийг нээж, №1-ийг хамт хий               |

## Хүний Flexbox (15 мин)

5 хүүхэд урд гарч **хүүхэд хайрцаг** болно. Багш = **эцэг хайрцаг** (самбарын өмнөх талбай = хашаа). Багш CSS-ээ **чангаар уншиж** самбарт бичнэ → хүүхдүүд гүйж байраа эзэлнэ. Бусад нь "зөв/буруу" гэж хашгирна.

| #   | Багш хэлэх                                           | Хүүхдүүд                          |
| --- | ---------------------------------------------------- | --------------------------------- |
| 1   | (flex-гүй)                                           | Нэг нэгнийхээ ард цуваа           |
| 2   | `display: flex`                                      | Хажуу хажууд, зүүн захад          |
| 3   | `justify-content: center`                            | Голд                              |
| 4   | `justify-content: space-between`                     | Хоёр нь хоёр ханан дээр, бусад тэнцүү |
| 5   | `gap: 1 алхам`                                       | Хоорондоо 1 алхам                 |
| 6   | `align-items: flex-end`                              | Бүгд арын хана руу                |
| 7   | `flex-direction: column`                             | Цуваа болно                       |
| 8   | `flex-direction: column` + `justify-content: center` | **Урд/хойш** голд (хажуу биш!)    |

> №8 дээр зогсоож асуу: "Яагаад хажуу тийш биш вэ?" → column үед сум эргэдэг.

Хувилбар: хүүхэд **багш** болж тушаал өгнө, бусад нь байрлана.

## Түгээмэл алдаа

| Алдаа                                    | Засвар                                      |
| ---------------------------------------- | ------------------------------------------- |
| `display: flex`-ийг хүүхдэд (`.nav a`) бичих | Эцэгт (`.nav`) бич                       |
| `align-items` ажиллахгүй                 | Эцэгт **өндөр** алга → `height` өг          |
| `justify-content: centre`, `space-beetwen` | Үсэг шалга (тоглоом улаанаар заана)       |
| `;` мартах                               | Дараагийн мөр ажиллахгүй                    |
| column үед `justify-content: center` → хажуу тийш хүлээх | Сум эргэсэн — `align-items`   |

## Хурдан тэмцээн

Самбарт зураг зур (хайрцаг + дугуйнууд). Баг бүр цаасан дээр CSS бичнэ. Зөв бол 1 оноо, түрүүлсэн 2 оноо.

| #   | Зураг                                  | Хариу                                                         |
| --- | -------------------------------------- | ------------------------------------------------------------- |
| 1   | 3 дугуй баруун дээд буланд             | `justify-content: flex-end`                                   |
| 2   | 1 дугуй яг голд                        | `justify-content: center; align-items: center`                |
| 3   | 3 дугуй доод мөрөнд, тэнцүү тарсан     | `justify-content: space-between; align-items: flex-end`       |
| 4   | 3 дугуй босоо цуваа, хэвтээ голд       | `flex-direction: column; align-items: center`                 |
| 5   | 3 дугуй зүүн доод буланд, босоо цуваа  | `flex-direction: column; justify-content: flex-end`           |

## Хариу — togloom.html

| #   | Хариу                                                                  |
| --- | ---------------------------------------------------------------------- |
| 1   | `display: flex;`                                                       |
| 2   | `justify-content: center;`                                             |
| 3   | `justify-content: flex-end;`                                           |
| 4   | `justify-content: space-between;`                                      |
| 5   | `justify-content: space-around;`                                       |
| 6   | `gap: 40px;`                                                           |
| 7   | `align-items: center;`                                                 |
| 8   | `align-items: flex-end;`                                               |
| 9   | `justify-content: center;` `align-items: center;`                      |
| 10  | `flex-direction: column;`                                              |
| 11  | `align-items: center;`                                                 |
| 12  | `flex-wrap: wrap;`                                                     |
| 13  | `justify-content: space-between;` `align-items: center;`               |
| 14  | `flex-direction: column;` `justify-content: flex-end;` `align-items: flex-end;` |

Явц хүүхдийн браузерт хадгалагдана (дугаар ногоон болно).

## Хариу — tusul.html

```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav {
  display: flex;
  gap: 15px;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## Хариу — youtube.html (гэрийн даалгавар)

```css
.header  { display: flex; justify-content: space-between; align-items: center; }
.search  { display: flex; }
.icons   { display: flex; gap: 15px; }
.page    { display: flex; }
.sidebar { display: flex; flex-direction: column; gap: 20px; }
.chips   { display: flex; gap: 10px; }
.videos  { display: flex; gap: 20px; flex-wrap: wrap; }
.thumb   { display: flex; justify-content: center; align-items: center; }
.info    { display: flex; gap: 10px; }
```
