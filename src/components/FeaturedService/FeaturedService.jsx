import React from 'react'
import { FaUsers } from 'react-icons/fa'

const FeaturedService = ({name, image, providerPopulation}) => {
  return (
    <article 
        className='basis-[50%] md:basis-[30%] lg:basis-[25%] snap-start rounded-t-lg bg-slate-200 transition-slow hover:scale-105 shadow-sm relative'>
        <img 
            src={image}
            alt={name}
            className='w-full h-[300px] '
        />

        <div className='absolute bottom-0 left-0 h-full hover:bg-opacity-20 hover:justify-end w-full bg-primary bg-opacity-50 flex flex-col justify-center gap-1 transition-all duration-500 p-2'>
          <div className='flex flex-col gap-2 transition-all duration-500 bg-black bg-opacity-60'>
            <h3 
                className='text-white text-2xl font-bold text-center'
            >
                {name}
            </h3>
            <div className='flex justify-center items-center gap-2'>
              <FaUsers className='text-3xl text-orange-500'/>
              <h1 className='text-white text-center font-semibold font-cursive'>{providerPopulation}+ providers</h1>
            </div>

          </div>
        </div>
    </article>
  )
}

export default FeaturedService