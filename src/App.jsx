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
import Internship from "./pages/Internship";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import PlacedStudents from "./pages/placedStudents";
import Contact from "./pages/contactUs";
import Interview from "./pages/Interview";
import About from "./pages/About";
import AdminDashboard from "./components/admin/AdminDashboard";
import BlogBanner from "./pages/Blog";
import Tutorials from "./pages/Tutorials";
import TutorialDetail from "./pages/TutorialDetails";
import InterviewDetail from "./pages/InterviewDetail";
import ScrumMasterPage from "./components/Courses/ScrumMaster.jsx";
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

import Clientpage from "./pages/Clientpage";

import StudentTable from "./components/admin/CourseEnquired";
import AdminLayout from "./components/admin/AdminLayout";
import ProductionSupportPage from "./components/Courses/ProductionSupport";
import DigitalMarketingPage from "./components/Courses/DigitalMarketing";
import SoftSkillPage from "./components/Courses/SoftSkillsTraining";
import Reviews from "./pages/Reviews";
import SampleResume from "./pages/SampleResume";
import Whatsapp from "./components/common/Whatsapp";
import ProductManagement from "./components/Courses/ProductManagement";
import BusinessAnalyst from "./components/Courses/BusinessAnalyst";
import UIUXPage from "./components/Courses/UIUX";
import AzureCoursePage from "./components/Courses/AzureTraining";
import BlockchainCoursePage from "./components/Courses/BlockChain";
import DataAnalystPage from "./components/Courses/DataAnalyst";
import VmwarePage from "./components/Courses/vmwareTraining";
import SnowflakePage from "./components/Courses/Snowflake";
import OracleSqlPage from "./components/Courses/OracleSql";
import OraclePlSqlPage from "./components/Courses/OraclePlSql";
import OracleDbaPage from "./components/Courses/OracleDba";
import PerformanceTuningPage from "./components/Courses/PerformanceTuning";
import OracleFusionPage from "./components/Courses/OracleFusion";
import AwsDataEngineerPage from "./components/Courses/AwsDataEngineer";
import GoogleCloudPlatformPage from "./components/Courses/GoogleCloudP";
import IOTtestingPage from "./components/Courses/IOTtesting";  
import CypresstestingPage from "./components/Courses/CypressTesting"; 
import TypescriptTestingPage from "./components/Courses/TypescriptTesting";
import PlaywrightTestingPage from "./components/Courses/PlaywrightTesting";
import ApiTestingPage from "./components/Courses/ApiTesting";
import ManualTestingPage from "./components/Courses/ManualTesting";
import AngularJSPage from "./components/Courses/AngualrJS";
import AngularPage from "./components/Courses/angular";
import AjaxPage from "./components/Courses/ajax";
import HibernatePage from "./components/Courses/hibernate";
import SpringbootPage from "./components/Courses/Springboot";
import J2EEPage from "./components/Courses/j2ee";
import CoreJavaPage from "./components/Courses/Corejava";
import AwsSolutionsArchitectPage from "./components/Courses/AwsSolutionsArchitect";
import JavaFullstackPage from "./components/Courses/javafullstack";
import PythonFullstackPage from "./components/Courses/pythonFullstack";
import DotnetFullstackPage from "./components/Courses/Dotnetfullstack";
import HadoopSparkPage from "./components/Courses/hadoopSparkBig";
import HadoopTestingPage from "./components/Courses/hadoopTesting";
import HadoopAdministrationPage from "./components/Courses/administrationBigData";
import AIPage from "./components/Courses/AI";
import MLPage from "./components/Courses/ML";
import UnixShellScriptingPage from "./components/Courses/UnixShellScripting";
import JuniorHRPage from "./components/Courses/juniorHR";
import SeniorHRPage from "./components/Courses/SeniorHr";
import TalentAquisitionPage from "./components/Courses/TalentAcq";
// Wrapper to use useLocation
function Layout({ children }) {
  const location = useLocation();

  const adminPaths = [
    "/admin",
    "/admin/login",
    "/admin/dashboard",
    "/admin/course-enquired",
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
          
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/client" element={<Clientpage />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/Blog" element={<Blog />} />
<Route path="/blog/:slug" element={<BlogDetails />} />
          {/* Tutorials */}
          <Route path="/tutorials" element={<Tutorials />} />
          {/* Aliases/redirects to be safe */}
          <Route path="/Tutorials" element={<Navigate to="/tutorials" replace />} />
          <Route path="/resources" element={<Navigate to="/tutorials" replace />} />
          <Route path="/tutorials/:slug" element={<TutorialDetail />} />
          <Route path="/interview-questions" element={<Interview />} />
          <Route path="/interview/:id" element={<InterviewDetail />} />

          {/* Courses */}
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/all-courses/Java" element={<Java />} />
          <Route path="/all-courses/Python" element={<Python />} />
          <Route path="/all-courses/FullStackDevelopement" element={<FullStackDevelopement />} />
          <Route path="/all-courses/Plsql" element={<Plsql />} />
          <Route path="/all-courses/Sql" element={<Sql />} />
          <Route path="/all-courses/ScrumMaster" element={<ScrumMasterPage />} />
          <Route path="/all-courses/DataScience" element={<DataScience />} />
          <Route path="/all-courses/BusinessAnalytics" element={<BusinessAnalytics />} />
          <Route path="/all-courses/DataScienceAi" element={<DataScienceAi />} />
          <Route path="/all-courses/BigDataDeveloper" element={<BigDataDeveloper />} />
          <Route path="/all-courses/SoftwareTesting" element={<SoftwareTesting />} />
          <Route path="/all-courses/SeleniumTesting" element={<SeleniumTesting />} />
          <Route path="/all-courses/EtlTesting" element={<EtlTesting />} />
          <Route path="/all-courses/AwsTraining" element={<AwsTraining />} />
          <Route path="/all-courses/DevOps" element={<DevOps />} />
          <Route path="/all-courses/ProductManagement" element={<ProductManagement />} />
          <Route path="/all-courses/BusinessAnalyst" element={<BusinessAnalyst />} />
          <Route path="/all-courses/HardwareNetworking" element={<HardwareNetworking />} />
          <Route path="/all-courses/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/all-courses/Sap" element={<Sap />} />
          <Route path="/all-courses/SalesForce" element={<SalesForce />} />
          <Route path="/all-courses/ServiceNow" element={<ServiceNow />} />
          <Route path="/all-courses/RPA" element={<RPA />} />
          <Route path="/all-courses/ProductionSupport" element={<ProductionSupportPage />} />
          <Route path="/all-courses/DigitalMarketing" element={<DigitalMarketingPage />} />
          <Route path="/all-courses/SoftSkillsTraining" element={<SoftSkillPage />} />
          <Route path="/all-courses/UIUXTraining" element={<UIUXPage />} />
          <Route path="/all-courses/AzureTraining" element={<AzureCoursePage />} />
          <Route path="/all-courses/BlockchainTraining" element={<BlockchainCoursePage />} />
          <Route path="/all-courses/DataAnalyst" element={<DataAnalystPage />} />
          <Route path="/all-courses/Vmware" element={<VmwarePage />} />
          <Route path="/all-courses/Snowflake" element={<SnowflakePage/>}/>
          <Route path="/all-courses/OracleSql" element={<OracleSqlPage/>}/>
          <Route path="/all-courses/OraclePlSql" element={<OraclePlSqlPage/>}/>
          <Route path="/all-courses/OracleDba" element={<OracleDbaPage/>}/>
          <Route path="/all-courses/PerformanceTuning" element={<PerformanceTuningPage/>}/>
          <Route path="/all-courses/OracleFusion" element={<OracleFusionPage/>}/>
          <Route path="/all-courses/awsDataEngineer" element={<AwsDataEngineerPage/>}/>
          <Route path="/all-courses/GoogleCloudPlatform" element={<GoogleCloudPlatformPage/>}/>
          <Route path="/all-courses/IOTtesting" element={<IOTtestingPage/>}/>
          <Route path="/all-courses/Cypresstesting" element={<CypresstestingPage/>}/>
          <Route path="/all-courses/typeScriptTesting" element={<TypescriptTestingPage/>}/>
          <Route path="/all-courses/playwrightTesting" element={<PlaywrightTestingPage/>}/>
          <Route path="/all-courses/ApiTesting" element={<ApiTestingPage/>}/>
          <Route path="/all-courses/ManualTesting" element={<ManualTestingPage/>}/>
          <Route path="/all-courses/AnularJs" element={<AngularJSPage/>}/>
          <Route path="/all-courses/Angular" element={<AngularPage/>}/>
          <Route path="/all-courses/AjaxTraining" element={<AjaxPage/>}/>
          <Route path="/all-courses/HibernateCourse" element={<HibernatePage/>}/>
          <Route path="/all-courses/SpringbootCourse" element={<SpringbootPage/>}/>
          <Route path="/all-courses/J2EECourse" element={<J2EEPage/>}/>
          <Route path="/all-courses/CoreJava" element={<CoreJavaPage/>}/>
          <Route path="/all-courses/AwsSolutionsArchitect" element={<AwsSolutionsArchitectPage/>}/>
          <Route path="/all-courses/javafullstack" element={<JavaFullstackPage/>}/>
          <Route path="/all-courses/pythonfullstack" element={<PythonFullstackPage/>}/>
          <Route path="/all-courses/dotnetfullstack" element={<DotnetFullstackPage/>}/>
          <Route path="/all-courses/hadoopSpark" element={<HadoopSparkPage/>}/>
          <Route path="/all-courses/hadoopTesting" element={<HadoopTestingPage/>}/>
          <Route path="/all-courses/hadoopAdministrator" element={<HadoopAdministrationPage/>}/>
          <Route path="/all-courses/ai" element={<AIPage/>}/>
          <Route path="/all-courses/ml" element={<MLPage/>}/>
          <Route path="/all-courses/unixshell" element={<UnixShellScriptingPage/>}/>
          <Route path="/all-courses/juniorHr" element={<JuniorHRPage/>}/>
          <Route path="/all-courses/seniorHr" element={<SeniorHRPage/>}/>
          <Route path="/all-courses/talentaqu" element={<TalentAquisitionPage/>}/>
          

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
