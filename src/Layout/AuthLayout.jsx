import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./AuthLayout.scss";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const { user } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  console.log(user)

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  });

  return (
    <>
      <div className="auth-layout">
        <Outlet />
      </div>
    </>
  );
};

export default AuthLayout;
