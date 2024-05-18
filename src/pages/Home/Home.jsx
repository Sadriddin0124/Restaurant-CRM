import React, { useEffect, useState } from "react";
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
import { useProductStore } from "../../store/ProductStore/ProductStore";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import AddFood from "../../components/Modals/AddFoodModal/AddFoodModal";
import { useCategoryStore } from "../../store/CategoryStore/CategoryStore";
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
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
    {
      id: 2,
      img: Food,
      title: "Chinese Yakisbo",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
    {
      id: 3,
      img: Food,
      title: "Chinese Yakisbo",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
    {
      id: 4,
      img: Food,
      title: "Chinese Yakisbo",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
    {
      id: 5,
      img: Food,
      title: "Chinese Yakisbo",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
    {
      id: 6,
      img: Food,
      title: "Chinese Yakisbo",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
      rate: 4.5,
      price: "$5.08",
    },
  ]);
  const { getProducts} = useProductStore()
  const [foods, setFoods] = useState([])
  const [categories, setCategories] = useState([])
  const {getCategory} = useCategoryStore()
  useEffect(()=> {
    receiveProducts()
    receiveCategory()
  }, [])
  const receiveProducts = async() => {
    const res = await getProducts()
    setFoods(res?.data?.products)
    console.log(res);
  }
  const receiveCategory = async() => {
    const response = await getCategory()
    console.log(response);
    setCategories(response?.data?.Categories)
  }
  const [openRightBar, setOpenRightBar] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [editItem, setEditItem] = useState("")
  const [deleteID, setDeleteID] = useState("")
  const toggle = () => {
    setDeleteModal(false)
    setOpenModal(false)
    setEditItem("")
    setDeleteID("")
  }
  return (
    <div className="home">
      <DeleteModal open={deleteModal} toggle={toggle} id={deleteID}/>
      <AddFood open={openModal} toggle={toggle} editItem={editItem}/>
      <div className="home__sidebar">
        <Sidebar />
      </div>
      <div className="home__center">
        <Navbar />
        <div className="home__category">
          {categories?.map((item, index) => {
            return (
              <Category
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
                item={item}
                key={index}
              />
            );
          })}
        </div>
        <div className="home__foods">
            {
                foods?.map((item,index)=> {
                    return <FoodCard key={index} item={item} setDeleteModal={setDeleteModal} setOpenModal={setOpenModal} setEditItem={setEditItem} setDeleteID={setDeleteID}/>
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
