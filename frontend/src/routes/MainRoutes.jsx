import React from "react";
import { Routes, Route } from "react-router-dom";
// import AdminRegisterDark from '../pages/AdminRegister'
import Home from "../pages/Home";
import Login from "../pages/Login";
import AdminRegister from "../pages/AdminRegister";
import UserRegister from "../pages/Signup";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Tiffin from "../pages/Tiffin";
import Loundary from "../pages/Loundary";
import UserDashboard from "../pages/UserDashboard";
import Complaint from "../pages/Complaint";
import Query from "../pages/Query";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path='/register' element={<AdminRegisterDark/>}/>
      <Route path='/login' element={<AdminLoginDark/>}/> */}
      {/* Add more routes as needed */}
      <Route path="/login" element={<Login />} />
      <Route path="/adminregister" element={<AdminRegister />} />
      <Route path="/user-register" element={<UserRegister />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tiffin" element={<Tiffin />} />
      <Route path="/laundry" element={<Loundary />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
         <Route path="/complaint" element={<Complaint />} />
         <Route path="/query" element={<Query />} />
    </Routes>
  );
};

export default MainRoutes;
