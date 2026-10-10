# Хичээл 7

### AI Studio-д хийсэн portfolio-гоо **GitHub**-д хадгалж, компьютер дээрээ ажиллуулаад, **Vercel**-ээр интернэтэд гаргана.

> **Агуулга:** _(төлөвлөсөн)_ AI Studio Build → GitHub sync, `git clone` → `npm install` → `npm run dev`, `git pull`, Vercel-д байршуулах (Push бүрт автомат шинэчлэгдэнэ).

```text
AI Studio (хийх, сайжруулах) → GitHub (хадгалах) → Компьютер (ажиллуулж үзэх)
                                                 → Vercel (интернэт)
```

---

> Алхам бүр дээр **дарж нээнэ**.

---

<details>
<summary><b>1. Бэлтгэл</b></summary>

<br>

| Хэрэгтэй                     | Хаанаас                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------- |
| AI Studio Build дахь portfolio | Хичээл 6                                                                        |
| GitHub бүртгэл               | Хичээл 6 гэрийн даалгавар. Байхгүй бол [github.com](https://github.com) → **Sign up** |

</details>

---

<details>
<summary><b>2. GitHub-д хадгалах</b></summary>

<br>

GitHub = кодын онлайн хадгалах газар. Өөрчлөлт бүрийн түүх үлдэнэ.

1. AI Studio → **Build** → өөрийн апп → дээд буланд **GitHub** дүрс (эсвэл **Settings → GitHub**).
2. **Sign in with GitHub** → зөвшөөр.
3. Нэр: `my-portfolio`, **Public** → **Create repository**.
4. Цаашид өөрчлөлт бүрийн дараа **Push / Commit** дар.
5. [github.com](https://github.com) → `my-portfolio` нээ → **сүүлийн өөрчлөлт** орсон эсэхийг шалга.

<details>
<summary>Файлууд гэж юу вэ?</summary>

<br>

| Файл / хавтас     | Юу                                            |
| ----------------- | --------------------------------------------- |
| `index.html`      | Хуудас — гэхдээ бараг хоосон                  |
| `src/App.tsx`     | Сайтын гол код. HTML-тэй төстэй таг харагдана |
| `src/components/` | Хэсэг бүр (Hero, Footer …) тусдаа файл        |
| `package.json`    | Ямар нэмэлт программ хэрэгтэйг жагсаасан      |

Нэг файл биш, **олон файлд** хуваасан — том сайт ингэж хийгддэг.

</details>

</details>

---

<details>
<summary><b>3. Компьютер дээрээ ажиллуулах</b></summary>

<br>

1. GitHub → `my-portfolio` → ногоон **Code** → хаягийг **Copy**.
2. VSCode → **Ctrl+`** (Terminal). Нэг нэгээр нь бичиж **Enter**:

```bash
cd Desktop
git clone https://github.com/[нэр]/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

3. `http://localhost:3000` (эсвэл Terminal-д гарсан хаяг) дээр **Ctrl** дараад хулганаар дар → сайт нээгдэнэ.
4. VSCode → **Open Folder** → `Desktop/my-portfolio`. `src/App.tsx`-ээс **Ctrl+F** → нэрээ хай.

| Команд        | Юу хийдэг                                 |
| ------------- | ----------------------------------------- |
| `git clone`   | GitHub-ээс кодоо компьютертээ татна       |
| `npm install` | Хэрэгтэй программуудыг татна (нэг л удаа) |
| `npm run dev` | Сайтыг компьютер дээрээ асаана            |

Унтраах: **Ctrl+C**.

</details>

---

<details>
<summary><b>4. Шинэчлэх — git pull</b></summary>

<br>

1. AI Studio-д нэг өөрчлөлт хий → **Push**.
2. VSCode Terminal-д:

```bash
git pull
npm run dev
```

3. Браузерт шинэ хувилбар гарна.

> Кодоо **AI Studio-д** л засна. Компьютер дээр засвал `git pull` хийхэд зөрчил гарна.

</details>

---

<details>
<summary><b>5. Vercel — интернэтэд гаргах</b></summary>

<br>

1. [vercel.com/new](https://vercel.com/new) → **Continue with GitHub**.
2. `my-portfolio`-ийн ард **Import** → **Deploy**.
3. 1 минутын дараа **Visit** → линкээ хуулж Discord-д тавь.

Цаашид AI Studio-д **Push** хийх бүрт Vercel **өөрөө** шинэчилнэ. Линк өөрчлөгдөхгүй.

</details>

---

<details>
<summary><b>6. Аюулгүй байдал</b></summary>

<br>

| Дүрэм           | Тайлбар                                                     |
| --------------- | ----------------------------------------------------------- |
| Repo — Public   | Хүн бүр кодыг чинь харна → хувийн мэдээлэл, нууц үг **бүү оруул** |
| API key         | Хэзээ ч GitHub-д, Discord-д бүү тавь                        |

</details>

---

<details>
<summary><b>Гэрийн даалгавар</b></summary>

<br>

| #   | Юу хийх                                                    | ✔️  |
| --- | ---------------------------------------------------------- | --- |
| 1   | AI Studio-д 1 өөрчлөлт → Push → Vercel линк шинэчлэгдсэнийг шалга | ⬜  |
| 2   | Гэртээ `git clone` → `npm install` → `npm run dev`          | ⬜  |
| 3   | Vercel линкээ Discord-д тавь                               | ⬜  |

</details>
