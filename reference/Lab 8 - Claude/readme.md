# Lab 8 — Claude: Автоматжуулалтаас AI Экосистем хүртэл

Энэ лаб нь Claude-ийг зөвхөн чатлах хэрэгсэл биш, харин таны өмнөөс ажилладаг
**дижитал ажилтан** болгон ашиглахыг зорино. Гурван online session-ээс бүрдэнэ:
**Cowork** (локаль агент, автоматжуулалт), **Design** (визуал бүтээл),
**Code** (кодын агент).

- [Creative introduction video](https://www.instagram.com/p/DZT9BgyN0Ej/)

---

## Сессүүд

| #   | Session           | Агуулга                                                                       | Материал                                        |
| --- | ----------------- | ----------------------------------------------------------------------------- | ----------------------------------------------- |
| 1   | **Claude Cowork** | Projects, Connectors, Skills, Memory, PRD-first, Scheduled tasks, Dispatch    | [claude-cowork.md](./1-cowork/claude-cowork.md) |
| 2   | **Claude Design** | Artifacts, DESIGN.md дизайн систем, брэнд дизайн (Alternative: Google Stitch) | [claude-design.md](./2-design/claude-design.md) |
| 3   | **Claude Code**   | CLAUDE.md, Context Window, Plan Mode, MCP, Subagents                          | [claude-code.md](./3-code/claude-code.md)       |

Session бүрийн файлд: дэлгэрэнгүй тайлбар, слайд, бодит хэрэгцээт дасгалуудын
**алхам алхмаар заавар** болон жишээ prompt-ууд багтсан.

---

## Файлын бүтэц

```
Lab 8 - Claude/
├── readme.md
├── 1-cowork/
│   ├── claude-cowork.md          # Session 1 үндсэн материал
│   ├── claude-cowork-skill.md    # Skill үүсгэх заавар + дасгал
│   ├── images/                   # Connectors, memory, dispatch скриншотууд
│   ├── data/                     # transactions.csv / .xlsx (dashboard дасгал)
│   └── skills/                   # Жишээ .skill файлууд
├── 2-design/
│   ├── claude-design.md          # Session 2 үндсэн материал
│   └── google-stitch.md          # Subscription шаардахгүй хувилбар
└── 3-code/
    └── claude-code.md            # Session 3 үндсэн материал
```

---

## Суралцах зүйлс (Learning Outcomes)

Лабыг дуусгаснаар та:

1. **Автоматжуулалт** — календарь, имэйл зэргээ холбож өдөр тутмын ажлаа автоматжуулна _(Cowork, Дасгал 2)_
2. **Өгөгдөл визуалчлал** — өөрийн өгөгдлөөс интерактив dashboard гаргана _(Cowork, Дасгал 1)_
3. **Skills** — мэргэжилтний мэдлэгийг дахин ашиглагдах ур чадвар болгон хадгална _(Cowork, Дасгал 3-4)_
4. **Memory** — Claude-д урт хугацааны санах ой тохируулж, контекстээ хадгална _(Cowork, 2.2)_
5. **PRD-first** — барихаасаа өмнө төлөвлөж, чанартай үр дүн гаргана _(Cowork, 3.1)_
6. **Дизайн систем** — DESIGN.md үүсгэж, брэнд материалыг мэргэжлийн түвшинд бүтээнэ _(Design)_
7. **Кодын агент** — файл цэгцлэлтээс апп барих хүртэл ажлыг Claude Code-д даалгана _(Code)_

---

## Дасгалуудын тойм

Бүх дасгал өдөр тутмын бодит хэрэгцээнд суурилсан бөгөөд хялбараас хүнд рүү
эрэмбэлэгдсэн. Дэлгэрэнгүй заавар нь session бүрийн файлд байгаа.

**Cowork:** Spending Dashboard → Self-Assistant (Daily Digest) → Brand Skill →
[Fashion Shoot Prompt Skill](./1-cowork/claude-cowork-skill.md#7-дасгал-хувцасны-зураг-авалтын-постер-prompt-үүсгэгч-skill) (Skill → Gemini зураг)

**Design:** DESIGN.md дизайн систем үүсгэх → Чанартай Social Media постер

**Code:** Файл цэгцлэгч → Portfolio вэб хуудас → Татварын туслах

> 💡 Дасгалууд хоорондоо уялдаатай: Cowork дээр үүсгэсэн **Brand Skill** болон
> **DESIGN.md**-ээ Design-ийн Social Media постер дасгалд дахин ашиглана.

## Free tier usage tool of Agentic AI

- https://omniroute.online/
