import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiArrowUpRight } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import blogSvg from "../assets/blog.svg";
import careerImg from "../assets/career.jpg";
import careerImg1 from "../assets/career1.jpg";

// Demo data — replace with your API data
const posts = [
  {
    id: 1,
    title: "How to Switch Career to Data Analytics: Your Practical Roadmap",
    excerpt:
      "Considering a career shift to data analytics? You're certainly not alone! Numerous professionals are steering their careers towards this in-demand field...",
    date: "JULY 31, 2025",
    image: careerImg,
    slug: "/blog/how-to-switch-career-to-data-analytics",
  },
  {
    id: 2,
    title: "Which company pays the highest salary for a Data Analyst fresher?",
    excerpt:
      "We are surrounded by data everywhere — from the websites you visit to the things you buy online. Here's how compensation varies for freshers...",
    date: "JULY 28, 2025",
    image: careerImg1,
    slug: "/blog/highest-salary-for-data-analyst-fresher",
  },
  {
    id: 3,
    title: "How to Switch Career to Data Analytics: Your Practical Roadmap",
    excerpt:
      "Considering a career shift to data analytics? You're certainly not alone! Numerous professionals are steering their careers towards this in-demand field...",
    date: "JULY 31, 2025",
    image: careerImg1,
    slug: "/blog/how-to-switch-career-to-data-analytics",
  },
  {
    id: 4,
    title: "Which company pays the highest salary for a Data Analyst fresher?",
    excerpt:
      "We are surrounded by data everywhere — from the websites you visit to the things you buy online. Here's how compensation varies for freshers...",
    date: "JULY 28, 2025",
    image: careerImg,
    slug: "/blog/highest-salary-for-data-analyst-fresher",
  },
];

const trending = [
  {
    title: "Java Programming for Beginners: Start with No Experience",
    to: "/blog/java-for-beginners",
  },
  {
    title: "Choosing Between Data Science and Cloud Computing",
    to: "/blog/data-science-vs-cloud",
  },
  {
    title: "Your Roadmap to Learning Selenium: 10 Essential Steps",
    to: "/blog/selenium-roadmap",
  },
  {
    title: "Mastering Page Factory in Selenium for Efficient Automation",
    to: "/blog/page-factory-selenium",
  },
  {
    title: "How to Prepare for Software Testing Interview – The Perfect Guide",
    to: "/blog/testing-interview-guide",
  },
  {
    title: "Choosing Between Data Science and Cloud Computing",
    to: "/blog/data-science-vs-cloud",
  },
  {
    title: "Your Roadmap to Learning Selenium: 10 Essential Steps",
    to: "/blog/selenium-roadmap",
  },
  {
    title: "Mastering Page Factory in Selenium for Efficient Automation",
    to: "/blog/page-factory-selenium",
  },
  {
    title: "Choosing Between Data Science and Cloud Computing",
    to: "/blog/data-science-vs-cloud",
  },
];

export default function BlogBanner() {
  return (
    <main className="bg-[#F7F9FC] min-h-screen">
      {/* HERO */}
      <motion.section
        className="relative w-full bg-gradient-to-r from-[#005BAC] to-[#003c6a] py-24 px-4 text-white overflow-hidden mt-10"
        initial={{ opacity: 0 }} // Animation start state
        animate={{ opacity: 5 }} // Animation end state
        transition={{ duration: 1 }} // Duration for fade-in effect
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* LEFT: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left pl-5">
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-4"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              Explore the Latest in Tech & Training
            </motion.h1>
            <p className="text-lg text-white/90 mb-6">
              Insights, tips, and stories from Vel InfoTech — covering trending
              courses, student success, job market updates, and more.
            </p>
            <a
              href="#blog-list"
              className="inline-flex items-center gap-2 bg-white text-[#005BAC] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
            >
              Read Our Blogs →
            </a>
          </div>

          {/* RIGHT: Illustration */}
          
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src={blogSvg}
              alt="Blogging Illustration"
              className="w-[80%] max-w-md h-auto drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* Decorative Background Dots */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl z-10" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl -z-10" />
      </motion.section>

      {/* CONTENT: Cards + Trending */}

      <section
        id="blog-list"
        className="max-w-7xl mx-auto px-5 py-1 bg-gradient-to-r from-[#005BAC] to-[#003c6a]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: cards (2 columns on sm+) */}
          <div className="lg:col-span-2">
            <div className="grid gap-8 sm:grid-cols-2">
              {posts.map((post) => (
                <motion.article
                  key={post.id}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <Link to={post.slug} className="block">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover"
                      loading="lazy"
                    />
                  </Link>

                  <div className="p-3">
                    <Link to={post.slug}>
                      <h2 className="text-md font-semibold text-[#0B3D6E] hover:text-[#005BAC] leading-snug">
                        {post.title}
                      </h2>
                    </Link>

                    <p className="mt-2 text-gray-600 leading-relaxed max-h-20 overflow-hidden">
                      {post.excerpt}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                      <Link
                        to={post.slug}
                        className="inline-flex items-center gap-1 text-white bg-[#005BAC] hover:bg-[#004b8d] px-4 py-2 rounded-lg font-medium"
                      >
                        Continue Reading <FiArrowUpRight />
                      </Link>

                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <FiCalendar />
                        <span className="uppercase tracking-wide">
                          {post.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right: Trending */}
          <aside className="lg:col-span-1">
            <motion.div
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                Top Trending{" "}
                <span className="italic text-[#0B5DB6]">Blogs</span>
              </h3>

              <ul className="mt-4 space-y-4">
                {trending.map((item, i) => (
                  <li key={i} className="pb-3 border-b last:border-b-0">
                    <Link
                      to={item.to}
                      className="text-[#0B3D6E] hover:text-[#005BAC] leading-snug"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </aside>
        </div>
      </section>

      <section className=" px-5 py-10  bg-gradient-to-r from-[#005BAC] to-[#003c6a] pl-30">
        <div className=" max-w-5xl bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-6  ">
          {/* LEFT TEXT */}
          <div className="flex items-center gap-4">
            <div
              className="w-1 bg-blue-600 rounded-full"
              style={{ minHeight: "60px" }}
            ></div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Subscribe</h2>
              <p className="text-gray-600 mt-2">
                Get in touch with us today to explore exciting opportunities and
                start your tech journey.
              </p>
            </div>
          </div>

          {/* RIGHT BUTTON */}
          <a
            href="#"
            className="bg-green-900 text-white px-6 py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
          >
            Level Up
          </a>
        </div>
      </section>
    </main>
  );
}
