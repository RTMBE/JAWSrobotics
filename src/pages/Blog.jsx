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
      if (data && data.length > 0) {
        setPosts(data)
      } else {
        // No posts in database, use defaults
        setPosts(getDefaultPosts())
      }
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
      title: 'Major Progress on Swerve Drive CAD Design',
      content: `We're thrilled to announce significant progress on our custom swerve drive system! Yesterday, our lead CAD designer Maksym made substantial headway on the mechanical design of our swerve modules.

**What We Accomplished:**

Maksym successfully completed the bearing mounting system for the wheel assembly, ensuring smooth rotation and minimal friction. This is a critical component that will allow our robot to achieve the precise, omnidirectional movement that swerve drive is known for.

Additionally, he designed and modeled the top mounting plate, which serves as the structural foundation for the entire swerve module. This plate will house the turning motor and provide the necessary rigidity to handle the forces experienced during competition.

Perhaps most impressively, Maksym began work on the gearing system for the turning motor. This complex assembly requires precise gear ratios to balance speed and torque, allowing our robot to rotate each wheel module quickly and accurately. The gearing design is crucial for achieving the responsive handling we need to compete against professional-level teams in Rival Robotics.

**Why This Matters:**

Swerve drive represents one of the most sophisticated drivetrain systems in competitive robotics. Unlike traditional tank drive or mecanum wheels, swerve allows each wheel to independently rotate and drive, giving us unparalleled maneuverability on the competition field. This advantage is essential as we compete against adult engineers and professional robotics teams.

**Next Steps:**

Our CAD team will continue refining the swerve module design, focusing on optimizing weight distribution and ensuring all components can be manufactured within our budget. We're also coordinating closely with our electrical and programming teams to ensure seamless integration.

Thank you to our sponsors, especially ODrive Robotics, whose support makes this level of engineering possible!`,
      author: 'Maksym - CAD Lead',
      created_at: '2026-03-09T16:00:00Z',
      category: 'Technical',
      image: '/photos/blog/swerve-module-side-view.png'
    },
    {
      id: 2,
      title: 'Power System Planning: Battery and Control Architecture',
      content: `Our electrical systems lead, Ben, has been hard at work developing the power and control architecture for our Rival Robotics competition robot. This critical planning phase will determine how we power our motors and control our robot's complex systems.

**Battery Configuration Analysis:**

Ben is currently evaluating two primary battery configurations for our robot:

**6S Battery System (22.2V nominal):**
• More common in robotics applications
• Easier to source compatible components
• Lower initial cost
• Adequate power for most motor applications

**8S Battery System (29.6V nominal):**
• Higher voltage means more available motor power
• Better performance under load
• Allows motors to maintain speed during high-torque operations
• Critical advantage when competing against professional teams

After extensive research and calculations, we're leaning toward the 8S configuration. The additional power will be crucial for our swerve drive system, which requires eight high-performance motors (four for driving, four for turning). When competing against adults and professional engineers, every performance advantage matters.

**Control System Considerations:**

Ben is also investigating the possibility of using a Raspberry Pi as our main robot controller, with Python as our primary programming language. This approach offers several advantages:

• **Flexibility:** Python's extensive libraries make complex algorithms easier to implement
• **Processing Power:** The Raspberry Pi 4 or 5 provides substantial computational resources
• **Cost-Effective:** More affordable than some traditional robotics controllers
• **Team Knowledge:** Our programming team has strong Python experience

However, we're also considering real-time performance requirements and ensuring our control loop can handle the demands of swerve drive control at competition speeds.

**Integration Planning:**

The power system must seamlessly integrate with our swerve drive modules, sensors, and control electronics. Ben is creating detailed power budgets and wiring diagrams to ensure we have adequate current capacity for all systems while maintaining safety margins.

**Looking Ahead:**

These decisions will shape our entire robot architecture. We're taking the time to plan carefully now to avoid costly redesigns later. Our goal is to have a robust, reliable power system that can handle the demands of competing in Rival Robotics.

Special thanks to ODrive Robotics for their continued support as we tackle these complex engineering challenges!`,
      author: 'Ben - Electrical Systems Lead',
      created_at: '2026-03-09T14:30:00Z',
      category: 'Technical'
    },
    {
      id: 3,
      title: 'Electrical Components Procurement: Wiring and Motor Controllers',
      content: `Our electrical team member Owen has been making excellent progress on sourcing the critical electrical components we need for our swerve drive system. This procurement phase is essential to keeping our project on schedule and within budget.

**WAGO Connectors Acquired:**

Owen successfully obtained WAGO lever connectors for our robot's electrical system. These professional-grade connectors are a game-changer for our wiring:

• **Tool-Free Installation:** No screwdrivers needed - just lift the lever, insert the wire, and close
• **Reliability:** Spring-loaded contacts ensure consistent electrical connections
• **Serviceability:** Easy to disconnect and reconnect during troubleshooting and maintenance
• **Professional Standard:** Used in industrial applications worldwide
• **Safety:** Reduced risk of loose connections that could cause failures during competition

Using WAGO connectors demonstrates our commitment to building a professional-quality robot that can compete reliably against adult engineering teams.

**S1 Motor Controller Research:**

Owen is currently compiling a comprehensive order for the S1 motor controllers we need for our swerve drive system. These controllers are specifically designed for high-performance robotics applications:

**Why S1 Controllers:**
• Compact form factor - critical for fitting into our swerve modules
• High current capacity - can handle the demanding loads of competition
• Integrated sensor support - works with our encoders for precise control
• CAN bus communication - allows coordinated control of all eight motors
• Proven reliability in competitive robotics

**Procurement Strategy:**

Owen is carefully calculating exactly how many controllers we need:
• 4 controllers for the drive motors (one per wheel)
• 4 controllers for the turning motors (one per swerve module)
• 2 additional controllers as spares (critical for competition readiness)

He's also researching bulk pricing options and comparing suppliers to maximize our budget efficiency. Every dollar saved on components is a dollar we can invest in other critical systems.

**Wire Management Planning:**

Beyond just the controllers, Owen is planning our complete wiring harness:
• Calculating required wire gauges for different current loads
• Planning wire routing to minimize electromagnetic interference
• Ensuring adequate strain relief at all connection points
• Color-coding schemes for easy troubleshooting

**Timeline:**

Owen aims to have all components ordered within the next two weeks, allowing adequate time for shipping and any potential backorders. This proactive approach ensures we won't face delays when we're ready to begin assembly.

**Budget Consciousness:**

As a team competing in Rival Robotics, we don't have the same funding as some professional teams. Owen's careful planning and price comparison work is essential to making our budget stretch as far as possible while maintaining the quality we need to compete.

We're grateful to our sponsors, especially ODrive Robotics, whose support makes it possible to purchase these professional-grade components!`,
      author: 'Owen - Electrical Team',
      created_at: '2026-03-09T12:00:00Z',
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

                {post.image && (
                  <div className="mb-6">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                    />
                  </div>
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

