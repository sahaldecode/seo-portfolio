# 📋 How to Add & Update Content — Faisal Rehman SEO Portfolio

---

## 🖼️ HOW TO ADD IMAGES

### Case Study Images
Put your image in:  `/public/images/`

**Naming convention — IMPORTANT:**
| Case Study | Image filename to use |
|---|---|
| fresh-start-facility-services | `case-fresh-start-facility-services.jpg` |
| go-to-superior-hvac | `case-go-to-superior-hvac.jpg` |
| fraum-center-healthcare | `case-fraum-center-healthcare.jpg` |
| elite-roofing | `case-elite-roofing.jpg` |
| bright-smile-dental | `case-bright-smile-dental.jpg` |
| homeguard-security | `case-homeguard-security.jpg` |

**Rule:** The filename must be `case-{slug}.jpg` where `{slug}` matches the slug in data.ts  
**Formats:** .jpg, .png, .webp all work. Recommended size: **1200×675px (16:9 ratio)**

If no image is found, the site automatically shows a placeholder.

### Profile Photo
Replace: `/public/images/Faisal.png`  
Recommended size: **460×560px**

### Hero / OG Image
Replace: `/public/images/seo-hero.jpg`  
Recommended size: **1200×630px**

---

## 📝 HOW TO ADD A NEW CASE STUDY

**File to edit:** `content/case-studies/data.ts`

### Step 1 — Open the file
```
content/
  case-studies/
    data.ts   ← EDIT THIS FILE
```

### Step 2 — Copy this template and paste before the closing `]`

```typescript
{
  slug:        "client-name-here",          // URL: /case-studies/client-name-here/
  title:       "Your Result Title Here",
  client:      "Client Company Name",
  industry:    "HVAC",                       // See industry list below
  location:    "USA",
  timeline:    "6 Months",
  description: "Short summary of results shown under the title on the page.",

  results: [
    { metric: "Organic Traffic",  value: "+250%", label: "in 6 months"  },
    { metric: "Monthly Leads",    value: "+180%", label: "from organic" },
    { metric: "Keywords Top 3",   value: "20+",   label: "positions"   },
    { metric: "Google Maps",      value: "#1",    label: "local pack"  },
  ],

  beforeAfter: {
    before: { clicks: "800",   impressions: "150K", ctr: "0.9%", position: "32.0" },
    after:  { clicks: "3,200", impressions: "680K", ctr: "3.2%", position: "12.5" },
  },

  challenge: "Write 2-4 sentences describing what problems the client had before working with you.",

  strategy: [
    "Strategy point 1 — what you did",
    "Strategy point 2 — what you did",
    "Strategy point 3 — what you did",
    "Add as many as you need",
  ],

  aiSeoImplementation: [
    "AI/GEO SEO action 1",
    "AI/GEO SEO action 2",
  ],

  technicalImprovements: [
    "Technical fix 1",
    "Technical fix 2",
    "Technical fix 3",
  ],

  tools: ["Ahrefs", "SEMrush", "Google Search Console", "BrightLocal"],

  testimonial: {
    quote:   "Write the client quote here.",
    author:  "Client First Name L.",
    role:    "Owner",
    company: "Company Name",
  },

  trafficGrowth: [
    { month: "Jan", traffic: 500  },
    { month: "Feb", traffic: 720  },
    { month: "Mar", traffic: 1050 },
    { month: "Apr", traffic: 1400 },
    { month: "May", traffic: 1800 },
    { month: "Jun", traffic: 2300 },
    { month: "Jul", traffic: 2900 },
    { month: "Aug", traffic: 3500 },
  ],

  keywordWins: [
    { keyword: "main keyword near me",        position: 1, volume: 5000 },
    { keyword: "service + city keyword",      position: 2, volume: 3000 },
    { keyword: "emergency service keyword",   position: 1, volume: 2000 },
    { keyword: "industry keyword",            position: 3, volume: 1500 },
    { keyword: "local service keyword",       position: 2, volume: 1000 },
  ],
},
```

### Step 3 — Add the image
Add your screenshot to `/public/images/case-{your-slug}.jpg`

### Step 4 — Save
The website rebuilds automatically. The new case study appears on the list page and gets its own URL.

---

## ✏️ HOW TO EDIT EXISTING CASE STUDY CONTENT

Open `content/case-studies/data.ts` and find the case study by its `slug`.

Edit any field:
- `title` — the H1 on the page
- `description` — the subtitle paragraph
- `results` — the 4 metric pills in the hero
- `challenge` — the challenge paragraph
- `strategy` — the numbered strategy list
- `testimonial.quote` — the client quote
- `trafficGrowth` — the bar chart data

Save → done.

---

## 🏷️ INDUSTRY OPTIONS
These control which placeholder image shows if you haven't added a real image:

```
"Cleaning"       → shows cleaning placeholder
"HVAC"           → shows HVAC placeholder
"Healthcare"     → shows healthcare placeholder
"Roofing"        → shows roofing placeholder
"Dental"         → shows dental placeholder
"Home Services"  → shows home services placeholder
"E-Commerce"     → shows default
"Restaurant"     → shows default
"SaaS"           → shows default
"Local Business" → shows default
```

---

## 🌐 HOW TO CHANGE HOMEPAGE CONTENT

| Section | File to edit |
|---|---|
| Hero text, badges, stats | `components/sections/Hero.tsx` |
| About section, skills | `components/sections/About.tsx` |
| Services list | `components/sections/Services.tsx` |
| Pricing plans | `components/sections/Pricing.tsx` |
| FAQ questions | `components/sections/FAQ.tsx` |
| Testimonials | `components/sections/Testimonials.tsx` |
| Footer links | `components/layout/Footer.tsx` |

---

## 🚀 COMMANDS

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---
