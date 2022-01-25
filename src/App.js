import { useState } from 'react'

import './App.css';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'



import Navbar from './pages/Navbar';
import Header from './pages/Header'
import Productlist from './pages/Productlist';
import ProductDisplay from './pages/ProductDisplay';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Productapi from './api/Productapi';


function App() {
  const [cartIsEmpty] = useState(false)

  return (
    <>
     
     <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Productlist/:id" element={<ProductDisplay />} />
        <Route path="Productlist" element={<Productlist />} />
        <Route path="AboutUs" element={<Aboutus />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    
      
      
      <Footer />

    </>
  );
}

export default App;
