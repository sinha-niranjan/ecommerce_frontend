import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
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
      </div>
    </>
  );
};

export default Header;
