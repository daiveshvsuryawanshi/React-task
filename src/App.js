import React from 'react';
import './App.css';

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";



import Navbar from './pages/Navbar';
import Header from './pages/Header'
import Productlist from './pages/Productlist';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Footer from './pages/Footer';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="Productlist" element={<Productlist />} />
        <Route path="AboutUs" element={<Aboutus />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
