import { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import React from "react";
import Home from "./pages/Home";
import Header from "./components/common/header";
import PlacedStudents from "./pages/placedStudents";

import MultiRowHeader from "../src/components/common/MultiHeader";

function App() {


  return (
    <Router>
    <div className="bg-white">
      {/* <MultiRowHeader /> */}
    <Header/>

    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/placed-students" element={<PlacedStudents />} />
       
    </Routes>

    
      
    </div>
    </Router>
  );
}

export default App;
