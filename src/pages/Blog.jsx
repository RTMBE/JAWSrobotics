import { useState, useEffect } from 'react'
import { getBlogPosts } from '../lib/supabase'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadBlogPosts()
  }, [])

  const loadBlogPosts = async () => {
    try {
      const data = await getBlogPosts()
      setPosts(data)
    } catch (error) {
      console.error('Error loading blog posts:', error)
      // Use default posts if database is not set up yet
      setPosts(getDefaultPosts())
    } finally {
      setLoading(false)
    }
  }

  const getDefaultPosts = () => [
    {
      id: 1,
      title: 'Swerve Drive Design Progress',
      content: `We're excited to share that we've started designing our swerve drive system! This is a major milestone for our team as we work on our first robot.

Swerve drive is one of the most advanced drive systems in FRC, allowing for omnidirectional movement and precise control. Our CAD team, led by Maksym, has been working hard on the initial designs.

Key features we're implementing:
• Custom swerve modules with optimized gear ratios
• Lightweight aluminum construction
• Integrated absolute encoders for precise positioning
• Modular design for easy maintenance

We're also working closely with our finance team to ensure the design stays within budget while maintaining high performance. Stay tuned for more updates as we progress!`,
      author: 'JAWS Robotics Team',
      created_at: '2026-01-15T10:00:00Z',
      category: 'Technical'
    },
    {
      id: 2,
      title: 'Year Budget Planning',
      content: `Our finance team, Ben and Owen, have been hard at work developing our year budget. As a first-year team, financial planning is crucial to our success.

Budget Highlights:
• Robot parts and materials: Major allocation for swerve drive components
• Competition registration and travel costs
• Tools and workshop equipment
• Team apparel and branding
• Outreach and community engagement

We're grateful to our sponsor ODRIVEBots for their support, which helps make our ambitious goals possible. We're also actively seeking additional sponsors to help us compete at the highest level.

If you're interested in sponsoring JAWS Robotics, check out our sponsorship page to learn more about the benefits and how you can help!`,
      author: 'Ben & Owen',
      created_at: '2026-01-10T14:30:00Z',
      category: 'Team Updates'
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-700 to-electric-blue-600 text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Team Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Follow our journey as we design, build, and compete
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-container bg-white">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-electric-blue-500"></div>
            <p className="mt-4 text-gray-600">Loading posts...</p>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map((post) => (
              <article key={post.id} className="card p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  {post.category && (
                    <span className="px-3 py-1 bg-electric-blue-500 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  )}
                  <span className="text-gray-500 text-sm">
                    {formatDate(post.created_at)}
                  </span>
                </div>
                
                <h2 className="text-3xl font-bold text-navy-700 mb-4">
                  {post.title}
                </h2>
                
                {post.author && (
                  <p className="text-gray-600 mb-4">
                    By {post.author}
                  </p>
                )}
                
                <div className="prose prose-lg max-w-none">
                  {post.content.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed whitespace-pre-line">
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="section-container bg-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy-700 mb-6">
            Want to Support Our Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Your sponsorship helps us continue innovating and competing at the highest level.
          </p>
          <a href="/want-to-sponsor" className="btn-primary inline-block">
            Become a Sponsor
          </a>
        </div>
      </section>
    </div>
  )
}

export default Blog

