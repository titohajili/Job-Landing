import React from 'react'
import JobSearchBar from './JobSearchBar'

const Hero = () => {
  return (
    <div className='relative w-full h-screen flex justify-center flex-col'>
      <div className='w-[90%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* Text Content */}
        <div>
            {/* Heading */}
            <h1 className='text-3xl sm:text-6xl font-bold'>Join us & Explore Thousands of Jobs</h1>
            {/* sub heading */}
            <p className='mt-4 text-sm sm:text-lg font-medium'>Find Jobs, Employment & Career Opportunities</p>
            {/* Jobsearchbar */}
            <JobSearchBar/>
        </div>
        {/* Image Content */}
        <div></div>
      </div>
    </div>
  )
}

export default Hero
