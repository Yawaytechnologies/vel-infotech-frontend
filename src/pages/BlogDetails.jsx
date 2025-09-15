// src/pages/BlogDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { FiUser, FiCalendar, FiFolder, FiChevronLeft } from "react-icons/fi";
import careerImg from "../assets/career.jpg";
import careerImg1 from "../assets/career1.jpg";

/**
 * CONTENT STORE
 * Keys MUST match the slug segment in your route (/blog/:slug)
 * For example: /blog/how-to-switch-career-to-data-analytics
 *              slug === "how-to-switch-career-to-data-analytics"
 */
const POSTS = {
  "how-to-switch-career-to-data-analytics": {
    title: "How to Switch Career to Data Analytics: Your Practical Roadmap",
    author: "Vel InfoTech Team",
    date: "JULY 31, 2025",
    categories: ["Career", "Data Analytics"],
    image: careerImg,
    excerpt:
      "Considering a career shift to data analytics? You're certainly not alone! Numerous professionals are steering their careers towards this in-demand field.",
    // You can write JSX inside `content` for rich formatting:
    content: (
      <>
        <p className="text-slate-700 leading-relaxed">
          Transitioning to Data Analytics is achievable in phased milestones:
          learning the fundamentals, mastering tools, building projects, and
          publishing a portfolio. Here’s a simple, no-nonsense path you can
          follow over 8–12 weeks, even alongside your current job or studies.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          1) Foundation (Week 1–2)
        </h3>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-800">
          <li>Excel basics → formulas, charts, pivot tables.</li>
          <li>SQL fundamentals → SELECT, WHERE, GROUP BY, JOINs.</li>
          <li>Basic statistics → averages, distributions, correlation.</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          2) Tools & Visualization (Week 3–5)
        </h3>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-800">
          <li>Power BI or Tableau → dashboards, DAX/calculations.</li>
          <li>Data cleaning & shaping → Power Query / SQL CTEs.</li>
          <li>Storytelling with data → KPI selection, layouts, color.</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          3) Projects & Portfolio (Week 6–9)
        </h3>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-800">
          <li>
            Build 2–3 projects (Sales Analytics, HR Attrition, Marketing
            Funnel). Use public datasets (Kaggle, Google Trends).
          </li>
          <li>Write a short case study for each project (problem → insights → impact).</li>
          <li>Publish your dashboards (Power BI Service/Tableau Public).</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          4) Make It Job-Ready (Week 10–12)
        </h3>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-800">
          <li>Refine resume with measurable outcomes (e.g., “reduced reporting time by 40%”).</li>
          <li>Mock interviews: SQL joins, scenario Qs, KPI design.</li>
          <li>Apply to internships, entry DA roles, analyst trainee programs.</li>
        </ul>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="font-semibold text-slate-900 mb-2">Quick SQL you should know</p>
          <pre className="overflow-x-auto rounded-lg bg-slate-900 p-4 text-slate-100 text-xs sm:text-sm">{`-- total revenue by month
SELECT DATE_TRUNC('month', order_date) AS month,
       SUM(amount) AS revenue
FROM orders
GROUP BY 1
ORDER BY 1;

-- top customers by revenue
SELECT c.name, SUM(o.amount) AS revenue
FROM customers c
JOIN orders o ON o.customer_id = c.id
GROUP BY c.name
ORDER BY revenue DESC
LIMIT 10;`}</pre>
        </div>
      </>
    ),
  },

  "highest-salary-for-data-analyst-fresher": {
    title: "Which company pays the highest salary for a Data Analyst fresher?",
    author: "Vel InfoTech Team",
    date: "JULY 28, 2025",
    categories: ["Career", "Salaries"],
    image: careerImg1,
    excerpt:
      "We are surrounded by data everywhere — and compensation for freshers varies by location, company type, and skills.",
    content: (
      <>
        <p className="text-slate-700 leading-relaxed">
          Compensation depends on city, role complexity, domain, and your
          portfolio strength. Generally, product companies and top MNCs offer
          higher CTCs, followed by services firms and startups.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          What improves your offer?
        </h3>
        <ul className="mt-2 list-disc pl-5 space-y-1 text-slate-800">
          <li>Strong SQL + a BI tool (Power BI/Tableau).</li>
          <li>Hands-on projects with clear business impact.</li>
          <li>Comfort with Excel pivoting, cleaning, and charts.</li>
          <li>Internships or freelance analytics gigs.</li>
        </ul>

        <h3 className="mt-6 text-xl font-semibold text-slate-900">
          Typical Fresher Range (Indicative)
        </h3>
        <p className="mt-2 text-slate-700">
          Tier-1 cities may offer 10–25% higher. Bonuses/ESOPs vary.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">Services/Mid-market</p>
            <p className="text-2xl font-semibold text-slate-900">₹3.5L – ₹6.5L</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-sm text-slate-500">Product/MNC</p>
            <p className="text-2xl font-semibold text-slate-900">₹5.5L – ₹10L+</p>
          </div>
        </div>

        <p className="mt-6 text-slate-700">
          Focus on a portfolio that proves you can translate raw data into
          decisions. That’s what moves the needle in interviews.
        </p>
      </>
    ),
  },
};

/** Utility */
const getPost = (slug) => POSTS[slug];

export default function BlogDetails() {
  const { slug } = useParams(); // expects route: /blog/:slug
  const navigate = useNavigate();
  const post = getPost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-slate-800">Post not found</h1>
        <button
          onClick={() => navigate("/blog")}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded border"
        >
          <FiChevronLeft /> Back to Blog
        </button>
      </div>
    );
  }

  return (
    <article className="pb-20">
      {/* HERO */}
      <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
        <div className="absolute left-3 right-3 sm:left-6 sm:right-6 bottom-3 sm:bottom-6 max-w-5xl mx-auto">
          <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug">
            {post.title}
          </h1>
          <div className="mt-2 sm:mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs sm:text-sm text-white/90">
            <span className="inline-flex items-center gap-1">
              <FiUser /> {post.author}
            </span>
            <span className="inline-flex items-center gap-1">
              <FiCalendar /> {post.date}
            </span>
            {post.categories?.length ? (
              <span className="inline-flex items-center gap-1">
                <FiFolder /> {post.categories.join(", ")}
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 mt-6">
        {/* Optional summary/excerpt */}
        {post.excerpt && (
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Main content */}
        <section className="mt-6 prose prose-slate max-w-none">
          {post.content}
        </section>

        {/* Back link */}
        <div className="mt-10 sm:mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded border text-sm sm:text-base"
          >
            <FiChevronLeft /> Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
