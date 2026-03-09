# How to Add the Swerve CAD Images

You mentioned you have swerve CAD images to add to Maksym's blog post. Here's how to add them:

## Step 1: Save Your CAD Images

Save your swerve CAD images to the `public/photos/blog/` folder with these names:
- `swerve-module-side-view.png` (or .jpg)
- `swerve-module-top-view.png` (or .jpg)

## Step 2: Update the Blog Post

Edit `public/blog-posts/2026-03-09-maksym-swerve-cad.md` and add the image line to the front matter:

```markdown
---
title: Major Progress on Swerve Drive CAD Design
author: Maksym - CAD Lead
date: 2026-03-09T16:00:00Z
category: Technical
image: /photos/blog/swerve-module-side-view.png
---
```

## Step 3: Commit and Push

```bash
git add public/photos/blog/*.png
git add public/blog-posts/2026-03-09-maksym-swerve-cad.md
git commit -m "Add swerve CAD images to Maksym's blog post"
git push
```

## Alternative: Add Images Inline in the Blog Post

You can also add images directly in the blog post content:

```markdown
**What We Accomplished:**

![Swerve Module Side View](/photos/blog/swerve-module-side-view.png)

Maksym successfully completed the bearing mounting system...

![Swerve Module Top View](/photos/blog/swerve-module-top-view.png)

Additionally, he designed and modeled the top mounting plate...
```

The images will automatically appear in the blog post!

