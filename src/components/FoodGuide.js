import React from 'react'
import gb from "../assets/guide-banner.png"
import GuideCard from './GuideCard'
import fg1 from "../assets/food-guide1.png"
import fg2 from "../assets/food-guide2.png"
import fg3 from "../assets/food-guide3.png"
import fg4 from "../assets/food-guide4.png"

const title1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
const title2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."

const FoodGuide = () => {
  return (
    <div className='h-[900px] w-full'>
        <div className='absolute'>
            <img src = {gb} alt = "back" className='h-[900px] w-full'/>
        </div>
        <div className='absolute'>
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