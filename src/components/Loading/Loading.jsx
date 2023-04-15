import React from 'react'
import { FaSpinner } from 'react-icons/fa'
import Header from '../Header/Header'

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <Header />
        <div className='flex flex-col items-center gap-4 justify-center'>
            <FaSpinner className='text-3xl text-primary animate-spin'/>
            <p>Please wait ...</p>
        </div>
    </div>
  )
}

export default Loading