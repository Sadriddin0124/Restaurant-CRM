import React from 'react'
import "./FoodCard.scss"
import { FaStar } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import NOIMAGE from "../../assets/noimage.png"
const FoodCard = ({item}) => {
  return (
    <div className='food'>
      <div className="food__img">
        <img src={NOIMAGE} alt={item?.title} />
      </div>
      <h1 className="food__title">{item?.title}</h1>
      <p className="food__desc">{item?.description}</p>
      <div className="food__rate">
        <FaStar className='food__star-full'/>
        <FaStar className='food__star-full'/>
        <FaStar className='food__star-full'/>
        <FaStar className='food__star-full'/>
        <FaStar className='food__star-cream'/>
        <p>{item?.rate}</p>
      </div>
      <h1 className="food__price">{item?.price}</h1>
      <button className="food__plus"><AiOutlinePlus/></button>
    </div>
  )
}

export default FoodCard
