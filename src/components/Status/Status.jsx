import React from 'react'
import  './Status.css'


const Status = ({title, icon}) => {
  return (
    <div className='status'>
        <div>
            {icon}
            <h2>{title}</h2>
        </div>
    </div>
  )
}

export default Status