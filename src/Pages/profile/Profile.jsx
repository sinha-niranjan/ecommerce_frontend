import React from "react";
import "./Profile.scss";
import { IoPersonOutline } from "react-icons/io5";

const options = ["Dashboard", "Orders","Whislist", "Addresses","Account Details","Logout"];

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="rightSide">
        <div className="user-profile">
          <div className="img">
            <IoPersonOutline />
          </div>
          <div className="details">
            <p>Welcome back</p>
            <h3>niranjankumaraina@gmail.com</h3>
          </div>
        </div>

        <div className="options">
          {options.map((option, ind) => (
            <div className="option" key={ind}>
              <p>{option}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="leftSide"></div>
    </div>
  );
};

export default Profile;
