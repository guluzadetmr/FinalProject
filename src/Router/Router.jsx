import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import AboutUs from '../Pages/About us/AboutUs'
import Contact from '../Pages/Contact/Contact'

const Router = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About Us' element={<AboutUs />} />
      <Route path='/Contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
