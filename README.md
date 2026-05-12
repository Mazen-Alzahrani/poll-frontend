# poll-frontend — واجهة React + Vite لاستطلاعات الرأي

واجهة بسيطة مبنية بـ React وVite لميزة إنشاء استطلاعات، التصويت، وعرض النتائج. تتواصل الواجهة مع API عبر `axios` وتستخدم مكونات من `antd` لواجهة المستخدم.

<!--
title: 'poll-frontend — React + Vite frontend for Serverless Polls'
description: 'واجهة أمامية بسيطة لإدارة الاستطلاعات: إنشاء، تصويت، عرض نتائج.'
layout: Doc
framework: v4
platform: frontend
language: arabic
priority: 1
authorName: 'Mazen'
-->

## مميزات المشروع

- إنشاء استطلاع جديد من الواجهة
- الانتقال إلى صفحة التصويت وإرسال الأصوات
- عرض النتائج (نسب مئوية وأعداد الأصوات)
- توليد رابط الاستطلاع (يعتمد على API لتوليد QR أو الرابط)

## المتغيرات البيئية (مهم)

الواجهة تقرأ عنوان الـ API من متغير بيئة يبدأ بـ `VITE_` (مطلوب في وقت التشغيل / البناء):

- `VITE_API_URL` — عنوان قاعدة الـ API (مثال: `https://api.example.com`)

ملف مثال موجود كـ [`.env.example`](.env.example). انسخ المحتوى إلى `.env.local` أو `.env` ثم عدّل القيمة قبل التشغيل أو النشر.

```
# نسخ على PowerShell (Windows)
Copy-Item .env.example .env

# نسخ على macOS / Linux
cp .env.example .env
```

> ملاحظة: متغيرات Vite يجب أن تبدأ بـ `VITE_` لكي تكون متاحة عبر `import.meta.env`.

## نقاط النهاية (الـ API)

الواجهة تستخدم مسارات الـ API التالية كما في `src/api/api.js`:

- `POST /poll` — إنشاء استطلاع
- `GET /poll/{id}` — جلب تفاصيل استطلاع
- `POST /poll/{id}/vote` — إرسال تصويت
- `GET /poll/{id}/results` — جلب نتائج الاستطلاع
- `GET /poll/{id}/link` — جلب رابط/بيانات QR للاستطلاع

إذا رغبت في تغيير عنوان الـ API من ملف المصدر إلى متغير بيئة، عدّل `src/api/api.js` إلى:

```
const API = import.meta.env.VITE_API_URL || "https://2u8da14pbk.execute-api.us-east-1.amazonaws.com";
```

وهذا يسمح لتبديل البيئات (dev / staging / production) بسهولة.

## التشغيل محليًا

1. تثبيت الحزم:

```bash
npm install
```

2. تشغيل بيئة التطوير:

```bash
npm run dev
```

3. فتح المتصفح على العنوان الذي يظهر في الطرفية (افتراضيًا `http://localhost:5173`).

## البناء والنشر

```bash
npm run build
npm run preview
```

استخدم نتاج `dist/` لنشر الواجهة على أي مزود استضافة ثابت (Netlify, Vercel, S3 + CloudFront، ...).

## أمثلة سريعة (اختبار تكامل مع الـ API)

يمكنك تجربة نقاط الـ API عبر `curl` (عند توفر عنوان API):

إنشاء استطلاع (مثال):

```bash
curl -X POST $VITE_API_URL/poll \
	-H "Content-Type: application/json" \
	-d '{"question":"ما هو أفضل إطار عمل؟","options":["React","Vue","Svelte"]}'
```

التصويت لخيار:

```bash
curl -X POST $VITE_API_URL/poll/<pollId>/vote \
	-H "Content-Type: application/json" \
	-d '{"optionId":"<optionId>"}'
```

جلب النتائج:

```bash
curl $VITE_API_URL/poll/<pollId>/results
```

## ملاحظة أمان

- لا تقم بارتكاب أي مفاتيح أو متغيرات حساسة في Git.
- استخدم متغيرات بيئة على منصة النشر بدلاً من ملفات مضمنة في المستودع.

## بنية المشروع (مهم)

- `src/api/api.js` — helpers للتواصل مع الـ API
- `src/pages/` — شاشات `CreatePoll`, `VotePoll`, `Results`
- `src/components/` — مكونات عامة (Header/Footer)

---
