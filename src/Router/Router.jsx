import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About us/AboutUs";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Catalog from "../Pages/Catalog/Catalog";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Computers from "../Pages/Computers/Computers";
import ComputerParts from "../Pages/ComputerParts/ComputerParts";
import Equipment from "../Pages/Equipment/Equipment";
import Household from "../Pages/Household/Household";
import Phones from "../Pages/Phones/Phones";
import Others from "../Pages/Others/Others";
import Success from "../Pages/Success/Success";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import Dashboard from "../Components/Dashboard/Dashboard";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Computers" element={<Computers />} />
          <Route path="/ComputerParts" element={<ComputerParts />} />
          <Route path="/Equipment" element={<Equipment />} />
          <Route path="/Household" element={<Household />} />
          <Route path="/Phones" element={<Phones />} />
          <Route path="/Others" element={<Others />} />
          <Route path="/Success" element={<Success />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
