import React from 'react'
import './Homepage.css'
import MultipleItems from '../../components/MultipleItems'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Homepage = () => {
    return (
        <section className='relative flex banner flex-col justify-center items-center h-screen text-white'>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-0"></div>
      
          {/* Content */}
          <div className='w-[50vw] z-10 text-center'>
            <p className='lg:text-7xl font-bold py-5'>
              zosh Food
            </p>
            <p className='text-gray-300 lg:text-4xl font-semibold'>
              Taste the Convenience: Food, Fast and Delivered.
            </p>
            <MultipleItems />
          </div>
        </section>
      );
      
}

export default Homepage