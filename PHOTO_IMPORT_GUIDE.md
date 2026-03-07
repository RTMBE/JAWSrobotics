# Photo and Logo Import Guide for JAWS Robotics Website

## 📸 Where to Import Your Photos

### Team Logo
**Location:** `public/logo.png` or `public/logo.jpg`

1. Save your JAWS Robotics logo as either:
   - `logo.png` (recommended for logos with transparency)
   - `logo.jpg` (for logos without transparency)
2. Place it directly in the `public/` folder (NOT in `public/photos/`)
3. The header will automatically detect and use your logo
4. If no logo is found, it will show a blue "J" placeholder

**Recommended specs:**
- Format: PNG (with transparent background) or JPG
- Dimensions: 200x200 pixels or larger (will auto-scale to fit)
- File size: Under 100KB

---

### Team Member Photos
**Location:** `public/photos/team/`

You have 3 team members:
1. **Ben** - Coding & Finance
2. **Maksym** - CAD & Manufacturing
3. **Owen** - Finance, Driver & Manufacturing

**How to add:**
1. Name the photos: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`
2. Place them in `public/photos/team/`
3. They will appear in order on the About Us page

**Recommended specs:**
- Format: JPG
- Dimensions: 800x800 pixels (square)
- File size: Under 200KB each

---

### Hero Images (Home Page Slider)
**Location:** `public/photos/home/`

**How to add:**
1. Name the photos: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`
2. Place them in `public/photos/home/`
3. They will automatically rotate on the home page

**Recommended specs:**
- Format: JPG
- Dimensions: 1920x1080 or larger (16:9 aspect ratio)
- File size: Under 500KB each
- Quantity: 3 images recommended

---

### Robot/CAD Photos
**Location:** `public/photos/cad/`

**How to add:**
1. Name the photos: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
2. Place them in `public/photos/cad/`
3. They will appear in the CAD gallery with a lightbox viewer

**Recommended specs:**
- Format: JPG
- Dimensions: 1200x800 or larger
- File size: Under 300KB each
- Quantity: As many as you want!

---

### Sponsor Logos
**Location:** `public/photos/sponsors/`

**Current sponsor:** ODRIVEBots

**How to add:**
1. Name the logos: `photo1.png`, `photo2.png`, `photo3.png`, etc.
2. Place them in `public/photos/sponsors/`
3. They will appear on the Sponsors page

**Recommended specs:**
- Format: PNG (with transparent background preferred)
- Dimensions: 600x300 pixels (landscape) or 400x400 (square)
- File size: Under 100KB each

---

## 🚀 Quick Start

### Minimum Photos to Get Started:
1. **Logo:** 1 file in `public/` → `logo.png`
2. **Team:** 3 files in `public/photos/team/` → `photo1.jpg` through `photo3.jpg`
3. **Home:** 3 files in `public/photos/home/` → `photo1.jpg` through `photo3.jpg`
4. **CAD:** At least 6 files in `public/photos/cad/` → `photo1.jpg` through `photo6.jpg`
5. **Sponsors:** 1 file in `public/photos/sponsors/` → `photo1.png` (ODRIVEBots logo)

### After Adding Photos:
1. Commit the changes to Git
2. Push to GitHub
3. Vercel will automatically rebuild and deploy
4. Your photos will appear on the live site!

---

## 📁 Complete Folder Structure

```
public/
├── logo.png                    ← Your team logo
└── photos/
    ├── home/
    │   ├── photo1.jpg         ← Hero image 1
    │   ├── photo2.jpg         ← Hero image 2
    │   └── photo3.jpg         ← Hero image 3
    ├── team/
    │   ├── photo1.jpg         ← Ben's photo
    │   ├── photo2.jpg         ← Maksym's photo
    │   └── photo3.jpg         ← Owen's photo
    ├── cad/
    │   ├── photo1.jpg         ← Robot/CAD photo 1
    │   ├── photo2.jpg         ← Robot/CAD photo 2
    │   ├── photo3.jpg         ← Robot/CAD photo 3
    │   └── ...                ← Add as many as you want
    └── sponsors/
        ├── photo1.png         ← ODRIVEBots logo
        └── ...                ← Future sponsor logos
```

---

## 💡 Tips

1. **Use descriptive file names locally** - Rename to `photo1.jpg`, `photo2.jpg`, etc. when you copy them to the folders
2. **Optimize images** - Use tools like TinyPNG or ImageOptim to reduce file sizes
3. **Keep backups** - Save original high-resolution versions elsewhere
4. **Test locally** - Run `npm run dev` to see how photos look before deploying
5. **Sequential naming** - The website loads photos in numerical order (photo1, photo2, photo3...)

---

## 🔄 Updating Photos

To replace a photo:
1. Delete the old photo from the folder
2. Add the new photo with the same name
3. Commit and push to GitHub
4. Vercel will automatically redeploy

---

## ❓ Troubleshooting

**Photo not showing up?**
- Check the file name (must be `photo1.jpg`, `photo2.jpg`, etc.)
- Check the file extension (.jpg, .png)
- Make sure it's in the correct folder
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**Logo not showing up?**
- Make sure it's named exactly `logo.png` or `logo.jpg`
- Make sure it's in the `public/` folder (not `public/photos/`)
- Check the file size (should be under 100KB)

**Photos loading slowly?**
- Compress your images to reduce file size
- Use JPG for photos, PNG only for logos with transparency
- Aim for under 500KB for hero images, under 200KB for others

---

## 📞 Need Help?

Check the main README.md or contact your web administrator.

**Happy photo uploading!** 📸

