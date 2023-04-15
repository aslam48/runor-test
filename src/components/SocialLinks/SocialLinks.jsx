import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const links = [
    {
        path: 'youtube.com',
        icon: <FaYoutube />,
        color: 'text-red-500'
    },
    {
        path: 'twitter.com',
        icon: <FaTwitter />,
        color: 'text-sky-500'
    },
    {
        path: 'facebook.com',
        icon: <FaFacebook />,
        color: 'text-blue-500'
    }
]

const SocialLink = ({icon, path, color}) =>{
    return (
        <Link 
            to={path}
            className={`hover:bg-slate-300 hover:scale-110 p-2 rounded-full text-3xl transition-all duration-150 ${color}`}
        >
            <span>{icon}</span>
        </Link>
    )
}

const SocialLinks = () => {
  return (
    <div className='flex justify-evenly mt-auto items-center border-t-2 border-t-primary pt-5'>
        {
            links.map(link => <SocialLink  key={link.path} {...link}/>)
        }
    </div>
  )
}

export default SocialLinks