import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MultiRowHeader from "../src/components/common/MultiHeader";
import Home from "./pages/Home";
import AllCourses from "../src/pages/AllCourses";

function App() {
  return (
    <div className="bg-white">
      <Router>
        <MultiRowHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-courses" element={<AllCourses />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
