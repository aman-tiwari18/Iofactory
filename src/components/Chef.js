import React from 'react'
import ChefCard from './ChefCard'
import pf1 from "../assets/profile1.png"
import pf2 from "../assets/profile2.png"
import pf3 from "../assets/profile3.png"
import cb from "../assets/chefBackground.png"

const title = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const Chef = () => {
  return (
    <div className='justify-center items-center'>
        <div className='flex justify-center items-center py-10 text-2xl'>TOP CHEFS</div>
        <hr/>
        <div className='absolute h-[400px] w-full'>
            <img src = {cb} alt = "background" className='h-[400px] w-full'/>
        </div>
        <div className='absolute flex justify-around w-full items-center py-10'>
            <ChefCard name = "Eileen Johnson" img = {pf1} title = "Executive Chef, USA"/>
            <ChefCard name = "Robert Downey Jr" img = {pf2} title = {title}/>
            <ChefCard name = "Amanda Dority" img = {pf3} title= "Sous Chef, India"/>
        </div>
    </div>
  )
}

export default Chef