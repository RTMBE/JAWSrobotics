# 🚀 Deploy JAWS Robotics Website - Step by Step

Follow these steps to get your website live in the next 10-15 minutes!

---

## Step 1: Set Up Supabase Database (5 minutes)

### 1.1 Go to Supabase
1. Open https://supabase.com in your browser
2. Sign in to your account
3. Click **"New Project"** or select your existing JAWS Robotics project

### 1.2 Get Your API Credentials
1. In your Supabase project, click **"Settings"** (gear icon in sidebar)
2. Click **"API"** in the left menu
3. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public key** (long string under "Project API keys")

### 1.3 Create Database Tables
1. Click **"SQL Editor"** in the left sidebar
2. Click **"New Query"**
3. Copy and paste this entire SQL script:

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create sponsors table
CREATE TABLE sponsors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  tier TEXT NOT NULL CHECK (tier IN ('platinum', 'gold', 'silver', 'bronze')),
  logo TEXT,
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  order_index INTEGER DEFAULT 0
);

-- Create team_members table
CREATE TABLE team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  photo TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  order_index INTEGER DEFAULT 0
);

-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON sponsors
  FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON team_members
  FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON blog_posts
  FOR SELECT USING (true);

-- Create policy for contact form submissions (insert only)
CREATE POLICY "Enable insert for all users" ON contact_submissions
  FOR INSERT WITH CHECK (true);

-- Create policy for reading contact submissions
CREATE POLICY "Enable read access for all users" ON contact_submissions
  FOR SELECT USING (true);

-- Insert default blog posts
INSERT INTO blog_posts (title, content, author, category) VALUES
('Swerve Drive Design Progress', 'Our team is making great progress on designing our swerve drive system! Maksym is leading the CAD work, and we''re learning so much about the mechanics and engineering behind this advanced drivetrain. We''re excited to see our designs come to life as we move into the build phase. Stay tuned for updates on our progress!', 'JAWS Robotics Team', 'Technical'),
('Year Budget Planning', 'Ben and Owen have been hard at work planning our budget for the year. Thanks to our amazing sponsor ODRIVEBots, we have the resources to build a competitive robot. We''re carefully allocating funds for parts, tools, and competition fees. If you''re interested in supporting our team, check out our sponsorship opportunities!', 'JAWS Robotics Team', 'Team Updates');
```

4. Click **"Run"** (or press F5)
5. You should see "Success. No rows returned" ✅

---

## Step 2: Push Code to GitHub (2 minutes)

Open your terminal and run these commands:

```bash
git add .
git commit -m "Initial commit - JAWS Robotics website with photos"
git push origin main
```

---

## Step 3: Deploy to Vercel (5 minutes)

### 3.1 Connect to Vercel
1. Go to https://vercel.com
2. Sign in to your account
3. Click **"Add New..."** → **"Project"**
4. Click **"Import Git Repository"**
5. Find and select **"JAWSrobotics"** from the list
6. Click **"Import"**

### 3.2 Configure Project
1. **Framework Preset:** Should auto-detect as "Vite"
2. **Root Directory:** Leave as `./`
3. **Build Command:** `npm run build` (should be auto-filled)
4. **Output Directory:** `dist` (should be auto-filled)

### 3.3 Add Environment Variables
1. Click **"Environment Variables"** section
2. Add these two variables:

**Variable 1:**
- Key: `VITE_SUPABASE_URL`
- Value: (paste your Supabase Project URL from Step 1.2)

**Variable 2:**
- Key: `VITE_SUPABASE_ANON_KEY`
- Value: (paste your Supabase anon key from Step 1.2)

3. Click **"Deploy"**

### 3.4 Wait for Deployment
- Vercel will build and deploy your site (takes 1-2 minutes)
- You'll see a progress screen
- When done, you'll see "Congratulations!" 🎉

---

## Step 4: Get Your Live URL

1. After deployment completes, you'll see your live URL
2. It will look like: `https://jawsrobotics.vercel.app` or similar
3. Click **"Visit"** to see your live site!

---

## ✅ Verification Checklist

Visit your live site and check:
- [ ] Home page loads with hero images
- [ ] Logo appears in header
- [ ] About page shows 3 team members (Ben, Maksym, Owen)
- [ ] CAD page shows your CAD photo
- [ ] Blog page shows 2 blog posts
- [ ] Contact form works (try submitting a test message)
- [ ] All navigation links work

---

## 🎉 You're Live!

Your JAWS Robotics website is now live on the internet!

**Share your URL:**
- Add it to your social media
- Share with sponsors
- Send to team members
- Add to competition materials

---

## 📝 Next Steps

1. **Add Sponsor Logo:** Upload ODRIVEBots logo to `public/photos/sponsors/photo1.png`
2. **Add More CAD Photos:** Add more photos to `public/photos/cad/`
3. **Custom Domain (Optional):** In Vercel, you can add a custom domain like `jawsrobotics.com`

---

## 🆘 Need Help?

If anything doesn't work:
1. Check that environment variables are correct in Vercel
2. Make sure all SQL ran successfully in Supabase
3. Check the Vercel deployment logs for errors
4. Verify your GitHub repo has all the files

**You've got this!** 🚀

