# Kahoot template

`kahoot-N.md` → Kahoot-д import хийх `.xlsx` + кодын PNG зураг. Нэг командаар.

## Ашиглах

```bash
python3 reference/kahoot/template/build.py reference/kahoot/kahoot-3.md
```

Гарц: `reference/kahoot/out/kahoot-3/` → `kahoot-3.xlsx`, `q01.png` … (зурагтай асуулт бүрд), `cover.png`

| Сонголт | Тайлбар |
| ------- | ------- |
| `--time 60` | Бүх асуултын хугацаа. Default **60**. Зөвхөн 5, 10, 20, 30, 60, 90, 120, 240 |
| `--out ХАВТАС` | Гарцын хавтас (default `reference/kahoot/out`) |
| `--font ФАЙЛ` | Mono фонт олдохгүй бол |

Сан: `pip install openpyxl pillow pygments`

## Kahoot-д оруулах

1. create.kahoot.it → **Create** → **Add** → **Import** → **Import spreadsheet** → `.xlsx` сонгох → Upload → Add questions
2. Кодтой асуулт бүрд `qNN.png`-г **Upload file**-оор оруул (Q-ийн дугаар = зургийн дугаар)
3. Settings: нэр, **Cover image → Change → `cover.png`** (Kahoot өөрөө AI cover тавьдаг), **Private** (Kahoot анхнаасаа Public тавьдаг) → Done → Save
4. Хугацаа өөрчлөх: асуулт → Time limit → **Apply to all questions**

## `kahoot-N.md` формат (script үүнийг уншина)

````
<details>
<summary><b>1. Гарчиг</b> · 60 сек</summary>

```html  (код блок, заавал биш — зураг болно)
...
```

**Асуулт?**

| # | Хариулт | |
| - | ------- | - |
| 1 | хариулт | |
| 2 | зөв хариулт | ✅ |
````

Зөв хариу (✅) асуулт бүрд яг 1. Хариулт 2–4.

## Хуудасны зураг — ` ```preview `

"Зургаас кодыг сонгох" асуултад: код блокийн хэлийг `preview` гэж бич → HTML нь headless **Chrome**-оор 1600×900 screenshot болно (код харагдахгүй, зөвхөн үр дүн).

````
```preview
<style>.parent { display: flex; justify-content: center; }</style>
<div class="parent">
  <div class="box">1</div><div class="box">2</div><div class="box">3</div>
</div>
```
````

Бэлэн style (`PREVIEW_CSS`): `.parent` — тасархай нил хүрээтэй хүрээлж буй хайрцаг (1100×560), `.box` — 140px өнгөтэй хайрцаг (1, 2, 3 … өнгө автомат). Өөр зүйлд `<style>` дотор бич.

## Блок схем — ` ```flow `

Мөр бүр: `дүрс текст`. Зураг дээр зөвхөн дүрс, текст харагдана (`start`, `op` гэх үг харагдахгүй). Өнгө нь хичээлийн SVG-тэй ижил.

| Дүрс | Утга |
| ---- | ---- |
| `start` / `end` | Эхлэл / Төгсгөл — зууван |
| `io` | Оролт / Гаралт — налуу |
| `op` | Үйлдэл — тэгш өнцөгт |
| `dec` | Нөхцөл (асуулт) — ромбо |
| `\| io A \| io B` | `dec`-ийн дараах мөр: зүүн = Тийм, баруун = Үгүй салаа, дараагийн дүрс дээр нийлнэ |
| `op!`, `io!`, `dec!` | Шараар тодотгоно ("?" бөглөх дүрс) |

````
```flow
start Эхлэл
op nas = 20
dec nas < 16 ?
| io Болохгүй | io Болно
end Төгсгөл
```
````

````
```flow
start Эхлэл
op x = 5
op! ?
io x гаргах
end Төгсгөл
```
````

## Cover — ` ```cover `

Эхний асуултын өмнө. 4 мөр: шошго, гарчиг, дэд гарчиг, JS кодын мөр → `cover.png` (Monokai, баруун талд жижиг блок схем).

````
```cover
Хичээл 8
JavaScript
Хувьсагч · Тооцоо · Блок схем
console.log("Сайн уу!");
```
````

## Кодын зургийн style

| | |
| --- | --- |
| Хэмжээ | 1600 × 900 (16:9) |
| Дэвсгэр | `#272822`, зураг бүхлээрээ ижил өнгө (хүрээгүй) |
| Өнгө | Monokai (pygments), `Error` токен ердийн цагаан |
| Фонт | Mono (Menlo / Consolas / DejaVu Sans Mono), 56px-ээс эхэлж багтаж дуустал жижигрүүлнэ, доод хязгаар 24px |
| Байрлал | Голд, мөрийн өндөр 1.45, захаас 120px |

Style-г өөрчлөх бол `build.py`-ийн дээд талын `STYLE` хэсэг.

## Анхаарах алдаа (дахин гаргахгүй)

| Алдаа | Шалтгаан / засвар |
| ----- | ----------------- |
| Import: "unsupported character" | Асуулт дотор `<style>` гэх мэт `<` `>` байсан. Script `<style>` → `style таг` болгоно |
| Backtick `` ` `` харагдана | Kahoot markdown харуулдаггүй. Script арилгана |
| Хугацаа зөрнө | Хугацааг `.md` гарчиг биш, `--time` тодорхойлно (xlsx-д бичигдэнэ) |
| Kahoot Public болсон | Settings дээр Private болго |
| Асуулт >120, хариулт >75 тэмдэгт | Script import хийхээс өмнө алдаа өгнө |
| Кодгүй асуулт (жишээ нь товчлол) | Зураг үүсэхгүй, зүгээр |
| Cover-ыг Kahoot AI сонгосон | `cover.png`-г Settings → Cover image-д заавал upload хий |
| Kahoot дээр асуултын текст бүгд ижил ("Юу гарах вэ?") | Асуулт бүрийн текстийг тухайн кодод тохируулж өөр, тодорхой бич |
| Импортын дараа хоосон эхний асуулт үлдэнэ | Устга |
| Асуулт/хариултад `>=`, `<` (жиших үйлдэл) | Script алдаа өгнө. Үгээр бич ("12 ба түүнээс дээш") эсвэл кодыг зураг (код блок) руу шилжүүл |
| `No module named 'pygments'` | `python3 -m pip install --user --break-system-packages pygments` |
| Кодын зурагт emoji (⭐) дөрвөлжин □ болно | Mono фонт emoji дэмждэггүй. Код блокт emoji бүү тавь — `*` г.м. энгийн тэмдэг ашигла (₮ болно) |
