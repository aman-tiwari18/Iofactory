import React from 'react'
import CuisineCard from './CuisineCard';

const description1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
const description2 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.";

const Cuisine = () => {
  return (
    <div className='flex justify-around py-10 px-14'>
        <CuisineCard name = "Indian Cuisine" description = {description1}/>
        <CuisineCard name = "American Cuisine" description = {description2}/>
        <CuisineCard name = "Chinese Cuisine" description = {description1}/>
    </div>
  )
}

export default Cuisine