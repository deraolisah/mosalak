import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const TodayDeals = () => {
  return (
    <section className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          <div className="flex items-center gap-4">
            <span className="w-1 h-8 bg-primary rounded-full"></span>
            <h2 className="section-title mb-0"> Today's Deals </h2>
          </div>
          
          <Link to="/marketplace" className='btn btn-text text-primary text-sm px-0'>
            View All 
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TodayDeals;