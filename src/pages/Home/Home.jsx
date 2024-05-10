import React, { useState } from "react";
import "./Home.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Category1 from "../../assets/category.png";
import Category2 from "../../assets/category2.png";
import Category3 from "../../assets/category3.png";
import Category4 from "../../assets/category4.png";
import Category from "../../components/Category/Category";
import RightBar from "../../components/RightBar/RightBar";
import Food from "../../assets/food1.png";
import FoodCard from "../../components/FoodCard/FoodCard";
const Home = () => {
  const [category, setCategory] = useState([
    { id: 1, img: Category1, text: "Noodles" },
    { id: 2, img: Category2, text: "Burger" },
    { id: 3, img: Category3, text: "Drink" },
    { id: 4, img: Category4, text: "Desert" },
  ]);
  const [activeCategory, setActiveCategory] = useState(1);
  const [mainFoods, setMainFoods] = useState([
    {
      id: 1,
      img: Food,
      title: "Chinese Yakisbo",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
    {
      id: 2,
      img: Food,
      title: "Chinese Yakisbo",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
    {
      id: 3,
      img: Food,
      title: "Chinese Yakisbo",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
    {
      id: 4,
      img: Food,
      title: "Chinese Yakisbo",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
    {
      id: 5,
      img: Food,
      title: "Chinese Yakisbo",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
    {
      id: 6,
      img: Food,
      title: "Chinese Yakisbo",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
  ]);
  const [openRightBar, setOpenRightBar] = useState(false)
  return (
    <div className="home">
      <div className="home__sidebar">
        <Sidebar />
      </div>
      <div className="home__center">
        <Navbar />
        <div className="home__category">
          {category?.map((item, index) => {
            return (
              <Category
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
                id={item?.id}
                img={item?.img}
                text={item?.text}
                key={index}
              />
            );
          })}
        </div>
        <div className="home__foods">
            {
                mainFoods?.map((item,index)=> {
                    return <FoodCard key={index} item={item}/>
                })
            }
        </div>
      </div>
      <div className="home__right">
        <RightBar openRightBar={openRightBar} setOpenRightBar={setOpenRightBar}/>
      </div>
    </div>
  );
};

export default Home;
