# 🚀 Setup Checklist — Хичээл 1

**Хос:** ______________________  &  ______________________

> Алхам бүрийг дуусгамагц ✅ тавь. Бүгдийг дуусгасан хос → 🦸 **Mentor** болж бусдад тусална (✨ оноо!)

---

### 📱 A. Утас

- [ ] Expo Go суулгасан (Play Store / App Store)
- [ ] Багшийн **Anime Library** QR-ыг уншиж, апп ажилласан
- [ ] Багш админ вэбээр кино нэмэхэд миний утсан дээр гарч ирсэн 🤯

### 💻 B. Node.js

- [ ] [nodejs.org](https://nodejs.org/en) → **LTS** тат → суулга
- [ ] Терминалд шалга:

```bash
node --version
```

- [ ] Тоо гарч ирсэн → ✅  (Гараагүй бол терминалыг **хааж дахин нээ**)

### 🤖 C. Agent  → манай хосын agent: ⬜ Codex  ⬜ Antigravity

**Codex бол:**

```bash
npm install -g @openai/codex
codex
```

- [ ] ChatGPT account-аар нэвтэрсэн

**Antigravity бол:**

- [ ] [antigravity.google](https://antigravity.google) → тат → суулга
- [ ] Google account-аар нэвтэрсэн

### 🌐 D. Expo account

- [ ] [expo.dev/signup](https://expo.dev/signup) дээр бүртгүүлсэн
- [ ] И-мэйлээ баталгаажуулсан
- [ ] Утасны Expo Go дотор **мөн тэр account-аар** нэвтэрсэн

### 🧠 E. Agent-даа Expo-г заах (Skills)

```bash
# Codex
codex plugin add expo@openai-curated

# Antigravity
npx skills add expo/skills
```

- [ ] Амжилттай

### 🔌 F. Expo MCP

```bash
# Codex
codex mcp add expo --url https://mcp.expo.dev/mcp
```

- [ ] Expo account-аар нэвтэрсэн

### 🧪 G. Шалгах prompt

Agent-даа өг:

```text
Use the Expo MCP server to search the Expo documentation
for "expo-image-picker" and tell me in one sentence what it does.
```

- [ ] Agent «зурган сангаас зураг сонгодог» гэсэн утгатай хариу өгсөн → 🎉 **БҮГД БЭЛЭН!**

---

### 🎉 H. Эхний өөрийн апп

```bash
npx create-expo-app@latest my-first-app
cd my-first-app
npx expo start
```

- [ ] QR-ыг Expo Go-гоор уншиж, апп утсан дээр нээгдсэн
- [ ] Agent-д prompt өгсөн:

```text
Change the app title to "[миний нэр]-ийн апп" and make the
background my favourite colour: [өнгө]. Make the text big and bold.
```

- [ ] 👀 **Утсан дээр өөрчлөгдсөн!**
- [ ] Discord-д screenshot тавьсан

---

## 🆘 Гацвал

1. Алдааны текстийг **бүтнээр хуулж agent-даа өг** — тэр өөрөө засна
2. Buddy-гаасаа асуу
3. Дараа нь багшид гараа өргө ✋

## 🦸 Mentor тэмдэглэл

Хэнд тусалсан бэ? ______________________________________ (✨ оноо)
