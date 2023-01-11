import React from 'react'
import ChefCard from './ChefCard'
import pf1 from "../assets/profile1.png"
import pf2 from "../assets/profile2.png"
import pf3 from "../assets/profile3.png"


const title = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const Chef = () => {
  return (
    <div className='justify-center items-center w-full'>
        <div className='flex justify-center items-center py-10 text-2xl tracking-widest gap-5 flex-col'>
            TOP CHEFS
            <hr className='h-[3px] bg-gray-200 border-0 rounded-md w-14  dark:bg-[#342679]'/>
        </div>
        <hr/>
        <div className='flex justify-around w-full items-center py-10 bg-cb bg-no-repeat bg-cover'>
            <ChefCard name = "Eileen Johnson" img = {pf1} title = "Executive Chef, USA"/>
            <ChefCard name = "Robert Downey Jr" img = {pf2} title = {title}/>
            <ChefCard name = "Amanda Dority" img = {pf3} title= "Sous Chef, India"/>
        </div>
    </div>
  )
}

export default Chef