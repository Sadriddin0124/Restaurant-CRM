import React from 'react'
import "./Category.scss"
const Category = ({item, setActiveCategory, activeCategory}) => {
  return (
    <div className={activeCategory === item?.id ? "category__active category" : 'category'} onClick={()=>setActiveCategory(item?.id)}>
      <img src={item?.image} alt={item?.name} className='category__img'/>
      <h1 className="category__title">{item?.name}</h1>
    </div>
  )
}

export default Category
