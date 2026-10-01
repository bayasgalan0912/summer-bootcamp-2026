# Kahoot template

`kahoot-N.md` → Kahoot-д import хийх `.xlsx` + кодын PNG зураг. Нэг командаар.

## Ашиглах

```bash
python3 kahoot/template/build.py kahoot/kahoot-3.md
```

Гарц: `kahoot/out/kahoot-3/` → `kahoot-3.xlsx`, `q01.png` … (кодтой асуулт бүрд)

| Сонголт | Тайлбар |
| ------- | ------- |
| `--time 60` | Бүх асуултын хугацаа. Default **60**. Зөвхөн 5, 10, 20, 30, 60, 90, 120, 240 |
| `--out ХАВТАС` | Гарцын хавтас (default `kahoot/out`) |
| `--font ФАЙЛ` | Mono фонт олдохгүй бол |

Сан: `pip install openpyxl pillow pygments`

## Kahoot-д оруулах

1. create.kahoot.it → **Create** → **Add** → **Import** → **Import spreadsheet** → `.xlsx` сонгох → Upload → Add questions
2. Кодтой асуулт бүрд `qNN.png`-г **Upload file**-оор оруул (Q-ийн дугаар = зургийн дугаар)
3. Settings: нэр, **Private** (Kahoot анхнаасаа Public тавьдаг) → Done → Save
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
