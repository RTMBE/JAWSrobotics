import { Link } from 'react-router-dom'

const WantToSponsor = () => {
  const sponsorshipTiers = [
    {
      name: 'Platinum',
      amount: '$10,000+',
      color: 'from-gray-300 to-gray-400',
      benefits: [
        'Prominent logo placement on robot',
        'Large logo on team website and all marketing materials',
        'Recognition at all competitions and events',
        'Exclusive team updates and behind-the-scenes access',
        'Invitation to private team demonstrations',
        'Social media recognition and shoutouts',
        'Naming rights opportunity',
      ]
    },
    {
      name: 'Gold',
      amount: '$5,000 - $9,999',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Logo placement on robot',
        'Medium logo on team website and marketing materials',
        'Recognition at competitions',
        'Regular team updates',
        'Invitation to team events',
        'Social media recognition',
      ]
    },
    {
      name: 'Silver',
      amount: '$2,500 - $4,999',
      color: 'from-gray-400 to-gray-500',
      benefits: [
        'Logo on team website',
        'Recognition at competitions',
        'Team updates and newsletters',
        'Invitation to select team events',
        'Social media mentions',
      ]
    },
    {
      name: 'Bronze',
      amount: '$1,000 - $2,499',
      color: 'from-orange-600 to-orange-800',
      benefits: [
        'Name/logo on team website',
        'Recognition in team materials',
        'Team newsletters',
        'Social media acknowledgment',
      ]
    },
  ]

  return (
    <div className="want-to-sponsor-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-700 to-electric-blue-600 text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Become a Sponsor</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Partner with JAWS Robotics and invest in the future of STEM education
          </p>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-700 text-center mb-8">Why Sponsor JAWS Robotics?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-navy-700 mb-3">Community Impact</h3>
              <p className="text-gray-700">
                Support local students and help develop the next generation of engineers, 
                programmers, and innovators in your community.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-navy-700 mb-3">Brand Visibility</h3>
              <p className="text-gray-700">
                Gain exposure at competitions, events, and through our marketing channels, 
                reaching thousands of students, families, and STEM enthusiasts.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-navy-700 mb-3">Talent Pipeline</h3>
              <p className="text-gray-700">
                Connect with talented students who may become future employees, 
                building relationships with motivated STEM learners.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-navy-700 mb-3">Tax Benefits</h3>
              <p className="text-gray-700">
                Your sponsorship is tax-deductible as we are a registered non-profit 
                organization dedicated to education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="section-container bg-gray-100">
        <h2 className="text-4xl font-bold text-navy-700 text-center mb-12">Sponsorship Tiers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsorshipTiers.map((tier) => (
            <div key={tier.name} className="card overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className={`bg-gradient-to-r ${tier.color} text-white p-6 text-center`}>
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-xl font-semibold">{tier.amount}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-electric-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How Funds Are Used */}
      <section className="section-container bg-white">
        <h2 className="text-4xl font-bold text-navy-700 text-center mb-12">How Your Sponsorship Helps</h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-electric-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                40%
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-700 mb-2">Robot Materials & Components</h3>
                <p className="text-gray-700">
                  High-quality materials, motors, electronics, and custom parts for building competitive robots
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-electric-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                30%
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-700 mb-2">Competition & Travel</h3>
                <p className="text-gray-700">
                  Registration fees, transportation, and accommodations for regional and national competitions
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-electric-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                20%
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-700 mb-2">Tools & Equipment</h3>
                <p className="text-gray-700">
                  Workshop tools, safety equipment, and technology for design and manufacturing
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-12 h-12 bg-electric-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 flex-shrink-0">
                10%
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-700 mb-2">Outreach & Education</h3>
                <p className="text-gray-700">
                  Community events, STEM workshops, and educational programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-navy-700 to-electric-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss sponsorship opportunities and how we can partner together
          </p>
          <Link to="/contact" className="bg-white text-navy-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default WantToSponsor

