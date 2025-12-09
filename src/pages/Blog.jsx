// src/pages/Blog.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiCalendar, FiArrowRight } from "react-icons/fi";
import { motion as Motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPosts } from "../redux/actions/blogAction";
// import blogSvg from "../assets/blog.svg";
import career from "../assets/career.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.08 * i,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function Blog() {
  const [expandedId, setExpandedId] = useState(null);

  const dispatch = useDispatch();
  const { items: posts, status, fromApi } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, [dispatch]);

  // For debugging if needed:
  // console.log("BLOG STATE:", { posts, status, fromApi });

  return (
    <main className="bg-[#021733] min-h-screen">
      {/* ================== HERO ================== */}
      <Motion.section
        className="relative w-full bg-gradient-to-br from-[#00448f] via-[#003369] to-[#010b22] py-24 px-4 text-white overflow-hidden mt-12 shadow-[0_-10px_30px_rgba(0,0,0,0.45)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        aria-labelledby="blog-page-title"
      >
        <div
          className="pointer-events-none absolute -top-10 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#00E0FF]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* LEFT: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left pl-3 md:pl-10 flex flex-col justify-center">
            <Motion.div
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 pl-3 pr-4 py-1 text-[10px] md:text-xs font-semibold tracking-wide uppercase mb-3"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-40" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              Vell InfoTech Blog · Careers · Training · Hiring
            </Motion.div>

            <Motion.h1
              id="blog-page-title"
              className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight mb-3 max-w-xl"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <span className="block">Insights on Tech</span>
              <span className="block">Careers, Training &amp; Hiring</span>
            </Motion.h1>

            <Motion.p
              className="text-base md:text-lg text-white/90 mb-6 max-w-xl mx-auto md:mx-0"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              No fluff. Just real stories, salary breakdowns, and step-by-step
              playbooks for learners, career switchers, and hiring teams who
              actually care about outcomes.
            </Motion.p>

            <Motion.div
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <a
                href="#latest-articles"
                className="group inline-flex items-center justify-between gap-2 bg-black text-white font-semibold pl-5 pr-3 py-2.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.3)] whitespace-nowrap border border-black transition-all duration-300 ease-out hover:bg-emerald-500 hover:text-black hover:shadow-[0_10px_26px_rgba(0,0,0,0.45)]"
              >
                <span>Browse Latest Posts</span>
                <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-105 group-hover:text-emerald-600">
                  <FiArrowRight className="text-sm" />
                </span>
              </a>

              <p className="text-xs text-white/70">
                Updated frequently with fresh, industry-relevant topics.
              </p>
            </Motion.div>
          </div>

          {/* RIGHT: Illustration */}
          <Motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ x: 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-[#00E0FF]/30 via-white/5 to-[#00ffb3]/10 blur-xl"
                aria-hidden="true"
              />
              <img
                src={career}
                alt="People reading tech blog articles online"
                className="relative w-[80%] max-w-md h-auto drop-shadow-2xl rounded-3xl"
                loading="eager"
              />
            </div>
          </Motion.div>
        </div>
      </Motion.section>

      {/* ================== POSTS LIST ================== */}
      <section
        id="latest-articles"
        className="w-full bg-[#E7EFF7]"
        aria-labelledby="latest-articles-heading"
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
          <header className="mb-5 text-center">
            <h2
              id="latest-articles-heading"
              className="text-2xl md:text-3xl font-bold text-[#021733]"
            >
              Latest Articles
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              Deep-dive guides, salary insights, and beginner-friendly templates
              you can actually use in your next career move or hiring plan.
            </p>

            <p className="mt-1 text-[11px] text-slate-500">
              {status === "loading" && "Fetching posts..."}
              {status === "succeeded" &&
                (fromApi ? "Loaded from API" : "Loaded from fallback data")}
              {status === "failed" &&
                "Showing fallback posts due to API error"}
              {status === "idle" && posts?.length > 0 && "Ready to read"}
              {status === "idle" && (!posts || posts.length === 0) && ""}
            </p>
          </header>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {posts?.map((post, index) => {
              const isExpanded = expandedId === post.id;
              const excerptText = post?.excerpt || "";
              const shortExcerpt =
                excerptText.length > 110
                  ? excerptText.slice(0, 110) + "..."
                  : excerptText;

              const imageSrc = post.image || career;
              const dateText =
                post.date ||
                (post.createdAt && typeof post.createdAt === "string"
                  ? post.createdAt.slice(0, 10)
                  : "");

              return (
                <Motion.article
                  key={post.id}
                  className="group w-full bg-white backdrop-blur border border-slate-200 rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.35 }}
                >
                  {/* IMAGE */}
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={imageSrc}
                        alt={post.title}
                        className="w-full h-32 object-cover transform transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>

                  {/* CONTENT */}
                  <div className="p-3 flex flex-col gap-2">
                    <div className="flex items-center justify-between text-[10px] font-medium text-slate-500">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[9px] uppercase tracking-wide">
                        Data &amp; Analytics
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FiCalendar aria-hidden="true" />
                        <time className="uppercase tracking-wide">
                          {dateText}
                        </time>
                      </span>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-[14px] md:text-[15px] font-semibold text-[#0B3D6E] group-hover:text-[#005BAC] leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-[13px] text-slate-600 leading-relaxed">
                      {isExpanded ? excerptText : shortExcerpt}{" "}
                      {excerptText.length > 110 && (
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedId(isExpanded ? null : post.id)
                          }
                          className="text-[#005BAC] font-semibold hover:underline ml-1"
                        >
                          {isExpanded ? "Show less" : "Read more"}
                        </button>
                      )}
                    </p>

                    <div className="mt-2 flex items-center justify-between">
                      <Link to={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-xs text-white bg-[#005BAC] hover:bg-[#004b8d] px-3 py-1.5 rounded-lg font-medium whitespace-nowrap"
                      >
                        Read the article
                        <FiArrowRight className="text-[11px]" />
                      </Link>
                      <span className="text-[10px] text-slate-400">
                        ~ 5–7 min read
                      </span>
                    </div>
                  </div>
                </Motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* You can keep your Newsletter / About strip below this if you already had one */}
    </main>
  );
}
