import React, { useEffect, useState } from "react";
import banner1 from "../../assets/images/banner.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import "./Carousel.scss";

const images = [banner1, banner2, banner3];

const Carousel = () => {
  const [img, setImg] = useState(0);

  setTimeout(() => {
    setImg((prev) => (prev + 1) % images.length);
  }, 5000);

  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url(${images[img]})`,
        }}
      >
        <div className="inner">
          <span className="discount">Weekend Discount</span>
          <h3>Shopping with us for better quality and the best price</h3>
          <span className="details">
            We have prepared special discounts for you on grocery products.
            Don't miss these opportunities...{" "}
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
    </>
  );
};

export default Carousel;
