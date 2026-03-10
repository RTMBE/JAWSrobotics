const WantToSponsor = () => {
  const sponsorshipTiers = [
    {
      name: 'Bronze',
      amount: '$500+',
      color: 'from-orange-600 to-orange-800',
      benefits: [
        'Instagram shoutout',
        'Small logo on website',
        'Small logo on team shirts',
      ]
    },
    {
      name: 'Silver',
      amount: '$1000+',
      color: 'from-gray-400 to-gray-500',
      benefits: [
        'Instagram shoutout',
        'Medium logo on website',
        'Medium logo on team shirts',
        'Small logo on robot',
      ]
    },
    {
      name: 'Gold',
      amount: '$2000+',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Instagram shoutout',
        'Large logo on website',
        'Large logo on team shirts',
        'Medium logo on the robot',
        'Medium banner logo itions',
      ]
    },
    {
      name: 'Platinum',
      amount: '$4000+',
      color: 'from-cyan-400 to-cyan-600',
      benefits: [
        'Instagram shoutout',
        'Extra-large logo on website',
        'Large logo on team shirts',
        'Large logo on the robot',
        'Large banner',
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
            Partner with JAWS Robotics and support high school students competing against professionals
          </p>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-navy-700 text-center mb-8">Why Sponsor JAWS Robotics?</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-navy-700 mb-3">Support Young Innovators</h3>
              <p className="text-gray-700">
                Support high school students competing in Rival Robotics, an ageless and limitless
                competition where we face off against adults, mentors, and professional engineers.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-navy-700 mb-3">Brand Visibility</h3>
              <p className="text-gray-700">
                Gain exposure at competitions and events through logo placements on our robot,
                team shirts, website, and competition banners.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-navy-700 mb-3">Talent Pipeline</h3>
              <p className="text-gray-700">
                Connect with talented high school students who are learning advanced engineering,
                programming, and manufacturing skills by competing against professionals.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-navy-700 mb-3">Tax Benefits</h3>
              <p className="text-gray-700">
                Your sponsorship is tax-deductible as we are a registered 501(c)(3) nonprofit
                organization through The Hack Foundation.
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
                50%
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-700 mb-2">Robot Materials & Components</h3>
                <p className="text-gray-700">
                  High-quality materials, motors, electronics, and custom parts for building the most competitive robot possible
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
                  Registration fees, transportation, and accommodations for Rival Robotics competitions
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
                  Workshop tools, safety equipment, and technology for advanced design and manufacturing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gradient-to-r from-navy-700 to-electric-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss sponsorship opportunities and how we can partner together
          </p>

          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:jawsrobotics@gmail.com" className="text-xl hover:text-electric-blue-300 transition-colors">
                  jawsrobotics@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-xl">Sarasota, Florida</span>
              </div>

              <div className="pt-4 border-t border-white/20">
                <p className="text-lg mb-3">Follow us on Instagram: @jawsrobotics</p>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.instagram.com/jawsrobotics" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue-300 transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WantToSponsor

