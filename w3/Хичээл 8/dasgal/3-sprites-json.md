← **[Хичээл 8 руу буцах](../readme.md)**

# Алхам 3 — sprites.json v2 · ~15 мин

> **Зорилго:** Sheet-үүдээ GitHub-д тавьж, анимаци бүрийн **frame тоо, хурд, давталтыг** JSON-д бичих.

Хичээл 7-д JSON-д зөвхөн **хаяг** байсан. Одоо түүн дээр **анимацийн дүрэм** нэмнэ. Ингэснээр хурдаа өөрчлөхөд код хөндөхгүй — зөвхөн тоог засна.

---

<details open>
<summary><b>3.1 — GitHub-д upload + raw хаяг</b> · ~5 мин</summary>

Хичээл 7-ынхтой ижил:

```
АЛХАМ 1  github.com → portfolio repo-гоо нээ
АЛХАМ 2  Add file ▾ → Upload files
АЛХАМ 3  бүх sheet-ээ зэрэг чирж хая → Commit changes
АЛХАМ 4  файлын нэр дээр дар → "Raw" товч → хаягийг хуулж ав
```

Зөв хаяг: `https://raw.githubusercontent.com/.../p1-kick.png`

> **Хуучин файлуудаа устгах хэрэггүй.** `p1-kick-1.png` гэх тусдаа frame-үүд тэндээ байг — sheet эвдэрвэл буцаж харах хэрэгтэй болно.

</details>

---

<details>
<summary><b>3.2 — Шинэ бүтэц</b> · ~6 мин · гол дасгал</summary>

Анимаци бүр 5 зүйлийг мэдэх ёстой:

| Талбар | Утга | Жишээ |
| --- | --- | --- |
| `sheet` | Sprite sheet-ийн raw хаяг | `"https://raw..."` |
| `frames` | Хэдэн frame байгаа | `3` |
| `fps` | Секундэд хэдэн frame солих | `12` |
| `loop` | Дуустал нь давтагдах уу | `true` / `false` |
| `hold` | Товч дарж байхад аль frame зогсох вэ (0-оос тоолно) | `1` |

**`hold` гэж юу вэ?** Block дарж байхад анимаци дуусаад idle руу буцвал хамгаалалт алга болно. `"hold": 1` гэвэл 2 дахь frame дээр **зогсож**, товч тавихад л гарна.

```json
{
  "cell": { "w": 256, "h": 192 },
  "arena": "[ARENA ХАЯГ]",
  "p1": {
    "name": "[ДҮРИЙН НЭР]",
    "anim": {
      "idle":   { "sheet": "[IDLE ХАЯГ]",   "frames": 2, "fps": 7,  "loop": true },
      "walk":   { "sheet": "[WALK ХАЯГ]",   "frames": 2, "fps": 8,  "loop": true },
      "punch":  { "sheet": "[PUNCH ХАЯГ]",  "frames": 1, "fps": 10, "loop": false },
      "kick":   { "sheet": "[KICK ХАЯГ]",   "frames": 3, "fps": 12, "loop": false },
      "block":  { "sheet": "[BLOCK ХАЯГ]",  "frames": 2, "fps": 12, "loop": false, "hold": 1 },
      "hit":    { "sheet": "[HIT ХАЯГ]",    "frames": 1, "fps": 6,  "loop": false },
      "crouch": { "sheet": "[CROUCH ХАЯГ]", "frames": 2, "fps": 14, "loop": false, "hold": 1 },
      "jump":   { "sheet": "[JUMP ХАЯГ]",   "frames": 3, "fps": 12, "loop": false, "hold": 1 }
    }
  }
}
```

> **crouch, jump хийгээгүй бол** тэр 2 мөрийг **бүрэн ав** (хагас үлдээвэл JSON эвдэрнэ). `walk` ч мөн адил.

### fps-ийн санал

| Анимаци | fps | Мэдрэмж |
| --- | --- | --- |
| idle | 6–8 | Тайван амьсгал |
| walk | 8–10 | Жигд алхаа |
| punch / kick | 12–15 | Хурц, хурдан |
| block / crouch | 12–14 | Шуурхай орно |
| hit | 5–6 | Удаан — цохилт "мэдрэгдэнэ" |

> **fps → ms хөрвүүлэлт:** `1000 ÷ fps`. 12 fps = 83ms тутам. Хичээл 7-ын 150ms бол ойролцоогоор 7 fps.

</details>

---

<details>
<summary><b>3.3 — Шалгах</b> · ~4 мин</summary>

**1. JSONLint** — [jsonlint.com](https://jsonlint.com) дээр Valid болтол зас. Түгээмэл алдаа: сүүлийн мөрний илүү таслал.

**2. Хаяг бүрийг шинэ tab-д турш** — зөвхөн sprite sheet зураг гарч ирэх ёстой.

**3. Тооны шалгалт** — sheet бүрийн өргөн `frames × 256`-тай таарч байна уу?

| Sheet | Өргөн | JSON `frames` | Зөв үү |
| --- | --- | --- | --- |
| p1-kick.png | 768 | 3 | 768 = 3×256 ✅ |
| p1-block.png | 512 | 2 | 512 = 2×256 ✅ |
| p1-punch.png | 512 | 1 | 512 ≠ 1×256 ❌ → `frames` нь 2 байх ёстой |

> Энэ гурван шалгалтыг **одоо** хий. Алхам 4-т тоглоом ажиллахгүй бол 90% нь эндээс гарна.

### Алхам 3-ийн checkpoint

- [ ] Бүх sheet GitHub-д, raw хаяг ажиллаж байна
- [ ] `sprites.json` JSONLint дээр Valid
- [ ] `cell` = 256×192, `frames` тоо sheet-ийн өргөнтэй таарна
- [ ] `block` дээр `hold` бий

</details>

---

**Дараагийн алхам:** <a href="4-toluviin-mashin.md" target="_blank">Алхам 4 — Төлөвийн машин</a>
