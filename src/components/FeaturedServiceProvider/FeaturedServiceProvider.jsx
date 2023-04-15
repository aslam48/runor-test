import React from 'react'
import CardButton from '../CardButton/CardButton'
import Stars from '../Stars/Stars'

const FeaturedServiceProvider = ({id, name, image, rating, service}) => {
  return (
    <article 
        className='basis-[100%] md:basis-[30%] lg:basis-[25%] snap-start bg-slate-200 transition-slow hover:scale-105 shadow-sm relative'>
        <img 
            src={image}
            alt={name}
            className='w-full h-[300px] object-cover'
        />
       <div className='p-2 text-center flex flex-col gap-1 absolute bg-black bg-opacity-60 bottom-0 left-0 w-full h-auto text-white'>
        <p>{name}</p>
        <h3 
            className='text-lg font-bold text-white text-center'
          >
              {service}
        </h3>
        <Stars stars={rating} />
        <CardButton 
          path={`/provider/${id}`}
          text='details'
          extraStyle='bg-opacity-50'
        />
       </div>
    </article>
  )
}

export default FeaturedServiceProvider