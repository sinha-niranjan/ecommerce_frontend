import React, { useState } from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { VscThreeBars } from "react-icons/vsc";
import { IoPersonOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/images/logo.png";
// import { Productcategories } from "../../data/categories";
import { Productcategroies } from "../../data/bannerProducts";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  console.log(isOpen);
  return (
    <>
      <div className="discount">
        <h4>
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </h4>
        <h5>
          Until the end of the sale: <p>45</p> days <p>06</p> hours <p>55</p>
          minutes <p>51</p>Secs.
        </h5>
      </div>
      <div className="header">
        <div className="header-row-first">
          <div className="links">
            <Link>About Us</Link>
            <Link>My Account</Link>
            <Link>Wishlist</Link>
            <p>
              We deliver to you every day from <strong>7:00 to 23:00</strong>
            </p>
          </div>
          <div className="header-details">
            <p>
              English <FaAngleDown />{" "}
            </p>
            <p>
              USD <FaAngleDown />{" "}
            </p>
            <p>Order Tracking </p>
          </div>
        </div>
        <div className="header-row-second">
          <div className="logo" onClick={() => navigate("/")}>
            <img loading="lazy" src={logo} alt="logo" />
          </div>
          <div
            className="categories"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <VscThreeBars />
            Categories
          </div>
          <div
            className="proudct-categories"
            style={{ display: isOpen ? "block" : "none" }}
          >
            {Productcategroies.map((category) => (
              <div>
                {" "}
                <p>{category.text}</p>{" "}
              </div>
            ))}
          </div>
          <div className="search-box">
            <input
              type="search"
              placeholder="Search for products, categories or brands..."
            />
            <CiSearch />
          </div>
          <div className="account" onClick={() => navigate("/auth/sign-in")}>
            <IoPersonOutline />
            <p>Account</p>
          </div>
          <div className="wishlist">
            <CiHeart />
            <p>Whishlist</p>
          </div>
          <div className="cart">
            <CiShoppingCart />
            <p>Your Cart</p>
          </div>
        </div>
        <div className="header-row-third">
          <div className="right">
            <span>
              <p>Home</p>
              <FaAngleDown />
            </span>
            <span>
              <p>Shop</p>
              <FaAngleDown />
            </span>
            <span>Fruits and Vegetables</span>
            <span>Beverages</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
          <div className="left">
            <span>
              <p>Trending Products </p>
              <FaAngleDown />
            </span>
            <span className="warning">
              Almost Finished <p>SALE</p>
              <FaAngleDown />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
