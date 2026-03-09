# Blog Posts Directory

This folder contains all blog posts for the JAWS Robotics website.

## How to Add a New Blog Post

1. **Create a new `.md` file** in this folder with the naming format:
   ```
   YYYY-MM-DD-short-title.md
   ```
   Example: `2026-03-10-testing-motors.md`

2. **Add the front matter** at the top of the file (between the `---` lines):
   ```markdown
   ---
   title: Your Blog Post Title
   author: Your Name - Your Role
   date: 2026-03-10T15:30:00Z
   category: Technical
   image: /photos/blog/your-image.png
   ---
   ```

3. **Write your content** below the front matter using regular markdown:
   ```markdown
   This is my blog post content!

   **Bold text** and *italic text* work great.

   You can add:
   - Bullet points
   - Multiple paragraphs
   - Links and more!
   ```

4. **Commit and push** to GitHub:
   ```bash
   git add public/blog-posts/2026-03-10-testing-motors.md
   git commit -m "Add blog post about motor testing"
   git push
   ```

5. **Done!** Vercel will automatically deploy and your post will appear on the website!

## Front Matter Fields

- **title** (required): The title of your blog post
- **author** (required): Your name and role (e.g., "Ben - Electrical Lead")
- **date** (required): ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)
- **category** (required): "Technical", "Team Updates", "Competition", etc.
- **image** (optional): Path to an image in `/public/photos/blog/`

## Tips

- Use the date format: `2026-03-10T15:30:00Z` (Year-Month-Day T Hour:Minute:Second Z)
- Keep filenames lowercase with dashes
- Add images to `public/photos/blog/` first, then reference them
- Posts are automatically sorted by date (newest first)

