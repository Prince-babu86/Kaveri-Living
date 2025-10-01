import React from 'react'
import { Routes , Route } from 'react-router-dom'
// import AdminRegisterDark from '../pages/AdminRegister'
import Home from '../pages/Home'
import Login from '../pages/Login'
import AdminRegister from '../pages/AdminRegister'
import UserRegister from '../pages/Signup'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/register' element={<AdminRegisterDark/>}/>
      <Route path='/login' element={<AdminLoginDark/>}/> */}
      {/* Add more routes as needed */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/adminregister' element={<AdminRegister/>}/>
      <Route path='/userregister' element={<UserRegister/>}/>
    </Routes>
  )
}

export default MainRoutes