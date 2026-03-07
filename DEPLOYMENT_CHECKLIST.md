# Deployment Checklist

Use this checklist to ensure a smooth deployment of your JAWS Robotics website.

## Pre-Deployment Checklist

### 1. Supabase Setup
- [ ] Supabase account created/accessed
- [ ] Project created or selected
- [ ] API credentials copied (URL and anon key)
- [ ] `.env` file updated with credentials
- [ ] Database tables created (run SQL from SUPABASE_SETUP.md)
- [ ] Storage buckets created (`photos` and `sponsor-logos`)
- [ ] RLS policies configured
- [ ] Test data added (optional)

### 2. Local Testing
- [ ] Dependencies installed (`npm install`)
- [ ] Development server runs (`npm run dev`)
- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Contact form submits successfully
- [ ] Form data appears in Supabase
- [ ] Admin page accessible (password: `jawsadmin2024`)
- [ ] No console errors in browser (F12)
- [ ] Build succeeds (`npm run build`)

### 3. Code Preparation
- [ ] Admin password changed in `src/pages/Admin.jsx`
- [ ] Contact information updated in `src/pages/Contact.jsx`
- [ ] Team information customized in `src/pages/About.jsx`
- [ ] Social media links updated in Footer
- [ ] All placeholder text replaced with actual content
- [ ] `.env` file NOT committed (check .gitignore)

### 4. GitHub Setup
- [ ] GitHub repository created
- [ ] Code committed to repository
- [ ] `.env` file excluded (in .gitignore)
- [ ] All files pushed to GitHub
- [ ] Repository is accessible

## Deployment Checklist

### 5. Vercel Setup
- [ ] Vercel account accessed
- [ ] New project created or existing selected
- [ ] GitHub repository connected
- [ ] Framework preset set to "Vite"
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Root directory: `.` (default)

### 6. Environment Variables
- [ ] `VITE_SUPABASE_URL` added in Vercel
- [ ] `VITE_SUPABASE_ANON_KEY` added in Vercel
- [ ] Variables added for all environments (Production, Preview, Development)
- [ ] Values match those in local `.env` file

### 7. Initial Deployment
- [ ] Deploy button clicked
- [ ] Build completes successfully
- [ ] No build errors
- [ ] Deployment URL received
- [ ] Site is accessible at Vercel URL

## Post-Deployment Checklist

### 8. Functionality Testing
- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] About Us page displays
- [ ] CAD gallery works
- [ ] Sponsors page loads
- [ ] Want to Sponsor page displays
- [ ] Contact form is accessible
- [ ] Contact form submits successfully
- [ ] Form data saves to Supabase
- [ ] Admin page is accessible
- [ ] Admin page shows submissions

### 9. Responsive Testing
- [ ] Site works on desktop (Chrome)
- [ ] Site works on desktop (Firefox)
- [ ] Site works on desktop (Safari)
- [ ] Site works on desktop (Edge)
- [ ] Site works on mobile (portrait)
- [ ] Site works on mobile (landscape)
- [ ] Site works on tablet
- [ ] Navigation menu works on mobile
- [ ] All images display correctly
- [ ] Text is readable on all devices

### 10. Performance Testing
- [ ] Pages load quickly
- [ ] Images load properly
- [ ] No broken links
- [ ] No console errors
- [ ] Smooth animations
- [ ] Forms are responsive

### 11. Content Verification
- [ ] All text is correct
- [ ] Contact information is accurate
- [ ] Social media links work
- [ ] Email links work
- [ ] All images display (or placeholders show)
- [ ] No Lorem Ipsum text remaining

## Optional Enhancements

### 12. Custom Domain (Optional)
- [ ] Domain purchased
- [ ] Domain added in Vercel
- [ ] DNS records configured
- [ ] SSL certificate active
- [ ] Domain redirects to HTTPS

### 13. Analytics (Optional)
- [ ] Vercel Analytics enabled
- [ ] Speed Insights enabled
- [ ] Google Analytics added (if desired)

### 14. SEO (Optional)
- [ ] Meta descriptions added
- [ ] Open Graph tags added
- [ ] Favicon added
- [ ] Sitemap created

## Maintenance Checklist

### 15. Regular Updates
- [ ] Photos added to `public/photos/` folders
- [ ] Sponsor logos uploaded
- [ ] Team member information updated
- [ ] Contact form submissions reviewed regularly
- [ ] Content kept current

### 16. Security
- [ ] Admin password is strong and secure
- [ ] Environment variables are private
- [ ] Supabase RLS policies reviewed
- [ ] No sensitive data in client code

## Troubleshooting

If any item fails, refer to:
- **Build errors:** Check DEPLOYMENT.md troubleshooting section
- **Supabase issues:** Check SUPABASE_SETUP.md troubleshooting
- **Connection issues:** Check CONNECT_EXISTING_PROJECTS.md
- **General help:** Check README.md

## Final Verification

Before announcing the site:
- [ ] All checklist items above are complete
- [ ] Site tested by multiple people
- [ ] Feedback incorporated
- [ ] Team approves the site
- [ ] Ready to share with sponsors and community

## Launch!

Once all items are checked:
- [ ] Share URL with team
- [ ] Post on social media
- [ ] Add to email signatures
- [ ] Include in team materials
- [ ] Celebrate! 🎉

---

## Quick Reference

**Local Development:**
```bash
npm run dev
```

**Build:**
```bash
npm run build
```

**Deploy:**
```bash
git add .
git commit -m "Update message"
git push
```
(Vercel auto-deploys on push)

**Admin Access:**
- URL: `your-site.com/admin`
- Password: (the one you set in Admin.jsx)

**Environment Variables:**
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

---

**Need Help?** Check the documentation files or contact your web administrator.

