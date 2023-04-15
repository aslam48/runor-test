import React from 'react'
import { Link } from 'react-router-dom'
import UserServiceProfileForm from '../../components/UserServiceProfileForm/UserServiceProfileForm'
import './ProfileSetup.css'
import providerImage from '../../images/electrician.jpg'
import consumerImage from '../../images/cleaner.jpg'
import Header from '../../components/Header/Header'


const ProfileSetup = () => {

  return (
    <>
        <Header/>
        <div className='profile-setup relative w-screen h-screen'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <img src={providerImage} alt='provider'/>
                <img src={consumerImage} alt='consumer'/>
            </div>
            <div className='overlay main-x-p mt-10 text-center'>
                {/* <h1 className='font-bold text-xl lg:text-2xl my-10'>Profile set up</h1> */}
                <p className=''>Runor is a platform for both service consumers and providers. Set up your profile according what you wish to achieve on Runor</p>
                <UserServiceProfileForm />

                <div className='w-full lg:w-1/3 flex justify-between gap-4 py-2'>
                    <Link 
                        className='bg-white text-primary p-2 rounded-md flex-1'
                        to={'/profile'}
                        >Not now
                    </Link>

                    <Link type='reset' value='Clear' className='bg-slate-500 text-white p-2 rounded-md flex-1'>Done</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfileSetup