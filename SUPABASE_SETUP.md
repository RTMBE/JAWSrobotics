# Supabase Setup Guide

This guide will help you set up the Supabase backend for the JAWS Robotics website.

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in project details:
   - **Name:** JAWS Robotics
   - **Database Password:** (create a strong password and save it)
   - **Region:** Choose closest to your location
5. Click "Create new project"
6. Wait for the project to be created (takes 1-2 minutes)

## Step 2: Get API Credentials

1. In your Supabase project dashboard, click on "Settings" (gear icon)
2. Click on "API" in the left sidebar
3. Copy the following values:
   - **Project URL** (under "Project URL")
   - **anon public** key (under "Project API keys")
4. Add these to your `.env` file:
   ```
   VITE_SUPABASE_URL=your_project_url_here
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```

## Step 3: Create Database Tables

1. In your Supabase dashboard, click on "SQL Editor" in the left sidebar
2. Click "New Query"
3. Copy and paste the following SQL:

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

-- Create policy for reading contact submissions (you can add authentication later)
CREATE POLICY "Enable read access for all users" ON contact_submissions
  FOR SELECT USING (true);
```

4. Click "Run" to execute the SQL
5. You should see "Success. No rows returned" message

## Step 4: Create Storage Buckets

1. Click on "Storage" in the left sidebar
2. Click "New bucket"
3. Create the following buckets:

### Bucket 1: photos
- **Name:** photos
- **Public bucket:** Yes (check the box)
- Click "Create bucket"

### Bucket 2: sponsor-logos
- **Name:** sponsor-logos
- **Public bucket:** Yes (check the box)
- Click "Create bucket"

## Step 5: Set Storage Policies

For each bucket, you need to set policies:

1. Click on the bucket name
2. Click "Policies" tab
3. Click "New Policy"
4. Select "For full customization"
5. Add the following policies:

### For SELECT (read) operations:
```sql
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
USING ( bucket_id = 'photos' );
```

### For INSERT (upload) operations:
```sql
CREATE POLICY "Public Upload"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'photos' );
```

Repeat for the `sponsor-logos` bucket (replace 'photos' with 'sponsor-logos').

## Step 6: Add Sample Data (Optional)

You can add sample sponsors and team members:

```sql
-- Add sample sponsors
INSERT INTO sponsors (name, tier, logo) VALUES
  ('Sample Platinum Sponsor', 'platinum', 'https://via.placeholder.com/300x150'),
  ('Sample Gold Sponsor', 'gold', 'https://via.placeholder.com/300x150'),
  ('Sample Silver Sponsor', 'silver', 'https://via.placeholder.com/300x150');

-- Add sample team members
INSERT INTO team_members (name, role, photo) VALUES
  ('Team Captain', 'Leadership', 'https://via.placeholder.com/400x400'),
  ('Lead Engineer', 'Mechanical', 'https://via.placeholder.com/400x400'),
  ('Lead Programmer', 'Software', 'https://via.placeholder.com/400x400');
```

## Step 7: Verify Setup

1. Go back to your website
2. Try submitting the contact form
3. Check the `contact_submissions` table in Supabase to see if the data was saved
4. Visit the Sponsors and About pages to see if sample data appears

## Troubleshooting

### "Failed to fetch" errors
- Check that your `.env` file has the correct Supabase URL and key
- Make sure you've restarted the development server after adding `.env`

### Data not appearing
- Verify RLS policies are set correctly
- Check browser console for errors
- Ensure tables were created successfully

### Contact form not working
- Check that the `contact_submissions` table exists
- Verify the INSERT policy is enabled
- Check browser console for error messages

## Next Steps

- Customize the database schema as needed
- Add authentication for admin features
- Upload actual sponsor logos to storage
- Add real team member data

## Security Notes

- The current setup allows public read/write for development
- For production, implement proper authentication
- Consider adding rate limiting for contact form
- Change the admin password in the code
- Use environment variables for sensitive data

## Support

For Supabase-specific issues, refer to:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)

