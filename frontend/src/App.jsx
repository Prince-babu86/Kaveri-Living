import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainLoader from "./pages/MainLoader";
import axios from "axios";
import AdminDashboard from "./pages/AdminDashBoard";
import Menubar from "./components/Menubar";
// import { LogIn } from 'lucide-react'

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000); // simulate load
    return () => clearTimeout(timer);
  }, []);

  let location = window.location.pathname;
  let isAuthRoute =
    location === "/login" ||
    location === "/user-register" ||
    location === "/adminregister";

  return (
    <div className="min-h-screen w-full bg-[#000000]">
      <div>
        {/* <AdminDashboard/> */}
        {/* <MainLoader /> */}
        {!isAuthRoute && <Navbar />}
        {<MainRoutes />}
        {!isAuthRoute && <Footer />}
        {!isAuthRoute && <Menubar />}
      </div>
    </div>
  );
};

export default App;
