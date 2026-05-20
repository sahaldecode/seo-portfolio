# ✏️ Content & Image Change Guide
## Apni website ka content aur images kaise change karein

---

## 📋 QUICK REFERENCE — Har cheez kahan hai

| Kya Change Karna Hai | Kahan Jayen |
|---|---|
| Hero heading, tagline, buttons | `components/sections/Hero.tsx` |
| About me text, skills, tech stack | `components/sections/About.tsx` |
| Services & pricing | `components/sections/Services.tsx` |
| Case studies | `content/case-studies/data.ts` |
| Testimonials (client quotes) | `components/sections/Testimonials.tsx` |
| FAQ questions/answers | `components/sections/FAQ.tsx` |
| Process steps | `components/sections/ProcessTimeline.tsx` |
| Skills & percentages | `components/sections/SkillsGrid.tsx` |
| Stats (340%, 50+, etc.) | `components/sections/Stats.tsx` |
| Navbar links & logo | `components/layout/Navbar.tsx` |
| Footer links & social | `components/layout/Footer.tsx` |
| Contact info, WhatsApp | `components/sections/Contact.tsx` |
| Booking calendar URL | `components/sections/BookingCalendar.tsx` |
| SEO meta titles/descriptions | Each `app/(marketing)/*/page.tsx` |
| Structured data (Schema) | `components/seo/StructuredData.tsx` |
| WhatsApp number | `components/ui/WhatsAppButton.tsx` |

---

## 🖼️ IMAGES — Kaise Change Karein

### METHOD 1 — Unsplash URL (Currently used — Free, No account needed)
Current format:
```
https://images.unsplash.com/photo-ID?w=600&h=400&fit=crop
```
Nayi image URL banana:
1. unsplash.com par jaen
2. Photo select karein → "Share" → "Copy link"
3. Link ke end mein add karein: `?w=800&h=600&fit=crop`
4. Replace karein file mein

### METHOD 2 — Apni khud ki photo upload karein (BEST option)

#### Kahan rakhein:
```
public/
  images/
    profile.jpg          ← About section photo
    case-study-1.jpg     ← Case study cover
    og-image.jpg         ← Social share preview
```

#### Code mein use karein:
```tsx
// PEHLE (Unsplash):
src="https://images.unsplash.com/photo-xxx?w=600&h=800"

// BAAD MEIN (apni photo):
src="/images/profile.jpg"
```

---

## 👤 PROFILE PHOTO change karna (About Section)

**File:** `components/sections/About.tsx`

Line ~33:
```tsx
// Yeh line dhundho:
src="https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&h=800&fit=crop&crop=top"

// Apni photo se replace karo:
src="/images/aapki-photo.jpg"
```

About page photo bhi change karein:
**File:** `app/(marketing)/about/page.tsx` — Line ~70

---

## 🏆 CASE STUDY IMAGES change karna

**File:** `components/sections/CaseStudiesPreview.tsx`

Top par yeh object dhundho:
```tsx
const industryImages: Record<string, string> = {
  "E-Commerce":   "https://images.unsplash.com/...",   // ← yahan change karo
  "Restaurant":   "https://images.unsplash.com/...",
  "SaaS":         "https://images.unsplash.com/...",
};
```

Apni industry ka naam `data.ts` mein jo hai wahi match karna chahiye.

---

## ✏️ TEXT CONTENT — Section by Section

### 1️⃣ HERO Section
**File:** `components/sections/Hero.tsx`

```tsx
// Heading (line ~43):
AI-Era
SEO
Strategist
// ↑ Yeh teen lines change karo

// Description (line ~52):
"Premium SEO consultant from Pakistan..."
// ↑ Apni bio likhो

// Button text:
"Start Project"   // Primary button
"View Results"    // Secondary button

// Social proof:
"50+ clients"     // Number update karo
```

### 2️⃣ STATS Section
**File:** `components/sections/Stats.tsx`

```tsx
const statsData = [
  { value: 340,   suffix: "%",  label: "Avg. Traffic Increase", prefix: "+" },
  { value: 50,    suffix: "+",  label: "Clients Worldwide" },
  { value: 12000, suffix: "+",  label: "Keywords Ranked" },
  { value: 15,    suffix: "+",  label: "Countries Served" },
  // ↑ Apne real numbers daalo
];
```

### 3️⃣ ABOUT Section
**File:** `components/sections/About.tsx`

```tsx
// Paragraphs change karo (~line 70-80):
"I bridge the gap between engineering..."
"Based in Pakistan..."

// Tech stack:
["Next.js", "Python", "Google Cloud", "AI/ML", "Data Analysis", "Schema.org"]
// ↑ Apni skills daalo

// Quick stats:
{ value: "8+",    label: "Years Experience" },
{ value: "50+",   label: "Global Clients" },
{ value: "+340%", label: "Avg Traffic Lift" },
```

### 4️⃣ SKILLS Section
**File:** `components/sections/SkillsGrid.tsx`

```tsx
const skillsData = [
  { name: "Technical SEO",   level: 98 },  // level = 1 to 100
  { name: "Core Web Vitals", level: 95 },
  // ↑ Naam aur percentage change karo
];
```

### 5️⃣ SERVICES / PRICING
**File:** `components/sections/Services.tsx`

```tsx
const plans = [
  {
    title: "SEO Audit",
    price: "$1,500",      // ← Price change karo
    period: "one-time",
    features: [...],      // ← Features list change karo
  },
  {
    title: "Growth Plan",
    price: "$3,500",      // ← Price change karo
    period: "/month",
  },
  // ...
];
```

### 6️⃣ TESTIMONIALS
**File:** `components/sections/Testimonials.tsx`

```tsx
const testimonialsData = [
  {
    quote: "The transformation was incredible...",   // ← Client ka quote
    author: "Ahmed Khan",                             // ← Client naam
    role: "CEO",                                      // ← Position
    company: "FashionHub PK",                        // ← Company
    avatar: "https://images.unsplash.com/...",       // ← Photo URL
    result: "+340% Traffic",                          // ← Result badge
  },
  // ... 3 testimonials hain, teeno update karo
];
```

### 7️⃣ FAQ
**File:** `components/sections/FAQ.tsx`

```tsx
const faqsData = [
  {
    question: "What makes AI SEO different...",   // ← Sawaal
    answer: "AI SEO goes beyond...",               // ← Jawab
  },
  // ... 6 FAQs hain
];
```

### 8️⃣ CONTACT INFO
**File:** `components/sections/Contact.tsx`

Top par yeh constants dhundho:
```tsx
const FORMSPREE_ID = "YOUR_FORMSPREE_ID";    // ← formspree.io se ID
const WHATSAPP_NUMBER = "923001234567";       // ← Apna number

const contactInfo = [
  { label: "Email",    value: "hello@seoexpert.pk" },  // ← Apna email
  { label: "Phone",    value: "+92 300 1234567" },      // ← Apna phone
  { label: "Location", value: "Karachi, Pakistan" },    // ← Apna city
];
```

### 9️⃣ FOOTER
**File:** `components/layout/Footer.tsx`

```tsx
// Social links change karo (top par):
const socials = [
  { href: "https://twitter.com/AAPKA-HANDLE" },
  { href: "https://linkedin.com/in/AAPKA-PROFILE" },
  { href: "https://github.com/AAPKA-USERNAME" },
];

// Email/Phone bhi yahan hai footer mein
{ value: "hello@seoexpert.pk", href: "mailto:hello@seoexpert.pk" },
{ value: "+92 300 1234567",    href: "tel:+923001234567" },
```

### 🔟 CASE STUDIES
**File:** `content/case-studies/data.ts`

Puri guide wahan comment mein likhi hai — template copy karke fill karo.

---

## 🌐 SEO META TAGS change karna

Har page ki apni metadata hai:

| Page | File |
|---|---|
| Homepage | `app/(marketing)/page.tsx` |
| About | `app/(marketing)/about/page.tsx` |
| Services | `app/(marketing)/services/page.tsx` |
| Case Studies | `app/(marketing)/case-studies/page.tsx` |
| Contact | `app/(marketing)/contact/page.tsx` |

Har file mein yeh change karo:
```tsx
export const metadata: Metadata = {
  title: "Apna Page Title | SEO Expert Pakistan",
  description: "Apna page description — 150-160 characters mein",
  openGraph: {
    title: "Same title",
    description: "Same description",
    url: "https://aapkadomain.com/page/",
  },
};
```

---

## 🔧 GLOBAL INFO — ek jagah se sab change karna

Bahut saari jagah naam, email, WhatsApp number repeat hota hai.
**VS Code mein Ctrl+Shift+H** (Find & Replace All) use karo:

| Find | Replace With |
|---|---|
| `seoexpert.pk` | `aapkadomain.com` |
| `hello@seoexpert.pk` | `aap@email.com` |
| `+92 300 1234567` | Apna number |
| `923001234567` | Apna WhatsApp number |
| `SEO Expert Pakistan` | Apna naam/brand |
| `Karachi, Pakistan` | Apna city |

---

## 📁 PUBLIC FOLDER — Zaruri files

```
public/
  og-image.jpg          ← 1200×630px — Social media share image (ZARURI!)
  favicon.ico           ← Browser tab icon
  images/               ← Apni saari photos yahan rakhein
    profile.jpg
    case-study-*.jpg
```

`og-image.jpg` banana:
- Canva.com par free mein bana saktey hain
- Size: 1200 × 630 pixels
- Apna naam + tagline + logo

---

## ✅ FINAL CHECKLIST — Launch se pehle

```
□ Profile photo replace ki
□ Apna naam/brand update kiya
□ Email address update kiya
□ WhatsApp number update kiya (3 jagah)
□ Formspree ID add ki (Contact form)
□ Calendar URL add ki (Booking section)
□ Social media links update kiye (Footer)
□ og-image.jpg add ki (public/ folder)
□ Domain update ki (seoexpert.pk → aapkadomain.com)
□ Case studies apni add kiye
□ Testimonials real ones se replace kiye
□ Meta titles/descriptions update kiye
□ Stats real numbers se update kiye
□ Pricing update ki
```
