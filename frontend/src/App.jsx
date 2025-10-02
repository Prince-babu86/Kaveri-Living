import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainLoader from "./pages/MainLoader";
import axios from "axios";
import AdminDashboard from "./pages/AdminDashBoard";
// import { LogIn } from 'lucide-react'

const App = () => {
  const [loaded, setLoaded] = useState(false);

  const handeldata = async () => {
    let res = await axios.get("http://localhost:3000/auth/dd", {
      withCredentials: true,
    });
    console.log(res.data);
    // let data =  res.data();
    // console.log(data);
  };

  useEffect(() => {
    handeldata();
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 3000); // simulate load
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen w-full bg-[#000000]">
      <div>
        {/* <AdminDashboard/> */}
        <MainLoader />
        <Navbar />
        <MainRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
