# JAWS Robotics Website

A professional, modern website for JAWS Robotics built with React, Tailwind CSS, and Supabase.

## 🚀 Features

- **Modern React Architecture** - Built with React 18 and Vite for optimal performance
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Professional UI** - Clean, minimalistic design with blue color scheme
- **Supabase Backend** - Database and storage for dynamic content
- **Easy Photo Management** - Simple folder-based system for updating photos
- **Contact Form** - Integrated contact form with database storage
- **Admin Dashboard** - View contact form submissions
- **Cross-Browser Compatible** - Works on Chrome, Firefox, Safari, and Edge

## 📁 Project Structure

```
jaws-robotics/
├── public/
│   └── photos/          # Photo folders (home, team, cad, sponsors)
├── src/
│   ├── components/      # Reusable components (Header, Footer)
│   ├── pages/          # Page components (Home, About, CAD, etc.)
│   ├── lib/            # Supabase configuration
│   ├── utils/          # Utility functions (photo loader)
│   ├── App.jsx         # Main app component with routing
│   ├── main.jsx        # App entry point
│   └── index.css       # Global styles and Tailwind
├── index.html          # HTML template
├── package.json        # Dependencies
└── vite.config.js      # Vite configuration
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- Supabase account (free tier works)
- Vercel account (free tier works)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory:
```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Set Up Supabase Database
See `SUPABASE_SETUP.md` for detailed instructions.

### 4. Run Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:3000`

### 5. Build for Production
```bash
npm run build
```

## 📸 Managing Photos

Photos are stored in `public/photos/` with subfolders for each section:
- `home/` - Hero images for home page
- `team/` - Team member photos
- `cad/` - Robot CAD and build photos
- `sponsors/` - Sponsor logos

Simply drop your photos into the appropriate folder named as `photo1.jpg`, `photo2.jpg`, etc.

See `public/photos/README.md` for detailed photo management instructions.

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Content
- Update text content directly in the page components (`src/pages/`)
- Modify team information in the About page
- Update sponsorship tiers in the Want to Sponsor page

### Contact Information
Update contact details in `src/pages/Contact.jsx`

## 🔐 Admin Access

Access the admin dashboard at `/admin`
Default password: `jawsadmin2024` (change in `src/pages/Admin.jsx`)

## 🚀 Deployment to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

See `DEPLOYMENT.md` for detailed deployment instructions.

## 📝 Pages

- **Home** (`/`) - Hero section, team overview, and call-to-action
- **About Us** (`/about`) - Team mission, story, values, and members
- **Our CAD** (`/cad`) - Gallery of robot designs and CAD work
- **Sponsors** (`/sponsors`) - Current sponsors with thank you message
- **Want to Sponsor?** (`/want-to-sponsor`) - Sponsorship tiers and benefits
- **Contact** (`/contact`) - Contact form and information
- **Admin** (`/admin`) - View contact form submissions (password protected)

## 🛠️ Tech Stack

- **Frontend:** React 18, React Router
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Backend:** Supabase (PostgreSQL database + Storage)
- **Deployment:** Vercel
- **Fonts:** Inter (Google Fonts)

## 📞 Support

For questions or issues, contact your web administrator or refer to the documentation files.

## 📄 License

© 2024 JAWS Robotics. All rights reserved.

