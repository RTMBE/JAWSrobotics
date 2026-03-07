# Connecting to Existing Supabase and Vercel Projects

Since you already have Supabase and Vercel accounts with open projects, follow this guide to connect them to your JAWS Robotics website.

## Part 1: Connect to Existing Supabase Project

### Option A: Use Existing Supabase Project

1. **Open your Supabase project**
   - Go to [app.supabase.com](https://app.supabase.com)
   - Select your existing project or create a new one for JAWS Robotics

2. **Get your API credentials**
   - Click on "Settings" (gear icon) in the left sidebar
   - Click "API"
   - Copy these two values:
     - **Project URL** (looks like: `https://xxxxx.supabase.co`)
     - **anon public** key (long string under "Project API keys")

3. **Update your .env file**
   - Open the `.env` file in the project root
   - Replace the placeholder values:
     ```
     VITE_SUPABASE_URL=https://your-actual-project.supabase.co
     VITE_SUPABASE_ANON_KEY=your-actual-anon-key-here
     ```

4. **Set up the database tables**
   - In Supabase, click "SQL Editor" in the left sidebar
   - Click "New Query"
   - Copy the SQL from `SUPABASE_SETUP.md` (Step 3)
   - Paste and click "Run"
   - This creates the necessary tables for your website

5. **Set up storage buckets**
   - Click "Storage" in the left sidebar
   - Create two public buckets:
     - `photos`
     - `sponsor-logos`
   - Follow the storage policy setup in `SUPABASE_SETUP.md` (Step 5)

### Option B: Create New Supabase Project for JAWS Robotics

If you prefer to keep this separate:
1. In Supabase dashboard, click "New Project"
2. Name it "JAWS Robotics"
3. Follow the complete setup in `SUPABASE_SETUP.md`

## Part 2: Connect to Existing Vercel Project

### Option A: Use Existing Vercel Project

1. **Open your Vercel dashboard**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Select your existing project

2. **Update the project**
   - You'll need to either:
     - **Option 1:** Import this new repository as a new project
     - **Option 2:** Update your existing project's repository

3. **For a new import:**
   - Click "Add New..." → "Project"
   - Import the JAWSrobotics repository from GitHub
   - Follow deployment steps in `DEPLOYMENT.md`

4. **For updating existing project:**
   - Go to Settings → Git
   - Update the connected repository to JAWSrobotics
   - Redeploy

### Option B: Create New Vercel Project

1. In Vercel dashboard, click "Add New..." → "Project"
2. Import the JAWSrobotics repository
3. Follow the complete deployment guide in `DEPLOYMENT.md`

## Part 3: Configure Environment Variables in Vercel

**This is critical!** Your website won't work without these.

1. **In your Vercel project:**
   - Go to Settings → Environment Variables

2. **Add these variables:**
   - Click "Add New"
   - Name: `VITE_SUPABASE_URL`
   - Value: (paste your Supabase project URL)
   - Select all environments (Production, Preview, Development)
   - Click "Save"

3. **Add second variable:**
   - Click "Add New"
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: (paste your Supabase anon key)
   - Select all environments
   - Click "Save"

4. **Redeploy:**
   - Go to Deployments tab
   - Click "..." on the latest deployment
   - Click "Redeploy"

## Part 4: Test the Connection

### Test Locally First

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open in browser:**
   - Go to `http://localhost:3000`

3. **Test these features:**
   - [ ] All pages load without errors
   - [ ] Contact form submits (check Supabase for the entry)
   - [ ] Admin page loads (password: `jawsadmin2024`)
   - [ ] Check browser console for errors (F12)

### Test on Vercel

1. **After deployment completes:**
   - Visit your Vercel URL (e.g., `your-project.vercel.app`)

2. **Test the same features:**
   - [ ] All pages load
   - [ ] Contact form works
   - [ ] No console errors

## Part 5: Verify Database Connection

1. **Submit a test contact form:**
   - Go to the Contact page
   - Fill out and submit the form

2. **Check Supabase:**
   - Open Supabase dashboard
   - Click "Table Editor"
   - Select `contact_submissions` table
   - You should see your test submission

3. **If it doesn't work:**
   - Check browser console for errors
   - Verify environment variables are correct
   - Check Supabase RLS policies are enabled
   - See troubleshooting section below

## Troubleshooting

### "Failed to fetch" or CORS errors

**Problem:** Can't connect to Supabase

**Solutions:**
1. Verify `.env` file has correct values
2. Restart development server after changing `.env`
3. Check Supabase project is active (not paused)
4. Verify you're using the correct project URL

### Contact form doesn't submit

**Problem:** Form submission fails

**Solutions:**
1. Check browser console for specific error
2. Verify `contact_submissions` table exists in Supabase
3. Check RLS policies allow INSERT
4. Test Supabase connection with SQL Editor

### Vercel deployment succeeds but site doesn't work

**Problem:** Site loads but features broken

**Solutions:**
1. Check environment variables are set in Vercel
2. Verify variable names start with `VITE_`
3. Redeploy after adding environment variables
4. Check Vercel deployment logs for errors

### Images don't load

**Problem:** Placeholder images don't show

**Solutions:**
1. This is normal - placeholders use external URLs
2. Add your own photos to `public/photos/` folders
3. Commit and push to trigger new deployment

## Quick Start Checklist

Use this checklist to ensure everything is connected:

- [ ] Supabase project selected/created
- [ ] Supabase API credentials copied
- [ ] `.env` file updated with Supabase credentials
- [ ] Database tables created in Supabase
- [ ] Storage buckets created in Supabase
- [ ] RLS policies configured
- [ ] Code pushed to GitHub
- [ ] Vercel project selected/created
- [ ] Repository connected to Vercel
- [ ] Environment variables added in Vercel
- [ ] Site deployed successfully
- [ ] Contact form tested and working
- [ ] Admin page accessible

## Next Steps

Once everything is connected and working:

1. **Customize content:**
   - Update team information
   - Add your photos
   - Update contact details

2. **Set up custom domain** (optional):
   - Follow Vercel domain setup
   - Update DNS records

3. **Add real data:**
   - Upload sponsor logos
   - Add team member information
   - Update text content

4. **Security:**
   - Change admin password
   - Review Supabase security settings
   - Set up proper authentication (future enhancement)

## Getting Help

If you run into issues:

1. Check the error message in browser console (F12)
2. Review the relevant setup guide (SUPABASE_SETUP.md or DEPLOYMENT.md)
3. Check Supabase and Vercel documentation
4. Verify all environment variables are correct

## Important Notes

- **Never commit the `.env` file** - It's already in `.gitignore`
- **Environment variables must start with `VITE_`** - This is required for Vite
- **Restart dev server** - After changing `.env` file
- **Redeploy on Vercel** - After adding environment variables

---

**You're all set!** Your JAWS Robotics website should now be connected to your existing Supabase and Vercel projects. 🚀

