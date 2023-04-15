import React from 'react'
import CardButton from '../CardButton/CardButton'

const categories = [
    'Shoe making',
    'Catering',
    'Phone repair',
    'Motor mechanic',
    'Electrical',
    'Dry cleaning',
    'Web development',
    'Mobile development',
    'Tailoring',
    'Decoration'
]

const WorkerCategories = () => {

    return (
        <section 
            className='flex flex-col gap-3 lg:gap-10 justify-between bg-slate-200 main-x-p main-y-p group'
        >
            <div className='flex flex-col items-center lg:items-start'>
                <h2 
                    className='text-center lg:text-left text-3xl lg:text-4xl font-extrabold'
                    >
                    Discover workers by categories
                </h2>
                <hr 
                    className='border-8 rounded-lg border-primary w-[50%] lg:w-[23%] my-2 group-hover:w-10 transition-slow'
                />
            </div>
            <div 
                className='flex flex-wrap gap-2 justify-center items-center flex-2'
            >
                {
                    categories.map(category => 
                        <CardButton 
                            extraStyle='bg-slate-100 text-slate-600 border-2 border-primary my-0'
                            text={category} 
                            key={category}
                            path={`categories/${category}`}
                        />
                    )
                }
            </div>
        </section>
    )
}

export default WorkerCategories