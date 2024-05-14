import React, { useState } from "react";
import "./Navbar.scss";
import { IoIosSearch } from "react-icons/io";
import AddFood from "../AddFoodModal/AddFoodModal";

const Navbar = () => {
  const [addFood, setAddFood] = useState(false)
  const toggle = () => {
    setAddFood(false)
  }
  return (
    <nav className="navbar">
      <AddFood open={addFood} toggle={toggle}/>
      <div className="navbar__left">
        <h1 className="navbar__title">Welcome, Tony 👋</h1>
        <p className="navbar__subtitle">Discover whatever you need</p>
      </div>
      <div className="navbar__search">
        <IoIosSearch className="navbar__search-logo" size={16}/>
        <input type="text" className="navbar__input" placeholder="Search"/>
      </div>
      <button className="navbar__btn" onClick={()=>setAddFood(true)}>Add Food</button>
    </nav>
  );
};

export default Navbar;
