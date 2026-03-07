# Quick Start Guide - JAWS Robotics Website

Get your website up and running in 15 minutes!

## 🚀 What You Have

A complete, professional robotics team website with:
- ✅ 7 fully functional pages
- ✅ Contact form with database storage
- ✅ Admin dashboard
- ✅ Photo management system
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Professional blue color scheme
- ✅ Ready to deploy to Vercel

## 📋 Prerequisites

- Node.js 18+ installed ([download here](https://nodejs.org))
- Supabase account (you already have one!)
- Vercel account (you already have one!)
- GitHub account

## ⚡ Quick Setup (3 Steps)

### Step 1: Connect to Supabase (5 minutes)

1. **Get your Supabase credentials:**
   - Open your Supabase project at [app.supabase.com](https://app.supabase.com)
   - Go to Settings → API
   - Copy "Project URL" and "anon public" key

2. **Update the .env file:**
   - Open `.env` in the project root
   - Replace the placeholder values with your actual credentials:
     ```
     VITE_SUPABASE_URL=https://your-project.supabase.co
     VITE_SUPABASE_ANON_KEY=your-actual-anon-key
     ```

3. **Set up the database:**
   - In Supabase, go to SQL Editor
   - Open `SUPABASE_SETUP.md` and copy the SQL from Step 3
   - Paste in SQL Editor and click "Run"
   - This creates all necessary tables

### Step 2: Test Locally (5 minutes)

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Go to `http://localhost:3000`
   - Browse all pages
   - Test the contact form
   - Check admin page (password: `jawsadmin2024`)

### Step 3: Deploy to Vercel (5 minutes)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial JAWS Robotics website"
   git push
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Add environment variables:
     - `VITE_SUPABASE_URL` = your Supabase URL
     - `VITE_SUPABASE_ANON_KEY` = your Supabase key
   - Click "Deploy"

3. **Done!** Your site is live! 🎉

## 📸 Adding Your Photos

Photos go in `public/photos/` with these subfolders:

- **home/** - Hero images (3 photos: photo1.jpg, photo2.jpg, photo3.jpg)
- **team/** - Team member photos (photo1.jpg, photo2.jpg, etc.)
- **cad/** - Robot CAD and build photos
- **sponsors/** - Sponsor logos

Just drop your photos in, name them sequentially, commit, and push!

See `public/photos/README.md` for detailed photo guidelines.

## 🎨 Customizing Content

### Update Team Information
Edit `src/pages/About.jsx` - Update mission, story, and values

### Update Contact Info
Edit `src/pages/Contact.jsx` - Change email, address, meeting times

### Update Sponsorship Tiers
Edit `src/pages/WantToSponsor.jsx` - Modify tiers and benefits

### Change Colors
Edit `tailwind.config.js` - Customize the color scheme

## 🔐 Security

**Important:** Change the admin password!
- Open `src/pages/Admin.jsx`
- Find line: `const ADMIN_PASSWORD = 'jawsadmin2024'`
- Change to your own password

## 📚 Full Documentation

- **CONNECT_EXISTING_PROJECTS.md** - Detailed guide for connecting to your existing Supabase/Vercel
- **SUPABASE_SETUP.md** - Complete Supabase database setup
- **DEPLOYMENT.md** - Comprehensive Vercel deployment guide
- **README.md** - Full project documentation

## ✅ Testing Checklist

Before going live, test:

- [ ] All pages load without errors
- [ ] Navigation works on all pages
- [ ] Contact form submits successfully
- [ ] Form data appears in Supabase
- [ ] Admin page is accessible
- [ ] Site works on mobile
- [ ] Site works on different browsers
- [ ] Photos display correctly

## 🆘 Troubleshooting

### Build fails
- Check all files are saved
- Run `npm install` again
- Check for syntax errors in console

### Contact form doesn't work
- Verify `.env` has correct Supabase credentials
- Check Supabase tables were created
- Look at browser console for errors

### Site loads but looks broken
- Clear browser cache
- Check if CSS is loading
- Verify Tailwind is configured

### Can't connect to Supabase
- Verify credentials in `.env`
- Restart dev server after changing `.env`
- Check Supabase project is active

## 🎯 Next Steps

1. ✅ Get site running locally
2. ✅ Deploy to Vercel
3. 📸 Add your team photos
4. 📝 Customize content
5. 🏢 Add sponsor logos
6. 🌐 Set up custom domain (optional)
7. 📊 Enable Vercel Analytics
8. 🎉 Share with your team!

## 💡 Pro Tips

- **Test locally first** - Always test changes with `npm run dev` before deploying
- **Commit often** - Small, frequent commits are easier to manage
- **Use placeholders** - The site works with placeholder images until you add your own
- **Check console** - Browser console (F12) shows helpful error messages
- **Read the docs** - Each guide has detailed troubleshooting sections

## 📞 Need Help?

1. Check the relevant documentation file
2. Look at browser console for error messages
3. Review Supabase/Vercel dashboards for issues
4. Check that environment variables are set correctly

## 🎉 You're Ready!

Your JAWS Robotics website is professional, modern, and ready to showcase your team. 

**Time to launch:** ~15 minutes
**Difficulty:** Easy
**Result:** Professional team website! 🚀

---

**Questions?** Check the detailed guides in the project root:
- CONNECT_EXISTING_PROJECTS.md
- SUPABASE_SETUP.md  
- DEPLOYMENT.md
- README.md

