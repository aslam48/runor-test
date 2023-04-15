import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'
import Header from '../../components/Header/Header'

const Error = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-4 justify-center items-center'>
        <Header />
        <h1 className='font-semibold'>Error! Page Not Found</h1>
        <Link to='/' className='p-2 px-4 text-white bg-black rounded-full'>Back Home</Link>
    </div>
  )
}

export default Error