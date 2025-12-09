import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Header from "./components/common/header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import SampleResume from "./pages/SampleResume";
import PlacedStudents from "./pages/placedStudents";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Tutorials from "./pages/Tutorials";
import TutorialDetail from "./pages/TutorialDetails";
import Interview from "./pages/Interview";
import InterviewDetail from "./pages/InterviewDetail";
import Internship from "./pages/Internship";
import Contact from "./pages/contactUs";
import Clientpage from "./pages/Clientpage";
import AllCourses from "./pages/AllCourses";
import Privacy from "./pages/Privacy";
import AdminLogin from "./components/admin/AdminLogin.jsx";
import ProtectedRoute from "./components/admin/ProtectedRoute.jsx";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/admin/AdminDashboard";
import StudentTable from "./components/admin/CourseEnquired";
import Feedback from "./components/admin/Feedback.jsx";

import Whatsapp from "./components/common/Whatsapp";
import CourseRouter from "./pages/CourseRouter";
import NotFound from "./pages/NotFound";

// 🔔 GTM listener
import GTMRouteListener from "./analytics/GTMRouteListener";

/* ===== Fixed header offset used for hash scrolling ===== */
const HEADER_OFFSET = 110;

/* Inline scroll-to-top (no extra file). Set to smooth. */
function ScrollToTopInline({ top = 0, behavior = "smooth" }) {
  const { pathname, search, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // keep in-page anchor behavior
    requestAnimationFrame(() => {
      window.scrollTo({ top, left: 0, behavior });
    });
  }, [pathname, search, hash, top, behavior]);
  return null;
}

/* Smoothly scroll to an element if URL has a #hash.
   Also adjusts for the fixed header by scrolling up HEADER_OFFSET px. */
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);

    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });

    const t = setTimeout(() => {
      window.scrollBy({ top: -HEADER_OFFSET, left: 0, behavior: "instant" });
    }, 250);

    return () => clearTimeout(t);
  }, [hash]);

  return null;
}

/* ---------- Layout ---------- */
function Layout({ children }) {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 md:bg-gradient-to-br md:from-[#0a2d55] md:to-[#051a30]">
      {!isAdmin && <Header />}
      <main className={`flex-1 ${!isAdmin ? "pt-[6px] md:pt-[5px]" : ""} bg-transparent`}>
        {children}
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <Whatsapp phone="+91 9600593838" variant="float" />}
    </div>
  );
}

/* ---------- App ---------- */
export default function App() {
  const LEGACY_COURSE_ALIASES = [
    ["/all-courses/Java", "/all-courses/java-full-stack-developer-course"],
    ["/all-courses/Python", "/all-courses/python-full-stack-developer-course"],
    ["/all-courses/FullStackDevelopement", "/all-courses/full-stack-development-course"],
    ["/all-courses/Plsql", "/all-courses/pl-sql-developer-course"],
    ["/all-courses/Sql", "/all-courses/sql-developer-course"],
    ["/all-courses/ScrumMaster", "/all-courses/scrum-master-program"],
    ["/all-courses/DataScience", "/all-courses/data-science-training-program"],
    ["/all-courses/BusinessAnalytics", "/all-courses/business-analytics-course"],
    ["/all-courses/DataScienceAi", "/all-courses/data-science-and-ai-program"],
    ["/all-courses/BigDataDeveloper", "/all-courses/big-data-developer-program"],
    ["/all-courses/SoftwareTesting", "/all-courses/software-testing-program"],
    ["/all-courses/SeleniumTesting", "/all-courses/selenium-testing-program"],
    ["/all-courses/EtlTesting", "/all-courses/etl-testing-program"],
    ["/all-courses/AwsTraining", "/all-courses/aws-training-program"],
    ["/all-courses/DevOps", "/all-courses/devops-training-program"],
    ["/all-courses/ProductManagement", "/all-courses/product-management-program"],
    ["/all-courses/BusinessAnalyst", "/all-courses/business-analyst-program"],
    ["/all-courses/HardwareNetworking", "/all-courses/hardware-and-networking-program"],
    ["/all-courses/CyberSecurity", "/all-courses/cyber-security-program"],
    ["/all-courses/Sap", "/all-courses/sap-training-program"],
    ["/all-courses/SalesForce", "/all-courses/salesforce-training-program"],
    ["/all-courses/ServiceNow", "/all-courses/servicenow-training-program"],
    ["/all-courses/RPA", "/all-courses/rpa-robotic-process-automation-course"],
    ["/all-courses/ProductionSupport", "/all-courses/production-support-program"],
    ["/all-courses/DigitalMarketing", "/all-courses/digital-marketing-program"],
    ["/all-courses/SoftSkillsTraining", "/all-courses/soft-skills-training"],
    ["/all-courses/big-data-developer-course", "/all-courses/big-data-developer-program"],
  ];

  return (
    <Router>
      {/* 🔔 Mount the GTM listener here (inside Router) */}
      <GTMRouteListener />

      <Layout>
        <ScrollToTopInline behavior="smooth" />
        <ScrollToHash />

        <Routes>
          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/sample-resume" element={<SampleResume />} />
          <Route path="/placed-students" element={<PlacedStudents />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/tutorials/:slug" element={<TutorialDetail />} />
          <Route path="/resources" element={<Navigate to="/tutorials" replace />} />
          <Route path="/interview-questions" element={<Interview />} />
          <Route path="/interview/:id" element={<InterviewDetail />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* Contact */}
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/contact" element={<Navigate to="/contact-us" replace />} />

          <Route path="/client" element={<Clientpage />} />

          {/* Courses */}
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/all-courses/:slug" element={<CourseRouter />} />
          {LEGACY_COURSE_ALIASES.map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}

          {/* Public login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected admin */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="course-enquired" element={<StudentTable />} />
              <Route path="feedback" element={<Feedback />} />
              {/* Admin 404 */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>

          {/* Public 404 (fallback) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
