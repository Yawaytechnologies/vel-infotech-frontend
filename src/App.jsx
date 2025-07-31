import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/common/header";
import PlacedStudents from "./pages/placedStudents";
import Contact from "./pages/contactUs";
import Interview from "./pages/interview";
import InterviewDetail from "./pages/InterviewDetail";
import Footer from "./components/common/Footer";
import AdminDashboard from "../src/pages/Admin";
import AllCourses from "./pages/AllCourses";
import Java from './components/Courses/Java';
import Python from './components/Courses/Python';
import AdminLogin from "./components/admin/AdminLogin";

// Wrapper component to use useLocation
function Layout({ children }) {
  const location = useLocation();
  // List all admin paths here
  const adminPaths = ["/admin/login", "/admin/dashboard"];
  const isAdmin = adminPaths.includes(location.pathname);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {!isAdmin && <Header />}
      <div className="flex-1">{children}</div>
      {!isAdmin && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* User routes */}
          <Route path="/" element={<Home />} />
          <Route path="/placed-students" element={<PlacedStudents />} />
          
          <Route path="/interview-questions" element={<Interview />} />
          <Route path="/interview/:id" element={<InterviewDetail />} />
  <Route path="/all-courses" element={<AllCourses />} />
        <Route path="/all-courses/Java" element={<Java />} />
        <Route path="/all-courses/Python" element={<Python />} />
       

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    <div className="bg-white">
    
    <Header/>

    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/placed-students" element={<PlacedStudents />} />
       <Route path="/contact-us" element={<Contact/>} />
       
    </Routes>

<Footer />
    
      
    </div>
    </Router>
    
  );
}


