import React, {useState} from 'react'
import sectionImage from '../../images/electrician.jpg'
import CardButton from '../CardButton/CardButton'


const ServiceProvider = () => {

    return (
        <section 
            className='flex flex-col lg:flex-row-reverse gap-3 lg:gap-10 justify-between bg-red-900 main-x-p main-y-p group text-white'
        >
            <div 
                className='flex flex-col gap-4 justify-center items-center lg:items-start flex-1 text-center lg:text-left'
            >
                <h2 
                    className='text-center lg:text-left text-3xl lg:text-4xl font-extrabold'>Register as Service provider</h2>
                <hr 
                    className='border-8 rounded-lg border-primary w-[50%] lg:w-[23%] my-2 group-hover:w-10 transition-slow'
                />
                <p className='lg:w-[80%]'>
                    Navigate through the list of services and choose workers that fit your job preference.
                </p>
                <CardButton text='Register now' extraStyle='font-bold'/>
            </div>
            <div 
                className='flex-1'
            >
                <img 
                    src={sectionImage} 
                    alt='post-job' 
                    className='w-full h-[350px] rounded-md'
                />
            </div>
        </section>
    )
}

export default ServiceProvider