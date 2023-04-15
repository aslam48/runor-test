import React, {useRef, useState} from 'react'
import cleaningImage from '../../images/cleaner.jpg'
import mechanicImage from '../../images/mechanic.jpg'
import electricianImage from '../../images/electrician.jpg'
import dryCleaningImage from '../../images/dry-cleaning.jpg'
import cookImage from '../../images/cook.jpg'
import FeaturedService from '../FeaturedService/FeaturedService'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './FeaturedServices.css'
import { scrollLeft, scrollRight } from '../../utils/base_url'


const services = [
    {
        name: 'Cleaning',
        image: "https://raw.githubusercontent.com/Runor-world/frontend/main/src/images/cleaner.jpg",
        providerPopulation: 200,
    }, 
    {
        name: 'Mechanic',
        image: "https://raw.githubusercontent.com/Runor-world/frontend/main/src/images/mechanic.jpg",
        providerPopulation: 100,
    }, 
    {
        name: 'Catering',
        image: "https://raw.githubusercontent.com/Runor-world/frontend/main/src/images/cook.jpg",
        providerPopulation: 56,
    }, 
    {
        name: 'Electrical',
        image: "https://raw.githubusercontent.com/Runor-world/frontend/main/src/images/electrician.jpg",
        providerPopulation: 60,
    }, 
    {
        name: 'Dry cleaning',
        image: "https://raw.githubusercontent.com/Runor-world/frontend/main/src/images/cleaner2.jpg",
        providerPopulation: 110,
    }, 
]

const FeaturedServices = () => {
    const [fetchedServices,] = useState([])
    const containerRef = useRef(null)

  return (
    <section 
        className='services bg-red-50 main-x-p main-y-p group relative'
    >
        <div className='flex flex-col items-center lg:items-start gap-2'>
            <h2 className='text-center lg:text-left text-3xl lg:text-4xl font-extrabold'>Popular services</h2>
            <hr 
                className='border-8 rounded-lg border-primary w-[50%] lg:w-[23%] lg:my-2 group-hover:w-10 transition-slow'
            />
        </div>
        <div 
            id='services'
            ref={containerRef}
            className='hover:animate-swipe grid scroll-smooth auto-cols-[100%] md:auto-cols-[25%] lg:auto-cols-[25%] pb-1 grid-flow-col snap-x snap-mandatory overflow-x-auto overflow-y-clip  gap-2 mt-10'
        >
            {
                fetchedServices.length < 1? 
                (
                    services.map(service => <FeaturedService key={service.name} {...service}/>)
                    ): (
                        fetchedServices.map(service => <FeaturedService key={service.name} {...service}/>)
                        )
                    }
        </div>
        <FaChevronLeft 
            className='chevron chevron-left cursor-pointer' 
            onClick={() => scrollLeft(containerRef, 200, 'services')}
        />
        <FaChevronRight 
            className='chevron chevron-right cursor-pointer ' 
            onClick={() => scrollRight(containerRef, 200, 'services')}
        />
    </section>
  )
}

export default FeaturedServices