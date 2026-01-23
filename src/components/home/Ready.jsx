import React from 'react';
import featuresBg from "../../assets/features-bg.png";

const Ready = () => {
  return (
    <section className='py-12 px-4 md:px-10'>
      <div className='container bg-primary text-white p-12 rounded-xl md:rounded-3xl text-center bg-cover bg-bottom' style={{
      backgroundImage: `linear-gradient(to top, rgba(0, 36, 255, 0.88), rgba(0, 36, 255, 0.68)), url(${featuresBg})`,
    }}>
        <h2 className='section-title'> Ready to buy, sell, or hire freelancers for a short task or long-term growth </h2>
        <button className='btn btn-secondary'> Join Now </button>
      </div>
    </section>
  )
}

export default Ready;