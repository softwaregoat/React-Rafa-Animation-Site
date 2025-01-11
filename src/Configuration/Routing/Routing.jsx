import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Screens/Home/Home.jsx'
import About from '../../Screens/About/About.jsx'
import Amenities from '../../Screens/Amenities/Amenities.jsx'
import Performance from '../../Screens/Performance/Performance.jsx'
import Contact from '../../Screens/Contact/Contact.jsx'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/amenities' element={<Amenities/>} />
        <Route path='/performance' element={<Performance/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing