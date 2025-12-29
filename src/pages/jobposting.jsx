// src/pages/JobPosting.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { fetchJobs } from "../redux/actions/jobActions";
import {
  Briefcase,
  MapPin,
  Clock,
  IndianRupee,
  ChevronRight,
  Loader2,
} from "lucide-react";

/* ───────── Framer Motion variants ───────── */

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      delay: i * 0.06,
    },
  }),
};

const FILTERS = ["All", "On-site", "Hybrid", "Remote"];

function JobPosting() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get job data from Redux store
  const { items: jobs, loading, error } = useSelector((state) => state.jobs);

  const [modeFilter, setModeFilter] = useState("All");

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleJobClick = (jobId) => {
    navigate(`/careers/${jobId}`);
  };

  // Apply mode filter to job list
  const filteredJobs =
    modeFilter === "All"
      ? jobs
      : jobs.filter(
          (job) =>
            job.workMode &&
            job.workMode.toLowerCase() === modeFilter.toLowerCase()
        );

  const pageTitle = "Careers at Vell Infotech | Current Job Openings";
  const pageDescription =
    "Explore trainer and IT career opportunities at Vell Infotech in Chennai. Apply for Java, Python, Data Science, AWS, DevOps and Software Testing trainer roles.";

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vell Infotech",
    url: "https://www.vellinfotech.com",
    sameAs: [],
  };

  const jobPostingListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: jobs.map((job, index) => ({
      "@type": "JobPosting",
      position: index + 1,
      title: job.jobTitle,
      description:
        job.jobDescription ||
        "Trainer role at Vell Infotech involving concept teaching, hands-on labs and real-time project guidance.",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "Vell Infotech",
      },
      jobLocation: job.location
        ? {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: job.location,
              addressCountry: "IN",
            },
          }
        : undefined,
    })),
  };

  return (
    <>
      {/* SEO / Meta */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://www.vellinfotech.com/careers" />
        <script type="application/ld+json">{JSON.stringify(orgJsonLd)}</script>
        {jobs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(jobPostingListJsonLd)}
          </script>
        )}
      </Helmet>

      <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-slate-100">
        {/* Decorative animated background */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-indigo-600/25 blur-3xl"
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{
              opacity: [0.5, 0.9, 0.5],
              scale: [1, 1.15, 1],
              y: [0, -18, 0],
              x: [0, 12, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-[-6rem] h-80 w-80 rounded-full bg-sky-500/25 blur-3xl"
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.1, 1],
              y: [0, 22, 0],
              x: [0, -16, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1f2937_0,_#020617_55%)] opacity-90" />
        </div>

        <motion.div
          className="relative mx-auto flex max-w-5xl flex-col gap-8 px-4 lg:px-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.header
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
            variants={itemVariants}
          >
            <div>
              <motion.h1
                className="text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                Careers at{" "}
                <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                  Vell Infotech
                </span>
              </motion.h1>

              <motion.p
                className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
              >
                Join our Training &amp; Development team to mentor students on
                real-time projects and help them become job-ready in Java,
                Python, Data Science, AWS, DevOps and Testing.
              </motion.p>

              {/* Animated "We are hiring" pill */}
              <motion.div
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-indigo-200"
                initial={{ opacity: 0, y: 8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  boxShadow: [
                    "0 0 0 0 rgba(56,189,248,0.0)",
                    "0 0 0 6px rgba(56,189,248,0.18)",
                    "0 0 0 0 rgba(56,189,248,0.0)",
                  ],
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                }}
              >
                <motion.span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                  }}
                />
                <span>We are hiring</span>
              </motion.div>

              {/* Scroll hint */}
              <motion.div
                className="mt-4 hidden items-center gap-2 text-[11px] text-slate-400 sm:flex"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span>Scroll to view openings</span>
                <motion.span
                  className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-600/70"
                  animate={{ y: [0, 4, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                >
                  <ChevronRight className="-rotate-90 h-3 w-3 text-slate-300" />
                </motion.span>
              </motion.div>
            </div>

            <motion.div
              className="rounded-2xl border border-slate-700/80 bg-slate-900/60 px-4 py-3 text-right shadow-lg shadow-slate-950/40"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                Total openings
              </p>
              <p className="mt-1 text-3xl font-semibold text-slate-50">
                {jobs.length.toString().padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Chennai · Hybrid · Remote
              </p>
            </motion.div>
          </motion.header>

          {/* Content card */}
          <motion.div
            className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-slate-950/60 backdrop-blur"
            variants={itemVariants}
          >
            {/* Sub-header row + filter bar */}
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-sm font-semibold text-slate-100">
                  Open Roles
                </h2>
                <p className="text-xs text-slate-400">
                  Click a job to view full overview and submit your application.
                </p>
              </div>
              <motion.div
                className="inline-flex flex-wrap items-center gap-2 rounded-full bg-slate-900/80 px-2 py-1"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
              >
                {FILTERS.map((filter) => {
                  const isActive = modeFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setModeFilter(filter)}
                      className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition ${
                        isActive
                          ? "bg-indigo-500 text-white shadow-sm"
                          : "bg-transparent text-slate-300 hover:bg-slate-800/80"
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </motion.div>
            </div>

            {/* Render filtered jobs when no error and not loading */}
            {!loading && !error && filteredJobs.length === 0 && (
              <div className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-6 text-center text-sm text-slate-300">
                No openings available for this mode right now. You can still
                share your profile with us at{" "}
                <span className="font-semibold text-indigo-300">
                  vellinfotech10@gmail.com
                </span>
                .
              </div>
            )}

            {/* Render jobs when successfully fetched */}
            {!loading && !error && filteredJobs.length > 0 && (
              <motion.div
                className="mt-3 space-y-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {filteredJobs.map((job, index) => (
                  <motion.button
                    key={job.id}
                    type="button"
                    onClick={() => handleJobClick(job.id)}
                    variants={listItemVariants}
                    custom={index}
                    whileHover={{
                      y: -3,
                      scale: 1.01,
                      boxShadow: "0 18px 40px rgba(15,23,42,0.75)",
                    }}
                    whileTap={{ scale: 0.99 }}
                    className="flex w-full items-start justify-between gap-3 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/80 via-slate-900/90 to-slate-950/90 px-4 py-3.5 text-left text-sm transition"
                    aria-label={`View job overview for ${job.jobTitle}`}
                  >
                    {/* Left content */}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/20">
                          <Briefcase className="h-4 w-4 text-indigo-300" />
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-slate-50 sm:text-sm">
                            {job.jobTitle}
                          </p>
                          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                            {job.department}
                          </p>
                        </div>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-200">
                        {job.location && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5">
                            <MapPin className="h-3 w-3 text-indigo-300" />
                            {job.location}
                          </span>
                        )}
                        {job.experience && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5">
                            <Clock className="h-3 w-3 text-indigo-300" />
                            {job.experience}
                          </span>
                        )}
                        {job.salaryRange && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5">
                            <IndianRupee className="h-3 w-3 text-indigo-300" />
                            {job.salaryRange}
                          </span>
                        )}

                        {/* Display work mode */}
                        {job.workMode && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-0.5">
                            <Clock className="h-3 w-3 text-indigo-300" />
                            {job.workMode}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col items-end gap-1 text-right">
                      {job.updatedAt && (
                        <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300">
                         Posted : {new Date(job.updatedAt).toLocaleDateString("en-GB")}
                        </span>
                      )}

                      <span className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-indigo-200">
                        View overview
                        <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default JobPosting;
