import React from 'react'
import sectionImage from '../../images/post-job1.jpg'
import CardButton from '../CardButton/CardButton'


const PostJob = () => {

    return (
        <section 
            className='flex flex-col lg:flex-row gap-3 bg-white main-x-p main-y-p group relative'
        >
            <div 
                className='flex flex-col gap-4 justify-center items-center lg:items-start flex-1 text-center lg:text-left'
            >
                <h2 className='text-center lg:text-left text-3xl lg:text-4xl font-extrabold'>Post jobs</h2>
                <hr 
                    className='border-8 rounded-lg border-primary w-[50%] lg:w-[23%] lg:my-2 group-hover:w-10 transition-slow'
                />
                <p className='lg:w-[80%]'>
                    Post what you want done, describing how you want it and 
                    get matched with who can do it the best way.
                </p>
                <CardButton text='Start posting jobs' extraStyle='font-bold'/>
            </div>
            <div 
                className='flex-1'
            >
                <img 
                    src="https://raw.githubusercontent.com/Runor-world/frontend/main/src/images/post-job1.jpg"
                    alt='post-job' 
                    className='w-full h-[350px] rounded-md object-cover'
                />
            </div>
        </section>
    )
}

export default PostJob