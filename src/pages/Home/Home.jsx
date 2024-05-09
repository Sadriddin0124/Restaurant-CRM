import React, { useState } from 'react'
import "./Home.scss"
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import Category1 from "../../assets/category.png"
import Category2 from "../../assets/category2.png"
import Category3 from "../../assets/category3.png"
import Category4 from "../../assets/category4.png"
import Category from "../../components/Category/Category"
import RightBar from '../../components/RightBar/RightBar'
const Home = () => {
    const [category, setCategory] = useState([
        {id: 1, img: Category1, text: "Noodles"},
        {id: 2, img: Category2, text: "Burger"},
        {id: 3, img: Category3, text: "Drink"},
        {id: 4, img: Category4, text: "Desert"},
    ])
    const [activeCategory, setActiveCategory] = useState(1)
  return (
    <div className='home'>
        <div className="home__sidebar">
            <Sidebar/>
        </div>
        <div className="home__center">
            <Navbar/>
            <div className="home__category">
                {
                    category?.map((item,index)=> {
                        return <Category setActiveCategory={setActiveCategory} activeCategory={activeCategory} id={item?.id} img={item?.img} text={item?.text} key={index}/>
                    })
                }
            </div>
        </div>
        <div className="home__right">
            <RightBar/>
        </div>
    </div>
  )
}

export default Home
