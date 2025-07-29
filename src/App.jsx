import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/common/header";
import PlacedStudents from "./pages/placedStudents";
import Footer from "./components/common/Footer";
import AdminDashboard from "../src/pages/Admin";

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

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* User routes */}
          <Route path="/" element={<Home />} />
          <Route path="/placed-students" element={<PlacedStudents />} />

          {/* Admin routes */}
          {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
