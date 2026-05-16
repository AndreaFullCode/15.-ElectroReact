import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Error404 from './pages/Error404'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contactos from './pages/Contactos'
import Shop from './pages/Shop'

const App = () => {
  return (
   <BrowserRouter>
   
   <Header/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contactos" element={<Contactos/>}/>
      <Route path="/shop/:cat" element={<Shop/>}/>
      <Route path="*" element={<Error404/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App