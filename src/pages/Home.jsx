import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { loadHeroImages, handleImageError } from '../utils/photoLoader'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = loadHeroImages()

  // Auto-rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`JAWS Robotics ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => handleImageError(e, 'hero')}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-700/70"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            JAWS Robotics
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Sarasota, Florida | Founded 2026 | 501(c)(3) through The Hack Foundation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-primary">
              Learn More About Us
            </Link>
            <Link to="/want-to-sponsor" className="btn-outline">
              Become a Sponsor
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="section-container bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-navy-700 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              JAWS Robotics is a competitive FIRST Robotics Competition (FRC) team
              based in Sarasota, Florida. Founded in 2026, we're a 501(c)(3) nonprofit
              through The Hack Foundation, dedicated to inspiring innovation through robotics.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our team of 4 dedicated members brings together expertise in coding, CAD,
              manufacturing, finance, and photography. We're currently in our first year
              of competition, designing and building our swerve drive robot.
            </p>
            <Link to="/about" className="btn-primary inline-block">
              Meet Our Team
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-electric-blue-500 mb-2">3</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-electric-blue-500 mb-2">2026</div>
              <div className="text-gray-600">Founded</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-electric-blue-500 mb-2">1st</div>
              <div className="text-gray-600">Year Competing</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-electric-blue-500 mb-2">100%</div>
              <div className="text-gray-600">Dedication</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-container bg-gray-100">
        <h2 className="text-4xl font-bold text-navy-700 text-center mb-12">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-electric-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-700 mb-3">Design & Build</h3>
            <p className="text-gray-600">
              We design and build competitive robots using CAD software and advanced manufacturing techniques.
            </p>
          </div>

          <div className="card p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-electric-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-700 mb-3">Program</h3>
            <p className="text-gray-600">
              Our software team develops sophisticated control systems and autonomous routines.
            </p>
          </div>

          <div className="card p-8 text-center hover:scale-105 transition-transform duration-300">
            <div className="w-16 h-16 bg-electric-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy-700 mb-3">Compete</h3>
            <p className="text-gray-600">
              We compete in regional and national FRC competitions, showcasing our skills and teamwork.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-navy-700 to-electric-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Support Innovation?</h2>
          <p className="text-xl mb-8">
            Help us inspire the next generation of engineers and innovators
          </p>
          <Link to="/want-to-sponsor" className="bg-white text-navy-700 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block">
            Explore Sponsorship Opportunities
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

