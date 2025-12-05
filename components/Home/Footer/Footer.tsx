import React from 'react'
import { LuNetwork } from 'react-icons/lu'
const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-200 dark:bg-gray-900'>
      <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start'>
        {/* 1st part */}
        <div className='xl:col-span-2'>

            {/* Logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col'>
                  <LuNetwork className='w-5 h-5  text-white dark:text-black'/>
                </div>
                <h1 className='text-cl hidden sm:block md:text-2xl text-cyan-800 dark:text-white font-bold'>DevHire</h1>
            </div>

            <p className='mt-4 text-sm text-gray-600 dark:text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In cupiditate delectus placeat quam, perferendis nostrum sint saepe.</p>

            {/* call */}
            <div className='mt-5 '>
                <h1 className='lg:text-xl text-base text-gray-700 dark:text-gray-300 font-medium'>Call Us</h1>
                <p className='mt-1 text-gray-600  dark:text-gray-300 lg:text-lg text-base font-bold'>+91 1234567890</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
