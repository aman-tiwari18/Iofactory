import React from 'react'

import GuideCard from './GuideCard'
import fg1 from "../assets/food-guide1.png"
import fg2 from "../assets/food-guide2.png"
import fg3 from "../assets/food-guide3.png"
import fg4 from "../assets/food-guide4.png"

const title1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
const title2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const FoodGuide = () => {
  return ( 
    <div className='bg-gb bg-no-repeat bg-cover px-20 pt-8 pb-24'>
        <div className='flex justify-center items-center text-2xl py-6 flex-col tracking-widest gap-5'>
          FOOD GUIDE
          <hr className='h-[3px] bg-gray-200 border-0 rounded-md w-14  dark:bg-[#342679]'/>
        </div>
        
        <div className=''>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col '>
                        <GuideCard img = {fg1} name = "VEGETABLES" title = {title1}/>
                        <GuideCard img = {fg2} name = "FRUITS" title = {title2}/>

                </div>
                <div className='flex flex-col'>
                        <GuideCard img = {fg3} name = "WHOLE GRAINS" title = {title1}/>
                        <GuideCard img = {fg4} name = "HEALTHY PROTEIN" title = {title2}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FoodGuide