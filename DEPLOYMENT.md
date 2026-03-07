# Deployment Guide - Vercel

This guide will walk you through deploying the JAWS Robotics website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Completed Supabase setup
- Code pushed to a GitHub repository

## Step 1: Push Code to GitHub

If you haven't already:

```bash
git init
git add .
git commit -m "Initial commit - JAWS Robotics website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/JAWSrobotics.git
git push -u origin main
```

## Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New..." → "Project"
4. Import your GitHub repository:
   - Find "JAWSrobotics" in the list
   - Click "Import"

## Step 3: Configure Project Settings

### Framework Preset
- Vercel should auto-detect "Vite"
- If not, select "Vite" from the dropdown

### Build Settings
These should be auto-filled, but verify:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Root Directory
- Leave as `.` (root)

## Step 4: Add Environment Variables

This is the most important step!

1. Click on "Environment Variables" section
2. Add the following variables:

| Name | Value |
|------|-------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon key |

**Where to find these values:**
- Go to your Supabase project
- Click Settings → API
- Copy "Project URL" and "anon public" key

3. Make sure to add them for all environments (Production, Preview, Development)

## Step 5: Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 1-2 minutes)
3. Once complete, you'll see "Congratulations!" with your live URL

## Step 6: Configure Custom Domain (Optional)

### Using Vercel Domain
Your site is automatically available at: `your-project-name.vercel.app`

### Using Custom Domain
1. In your Vercel project dashboard, go to "Settings" → "Domains"
2. Click "Add"
3. Enter your domain name (e.g., `jawsrobotics.com`)
4. Follow the instructions to:
   - Add DNS records at your domain registrar
   - Verify domain ownership
5. Wait for DNS propagation (can take up to 48 hours)

## Step 7: Verify Deployment

Test the following:

- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Images display (or placeholders show)
- [ ] Contact form submits successfully
- [ ] Admin page is accessible
- [ ] Site is responsive on mobile
- [ ] All pages load without errors

### Check Browser Console
1. Open browser developer tools (F12)
2. Check Console tab for errors
3. Check Network tab for failed requests

## Step 8: Set Up Automatic Deployments

Vercel automatically deploys when you push to GitHub:

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Vercel automatically builds and deploys
4. Check deployment status in Vercel dashboard

## Common Issues & Solutions

### Build Fails

**Error: "Module not found"**
- Solution: Make sure all dependencies are in `package.json`
- Run `npm install` locally to verify

**Error: "Environment variable not defined"**
- Solution: Check that environment variables are added in Vercel
- Make sure they start with `VITE_`

### Site Loads but Features Don't Work

**Contact form doesn't submit**
- Check Supabase environment variables are correct
- Verify Supabase RLS policies are set up
- Check browser console for errors

**Images don't load**
- Verify images are in `public/photos/` folder
- Check file names match (photo1.jpg, photo2.jpg, etc.)
- Ensure images are committed to git

### Performance Issues

**Slow loading**
- Optimize images (compress before uploading)
- Check Vercel Analytics for insights
- Consider using Vercel Image Optimization

## Monitoring & Analytics

### Enable Vercel Analytics
1. Go to your project in Vercel
2. Click "Analytics" tab
3. Enable Web Analytics (free)
4. View visitor stats and performance metrics

### Enable Speed Insights
1. In Vercel dashboard, go to "Speed Insights"
2. Enable for your project
3. Monitor Core Web Vitals

## Updating the Site

### Content Updates
1. Edit files locally
2. Test changes: `npm run dev`
3. Commit and push to GitHub
4. Vercel auto-deploys

### Photo Updates
1. Add photos to `public/photos/` folders
2. Commit and push to GitHub
3. Vercel auto-deploys with new photos

### Environment Variable Updates
1. Go to Vercel project settings
2. Click "Environment Variables"
3. Edit or add variables
4. Redeploy the project

## Rollback Deployments

If something goes wrong:

1. Go to Vercel dashboard
2. Click "Deployments" tab
3. Find a previous working deployment
4. Click "..." → "Promote to Production"

## Production Checklist

Before going live, verify:

- [ ] All environment variables are set
- [ ] Supabase is properly configured
- [ ] Contact form works and saves to database
- [ ] All pages load without errors
- [ ] Images are optimized
- [ ] Site is tested on multiple browsers
- [ ] Site is tested on mobile devices
- [ ] Admin password has been changed
- [ ] Contact information is updated
- [ ] Social media links are updated
- [ ] Analytics are enabled

## Security Best Practices

1. **Never commit `.env` file** - It's in `.gitignore`
2. **Use environment variables** - For all sensitive data
3. **Change admin password** - Update in `src/pages/Admin.jsx`
4. **Enable HTTPS** - Vercel does this automatically
5. **Review Supabase RLS policies** - Ensure proper access control

## Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## Next Steps

1. Set up custom domain
2. Enable analytics
3. Add more content
4. Upload team photos
5. Add sponsor logos
6. Share with your team!

---

**Congratulations!** Your JAWS Robotics website is now live! 🎉

