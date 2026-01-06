import React from 'react'
import { Star, ChevronRight } from 'lucide-react'

const HireTrusted = () => {
  const services = [
    {
      id: 1,
      title: "Logo Design",
      rating: 4.9,
      reviews: 342,
      price: "15,000",
      icon: "🎨",
      rank: "gold"
    },
    {
      id: 2,
      title: "Web Development",
      rating: 4.9,
      reviews: 342,
      price: "15,000",
      icon: "💻",
      rank: "platinum"
    },
    {
      id: 3,
      title: "Content Writing",
      rating: 4.9,
      reviews: 342,
      price: "15,000",
      icon: "✍️",
      rank: "verified"
    },
    {
      id: 4,
      title: "Video Editing",
      rating: 4.9,
      reviews: 342,
      price: "15,000",
      icon: "🎬",
      rank: "bronze"
    }
  ]

  return (
    <section className='py-8 md:py-12 bg-white'>
      <div className='container'>
        {/* Header */}
        <div className='flex items-center justify-between mb-8'>
          <div className="flex items-center gap-4">
            <span className="w-1 h-8 bg-primary rounded-full"></span>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-0"> 
              Hire Trusted Freelancers 
            </h2>
          </div>

          <button className='flex items-center gap-1 text-primary hover:text-primary-dark text-sm font-medium transition-colors'>
            View All 
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-primary/20 border border-gray-200 rounded-md p-4 md:p-5 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Service Icon & Title */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {/* <span className="text-2xl">{service.icon}</span> */}
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                </div>
                <button className="text-primary hover:text-primary-dark text-xs font-medium">
                  {service.rank}
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 mb-4">
                <div className="flex items-center">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium text-sm text-gray-900">{service.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({service.reviews})</span>
              </div>

              {/* Price */}
              <div className="mb-4 flex items-center gap-1.5">
                <p className="text-base text-gray-500">Starting at</p>
                <p className="text-lg md:text-xl font-bold text-gray-900"> ₦{service.price}</p>
              </div>

              {/* Escrow Badge */}
              <button className="btn">
                Hire with Escrow
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HireTrusted