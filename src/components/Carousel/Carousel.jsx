import React from "react";
import banner from "../../assets/images/banner.png";
import "./Carousel.scss";

const Carousel = () => {
  return (
    <div className="banner">
      <div className="inner">
        <span className="discount">Weekend Discount</span>
        <h3>Shopping with us for better quality and the best price</h3>
        <span className="details">
          We have prepared special discounts for you on grocery products. Don't
          miss these opportunities...{" "}
        </span>
        <div className="offers">
          <p>Shop Now</p>
          <div className="price">
            ₹217
            <p>don't miss this limited offers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
