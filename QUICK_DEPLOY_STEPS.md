# ⚡ Quick Deploy - Get Your Live Link NOW!

Your code is already on GitHub! Follow these 2 steps to get your live website:

---

## ✅ Step 1: Set Up Supabase (3 minutes)

### Go to: https://supabase.com

1. **Sign in** to your Supabase account
2. **Create a new project** (or select existing one):
   - Name: `JAWS Robotics`
   - Password: (create a strong password)
   - Region: Choose closest to you
   - Click "Create new project"

3. **Get your credentials:**
   - Click **Settings** (gear icon) → **API**
   - Copy **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - Copy **anon public** key (long string)
   - **SAVE THESE!** You'll need them in Step 2

4. **Create database tables:**
   - Click **SQL Editor** → **New Query**
   - Copy/paste this SQL:

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE sponsors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  tier TEXT NOT NULL,
  logo TEXT,
  website TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  order_index INTEGER DEFAULT 0
);

CREATE TABLE team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  photo TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  order_index INTEGER DEFAULT 0
);

CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable read access for all users" ON sponsors FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON team_members FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON blog_posts FOR SELECT USING (true);
CREATE POLICY "Enable insert for all users" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Enable read access for all users" ON contact_submissions FOR SELECT USING (true);

INSERT INTO blog_posts (title, content, author, category) VALUES
('Swerve Drive Design Progress', 'Our team is making great progress on designing our swerve drive system! Maksym is leading the CAD work, and we are learning so much about the mechanics and engineering behind this advanced drivetrain.', 'JAWS Robotics Team', 'Technical'),
('Year Budget Planning', 'Ben and Owen have been hard at work planning our budget for the year. Thanks to our amazing sponsor ODRIVEBots, we have the resources to build a competitive robot!', 'JAWS Robotics Team', 'Team Updates');
```

   - Click **Run** (or F5)
   - Should see "Success" ✅

---

## ✅ Step 2: Deploy to Vercel (2 minutes)

### Go to: https://vercel.com

1. **Sign in** to your Vercel account

2. **Import your project:**
   - Click **"Add New..."** → **"Project"**
   - Click **"Import Git Repository"**
   - Find **"RTMBE/JAWSrobotics"** and click **"Import"**

3. **Configure (should auto-detect):**
   - Framework: Vite ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅

4. **Add Environment Variables:**
   Click "Environment Variables" and add:
   
   **Variable 1:**
   - Name: `VITE_SUPABASE_URL`
   - Value: (paste your Supabase URL from Step 1)
   
   **Variable 2:**
   - Name: `VITE_SUPABASE_ANON_KEY`
   - Value: (paste your Supabase anon key from Step 1)

5. **Click "Deploy"** 🚀

6. **Wait 1-2 minutes** for deployment to complete

7. **Get your live URL!** 
   - Will look like: `https://jawsrobotics.vercel.app`
   - Click "Visit" to see your live site!

---

## 🎉 That's It!

Your JAWS Robotics website is now LIVE on the internet!

### Your Live URL will be:
`https://jawsrobotics.vercel.app` (or similar)

### What's Included:
✅ Your team logo in the header
✅ 3 team members (Ben, Maksym, Owen)
✅ Hero images on home page
✅ CAD gallery with your photo
✅ Blog with 2 posts
✅ Contact form (working!)
✅ Blue & Black minimalistic design
✅ Fully responsive (mobile, tablet, desktop)

---

## 📱 Share Your Site:
- Add to social media
- Send to sponsors
- Share with team
- Add to competition materials

---

## 🔧 Future Updates:

To update your site:
1. Make changes locally
2. Run: `git add . && git commit -m "Update" && git push`
3. Vercel auto-deploys in 1-2 minutes!

---

## 🆘 Troubleshooting:

**Site not loading?**
- Check environment variables in Vercel settings
- Make sure SQL ran successfully in Supabase

**Photos not showing?**
- They're already uploaded and committed!
- Should work automatically

**Need help?**
- Check Vercel deployment logs
- Verify Supabase tables were created

---

**You're almost there! Just complete Steps 1 & 2 above!** 🚀

