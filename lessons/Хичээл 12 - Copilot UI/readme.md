# Хичээл 12 — Copilot Agent: JS бодлогоо апп болгох

> **Агуулга:** _(төлөвлөсөн)_ VSCode GitHub Copilot **Agent** mode-оор Хичээл 8–11-ээс 4 бодлогоо (бодолттой [js-projects](js-projects), тооцоо нь өөрийн JS) input, товчтой апп болгох, `js-projects` нүүр хуудас, Netlify Drop-оор гаргах, AI Studio portfolio-д "JS Projects" карт гараараа нэмэх.

### Console-д л ажилладаг байсан кодоо **жинхэнэ апп** болгож, интернэтэд гаргаад portfolio-доо нэмнэ.

| #   | Алхам                        | Хугацаа |
| --- | ---------------------------- | ------- |
| 0   | Бэлтгэл                      | 10 мин  |
| 1   | Copilot Agent mode           | 10 мин  |
| 2   | 4 бодлогоо сонго             | 10 мин  |
| 3   | Эхний апп — хамт             | 20 мин  |
| 4   | Үлдсэн 3 апп                 | 30 мин  |
| 5   | Нүүр хуудас                  | 10 мин  |
| 6   | Netlify Drop                 | 10 мин  |
| 7   | Portfolio-д карт             | 15 мин  |

> Алхам бүр дээр **дарж нээнэ**.

---

<details>
<summary><b>0. Бэлтгэл</b></summary>

<br>

1. [js-projects.zip](js-projects.zip)-ийг татаж аваад (**Download raw file**) задал → `js-projects` хавтсыг VSCode-д нээ (**Open Folder**).
2. Дотор нь Хичээл 8–11-ийн **14 бодлого бодолттойгоо** байна. Бүгд `prompt`-оор утга авч, `alert`-оор хариу өгнө.
3. Өөрөө бодсон бол тэр файлын кодыг **өөрийнхөөрөө** соль — апп чинь өөрийн код дээр ажиллана.
4. VSCode → **Extensions** (`Ctrl+Shift+X`) → `GitHub Copilot` суусан уу? Үгүй бол суулгаад GitHub-аар **Sign in** (Хичээл 8-ын төгсгөл).

</details>

---

<details>
<summary><b>1. Copilot Agent mode</b></summary>

<br>

**Chat** нээ: `Ctrl+Alt+I` → доод хэсэгт горимыг **Agent** болго.

| Горим     | Юу хийдэг                                 |
| --------- | ----------------------------------------- |
| **Ask**   | Зөвхөн хариулна, файл өөрчлөхгүй          |
| **Agent** | Файл **үүсгэж, засна** — чи зөвшөөрнө     |

| Товч       | Хэзээ                                     |
| ---------- | ----------------------------------------- |
| **Keep**   | Өөрчлөлт таалагдсан                       |
| **Undo**   | Таалагдаагүй → буцаана                    |

<details>
<summary>Copilot Free хязгаар</summary>

<br>

Үнэгүй хувилбар сард тодорхой тооны хүсэлттэй. Хэмнэх: нэг prompt-д бүх шаардлагаа **тодорхой** бич, "сайжруул" гэх мэт бүдэг хүсэлт бүү явуул.

</details>

</details>

---

<details>
<summary><b>2. 4 бодлогоо сонго</b></summary>

<br>

Хичээл бүрээс **1** бодлого сонго.

| Хичээл | Файл | Апп болоход |
| ------ | ---- | ----------- |
| 8 | [8-ireeduin-nas.js](js-projects/8-ireeduin-nas.js) | 2 он → хэдэн настай |
| 8 | [8-amidarsan-hugatsaa.js](js-projects/8-amidarsan-hugatsaa.js) | Нас → өдөр, цаг, минут |
| 8 | [8-tongorog-too.js](js-projects/8-tongorog-too.js) | `1234` → `4321` |
| 9 | [9-dun.js](js-projects/9-dun.js) | Оноо → A–F, өнгөтэй |
| 9 | [9-nuuts-ug.js](js-projects/9-nuuts-ug.js) | 2 нууц үг → ✔ эсвэл ✘ |
| 9 | [9-zamyn-tsagdaa.js](js-projects/9-zamyn-tsagdaa.js) | Хурд → торгууль |
| 9 | [9-undur-jil.js](js-projects/9-undur-jil.js) | Он → өндөр жил үү |
| 10 | [10-unelgee.js](js-projects/10-unelgee.js) | 1–5 → ⭐ |
| 10 | [10-unii-husnegt.js](js-projects/10-unii-husnegt.js) | Үнэ → 1–10 ширхэгийн хүснэгт |
| 10 | [10-utasny-mungu.js](js-projects/10-utasny-mungu.js) | Сар бүр + хэдэн сар → хуримтлал |
| 10 | [10-chiher-huvaah.js](js-projects/10-chiher-huvaah.js) | Чихэр → хуваах хувилбарууд |
| 10 | [10-shatryn-budaa.js](js-projects/10-shatryn-budaa.js) | Нүд → нийт будаа |
| 11 | [11-rekord.js](js-projects/11-rekord.js) | Оноонууд → рекорд, хамгийн бага |
| 11 | [11-yu-uzeh-ve.js](js-projects/11-yu-uzeh-ve.js) | Товч → санамсаргүй anime |

</details>

---

<details>
<summary><b>3. Эхний апп — хамт</b></summary>

<br>

Chat-д (Agent) доорхыг хуулж, `[ ]`-ийг бөглө:

```text
[ФАЙЛЫН НЭР].js доторх бодлогыг вэб апп болго.
- Шинэ хавтас: [ФАЙЛЫН НЭР]/ дотор index.html, style.css, app.js.
- [ФАЙЛЫН НЭР].js-ийг бүү өөрчил.
- Тооцоог миний кодоос ЯГ хэвээр ав. prompt-ын оронд input, alert/console.log-ын оронд хуудсан дээр харуул.
- Оролт: [юу оруулах]. Товч: "Бодох". Гаралт: [юу харуулах].
- Хоосон эсвэл буруу оролтод улаан анхааруулга.
- Голлуулсан карт, тод өнгө, утсан дээр ч гоё харагдана.
- Дээд буланд "← Бүх апп" линк (../index.html руу).
```

**Шалга:**

| Шалгах                                     | ✔ |
| ------------------------------------------ | - |
| `index.html` браузерт нээгдэнэ             |   |
| Хариу нь `.js` файлын `alert`-тай таарна   |   |
| Хоосон дарахад анхааруулга гарна           |   |

<details>
<summary>Тооцоогоо AI-ийн кодоос ол</summary>

<br>

`app.js`-ийг нээгээд **Ctrl+F** → өөрийн хувьсагчийн нэрийг (`nas`, `irehOn` …) хай. Чиний бичсэн мөр AI-ийн код дотор байна уу?

AI `document`, `querySelector` гэх мэт бичнэ — ойлгох шаардлагагүй. **Тооцоо = чиний JS.**

</details>

<details>
<summary>Алдаа гарвал</summary>

<br>

F12 → Console-ийн улаан алдааг хуулж Chat-д: `Энэ алдааг зас: [алдаа]`

</details>

</details>

---

<details>
<summary><b>4. Үлдсэн 3 апп</b></summary>

<br>

3-р алхмын prompt-ын `[ФАЙЛЫН НЭР]`-ийг сонгосон бодлогоороо соль.

**Нэг удаад нэг апп.** Шалгаад **Keep** дарсны дараа дараагийнхыг хүс.

<details>
<summary>Бүгдийг ижил загвартай болгох</summary>

<br>

```text
Бүх апп-ын style-ийг эхний апп-ынхтай ижил болго (өнгө, фонт, карт). Тооцоог бүү өөрчил.
```

</details>

</details>

---

<details>
<summary><b>5. Нүүр хуудас</b></summary>

<br>

```text
js-projects хавтасны root-д index.html үүсгэ: "Миний JavaScript апп-ууд" гарчиг,
4 апп-ын карт (нэр, 1 өгүүлбэр тайлбар, аль хичээл: if/else, for, массив г.м.).
Карт дарахад тухайн хавтасны index.html нээгдэнэ. Апп-уудын загвартай ижил.
```

Бүтэц ийм болно:

```text
js-projects/
├── index.html        ← нүүр
├── 8-ireeduin-nas/index.html   ← апп
├── 9-dun/index.html
├── ...
└── 8-ireeduin-nas.js …         ← бодлогууд
```

</details>

---

<details>
<summary><b>6. Netlify Drop</b></summary>

<br>

1. [app.netlify.com/drop](https://app.netlify.com/drop) → нэвтэр.
2. `js-projects` хавтсаа **чирж** оруул.
3. **Make public** дар.
4. **Site configuration → Change site name** → `bat-js` гэх мэт.
5. Линкээ утсаараа нээ → 4 апп бүгд ажиллаж байна уу?

> Энэ бол `my-first-web`-ээс **тусдаа** шинэ сайт.

<details>
<summary>Дараа нь өөрчлөх бол</summary>

<br>

Netlify → тухайн сайт → **Deploys** → `js-projects` хавтсаа дахин чирж оруул. Линк өөрчлөгдөхгүй.

</details>

</details>

---

<details>
<summary><b>7. Portfolio-д карт</b></summary>

<br>

AI Studio → portfolio аппаа нээ → **Code** хэсэгт **гараараа** (Хичээл 7, 6-р алхам):

1. **Ctrl+F** → `my-youtube` (эсвэл өмнө нэмсэн бүтээл) гэж хай.
2. Тэр мөрийг `{` … `}` бүтнээр нь хуулж доор нь тавь.
3. Нэр, линкийг соль:

```js
{ title: "JS Projects", link: "https://bat-js.netlify.app" },
```

4. Preview → карт дарахад Netlify сайт нээгдэж байна уу?

<details>
<summary>Хуучин "JavaScript" карт байгаа бол</summary>

<br>

Шинэ мөр нэмэхийн оронд хуучин картын `link`-ийг шинэ Netlify линкээр соль — нэг карт хангалттай.

</details>

</details>

---

<details>
<summary><b>Гэрийн даалгавар</b></summary>

<br>

| #   | Юу хийх | ✔️  |
| --- | ------- | --- |
| 1   | 4 апп-аа гэрийнхэндээ утсаар нь туршуул | ⬜  |
| 2   | 5 дахь апп нэмж Netlify-д дахин чирж оруул | ⬜  |
| 3   | Хичээл 11-ийн Дасгал 6-д **10** anime болтол нэм — Хичээл 13-т тоглоом болно | ⬜  |

</details>
