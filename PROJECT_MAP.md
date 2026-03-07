# JAWS Robotics Website - Project Map

## 📂 Complete File Structure

```
JAWSrobotics/
│
├── 📄 START_HERE.md                    ⭐ READ THIS FIRST!
├── 📄 QUICK_START.md                   ⚡ 15-minute setup guide
├── 📄 CONNECT_EXISTING_PROJECTS.md     🔗 Connect to existing accounts
├── 📄 README.md                        📖 Full documentation
├── 📄 PROJECT_SUMMARY.md               📊 What was built
├── 📄 PROJECT_MAP.md                   🗺️ This file
│
├── 📁 Setup Guides/
│   ├── 📄 SUPABASE_SETUP.md           🗄️ Database setup
│   ├── 📄 DEPLOYMENT.md               🚀 Vercel deployment
│   └── 📄 DEPLOYMENT_CHECKLIST.md     ✅ Deployment checklist
│
├── 📁 Configuration Files/
│   ├── 📄 package.json                 📦 Dependencies
│   ├── 📄 vite.config.js              ⚙️ Vite config
│   ├── 📄 tailwind.config.js          🎨 Tailwind config
│   ├── 📄 postcss.config.js           🔧 PostCSS config
│   ├── 📄 vercel.json                 ☁️ Vercel config
│   ├── 📄 .env                        🔐 Your credentials (SECRET!)
│   ├── 📄 .env.example                📝 Template
│   └── 📄 .gitignore                  🚫 Git ignore rules
│
├── 📄 index.html                       🌐 HTML template
│
├── 📁 public/                          🖼️ Public assets
│   └── 📁 photos/
│       ├── 📄 README.md               📸 Photo guide
│       ├── 📁 home/                   🏠 Hero images
│       ├── 📁 team/                   👥 Team photos
│       ├── 📁 cad/                    🤖 Robot photos
│       └── 📁 sponsors/               🏢 Sponsor logos
│
└── 📁 src/                             💻 Source code
    ├── 📄 main.jsx                    🚪 Entry point
    ├── 📄 App.jsx                     🎯 Main app + routing
    ├── 📄 index.css                   🎨 Global styles
    │
    ├── 📁 components/                  🧩 Reusable components
    │   ├── 📄 Header.jsx              📍 Navigation header
    │   └── 📄 Footer.jsx              📍 Site footer
    │
    ├── 📁 pages/                       📄 Page components
    │   ├── 📄 Home.jsx                🏠 Home page
    │   ├── 📄 About.jsx               ℹ️ About Us page
    │   ├── 📄 CAD.jsx                 🤖 CAD gallery
    │   ├── 📄 Sponsors.jsx            🏢 Sponsors page
    │   ├── 📄 WantToSponsor.jsx       💰 Sponsorship info
    │   ├── 📄 Contact.jsx             📧 Contact form
    │   └── 📄 Admin.jsx               🔐 Admin dashboard
    │
    ├── 📁 lib/                         📚 Libraries
    │   └── 📄 supabase.js             🗄️ Supabase client
    │
    └── 📁 utils/                       🛠️ Utilities
        └── 📄 photoLoader.js          📸 Photo loader
```

## 🗺️ Navigation Map

```
Website Structure:
│
├── 🏠 Home (/)
│   ├── Hero slider with team name
│   ├── About Us preview
│   ├── Statistics
│   └── Call-to-action
│
├── ℹ️ About Us (/about)
│   ├── Mission statement
│   ├── Team story
│   ├── Core values
│   └── Team members grid
│
├── 🤖 Our CAD (/cad)
│   ├── Design process
│   ├── CAD gallery
│   └── Lightbox viewer
│
├── 🏢 Sponsors (/sponsors)
│   ├── Thank you message
│   ├── Sponsors by tier
│   └── Impact section
│
├── 💰 Want to Sponsor? (/want-to-sponsor)
│   ├── Why sponsor
│   ├── Sponsorship tiers
│   ├── Benefits breakdown
│   └── How funds are used
│
├── 📧 Contact (/contact)
│   ├── Contact form
│   ├── Contact information
│   └── Social media links
│
└── 🔐 Admin (/admin)
    ├── Password login
    └── View form submissions
```

## 🔄 Data Flow

```
User Interaction Flow:

1. User visits site
   ↓
2. React Router loads page
   ↓
3. Page component renders
   ↓
4. Data fetched from Supabase (if needed)
   ↓
5. Photos loaded from public/photos/
   ↓
6. Content displayed to user

Contact Form Flow:

1. User fills form
   ↓
2. Form validation
   ↓
3. Submit to Supabase
   ↓
4. Data saved to contact_submissions table
   ↓
5. Success message shown
   ↓
6. Admin can view in /admin
```

## 🗄️ Database Schema

```
Supabase Database:

├── 📊 contact_submissions
│   ├── id (UUID)
│   ├── name (text)
│   ├── email (text)
│   ├── subject (text)
│   ├── message (text)
│   └── created_at (timestamp)
│
├── 📊 sponsors
│   ├── id (UUID)
│   ├── name (text)
│   ├── tier (text)
│   ├── logo (text)
│   ├── website (text)
│   ├── order_index (integer)
│   └── created_at (timestamp)
│
└── 📊 team_members
    ├── id (UUID)
    ├── name (text)
    ├── role (text)
    ├── photo (text)
    ├── bio (text)
    ├── order_index (integer)
    └── created_at (timestamp)

Storage Buckets:
├── 📦 photos (public)
└── 📦 sponsor-logos (public)
```

## 🎨 Component Hierarchy

```
App
├── Header
│   └── Navigation Links
│
├── Main Content (Routes)
│   ├── Home
│   ├── About
│   ├── CAD
│   ├── Sponsors
│   ├── WantToSponsor
│   ├── Contact
│   └── Admin
│
└── Footer
    ├── About Section
    ├── Quick Links
    └── Contact Info
```

## 🚀 Deployment Flow

```
Development → GitHub → Vercel → Production

1. Code locally
   ↓
2. Test with `npm run dev`
   ↓
3. Commit to Git
   ↓
4. Push to GitHub
   ↓
5. Vercel auto-deploys
   ↓
6. Live site updated
```

## 📋 Quick Reference

### Essential Commands
```bash
npm install          # Install dependencies
npm run dev         # Start dev server (localhost:3000)
npm run build       # Build for production
npm run preview     # Preview production build
```

### Important URLs
- **Local:** http://localhost:3000
- **Supabase:** https://app.supabase.com
- **Vercel:** https://vercel.com/dashboard
- **Admin:** your-site.com/admin

### Key Files to Edit
- **Content:** `src/pages/*.jsx`
- **Styles:** `tailwind.config.js`
- **Database:** `src/lib/supabase.js`
- **Photos:** `public/photos/*/`

### Environment Variables
```
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key
```

## 🎯 Common Tasks

### Add Photos
1. Go to `public/photos/[folder]/`
2. Add photos as photo1.jpg, photo2.jpg, etc.
3. Commit and push

### Update Content
1. Edit `src/pages/[PageName].jsx`
2. Save changes
3. Test locally
4. Commit and push

### View Form Submissions
1. Go to your-site.com/admin
2. Enter password
3. View submissions

### Change Admin Password
1. Edit `src/pages/Admin.jsx`
2. Change `ADMIN_PASSWORD` value
3. Commit and push

## 📚 Documentation Guide

**Start Here:**
1. START_HERE.md - Overview and first steps
2. QUICK_START.md - Fast setup (15 min)

**Setup:**
3. CONNECT_EXISTING_PROJECTS.md - Connect accounts
4. SUPABASE_SETUP.md - Database setup
5. DEPLOYMENT.md - Deploy to Vercel

**Reference:**
6. README.md - Full documentation
7. PROJECT_SUMMARY.md - What was built
8. DEPLOYMENT_CHECKLIST.md - Pre/post deployment

**Guides:**
9. public/photos/README.md - Photo management

---

**Need help?** Start with START_HERE.md and follow the guides! 🚀

