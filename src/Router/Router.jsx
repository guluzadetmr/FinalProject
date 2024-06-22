import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import AboutUs from '../Pages/About us/AboutUs'
import Contact from '../Pages/Contact/Contact'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register/Register'
import Catalog from '../Pages/Catalog/Catalog'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About Us' element={<AboutUs />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Catalog'  element={<Catalog />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
