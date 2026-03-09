/**
 * Blog Post Loader
 * Loads blog posts from markdown files in /public/blog-posts/
 */

// List of all blog post files (add new files here)
const BLOG_POST_FILES = [
  '2026-03-09-maksym-swerve-cad.md',
  '2026-03-09-ben-power-system.md',
  '2026-03-09-owen-electrical-procurement.md',
  '2026-03-07-swerve-drive-progress.md',
  '2026-03-07-budget-planning.md',
]

/**
 * Parse front matter from markdown content
 * Front matter is between --- lines at the start of the file
 */
function parseFrontMatter(content) {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
  const match = content.match(frontMatterRegex)
  
  if (!match) {
    return { metadata: {}, content: content }
  }
  
  const frontMatter = match[1]
  const body = match[2]
  
  const metadata = {}
  frontMatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim()
      const value = line.substring(colonIndex + 1).trim()
      metadata[key] = value
    }
  })
  
  return { metadata, content: body }
}

/**
 * Load all blog posts from markdown files
 */
export async function loadBlogPosts() {
  const posts = []
  
  for (const filename of BLOG_POST_FILES) {
    try {
      const response = await fetch(`/blog-posts/${filename}`)
      if (!response.ok) continue
      
      const content = await response.text()
      const { metadata, content: body } = parseFrontMatter(content)
      
      posts.push({
        id: filename.replace('.md', ''),
        title: metadata.title || 'Untitled',
        author: metadata.author || 'JAWS Robotics Team',
        created_at: metadata.date || new Date().toISOString(),
        category: metadata.category || 'General',
        content: body.trim(),
        image: metadata.image || null
      })
    } catch (error) {
      console.error(`Error loading blog post ${filename}:`, error)
    }
  }
  
  // Sort by date, newest first
  posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
  
  return posts
}

