import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm';
import loginImage from '../../images/login-bg.jpg';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { useSelector } from 'react-redux';

const Login = () => {
    const {isLoading, } = useSelector( store => store.profile)

    if(isLoading) return <Loading />
    return (
        <div className='grid grid-col-1 lg:grid-cols-2 h-screen w-screen overflow-clip'>
            <article className='relative items-center text-center invisible lg:visible'>
                <img 
                    src={loginImage} alt='bg-poster'
                    className='w-full h-full object-cover aspect-square animate-pulse absolute top-0 left-0'
                />
                <div 
                    className='bg-black bg-opacity-60 flex flex-col justify-center items-center gap-2 text-white absolute w-full h-full z-10 top-0 left-0 px-5 lg:px-20'
                >
                    <Link to='/'>
                        <img src={logo} alt='logo'/>
                    </Link>
                    <h2 className='font-bold text-xl lg:text-5xl'>Welcome To Runor</h2>
                    <p>Stressless and do more. Get exceptional assistance when you want it. How you want it. The way you want it.</p>
                </div>
            </article>
        
            <article className='flex flex-col items-center justify-center shadow-xl'>
                <Link to='/' className='cursor-pointer flex gap-2 font-bold items-center text-3xl visible lg:invisible px-5 text-primary'>
                    <img src={logo} alt='logo'/>
                    <h2>Runor</h2>
                </Link>
                <LoginForm />
            </article>
        </div>
    )
}

export default Login