import React from 'react'
import "./RightBar.scss"
import Food from "../../assets/food1.png"
import { IoIosArrowBack } from "react-icons/io";

const RightBar = ({openRightBar, setOpenRightBar}) => {
  return (
    <aside className={openRightBar ? 'right_0 right' : "right"}>
    <button className={openRightBar ? 'right__close right__open' : "right__open"} onClick={()=>setOpenRightBar(prev=> !prev)}><IoIosArrowBack /></button>
      <h1 className="right__title">Current Order</h1>
      <div className="right__cards">
        <div className="right__card">
            <img src={Food} alt="food" className="right__card-img" />
            <div className="right__card-text">
                <h1 className="right__card-title">Chinese Yakisbo </h1>
                <div className="right__card-bottom">
                    <p className="right__card-count">1x</p>
                    <p className="right__card-price">$5.09</p>
                </div>
            </div>
        </div>
        <div className="right__card">
            <img src={Food} alt="food" className="right__card-img" />
            <div className="right__card-text">
                <h1 className="right__card-title">Chinese Yakisbo </h1>
                <div className="right__card-bottom">
                    <p className="right__card-count">1x</p>
                    <p className="right__card-price">$5.09</p>
                </div>
            </div>
        </div>
        <div className="right__card">
            <img src={Food} alt="food" className="right__card-img" />
            <div className="right__card-text">
                <h1 className="right__card-title">Chinese Yakisbo </h1>
                <div className="right__card-bottom">
                    <p className="right__card-count">1x</p>
                    <p className="right__card-price">$5.09</p>
                </div>
            </div>
        </div>
      </div>
      <div className="right__bill">
        <div className="right__bill-text">
            <p className="right__bill-title">Subtotal</p>
            <h1 className="right__bill-price">$20.90</h1>
        </div>
        <div className="right__bill-text">
            <p className="right__bill-title">Discount Offer</p>
            <h1 className="right__bill-price">-$2.09</h1>
        </div>
        <div className="right__bill-text">
            <p className="right__bill-title">Total Sales Tax</p>
            <h1 className="right__bill-price">1.50</h1>
        </div>
        <div className="right__bill-total">
            <h1>Total</h1>
            <h1>1.50</h1>
        </div>
      </div>
      <button className='right__checkout'>Check out</button>
    </aside>
  )
}

export default RightBar
