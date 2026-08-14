<!-- Kahoot: kahoot-lesson8-davtlaga.xlsx файлыг create.kahoot.it → Create → Import spreadsheet-ээр оруулаад линкийг доор солино -->
<!-- Слайд: Google Slides болгосны дараа линкийг доор солино -->

- 👉 **[Kahoot — Firestore, Leaderboard давтлага](https://play.kahoot.it)**
- 👉 **[Слайд](slides.pptx)**

# Хичээл 8 — ⌨️ Өөрийн Typeracer тоглоом + 🏆 Live Leaderboard

> 🎯 Өчигдөр typer.io дээр уралдсан. Өнөөдөр **ӨӨРИЙН** typeracer-ээ хийж, түүн дээрээ уралдана! ⚡

> 👯 Хосоороо: жолооч ⌨️ + навигатор 👀 · 15 мин тутам соль

---

## 📋 Өнөөдрийн даалгавар

<details open>
<summary>1️⃣ <b>Typeracer UI бүтээх</b> ⏱ 25 мин</summary>

AI Studio → **шинэ app** → промпт:

```text
Надад Typeracer тоглоом хийж өгөөч.
- Дэлгэцэнд өгүүлбэр гарна, доор нь input талбарт бичнэ
- Зөв үсэг ногоон, алдаатай нь улаан
- Бичих тусам [машин / пуужин / морь 🐎] урагшилна
- Дуусахад WPM + алдааны тоо гарна
- "Дахин тоглох" товчтой
```

✅ Бичээд дуусахад **WPM** гарч байна

</details>

<details>
<summary>2️⃣ <b>Firestore leaderboard холбох</b> ⏱ 20 мин</summary>

Хичээл 7-той яг адилхан:

```text
Тоглоом дуусахад нэр + WPM-ийг Firestore-ийн "typeracer_scores"
collection-д хадгалаач. ТОП 10 Leaderboard хуудас нэм.
```

✅ Нэр чинь **Leaderboard** дээр гарч байна

> 🔧 Ажиллахгүй бол → Console-ийн алдааг хуулж AI-д өг

</details>

<details>
<summary>3️⃣ <b>Өөрийн Танилцуулга (Portfolio) сайт-д шинэ tab нэмэх</b> ⏱ 15 мин</summary>

1. Typeracer-ээ **Publish** → Vercel линк ав
2. Portfolio app-аа нээгээд:

```text
Портфолиод минь "⌨️ Typeracer" tab нэмээч.
Дарахад [Vercel линк] шинэ цонхонд нээгдэнэ.
```

✅ Portfolio → Typeracer нээгдэж байна

</details>

<details>
<summary>4️⃣ <b>🏁 ТЭМЦЭЭН — Хэн хамгийн хурдан бэ?</b> ⏱ 15 мин</summary>

1. Бүгд **нэг тоглоом** дээр орно (багш линк өгнө)
2. Хүн бүр 1 удаа → оноо шууд Leaderboard-д!
3. 🥇🥈🥉 ТОП 3 → ✨ оноо

</details>

<details>
<summary>🚀 <b>Stretch — Multiplayer LIVE уралдаан</b></summary>

```text
Multiplayer горим нэмээч. Нэг тоглогч "өрөө" үүсгэж код авна,
нөгөө нь кодоор орно. Бие биенийхээ явцыг Firestore-оор
real-time харна.
```

> ⚠️ Хэцүү! Болохгүй байсан ч зүгээр — solo чинь аль хэдийн супер 💪

</details>

---

## 🏠 Гэрийн даалгавар

- 🎮 Typeracer-ээ гэрийнхэнтэйгээ уралдаж үзүүл
- 🐎 Дүр/theme-ээ өөрчилж тохируул (Наадам style?)
- 💡 Дараагийн хичээл: **ӨӨРИЙН тоглоомоо** зохионо — ямар тоглоом хиймээр байгаагаа бодоод ир!
