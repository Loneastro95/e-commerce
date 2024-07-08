import React, { useState } from "react";
import "./main.css";
import img1 from "../images/image-product-1.jpg";
import img2 from "../images/image-product-2.jpg";
import img3 from "../images/image-product-3.jpg";
import img4 from "../images/image-product-4.jpg";
import cart from "../images/icon-cart.svg";
function Main() {
  const [count, setCount] = useState(1);

  const handleMinus = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  const handlePlus = () => {
    setCount(count + 1);
  };
  return (
    <div className="main-container">
      <div className="left-container">
        <img src={img1} className="mainImg" />
        <div className="img-container">
          <button>
            <img src={img1} className="smallImg" />
          </button>
          <button>
            <img src={img2} className="smallImg" />
          </button>
          <button>
            <img src={img3} className="smallImg" />
          </button>
          <button>
            <img src={img4} className="smallImg" />
          </button>
        </div>
      </div>
      <div className="right-container">
        <div className="content-text">
          <h1 className="companyName">SNEAKER COMPANY</h1>
          <h2 className="productTitle">Fall Limited Edition Sneakers</h2>
          <p className="productDescription">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
        </div>
        <div className="price-container">
          <div className="price">
            <h1 className="priceTag">${125 * count}.00</h1>
            <h2 className="discountPercent">$50.00</h2>
          </div>
          <h2 className="discountTag">$250.00</h2>
        </div>
        <div className="count-container">
          <div className="count">
            <button onClick={handleMinus} className="countButton">
              -
            </button>
            <h1 className="countInput">{count}</h1>
            <button onClick={handlePlus} className="countButton">
              +
            </button>
          </div>
          <button className="addCart">
            <span>
              <img src={cart} className="cart" />
            </span>{" "}
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
