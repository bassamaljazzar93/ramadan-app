<div align="center">

# 🌙 رمضان كريم | Ramadan Kareem PWA

**تطبيق رمضان المتكامل — إمساكية · مواقيت الصلاة · أذان · ختم القرآن**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-bassamaljazzar93.github.io/ramadan--app-2563eb?style=for-the-badge)](https://bassamaljazzar93.github.io/ramadan-app)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-10b981?style=for-the-badge&logo=googlechrome)](https://bassamaljazzar93.github.io/ramadan-app)
[![Arabic RTL](https://img.shields.io/badge/Arabic-RTL_Support-f59e0b?style=for-the-badge)](https://bassamaljazzar93.github.io/ramadan-app)

</div>

---

## ✨ المميزات | Features

### 🕌 مواقيت الصلاة
- مواقيت دقيقة مبنية على موقعك الجغرافي الفعلي
- دعم أكثر من **75 مدينة** حول العالم مع طرق الحساب المناسبة لكل منطقة
- تحديث تلقائي عند تغيّر الموقع

### 🔔 الأذان والتنبيهات
- **أذان حقيقي** يُشغَّل عند دخول وقت الصلاة
- زر إيقاف واضح مع بانر احترافي
- تنبيه السحور — تنبيه القيام — تذكير الإفطار — الأذكار اليومية
- جدولة التنبيهات عبر Service Worker حتى عند إغلاق التطبيق

### 📖 ختم القرآن الكريم
- خطة يومية مقسّمة على 30 يوم
- دعم **١ أو ٢ أو ٣ ختمات** بحساب صحيح (٢٠ / ٤٠ / ٦٠ صفحة يومياً)
- عارض صفحات القرآن مع تصفّح بالسحب (Swipe) أو النقر على جانبي الصفحة
- نظام إنجازات وتتبّع التقدّم

### 🌐 ثنائي اللغة
- عربي / English مع تبديل فوري
- دعم كامل للـ RTL / LTR
- الأرقام بالعربي أو الغربي حسب اللغة المختارة

### 📲 Progressive Web App
- قابل للتثبيت على الشاشة الرئيسية (Android & iOS)
- يعمل Offline بعد أول تحميل
- تعليمات تثبيت مدمجة داخل التطبيق

---

## 🛠️ التقنيات | Tech Stack

| | |
|---|---|
| **Frontend** | Vanilla HTML / CSS / JavaScript — بدون frameworks |
| **PWA** | Service Worker · Web App Manifest · Cache API |
| **Prayer Times** | [Aladhan API](https://aladhan.com) |
| **Quran Pages** | [QuranHub Pages Images](https://github.com/QuranHub/quran-pages-images) |
| **Geocoding** | Nominatim / OpenStreetMap |
| **Fonts** | Cairo (Arabic) · Poppins (English) — Google Fonts |
| **Hosting** | GitHub Pages |

---

## 🚀 التشغيل المحلي | Local Setup

```bash
git clone https://github.com/bassamaljazzar93/ramadan-app.git
cd ramadan-app

# خدّم الملفات محلياً (Service Worker يحتاج HTTPS أو localhost)
npx serve .
# أو
python3 -m http.server 8080
```

ثم افتح `http://localhost:8080`

---

## 📁 هيكل الملفات | File Structure

```
ramadan-app/
├── index.html          # التطبيق كاملاً — HTML + CSS + JS في ملف واحد
├── sw.js               # Service Worker — Cache + Notifications + Azan trigger
├── manifest.json       # PWA Manifest — RTL/LTR support
├── azan.mp3            # ملف الأذان
├── icon-192.png        # أيقونة 192×192
└── icon-512.png        # أيقونة 512×512
```

---

## 🌍 المدن المدعومة | Supported Cities

يشمل التطبيق قاعدة بيانات بأكثر من **75 مدينة** مع طريقة الحساب المناسبة لكل منطقة:

| المنطقة | طريقة الحساب |
|---|---|
| الإمارات | Dubai Method (16) |
| السعودية / اليمن | Umm Al-Qura (4) |
| الكويت / البحرين / قطر / عمان | Gulf (8) |
| مصر / الشام / المغرب العربي | Egypt (3) |
| تركيا | Diyanet (12) |
| أوروبا | MWL (11) |
| أمريكا / كندا | ISNA (2) |
| باكستان | Karachi (5) |

---

## 📸 Screenshots

> _التطبيق مصمّم للموبايل-فيرست مع دعم كامل للشاشات الصغيرة_

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  🌙 الرئيسية    │  │  📖 القرآن      │  │  🔔 التنبيهات   │
│  Countdown Ring  │  │  Khatm Progress  │  │  Prayer Alerts   │
│  Prayer Times    │  │  Daily Plan      │  │  Suhoor Alarm    │
│  Next Prayer     │  │  Quran Viewer    │  │  Qiyam / Dhikr   │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

---

## 🤲 النية | Purpose

بُني هذا التطبيق بنية خالصة لخدمة المسلمين في رمضان — يجمع بين مواقيت الصلاة الدقيقة وختم القرآن الكريم في تجربة واحدة سلسة وسريعة بدون الحاجة لتنزيل أي تطبيق.

---

## 👨‍💻 المطوّر | Developer

**Bassam Al-Jazzar** — Senior Mechatronics Engineer & Innovation Lead  
UAE Ministry of Interior · Manufacturing Innovation Laboratory

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Bassam_Al--Jazzar-0077b5?style=flat&logo=linkedin)](https://linkedin.com/in/bassamaljazzar)
[![GitHub](https://img.shields.io/badge/GitHub-bassamaljazzar93-181717?style=flat&logo=github)](https://github.com/bassamaljazzar93)

---

<div align="center">

**رمضان كريم وكل عام وأنتم بخير 🌙**

_Ramadan Mubarak to all_

</div>
