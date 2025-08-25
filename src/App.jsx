import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";
import Header from "./components/common/header";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";

import PlacedStudents from "./pages/placedStudents";
import Contact from "./pages/contactUs";
import Interview from "./pages/interview";
import About from "./pages/About";
import AdminDashboard from "./components/admin/AdminDashboard";
import BlogBanner from "./pages/Blog";
import Tutorials from "./pages/Tutorials";
import InterviewDetail from "./pages/InterviewDetail";

import AddStudent from "./components/admin/AddStudent";
import AllCourses from "./pages/AllCourses";
import Java from "./components/Courses/Java";
import Python from "./components/Courses/Python";
import FullStackDevelopement from "./components/Courses/FullStackDevelopement";
import Plsql from "./components/Courses/Plsql";
import Sql from "./components/Courses/Sql";
import DataScience from "./components/Courses/DataScience";
import BusinessAnalytics from "./components/Courses/BusinessAnalytics";
import DataScienceAi from "./components/Courses/DataScienceAi";
import BigDataDeveloper from "./components/Courses/BigDataDeveloper";
import SoftwareTesting from "./components/Courses/SoftwareTesting";
import SeleniumTesting from "./components/Courses/SeleniumTesting";
import EtlTesting from "./components/Courses/EtlTesting";
import AwsTraining from "./components/Courses/AwsTraining";
import DevOps from "./components/Courses/DevOps";
import HardwareNetworking from "./components/Courses/HardwareNetworking";
import CyberSecurity from "./components/Courses/CyberSecurity";
import Sap from "./components/Courses/Sap";
import SalesForce from "./components/Courses/SalesForce";
import ServiceNow from "./components/Courses/ServiceNow";
import RPA from "./components/Courses/RPA";
import AdminLogin from "./components/admin/AdminLogin";
import Clientpage from "./pages/Clientpage";
import Feedback from "./pages/Feedback";
import StudentTable from "./components/admin/CourseEnquired";
import AdminLayout from "./components/admin/AdminLayout";
import ProductionSupportPage from "./components/Courses/ProductionSupport";
import DigitalMarketingPage from "./components/Courses/DigitalMarketing";
import SoftSkillPage from "./components/Courses/SoftSkillsTraining";
import Reviews from "./pages/Reviews";
import SampleResume from "./pages/SampleResume";
import Whatsapp from "./components/common/Whatsapp";

// Wrapper to use useLocation
function Layout({ children }) {
  const location = useLocation();

  const adminPaths = [
    "/admin",
    "/admin/login",
    "/admin/dashboard",
    "/admin/course-enquired",,
    "/admin/add-student",
  ];
  const isAdmin = adminPaths.includes(location.pathname);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {!isAdmin && <Header />}
      {/* Offset for fixed header & subheader:
          - mobile: header only (64px)
          - md+: header (64) + subheader (44) = 108px */}
      <main className={`flex-1 ${!isAdmin ? "pt-[6px] md:pt-[5px]" : ""}`}>
        {children}
      </main>

      {!isAdmin && <Footer />}
      {/* <-- Put WhatsApp outside <Routes>, and only on non-admin pages */}
      {!isAdmin && <Whatsapp phone="+91 9600593838" variant="float" />}

    </div>
  );
}


export default function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          {/* User routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/sample-resume" element={<SampleResume />} />
          <Route path="/placed-students" element={<PlacedStudents />} />
          <Route path="/blog" element={<BlogBanner />} />
          <Route path="/resources" element={<Tutorials />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/client" element={<Clientpage />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/Blog" element={<Blog />} />

          {/* Tutorials */}
          <Route path="/tutorials" element={<Tutorials />} />
          {/* Aliases/redirects to be safe */}
          <Route path="/Tutorials" element={<Navigate to="/tutorials" replace />} />
          <Route path="/resources" element={<Navigate to="/tutorials" replace />} />

          <Route path="/interview-questions" element={<Interview />} />
          <Route path="/interview/:id" element={<InterviewDetail />} />

          {/* Courses */}
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
            <Route path="add-student" element={<AddStudent />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}
