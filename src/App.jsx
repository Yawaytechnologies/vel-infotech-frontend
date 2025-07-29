import { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import React from "react";
import Home from "./pages/Home";
import Header from "./components/common/header";
import PlacedStudents from "./pages/placedStudents";
import About from "./pages/About";

import MultiRowHeader from "../src/components/common/MultiHeader";

import Footer from "./components/common/Footer";
function App() {


  return (
    <Router>
    <div className="bg-white">
    
    <Header/>

    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/placed-students" element={<PlacedStudents />} />
       <Route path="/about" element={<About/>} />
       
       
    </Routes>

<Footer />
    
      
    </div>
    </Router>
  );
}

export default App;
