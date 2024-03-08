import React from "react";

import "./Dashboard.scss";
import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useAllUsersMutation } from "../../../redux/api/userAPI";

const Dashboard = () => {
  const { user } = useSelector((state) => state.userReducer);
  const [allUsers] = useAllUsersMutation();

  const allUserHandler = async () => {
    const accessToken =  localStorage.getItem("AccessToken");

    try {
      const res = await allUsers(accessToken);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="profile-page">
      <div className="rightSide">
        <div className="user-profile">
          <div className="img">
            <IoPersonOutline />
          </div>
          <div className="details">
            <p>Welcome back</p>
            <h3>{user.email}</h3>
          </div>
        </div>

        <div className="options">
          <div className="option">
            <p onClick={allUserHandler}>All Users</p>
          </div>
          <div className="option">
            <p>Orders</p>
          </div>{" "}
          <div className="option">
            <p>Whislist</p>
          </div>{" "}
          <div className="option">
            <p>Addresses</p>
          </div>{" "}
          <div className="option">
            <p>Account Details</p>
          </div>{" "}
          <div className="option">
            <p>Logout</p>
          </div>
        </div>
      </div>
      <div className="leftSide"></div>
    </div>
  );
};

export default Dashboard;
