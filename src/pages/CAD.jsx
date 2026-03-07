import { useState } from 'react'
import { loadCADPhotos, handleImageError } from '../utils/photoLoader'

const CAD = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const cadPhotos = loadCADPhotos()

  const cadProjects = [
    {
      id: 1,
      title: '2024 Competition Robot',
      description: 'Our latest competition robot featuring advanced autonomous capabilities',
      image: cadPhotos[0],
      year: '2024'
    },
    {
      id: 2,
      title: 'Drivetrain System',
      description: 'High-performance swerve drive system for maximum maneuverability',
      image: cadPhotos[1],
      year: '2024'
    },
    {
      id: 3,
      title: 'Intake Mechanism',
      description: 'Precision-engineered intake system for game piece manipulation',
      image: cadPhotos[2],
      year: '2024'
    },
    {
      id: 4,
      title: 'Elevator Assembly',
      description: 'Multi-stage elevator for reaching high scoring positions',
      image: cadPhotos[3],
      year: '2023'
    },
    {
      id: 5,
      title: 'Arm Mechanism',
      description: 'Articulated arm design for versatile game piece handling',
      image: cadPhotos[4],
      year: '2023'
    },
    {
      id: 6,
      title: 'Shooter System',
      description: 'High-velocity shooter with adjustable angle and power',
      image: cadPhotos[5],
      year: '2023'
    },
    {
      id: 7,
      title: 'Climber Design',
      description: 'Robust climbing mechanism for end-game challenges',
      image: cadPhotos[6],
      year: '2022'
    },
    {
      id: 8,
      title: 'Control System',
      description: 'Integrated electronics and wiring layout',
      image: cadPhotos[7],
      year: '2022'
    },
    {
      id: 9,
      title: 'Prototype Testing',
      description: 'Early-stage prototypes and concept validation',
      image: cadPhotos[8],
      year: '2022'
    },
    {
      id: 10,
      title: 'Custom Components',
      description: 'Specialized parts designed and manufactured in-house',
      image: cadPhotos[9],
      year: '2021'
    },
    {
      id: 11,
      title: 'Full Robot Assembly',
      description: 'Complete robot CAD model with all subsystems',
      image: cadPhotos[10],
      year: '2021'
    },
    {
      id: 12,
      title: 'Innovation Showcase',
      description: 'Award-winning design innovations and improvements',
      image: cadPhotos[11],
      year: '2021'
    },
  ]

  return (
    <div className="cad-page">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-700 to-electric-blue-600 text-white py-20">
        <div className="section-container text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our CAD Designs</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our robot designs, engineering innovations, and technical achievements
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-container bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-navy-700 mb-6">Engineering Excellence</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Our CAD team uses industry-standard software including SolidWorks, Fusion 360, and Onshape 
            to design every component of our robots. From initial concepts to final assemblies, 
            we leverage 3D modeling to optimize performance, reduce weight, and ensure manufacturability.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Each design undergoes rigorous analysis and iteration, incorporating feedback from 
            testing and competition experience to continuously improve our robots.
          </p>
        </div>
      </section>

      {/* CAD Gallery */}
      <section className="section-container bg-gray-100">
        <h2 className="text-4xl font-bold text-navy-700 text-center mb-12">Design Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cadProjects.map((project) => (
            <div
              key={project.id}
              className="card overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(project)}
            >
              <div className="aspect-video overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => handleImageError(e, 'cad')}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-navy-700">{project.title}</h3>
                  <span className="text-sm font-semibold text-electric-blue-500 bg-electric-blue-50 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design Process Section */}
      <section className="section-container bg-white">
        <h2 className="text-4xl font-bold text-navy-700 text-center mb-12">Our Design Process</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-electric-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold text-navy-700 mb-2">Concept</h3>
            <p className="text-gray-600">Brainstorm ideas and develop initial concepts</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-electric-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold text-navy-700 mb-2">Design</h3>
            <p className="text-gray-600">Create detailed 3D CAD models and assemblies</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-electric-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold text-navy-700 mb-2">Prototype</h3>
            <p className="text-gray-600">Build and test prototypes to validate designs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-electric-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
              4
            </div>
            <h3 className="text-xl font-bold text-navy-700 mb-2">Refine</h3>
            <p className="text-gray-600">Iterate and optimize based on testing results</p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-6xl w-full">
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 text-4xl"
              >
                &times;
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
                onError={(e) => handleImageError(e, 'cad')}
              />
              <div className="mt-4 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CAD

