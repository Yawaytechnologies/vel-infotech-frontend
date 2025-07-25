import { useState } from "react";
import PlacedStudents from "./pages/placedStudents";


import React from "react";
import Home from "./pages/Home";
import Header from "./components/common/header";
import MultiRowHeader from "../src/components/common/MultiHeader";

function App() {


  return (
    <div className="bg-white">
      {/* <MultiRowHeader /> */}
    <Header/>
    <Home/>
      <PlacedStudents />
    </div>
  );
}

export default App;
