import React from 'react'

const CuisineCard = (props) => {
  return (
    <div className='items-center m-4 w-1/3'>
        <div className='font-bold text-2xl py-3'>
            <h1>{props.name}</h1>
        </div>
        <p className='text-[11px] font-semibold'>{props.description}</p>
    </div>
  )
}

export default CuisineCard