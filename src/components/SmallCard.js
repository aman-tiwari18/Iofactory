import React from 'react'

import star from "../assets/star2.png"

const SmallCard = (props) => {
  return (
    <div className='text-black w-[370px] h-[250px]'>
        <div className='absolute'>
            <img src = {props.img} alt = "background" className=' w-[370px] h-[250px] rounded-md'/>
        </div>
        <div className='absolute bg-[#FFFFFF] w-[370px] opacity-60 mt-[120px] rounded-md h-[160px] px-3 py-2'>
          <span className='text-md font-bold'>{props.title}</span>
          <p className='text-[12px] py-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <hr/>
          <div className=' py-2 flex justify-between'>
            <div className='border-2 rounded-xl px-1 py-1 gap-3'>
              <button>explore</button>
              <span>  {'>'} </span>
            </div>
            
            <div className='flex justify-around items-center gap-2'>
              <span>
                <img src={star} alt='star' className='h-[15px]'/>
              </span>
              <span>{props.rating}</span>
            </div>
          </div>
        </div>
    </div> 
  )
}

export default SmallCard