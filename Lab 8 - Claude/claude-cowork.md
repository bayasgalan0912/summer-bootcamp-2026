# Claude Cowork: Автоматжуулалтаас AI Экосистем хүртэл

## 1. Удиртгал (Introduction)

- [Slide](https://notebooklm.google.com/notebook/0fc71156-38ac-42a9-bb21-8869ed9e01a9/artifact/e3ebe354-f507-4ce4-ae8c-6af23f34be72?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_)
- [Slide-2](https://notebooklm.google.com/notebook/0fc71156-38ac-42a9-bb21-8869ed9e01a9/artifact/87a8be43-ed74-4a02-8cbc-c484820d950a?utm_source=nlm_web_share&utm_medium=google_oo&utm_campaign=art_share_1&utm_content=&utm_smc=nlm_web_share_google_oo_art_share_1_)

### 1.1 Claude Cowork-ийн тухай

- **Local AI Agent:** Таны компьютер дээр шууд байрлаж, файл, аппликейшн болон хэрэгслүүдтэй бие даан ажиллах чадвартай AI агент юм [1].
- **Ялгаа:** Вэб чатботоос ялгаатай нь таны локаль файлуудыг өөрчлөх, удирдах чадвартай (жишээ нь: компьютерын дэлгэц дээрх файлыг устгах, шилжүүлэх) [2].
- **Бүтэц:** Гурван үндсэн табтай: Chat (энгийн чат), Cowork (локаль агент), Claude Code (кодын агент) [3].

### 1.2 Тохиргоо (Setup)

- **Capabilities:** Artifacts болон Inline Visualizations-ийг идэвхжүүлэх [3].
- **Global Instructions:** Claude-д хэн болох, хэрхэн ажиллах талаарх үндсэн зааварчилгааг өгөх [4].
- **Dispatch:** Гар утаснаасаа компьютер дээрх Claude-г удирдаж, даалгавар өгөх боломж [3].

---

## 2. Үндсэн ойлголтууд (Key Concepts)

### 2.1 Skills & Connectors

- **Skills (Ур чадвар):** Дахин ашиглагдах зааварчилгааны багц. Жишээ нь: "Брэнд стилийг бүх дизайнд хэрэглэх" ур чадвар [5, 6].
- **Connectors (Холболтууд):** Gmail, Google Calendar, Drive зэрэг гуравдагч талын програмуудтай Claude-г холбоно [7, 8].
- **MCP (Model Context Protocol):** Хэрэв бэлэн холболт байхгүй бол өөрөө холболт үүсгэх стандарт [8].

### 2.2 Projects & Memory

- **Projects (Төслүүд):** Контекст болон санах ойг хадгалдаг бие даасан ажлын талбар [9].
- **Productivity Plugin:** `task.md` болон `memory.md` файлуудыг үүсгэж, Claude-ийн санах ойг удирдах систем [10, 11]. `/update` командаар санах ойг шинэчилнэ [11].

---

## 3. Нахийн шатны тактикууд (Advanced Tactics)

### 3.1 PRD (Product Requirement Document) First

- Аливаа зүйлийг барьж эхлэхээс өмнө **PRD** бичих нь амжилтын үндэс юм. Үүнд: Асуудал, амжилтын шалгуур, хамрах хүрээ (scope), хязгаарлалт болон бүтээх төлөвлөгөө багтана [12, 13].
- **Pushback:** Claude-оос таны төлөвлөгөөг шүүмжлэх, асуулт асуухыг шаардах нь алдаа гарахаас сэргийлнэ [13].

### 3.2 Autonomous Builder Workflow

- Даалгавруудыг `Pending`, `In Progress`, `Done` хавтасны бүтэц ашиглан бие даан гүйцэтгүүлэх. Claude 30 минут тутамд `Pending` хавтсыг шалгаж, төслүүдийг барьдаг [14, 15].

### 3.3 Persistence & Dashboards

- **Persistence:** Компьютер унтсан ч 24/7 ажиллахын тулд VPS (Virtual Private Server) ашиглах [16].
- **Mission Control Dashboards:** Өөрийн хөрөнгө оруулалт, төслийн явц, өдөр тутмын мэдээллийг харах интерактив HTML самбарууд [17, 18].

---

## 4. Дасгал ажил (Exercises)

### Дасгал 1: Self-Assistant (Хувийн туслах)

- **Даалгавар:** Өглөө бүр 07:00 цагт календарь, имэйл болон чухал мэдээллийг нэгтгэн Apple Notes руу "Daily Digest" илгээдэг автоматжуулалт үүсгэх [19-21].
- **Хэрэглэгдэх багаж:** Google Calendar & Gmail Connectors, Scheduled Tasks.

### Дасгал 2: Interactive Spending Dashboard

- **Даалгавар:** 24 сарын банкны хуулга (CSV) дээр үндэслэн зардлын төрөл, чиг хандлагыг харуулсан интерактив HTML хяналтын самбар байгуулах [22, 23].
- **Хэрэглэгдэх багаж:** Local file access, Visual artifacts.

### Дасгал 3: Brand Skill & Custom Builder

- **Даалгавар:** Өөрийн брэнд номыг (Brand Book) PDF болгон үүсгэж, түүнийгээ "Skill" болгон хадгалах. Дараа нь шинээр үүсгэх бүх веб хуудсанд энэ стилийг автоматаар хэрэглэх [5, 6].

---

## 5. Дүгнэлт

Claude Cowork нь зөвхөн чатлах хэрэгсэл биш, харин таны өмнөөс ажилладаг **дижитал ажилтан** юм. PRD-г зөв ашиглаж, санах ойн системийг тохируулснаар та өөрийн гэсэн AI экосистемийг бүрдүүлэх боломжтой [24, 25].

<!--
References:

- https://www.youtube.com/watch?v=uGwDuvSqgYI
- https://www.youtube.com/watch?v=gdrPkpXuNks -->
