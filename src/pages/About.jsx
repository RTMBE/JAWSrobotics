import { useState, useEffect } from 'react'
import { getTeamMembers } from '../lib/supabase'
import { loadTeamPhotos, handleImageError } from '../utils/photoLoader'

const About = () => {
  const [teamMembers, setTeamMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const teamPhotos = loadTeamPhotos()

  useEffect(() => {
    loadTeamMembers()
  }, [])

  const loadTeamMembers = async () => {
    try {
      const members = await getTeamMembers()
      setTeamMembers(members)
    } catch (error) {
      console.error('Error loading team members:', error)
      // Use default team members if database is not set up yet
      setTeamMembers(getDefaultTeamMembers())
    } finally {
      setLoading(false)
    }
  }

  const getDefaultTeamMembers = () => [
    { id: 1, name: 'Ben', role: 'Coding & Finance', photo: teamPhotos[0] },
    { id: 2, name: 'Maksym', role: 'CAD & Manufacturing', photo: teamPhotos[1] },
    { id: 3, name: 'Owen', role: 'Finance, Driver & Manufacturing', photo: teamPhotos[2] },
  ]

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-700 to-electric-blue-600 text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About JAWS Robotics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Sarasota, Florida | Founded 2026 | Building the Future
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-700 text-center mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            JAWS Robotics is a 501(c)(3) nonprofit organization through The Hack Foundation,
            dedicated to inspiring innovation through robotics and STEM education. Based in
            Sarasota, Florida, we participate in the FIRST Robotics Competition to develop
            technical skills, leadership abilities, and a passion for engineering.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our team of 3 dedicated members brings together expertise in coding, CAD design,
            manufacturing, and finance. We believe in hands-on learning and
            real-world problem-solving while fostering values of gracious professionalism and teamwork.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-container bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-700 text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Founded in 2026, JAWS Robotics is a brand new team based in Sarasota, Florida.
              We're a passionate group of 3 students who came together with a shared vision:
              to compete in the FIRST Robotics Competition and push the boundaries of what we can achieve.
            </p>
            <p>
              This is our first year competing, and we're already making significant progress.
              We're currently designing our swerve drive system and working on our year budget.
              Every day brings new challenges and learning opportunities as we build our robot from the ground up.
            </p>
            <p>
              As a 501(c)(3) nonprofit through The Hack Foundation, we're committed to not just
              building robots, but building skills, friendships, and a foundation for future success
              in STEM fields. This is just the beginning of our journey.
            </p>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="section-container bg-white">
        <h2 className="text-4xl font-bold text-navy-700 text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-electric-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-700 mb-2">Teamwork</h3>
            <p className="text-gray-600">Collaboration and mutual support drive our success</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-electric-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-700 mb-2">Innovation</h3>
            <p className="text-gray-600">Creative thinking and continuous improvement</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-electric-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-700 mb-2">Learning</h3>
            <p className="text-gray-600">Hands-on education and skill development</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-electric-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-700 mb-2">Community</h3>
            <p className="text-gray-600">Giving back and inspiring others</p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="section-container bg-gray-100">
        <h2 className="text-4xl font-bold text-navy-700 text-center mb-12">Meet Our Team</h2>
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-electric-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.id || index} className="card overflow-hidden group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.photo || teamPhotos[index % teamPhotos.length]}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => handleImageError(e, 'team')}
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-navy-700">{member.name}</h3>
                  <p className="text-sm text-electric-blue-500">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default About

