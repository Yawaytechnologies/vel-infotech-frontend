// ✅ Interview.jsx — SEO-Optimized with Correct Heading Hierarchy
import React from "react";
import InterviewCard from "../components/common/InterviewCard";
import interviewImg from "../assets/interview.png";
import interviewImg1 from "../assets/interview1.png";
import interviewImg2 from "../assets/interview2.png";
import { motion } from "framer-motion";

const Interview = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-background min-h-screen"
    >
      {/* 🌟 Hero Section */}
      <section
        className="relative w-full mt-[54px] sm:mt-[100px] h-[250px] sm:h-[320px] md:h-[390px]
                   flex items-center justify-start px-3 sm:px-4 md:px-10 lg:px-10"
        style={{
          backgroundImage: `url(${interviewImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
        }}
        aria-labelledby="interview-page-heading"
      >
        <h1
          id="interview-page-heading"
          className="relative z-10 text-white font-extrabold leading-snug
                     text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px]
                     max-w-[90%] sm:max-w-[75%] md:max-w-[600px]
                     tracking-wide text-left drop-shadow-md"
        >
         Explore Interview Guides
        </h1>
      </section>

      {/* 📚 Section: Interview Guides */}
      <section
        className="max-w-6xl mx-auto px-4 py-10"
        aria-labelledby="interview-guides-heading"
      >
        <h2
          id="interview-guides-heading"
          className="text-2xl sm:text-3xl font-bold text-[#005BAC] mb-8 text-center"
        >
           Interview Questions & Preparation Guides
        </h2>

        {/* ✅ AWS Interview */}
        <article className="mb-10" aria-labelledby="aws-heading">
          <h2
            id="aws-heading"
            className="sr-only"
          >
            AWS Interview Questions
          </h2>
          <InterviewCard
            title="AWS Interview Questions and Answers"
            date="August 1, 2025"
            description="Get comfortable with AWS fundamentals, key services, and practical deployment questions that appear in top MNC interviews."
            route="/interview/aws"
            image={interviewImg2}
          />
        </article>

        {/* ✅ Selenium Interview */}
        <article className="mb-10" aria-labelledby="selenium-heading">
          <h2
            id="selenium-heading"
            className="sr-only"
          >
            Selenium Interview Questions
          </h2>
          <InterviewCard
            title="Selenium Interview Questions and Answers"
            date="August 1, 2025"
            description="Brush up on Selenium WebDriver, automation frameworks, and real-world QA testing scenarios used in enterprise projects."
            route="/interview/selenium"
            image={interviewImg1}
          />
        </article>

        {/* ✅ Python Interview */}
        <article className="mb-10" aria-labelledby="python-heading">
          <h2
            id="python-heading"
            className="sr-only"
          >
            Python Interview Questions
          </h2>
          <InterviewCard
            title="Python Interview Questions and Answers"
            date="August 1, 2025"
            description="Review Python essentials, logical coding rounds, OOP fundamentals, and frequently asked real-time project questions."
            route="/interview/python"
            image={interviewImg2}
          />
        </article>

        {/* ✅ Java Interview */}
        <article aria-labelledby="java-heading">
          <h2
            id="java-heading"
            className="sr-only"
          >
            Java Interview Questions
          </h2>
          <InterviewCard
            title="Java Interview Questions and Answers"
            date="August 1, 2025"
            description="Understand Java collections, multithreading, memory management, and the key OOP concepts every developer must know."
            route="/interview/java"
            image={interviewImg1}
          />
        </article>
      </section>
    </motion.main>
  );
};

export default Interview;
