import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronRight } from 'lucide-react';
import freelancerImg from '../../assets/why-bg.png';

const HireTrusted = () => {
  const services = [
    {
      id: 1,
      userName: "Jane Doe",
      title: "Logo Designer",
      bio: "Professional logo design services",
      rating: 4.9,
      reviews: 342,
      price: "15,000",
      icon: "🎨",
      rank: "gold"
    },
    {
      id: 2,
      userName: "John Smith",
      title: "Web Developer",
      bio: "Full-stack web development",
      rating: 4.9,
      reviews: 342,
      price: "15,000",
      icon: "💻",
      rank: "platinum"
    },
    {
      id: 3,
      userName: "Alice Johnson",
      title: "Content Writing",
      bio: "Expert content writing services",
      rating: 4.9,
      reviews: 342,
      price: "15,000",
      icon: "✍️",
      rank: "verified"
    },
    {
      id: 4,
      userName: "Bob Brown",
      title: "Video Editing",
      bio: "Professional video editing services",
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

          <Link to="/freelancers" className='btn btn-text px-0 text-primary'>
            View All 
            <ChevronRight size={16} />
          </Link>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {services.map((service) => (
            <div key={service.id} 
              className="border border-primary/20 overflow-hidden rounded-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className='relative w-full h-40 mb-4'>
                <div className='absolute w-full h-full z-0 bg-primary/20'></div>
                <img src={freelancerImg} alt='' className='z-20 h-40 w-full object-cover object-center relative opacity-40' />
              </div>

              {/* User Info */}
              <div className='flex items-center justify-between px-2 mb-4'>
                <p className='text-lg font-semibold'> {service.userName} </p>
                <span className='p-1 px-2 rounded text-xs bg-primary/10'> {service.rank} </span>
              </div>

              {/* Service Icon & Title */}
              <div className="flex flex-col items-start gap-1 justify-between px-2 mb-2">
                <h4 className="text-sm font-medium">{service.title}</h4>
                <p className="text-sm"> {service.bio} </p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1.5 px-2 mb-4">
                <div className="flex items-center">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium text-sm text-gray-900">{service.rating}</span>
                </div>
                <span className="text-sm text-gray-500">({service.reviews})</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-1.5 px-2 mb-4">
                <p className="text-sm">Starting at</p>
                <p className="text-lg font-bold text-primary"> ₦{service.price}</p>
              </div>

              {/* Hire Button */}
              <div className="px-2 my-4">
                <Link to="/freelancers" 
                  className="btn btn-primary w-full text-center"
                >
                  Hire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HireTrusted