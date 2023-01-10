import React from 'react'
import logo from "../assets/company-logo.png"
import name from "../assets/company-name.png"
const Navbar = () => {
  return (
    <div className='flex justify-center items-center py-2 gap-4 shadow-md'>
        <span className=' '>
            <img className='h-[28px]'  src= {logo} alt = "logo"/>
        </span>
        <span>
            <img className='h-[28px]' src= {name} alt = "name"/>
        </span>
    </div>
  )
}

export default Navbar