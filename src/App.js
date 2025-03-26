
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
import Services from './Pages/Services'
import WhyUs from './Pages/WhyUs'
import Team from './Pages/Team'
import Error from './Pages/Error'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Register from './Pages/Register'
import Contact from './Pages/Contact'
import SingleCrypto from './Pages/Crypto/SingleCrypto'
import Crypto from './Pages/Crypto/Crypto'


const App = () => {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/about" element ={<About/>} />
      <Route path="/services" element ={<Services/>} />
      <Route path="/why" element ={<WhyUs/>} />
      <Route path="/team" element ={<Team/>} />
      <Route path="/crypto" element={<Crypto/>} />
      <Route path="/crypto/:id" element={<SingleCrypto />} />
      <Route path="/contact" element ={<Contact/>} />
      <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
      <Route path="/login" element ={<Login/>} />
      <Route path="/register" element ={<Register/>} />
      <Route path="*" element ={<Error/>} />
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App

