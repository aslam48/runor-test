import React from 'react'
import {FaRegSmileBeam} from 'react-icons/fa'
import {MdOutlineLocalCarWash,} from 'react-icons/md'
import {HiOutlineHome,} from 'react-icons/hi'
import Status from '../Status/Status'
import './StatusList.css'

const status = [
    {
        title: "Home",
        icon: <HiOutlineHome className='logo'/>
    }, 
    {
        title: "OutSide",
        icon: <MdOutlineLocalCarWash className='logo' />
    },
    {
        title: "I am Bored",
        icon: <FaRegSmileBeam className='logo'/>
    }
]

const StatusList = () => {

    return (
        <>
            <h1>Where Are You?</h1>
            <div className='status-list'>
                {
                    status.map((item, index)=>{
                        return(
                            <Status {...item} key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default StatusList