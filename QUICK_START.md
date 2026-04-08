# JSSC Website - Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Navigate to Project
```bash
cd /Users/user/CascadeProjects/jssc
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit: **http://localhost:3000**

---

## 📁 Project Structure

```
jssc/
├── app/              # All pages (Home, About, Membership, Events, etc.)
├── components/       # Reusable components (Header, Footer, Button, Card)
├── public/           # Static files (images, icons)
└── README.md         # Full documentation
```

---

## 🎨 Editing Content

### Update a Page
1. Open the page file: `app/[page-name]/page.tsx`
2. Edit the text content directly in the JSX
3. Save - changes appear instantly!

**Example**: Edit home page
```bash
# Open: app/page.tsx
# Change the hero title, descriptions, etc.
```

### Update Navigation
- **Header**: `components/Header.tsx`
- **Footer**: `components/Footer.tsx`

### Update Colors
- **Theme**: `app/globals.css` (lines 3-12)

---

## 📄 Pages Overview

| Page | Path | Purpose |
|------|------|---------|
| Home | `/` | Hero, intro, purpose, CTAs |
| About | `/about` | History, mission, values, governance |
| Membership | `/membership` | Eligibility, how to join, renewal |
| Events | `/events` | Event listings and details |
| Sponsors | `/sponsors` | B&B Furniture, sponsorship info |
| FAQ | `/faq` | Common questions |
| Contact | `/contact` | Email, location, enquiries |
| Terms | `/terms` | Terms & conditions |
| Privacy | `/privacy` | Privacy policy |

---

## 🛠️ Common Tasks

### Add a New Event
Open: `app/events/page.tsx`

Add to the `events` array:
```typescript
{
  title: 'New Event Name',
  date: 'DD Month YYYY',
  time: 'HH:MM – HH:MM',
  description: 'Event description',
  details: ['Detail 1', 'Detail 2'] // Optional
}
```

### Change Contact Email
Search for: `support@jssc.im` and replace throughout the project

### Add New Page
1. Create folder: `app/new-page/`
2. Create file: `app/new-page/page.tsx`
3. Add navigation link in Header and Footer

---

## 🎨 Design System

### Colors
- **Primary Red**: `bg-primary` or `text-primary`
- **Dark Red**: `bg-primary-dark`
- **Charcoal**: `bg-charcoal` or `text-charcoal`
- **Grey Background**: `bg-grey-50`

### Components
- `<Button>` - Use for CTAs
- `<Card>` - Use for content blocks
- `<EventCard>` - Use for events

---

## 🚢 Deploy to Production

### Build
```bash
npm run build
```

### Test Production Build
```bash
npm start
```

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically!

Or use: Netlify, AWS Amplify, or any Node.js host

---

## 📞 Need Help?

- **Full Documentation**: See `README.md`
- **Project Summary**: See `PROJECT_SUMMARY.md`
- **Tailwind Docs**: https://tailwindcss.com
- **Next.js Docs**: https://nextjs.org/docs

---

## ✅ Checklist for Going Live

- [ ] Replace placeholder content with real content
- [ ] Add real images to `/public` folder
- [ ] Update contact email if different
- [ ] Add JSSC logo
- [ ] Test all pages on mobile
- [ ] Review Terms & Privacy pages
- [ ] Set up analytics (optional)
- [ ] Deploy to production
- [ ] Test live site
- [ ] Share with JSSC team!

---

**Built with Next.js, TypeScript, and Tailwind CSS**
**Ready for production deployment** ✨
