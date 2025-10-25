import React, { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

// Direct imports
import Java from "../components/Courses/Java.jsx";
import Python from "../components/Courses/Python.jsx";
import FullStackDevelopement from "../components/Courses/FullStackDevelopement.jsx";
import DataScience from "../components/Courses/DataScience.jsx";
import DataScienceAi from "../components/Courses/DataScienceAi.jsx";
import BusinessAnalytics from "../components/Courses/BusinessAnalytics.jsx";
import BusinessAnalyst from "../components/Courses/BusinessAnalyst.jsx";
import BigDataDeveloper from "../components/Courses/BigDataDeveloper.jsx";
import Sql from "../components/Courses/Sql.jsx";
import Plsql from "../components/Courses/Plsql.jsx";
import SoftwareTesting from "../components/Courses/SoftwareTesting.jsx";
import SeleniumTesting from "../components/Courses/SeleniumTesting.jsx";
import EtlTesting from "../components/Courses/EtlTesting.jsx";
import AwsTraining from "../components/Courses/AwsTraining.jsx";
import DevOps from "../components/Courses/DevOps.jsx";
import ServiceNow from "../components/Courses/ServiceNow.jsx";
import SalesForce from "../components/Courses/SalesForce.jsx";
import Sap from "../components/Courses/Sap.jsx";
import CyberSecurity from "../components/Courses/CyberSecurity.jsx";
import HardwareNetworking from "../components/Courses/HardwareNetworking.jsx";
import ProductManagement from "../components/Courses/ProductManagement.jsx";
import ScrumMaster from "../components/Courses/ScrumMaster.jsx";
import RPA from "../components/Courses/RPA.jsx";
import DigitalMarketing from "../components/Courses/DigitalMarketing.jsx";
import SoftSkillsTraining from "../components/Courses/SoftSkillsTraining.jsx";
import ProductionSupport from "../components/Courses/ProductionSupport.jsx";

const ROUTES = {
  "java-full-stack-developer-course": Java,
  "python-full-stack-developer-course": Python,
  "full-stack-development-course": FullStackDevelopement,
  "data-science-training-program": DataScience,
  "data-science-and-ai-program": DataScienceAi,
  "business-analytics-course": BusinessAnalytics,
  "business-analyst-program": BusinessAnalyst,
  "big-data-developer-program": BigDataDeveloper,
  "sql-developer-course": Sql,
  "pl-sql-developer-course": Plsql,
  "software-testing-program": SoftwareTesting,
  "selenium-testing-program": SeleniumTesting,
  "etl-testing-program": EtlTesting,
  "aws-training-program": AwsTraining,
  "devops-training-program": DevOps,
  "servicenow-training-program": ServiceNow,
  "salesforce-training-program": SalesForce,
  "sap-training-program": Sap,
  "cyber-security-program": CyberSecurity,
  "hardware-and-networking-program": HardwareNetworking,
  "product-management-program": ProductManagement,
  "scrum-master-program": ScrumMaster,
  "rpa-robotic-process-automation-course": RPA,
  "digital-marketing-program": DigitalMarketing,
  "soft-skills-training": SoftSkillsTraining,
  "production-support-program": ProductionSupport,
};

/* ---------- NEW: alias misspelled / legacy slugs to canonical keys ---------- */
const SLUG_ALIASES = {
  "full-stack-developement-course": "full-stack-development-course",
  // add more if you have older slugs to support
};

const LEGACY_REDIRECTS = {
  "big-data-developer-course": "/all-courses/big-data-developer-program",
};

export default function CourseRouter() {
  const { slug = "" } = useParams();
  const key = (slug || "").toLowerCase();

  /* ---------- NEW: smooth reset when slug changes ---------- */
  useEffect(() => {
    // instant is fine here because parent route already animates as needed
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // If you keep any page-level UI state in context, reset it here.
  }, [key]);

  // Handle alias → canonical
  const canonicalKey = SLUG_ALIASES[key] || key;

  const Comp = ROUTES[canonicalKey];
  if (Comp) return <Comp />;

  if (LEGACY_REDIRECTS[key]) return <Navigate to={LEGACY_REDIRECTS[key]} replace />;

  return <Navigate to="/all-courses" replace />;
}
