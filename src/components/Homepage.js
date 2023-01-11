import React from 'react'
import FoodCard from './FoodCard'
import SmallCard from './SmallCard' 
import fcard2 from "../assets/food-card2.png"
import fcard3 from "../assets/food-card3.png"
import fcard4 from "../assets/food-card4.png"
import fcard5 from "../assets/food-card5.png"


const Homepage = () => {
  return (
    <div className=''>
        <div className='py-8 text-3xl justify-center items-center flex tracking-widest gap-3 flex-col'>
          VARIETIES
          <hr className='h-[3px] bg-gray-200 border-0 rounded-md w-14 shadow-xl dark:bg-black'/>
        </div>
        <div className='flex justify-between px-12'>
          <div>
              <FoodCard/>
          </div>
          <div className='flex flex-col gap-4'>
              <div className='flex flex-row gap-4'>
                  <SmallCard img = {fcard2} title = "Crispy French Fries" rating = "rate"/>
                  <SmallCard img ={fcard3} title = "Paneer Tikka" rating = "rated"/>
              </div>
              <div className='flex flex-row gap-3'>
              <SmallCard img = {fcard4} title = "Macaroon" rating = "rate"/>
              <SmallCard img = {fcard5} title = "Doughnut" rating = "rate"/>

              </div>
          </div>
        </div>
        
    </div>  
  )
}

export default Homepage