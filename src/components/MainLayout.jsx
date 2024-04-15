import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
