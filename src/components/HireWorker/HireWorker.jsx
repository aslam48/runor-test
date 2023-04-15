import React from 'react'
import sectionImage from '../../images/provider1.jpg'
import CardButton from '../CardButton/CardButton'


const HireWorker = () => {

    return (
        <section 
            className='flex flex-col lg:flex-row-reverse gap-3 lg:gap-10 justify-between bg-red-900 main-x-p main-y-p group text-white relative'
        >
            <div 
                className='flex flex-col gap-4 justify-center items-center lg:items-start flex-1 text-center lg:text-left'
            >
                <h2 className='text-center lg:text-left text-3xl lg:text-4xl font-extrabold'>Hire worker</h2>
                <hr 
                    className='border-8 rounded-lg border-primary w-[50%] lg:w-[23%] lg:my-2 group-hover:w-10 transition-slow'
                />
                <p className='lg:w-[80%]'>
                    Navigate through the list of services and choose workers that fit your job preference.
                </p>
                <CardButton text='Start hiring now' extraStyle='font-bold'/>
            </div>
            <div 
                className='flex-1'
            >
                <img 
                    src="https://raw.githubusercontent.com/Runor-world/frontend/main/src/images/provider1.jpg"
                    alt='post-job' 
                    className='w-full h-[350px] rounded-md object-cover'
                />
            </div>
        </section>
    )
}

export default HireWorker