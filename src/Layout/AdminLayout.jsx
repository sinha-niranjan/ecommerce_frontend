import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { useSelector } from "react-redux";

const AdminLayout = () => {
  const { user } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== "admin") {
      navigate("/");
    }
  },[]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AdminLayout;
