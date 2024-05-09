import React from 'react'
import "./Category.scss"
const Category = ({id, img, text, setActiveCategory, activeCategory}) => {
  return (
    <div className={activeCategory === id ? "category__active category" : 'category'} onClick={()=>setActiveCategory(id)}>
      <img src={img} alt={text} className='category__img'/>
      <h1 className="category__title">{text}</h1>
    </div>
  )
}

export default Category
