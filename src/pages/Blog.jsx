import React from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import blogSvg from "../assets/blog.svg";
import careerImg from "../assets/career.jpg";
import careerImg1 from "../assets/career1.jpg";

/** Unique demo posts (replace with API when ready) */
const posts = [
  {
    id: 1,
    title: "Switching to Data Analytics: A Step-by-Step Starter Plan",
    excerpt:
      "Thinking about moving into analytics? Here’s a simple path to build skills, pick tools that matter, and assemble a portfolio employers actually review.",
    date: "JULY 31, 2025",
    image: careerImg,
    slug: "switch-to-data-analytics-starter-plan",
  },
  {
    id: 2,
    title: "Entry-Level Data Analyst Pay in 2025: Who’s Paying the Most?",
    excerpt:
      "From product companies to fast-growing startups, we compare beginner packages, typical perks, and how city choice can change your first offer.",
    date: "JULY 28, 2025",
    image: careerImg1,
    slug: "entry-level-data-analyst-salary-2025",
  },
  {
    id: 3,
    title: "Your First 90 Days in Analytics: Skills to Learn Fast",
    excerpt:
      "Focus on data cleaning, SQL fluency, and crisp dashboards. This 12-week plan helps you build momentum without feeling overwhelmed.",
    date: "JULY 22, 2025",
    image: careerImg1,
    slug: "first-90-days-in-analytics",
  },
  {
    id: 4,
    title: "Portfolio Ideas for New Analysts: 6 Projects That Stand Out",
    excerpt:
      "Hiring teams love practical work. Try these project prompts with public datasets, plus tips to explain your approach during interviews.",
    date: "JULY 18, 2025",
    image: careerImg,
    slug: "data-analytics-portfolio-ideas",
  },
];

export default function Blog() {
  return (
    <main className="bg-[#F7F9FC] min-h-screen">
      {/* HERO (single H1 for SEO) */}
      <motion.section
        className="relative w-full bg-gradient-to-r from-[#005BAC] to-[#003c6a] py-24 px-4 text-white overflow-hidden mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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
              Insights on Tech Careers, Training & Hiring
            </motion.h1>
            <p className="text-lg text-white/90 mb-6">
              Fresh research, practical tips, and success stories from Vel
              InfoTech—curated for learners, career switchers, and hiring teams.
            </p>
            <a
              href="#blog-list"
              className="inline-flex items-center gap-2 bg-white text-[#005BAC] font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
              aria-label="Skip to latest blog posts"
            >
              Browse Latest Posts →
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
              alt="Reading blog articles on a laptop"
              className="w-[80%] max-w-md h-auto drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* Decorative Background Dots */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl z-10" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-3xl -z-10" />
      </motion.section>

      {/* POSTS */}
      <section
        id="blog-list"
        className="max-w-7xl mx-auto px-5 py-10 bg-gradient-to-r from-[#005BAC] to-[#003c6a]"
        aria-labelledby="latest-articles"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="latest-articles"
            className="text-white text-2xl md:text-3xl font-bold mb-6 text-center"
          >
            Latest Articles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
            {posts.map((post) => (
              <motion.article
                key={post.id}
                className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                </Link>

                <div className="p-4">
                  <Link to={`/blog/${post.slug}`}>
                    {/* h3 for card titles to keep hierarchy under the page h1/h2 */}
                    <h3 className="text-lg font-semibold text-[#0B3D6E] hover:text-[#005BAC] leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="mt-2 text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-white bg-[#005BAC] hover:bg-[#004b8d] px-4 py-2 rounded-lg font-medium"
                      aria-label={`Read ${post.title}`}
                    >
                      Read the article <FiArrowUpRight />
                    </Link>

                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FiCalendar />
                      <time className="uppercase tracking-wide">{post.date}</time>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIBE CTA */}
      <section
        className="px-5 py-10 bg-gradient-to-r from-[#005BAC] to-[#003c6a]"
        aria-labelledby="subscribe-cta"
      >
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div
              className="w-1 bg-blue-600 rounded-full"
              style={{ minHeight: "60px" }}
            />
            <div>
              <h2 id="subscribe-cta" className="text-2xl font-bold text-gray-800">
                Join Our Newsletter
              </h2>
              <p className="text-gray-600 mt-2">
                Get weekly updates on courses, hiring trends, and career tips—
                straight to your inbox.
              </p>
            </div>
          </div>

          <a
            href="#"
            className="bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow hover:opacity-90 transition"
          >
            Subscribe Free
          </a>
        </div>
      </section>
    </main>
  );
}
