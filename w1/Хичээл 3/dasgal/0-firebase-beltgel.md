← **[Хичээл 3](../readme.md)**

# 🔥 Модул 0 — Firebase бэлтгэл · ~20 мин

> 🎯 Firebase төсөл үүсгээд аппдаа холбоно. **Код бичихгүй — товч дарна.**

---

## 1️⃣ Төсөл үүсгэх

[console.firebase.google.com](https://console.firebase.google.com) → Google хаягаар нэвтрэх

```text
Create a project → нэр: oirkhon → Continue
Google Analytics → Disable → Create project
```

---

## 2️⃣ Web апп нэмэх

```text
Нүүр дэлгэц → </> icon → nickname: oirkhon → Register app
```

→ `firebaseConfig = { ... }` гарч ирнэ → **БҮТНЭЭР ХУУЛЖ АВ** ⭐

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "oirkhon.firebaseapp.com",
  projectId: "oirkhon",
  storageBucket: "oirkhon.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
};
```

> 💡 Эдгээр **нууц биш.** Хамгаалалт нь Rules дээр байдаг (алхам 4). Тиймээс `.env` файл хэрэггүй.

---

## 3️⃣ Auth асаах

```text
Build → Authentication → Get started
→ Email/Password → Enable → Save
```

---

## 4️⃣ Firestore үүсгэх + Rules

```text
Build → Firestore Database → Create database
Location: asia-southeast1 → Start in test mode → Enable
```

**Rules** таб → доорхийг буулгаад **Publish**:

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

> 🔑 `request.auth != null` = **"зөвхөн нэвтэрсэн хүн."** Нэг мөр — гэхдээ энэ бол апп-ын хаалганы түгжээ.

---

## 5️⃣ Багц суулгах

```bash
npx expo install firebase @react-native-async-storage/async-storage
```

---

## 💬 Промпт 0

```text
Firebase-ийг аппад холбож өгөөч.

- lib/firebase.js файл үүсгээд дотор нь app, auth, db-г тохируулж export хий
- auth-д AsyncStorage persistence тохируул (апп хаагаад нээхэд нэвтэрсэн хэвээр байх)
- Доорх config-ыг ашигла:

[ЭНД ӨӨРИЙН firebaseConfig БЛОКОО БУУЛГА]
```

---

## ✅ Шалгах

- [ ] Firebase console дээр `oirkhon` төсөл байна
- [ ] Authentication → Email/Password = **Enabled**
- [ ] Firestore Database үүссэн, Rules **Publish** хийгдсэн
- [ ] `lib/firebase.js` файл аппд байна
- [ ] `npx expo start` алдаагүй ажиллаж байна

### ➡️ Дараагийнх: [🔑 Модул 1 — Нэвтрэх + Профайл](1-newtreh-profile.md)
