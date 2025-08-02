import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Header from "./components/common/header";
import Internship from "./pages/internship";
import PlacedStudents from "./pages/placedStudents";
import Contact from "./pages/contactUs";
import Interview from "./pages/interview";
import About from "./pages/About";

import InterviewDetail from "./pages/InterviewDetail";
import Footer from "./components/common/Footer";
import AdminDashboard from "../src/pages/Admin";
import AllCourses from "./pages/AllCourses";
import Java from './components/Courses/Java';
import Python from './components/Courses/Python';
import FullStackDevelopement from "../src/components/Courses/FullStackDevelopement";
import Plsql from "../src/components/Courses/Plsql";
import Sql from "../src/components/Courses/Sql";
import DataScience from "../src/components/Courses/DataScience";
import BusinessAnalytics from "../src/components/Courses/BusinessAnalytics";
import DataScienceAi from "../src/components/Courses/DataScienceAi";
import BigDataDeveloper from "../src/components/Courses/BigDataDeveloper";
import SoftwareTesting from "../src/components/Courses/SoftwareTesting";
import SeleniumTesting from "../src/components/Courses/SeleniumTesting";
import EtlTesting from "../src/components/Courses/EtlTesting";
import AwsTraining from "../src/components/Courses/AwsTraining";
import DevOps from "../src/components/Courses/DevOps";
import HardwareNetworking from "../src/components/Courses/HardwareNetworking";
import CyberSecurity from "../src/components/Courses/CyberSecurity";
import Sap from "../src/components/Courses/Sap";
import SalesForce from "../src/components/Courses/SalesForce";
import ServiceNow from "../src/components/Courses/ServiceNow";
import RPA from "../src/components/Courses/RPA";
import AdminLogin from "./components/admin/AdminLogin";
import Clientpage from "./pages/Clientpage";

import StudentTable from "./components/admin/CourseEnquired";
import AdminLayout from "./components/admin/AdminLayout";
import ProductionSupportPage from "./components/Courses/ProductionSupport";
import DigitalMarketingPage from "./components/Courses/DigitalMarketing";
import SoftSkillPage from "./components/Courses/SoftSkillsTraining";

// Wrapper component to use useLocation
function Layout({ children }) {
  const location = useLocation();
  // List all admin paths here
  const adminPaths = [
    "/admin",
    "/admin/login",
    "/admin/dashboard",
    "/admin/course-enquired",
  ];
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
          <Route path="/about" element={<About />} />
          <Route path="/placed-students" element={<PlacedStudents />} />
          <Route path="/contact-us" element={<Contact/>} />
          <Route path="/client" element={<Clientpage/>} />

          
<Route path="/internship" element={<Internship />} />
          <Route path="/interview-questions" element={<Interview />} />
          <Route path="/interview/:id" element={<InterviewDetail />} />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/all-courses/Java" element={<Java />} />
          <Route path="/all-courses/Python" element={<Python />} />
          <Route path="/all-courses/FullStackDevelopement" element={<FullStackDevelopement />} />
          <Route path="/all-courses/Plsql" element={<Plsql />} />
          <Route path="/all-courses/Sql" element={<Sql />} />
          <Route path="/all-courses/DataScience" element={<DataScience />} />
          <Route path="/all-courses/BusinessAnalytics" element={<BusinessAnalytics />} />
          <Route path="/all-courses/DataScienceAi" element={<DataScienceAi />} />
          <Route path="/all-courses/BigDataDeveloper" element={<BigDataDeveloper />} />
          <Route path="/all-courses/SoftwareTesting" element={<SoftwareTesting />} />
          <Route path="/all-courses/SeleniumTesting" element={<SeleniumTesting />} />
          <Route path="/all-courses/EtlTesting" element={<EtlTesting />} />
          <Route path="/all-courses/AwsTraining" element={<AwsTraining />} />
          <Route path="/all-courses/DevOps" element={<DevOps />} />
          <Route path="/all-courses/HardwareNetworking" element={<HardwareNetworking />} />
          <Route path="/all-courses/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/all-courses/Sap" element={<Sap />} />
          <Route path="/all-courses/SalesForce" element={<SalesForce />} />
          <Route path="/all-courses/ServiceNow" element={<ServiceNow />} />
          <Route path="/all-courses/RPA" element={<RPA />} />
          <Route path="/all-courses/ProductionSupport" element={<ProductionSupportPage />} />
          <Route path="/all-courses/DigitalMarketing" element={<DigitalMarketingPage />} />
          <Route path="/all-courses/SoftSkillsTraining" element={<SoftSkillPage />} />
          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="course-enquired" element={<StudentTable />} />
            
            {/* ...more nested admin routes... */}
          </Route>

          {/* Catch-all route */}
        </Routes>
      </Layout>
    </Router>
  );
}
