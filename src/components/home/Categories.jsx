import React from 'react'

const Categories = () => {
  return (
    <section className='py-12'>
      <div className='container'>

        <h2 className='section-title'> Categories </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {[
            { name: 'Phones & Tablets', color: 'from-[#82F69B] to-[#396E45]' },
            { name: 'Fashions', color: 'from-[#24589B] to-[#0C1E35]' },
            { name: 'Homes & Living', color: 'from-[#CC8CA6] to-[#6F4556]' },
            { name: 'Electronics', color: 'from-[#004B14] to-[#00B12F]' },
            { name: 'Services', color: 'from-[#FE7309] to-[#C55500]' },
            { name: 'Agriculture', color: 'from-[#ADBF81] to-[#51593C]' },
          ].map((category, index) => (
            <div
              key={index}
              className={`rounded-xl p-2 pt-3 border border-muted/20 text-center cursor-pointer transform md:hover:scale-105 transition duration-300 shadow-sm hover:shadow-xl `}
            >
              <div className='flex flex-col gap-3'>
                <span className="text-base font-semibold">{category.name}</span>
                <div className={`bg-linear-to-r ${category.color} h-36 rounded-md`}>
                  
                </div>
              </div>
            </div>
          ))}
        </div>   
      </div>
    </section>
  )
}

export default Categories;