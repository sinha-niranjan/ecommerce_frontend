import React from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import banner from "../../assets/images/banner4.png";
import { Organic, Rating } from "../../components/Tags/Tags";
import { filterProducts } from "../../data/bannerProducts";

const products = {
  heading: "FILTERED PRODUCTS",
  details: "Some of the new products arriving this week",
  products: filterProducts,
};

const FillterProductsMain = () => {
  return (
    <div className="filter-products-main">
      <div className="filter-products-carousel">
        <img src={banner} />
      </div>
      <div className="filter-products-section">
        {products.products.map((product, ind) => (
          <div key={ind} className="new-product">
            <div className="product-image">
              <span>
                <p>75%</p>

                <CiHeart />
              </span>
              <img src={product.img} alt={"apple juice"} />
              <Organic />
            </div>
            <div className="product-details">
              <div className="product-name">
                <p> 100 Percent Apple Juice – 64 frozen bottle</p>
              </div>
              <div className="product-rating">
                <Rating rating={3} />
                <p>{3}</p>
              </div>
              <div className="product-price">₹ 200</div>
              <div className="product-stock">
                <CiShoppingCart />
                <p>IN STOCK</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FillterProductsMain;
