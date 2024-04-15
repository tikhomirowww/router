import React from "react";
import { Route, Routes } from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import AboutPage from "../pages/AboutPage";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../components/MainLayout";
import Details from "../components/Details";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route index element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
