import React from 'react'
import fcard1 from "../assets/food-card1.png"
import star from "../assets/star.png"

const FoodCard = () => {
  return (
    <div className='text-white w-[660px] h-[515px]'>
        <div className='absolute'>
            <img src = {fcard1} alt = "background" className=' w-[660px] h-[515px] rounded-md'/>
        </div>
        <div className='absolute bg-[#342679] w-[660px] opacity-70 mt-[305px] rounded-md h-[210px] px-6 py-4'>
          <span className='text-2xl font-bold'>Pizza is a savory dish of Italian origin</span>
          <p className='text-sm py-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
          <hr/>
          <div className=' py-4 flex justify-between'>
            <div className='border-2 rounded-xl px-2 py-2 gap-6'>
              <button>explore</button>
              <span>  {'>'} </span>
            </div>
            
            <div className='flex justify-around items-center gap-4'>
              <span>
                <img src={star} alt='star' className='h-[20px]'/>
              </span>
              <span>rating</span>
            </div>
          </div>
        </div>
    </div>  
  )
}

export default FoodCard
