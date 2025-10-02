import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "../config/axios.config";

export const DataProvider = createContext();

export const DataContext = ({ children }) => {
  const [user, setuser] = useState(null);

  const getuser = async () => {
    try {
      let res = await axios.get("/auth/dd");
      setuser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getuser();
  }, []);

  



  return <DataProvider.Provider value={{
    user
  }}>{children}</DataProvider.Provider>;
};

export const useData = () => useContext(DataProvider);
