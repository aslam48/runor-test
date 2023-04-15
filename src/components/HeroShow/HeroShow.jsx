import React from 'react'
import topRight from '../../images/hero-top-right.png'
import topLeft from '../../images/hero-top-left.png'
import bottomRight from '../../images/hero-bottom-right.png'
import bottomLeft from '../../images/hero-bottom-left.png'
import center from '../../images/hero-large-center.png'

const items = [
]
const HeroShow = () => {
  return (
    <div className='w-full' ref={imagesWrapper}>
        <img src={topLeft} alt="top-left" className='absolute z-1 w-[100px] h-[100px]'/>
        <img src={topRight} alt='top-right' className='absolute z-2  w-[100px] h-[100px]'/>
        <img src={center} alt="centre" className='absolute z-5  w-[100px] h-[100px]'/>
        <img src={bottomLeft} alt='bottom-left' className='absolute z-3  w-[100px] h-[100px]' />
        <img src={bottomRight} alt='bottom-right' className='absolute z-4  w-[100px] h-[100px]'/>
    </div>
  )
}

export default HeroShow