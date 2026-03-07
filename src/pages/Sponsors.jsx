import { useState, useEffect } from 'react'
import { getSponsors } from '../lib/supabase'
import { loadSponsorLogos, handleImageError } from '../utils/photoLoader'

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([])
  const [loading, setLoading] = useState(true)
  const sponsorLogos = loadSponsorLogos()

  useEffect(() => {
    loadSponsors()
  }, [])

  const loadSponsors = async () => {
    try {
      const data = await getSponsors()
      setSponsors(data)
    } catch (error) {
      console.error('Error loading sponsors:', error)
      // Use default sponsors if database is not set up yet
      setSponsors(getDefaultSponsors())
    } finally {
      setLoading(false)
    }
  }

  const getDefaultSponsors = () => [
    { id: 1, name: 'ODRIVEBots', tier: 'platinum', logo: sponsorLogos[0] },
  ]

  const groupedSponsors = {
    platinum: sponsors.filter(s => s.tier === 'platinum'),
    gold: sponsors.filter(s => s.tier === 'gold'),
    silver: sponsors.filter(s => s.tier === 'silver'),
    bronze: sponsors.filter(s => s.tier === 'bronze'),
  }

  const SponsorTier = ({ title, sponsors, logoSize }) => (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-navy-700 text-center mb-8">{title}</h3>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="card p-6 hover:shadow-2xl transition-shadow duration-300"
            style={{ width: logoSize }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-full h-auto object-contain"
              onError={(e) => handleImageError(e, 'sponsor')}
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="sponsors-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-700 to-electric-blue-600 text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Sponsors</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Thank you to our amazing sponsors who make our success possible
          </p>
        </div>
      </section>

      {/* Thank You Message */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-navy-700 mb-6">Thank You!</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            JAWS Robotics would not be possible without the generous support of our sponsors. 
            Your contributions enable us to purchase materials, attend competitions, and provide 
            our students with invaluable hands-on STEM education experiences.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are deeply grateful for your partnership and commitment to inspiring the next 
            generation of engineers, innovators, and leaders.
          </p>
        </div>
      </section>

      {/* Sponsors by Tier */}
      <section className="section-container bg-gray-100">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-electric-blue-500"></div>
          </div>
        ) : (
          <>
            {groupedSponsors.platinum.length > 0 && (
              <SponsorTier title="Platinum Sponsors" sponsors={groupedSponsors.platinum} logoSize="300px" />
            )}
            {groupedSponsors.gold.length > 0 && (
              <SponsorTier title="Gold Sponsors" sponsors={groupedSponsors.gold} logoSize="250px" />
            )}
            {groupedSponsors.silver.length > 0 && (
              <SponsorTier title="Silver Sponsors" sponsors={groupedSponsors.silver} logoSize="200px" />
            )}
            {groupedSponsors.bronze.length > 0 && (
              <SponsorTier title="Bronze Sponsors" sponsors={groupedSponsors.bronze} logoSize="150px" />
            )}
          </>
        )}
      </section>

      {/* Impact Section */}
      <section className="section-container bg-white">
        <h2 className="text-4xl font-bold text-navy-700 text-center mb-12">Your Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-8 text-center">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-navy-700 mb-3">Robot Development</h3>
            <p className="text-gray-600">
              Funding materials, tools, and components for building competitive robots
            </p>
          </div>
          <div className="card p-8 text-center">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-xl font-bold text-navy-700 mb-3">Student Education</h3>
            <p className="text-gray-600">
              Providing hands-on STEM learning opportunities for students
            </p>
          </div>
          <div className="card p-8 text-center">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-navy-700 mb-3">Competition Success</h3>
            <p className="text-gray-600">
              Enabling travel to regional and national competitions
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-navy-700 to-electric-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Interested in Sponsoring?</h2>
          <p className="text-xl mb-8">
            Join our community of supporters and help shape the future of STEM education
          </p>
          <a href="/want-to-sponsor" className="bg-white text-navy-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block">
            Learn About Sponsorship Opportunities
          </a>
        </div>
      </section>
    </div>
  )
}

export default Sponsors

