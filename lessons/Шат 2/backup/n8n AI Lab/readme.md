# AI LAB — Personal AI + Deal Finder (Хичээл 4–8, ноорог)

> **Төлөв:** Backup — одоогоор ашиглахгүй, бэлтгэл дутуу. Санааны шат. Үндсэн 18 хичээлээс тусдаа. Хичээл бүр өмнөхийнхөө n8n, Gemini, Firestore-ийг дахин ашиглана.

## Stack

| Хэсэг | Технологи |
|---|---|
| Automation | n8n (эхлээд Cloud trial → дараа нь self-host) |
| AI | Gemini API (Flash / Flash-Lite) |
| Database | Firebase Firestore (Spark) |
| Chat | n8n Chat Trigger → Telegram *(санал)* → Messenger (Хичээл 8) |
| Мэдэгдэл | Discord webhook |

## Хичээлүүд

| Хичээл | Сэдэв | Үр дүн |
|---|---|---|
| 4 | n8n + Gemini суурь: Chat Trigger → AI Agent → хариулт. API, JSON, webhook | Ажилладаг AI chat |
| 5 | AI Assistant: Google Calendar + Firestore `tasks`, Schedule Trigger → өглөөний brief | Daily brief chat / Discord-д ирнэ |
| 6 | Deal Finder 1: постын текст / screenshot → Gemini Vision → JSON → Firestore `products`, `offers` | Зургаас бараа, үнэ таньдаг |
| 7 | Deal Finder 2: `watches`, 6–24 цаг тутам шалгах, үнэ өөрчлөгдвөл л Discord мэдэгдэл | Price alert |
| 8 | Sales Assistant: **өөрийн Page**-ийн Messenger мессеж → бараа хайх → AI хариулт (dev mode) | Page-ийн chat-д хариулдаг bot |

## Зарчим

- Хувийн биш, **тест** calendar / өгөгдөл ашиглана (Gemini free tier).
- Зурагнаас харагдахгүй үнэ, үзүүлэлтийг зохиохгүй → `unknown`.
- Бусдын FB/IG Page унших боломжгүй → оролт нь хэрэглэгчийн хуулсан текст / screenshot.

## Цаашид (хичээлд орохгүй)

- Comment-д хариулах (FB / IG) — AI draft → Admin approve → Send
- Instagram DM
- Discord slash command (`/ask`, `/find-deal`, `/watch-price`)
- Cost-effective ingestion: change detector, cheap filter, давхардал шүүх
- Next.js public dashboard, user accounts
- Real Estate Deal Finder: property schema, agent dashboard, lead generation
- Meta App Review + Business verification (бодит хэрэглэгчид хариулах)
- n8n лиценз: хэрэглэгчдэд workflow засуулдаг SaaS бол тусгай лиценз
