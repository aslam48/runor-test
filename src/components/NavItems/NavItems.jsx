import React from 'react'
import { FaUser, FaHome, FaBell, FaEnvelope, FaBook, FaBookOpen, FaPhone, FaInfo, FaProductHunt,  } from 'react-icons/fa'
import {MdHomeRepairService} from 'react-icons/md'
import NavItem from '../NavItem/NavItem'

const navItems = [
    {
        text: 'Home', 
        icon: <FaHome />,
        path: '/'
    },
    {
        text: 'Services', 
        icon: <MdHomeRepairService />,
        path: '/services'
    },
    {
        text: 'Products', 
        icon: <FaProductHunt />,
        path: '/Products'
    },
    {
        text: 'About us', 
        icon: <FaInfo />,
        path: '/aboutus'
    },
    {
      text: 'Contact us', 
      icon: <FaPhone />,
      path: '/contactus'
    },
]

const NavItems = () => {
  return (
    <nav>
        <ul 
            className='list-none flex flex-col items-start justify-center gap-1 my-20'
        >
          {
            navItems.map(item => <NavItem key={item.text} {...item}/>)
          }
        </ul>
    </nav>
  )
}

export default NavItems