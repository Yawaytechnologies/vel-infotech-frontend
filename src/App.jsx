import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllCourses from '../src/pages/AllCourses';
import Home from './pages/Home';
import Header from './components/common/header';
import Footer from "../src/components/common/Footer";
import PlacedStudents from "./pages/placedStudents";
import Interview from "./pages/interview";
import InterviewDetail from "./pages/InterviewDetail";


import Java from './components/Courses/Java';
import Python from './components/Courses/Python';



export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/all-courses/Java" element={<Java />} />
        <Route path="/all-courses/Python" element={<Python />} />
        <Route path="/placed-students" element={<PlacedStudents />} />
          <Route path="/placed-students" element={<PlacedStudents />} />
          <Route path="/interview-questions" element={<Interview />} />
          <Route path="/interview/:id" element={<InterviewDetail />} />
          {/* Admin routes */}
          {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
         
      </Routes>
      <Footer/>
    </Router>
    
  );
}


