import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  fetchJobs,
  applyForJob,
  clearApplyStatus,
} from "../redux/actions/jobActions";
import {
  Briefcase,
  MapPin,
  Clock,
  IndianRupee,
  FileText,
  Mail,
  Phone,
  ArrowLeft,
  Loader2,
} from "lucide-react";

/* ───────────────── Animations ───────────────── */

const pageContainer = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const panelVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function JobOverview() {
  const { jobId } = useParams(); // from /careers/:jobId
  const dispatch = useDispatch();

  const {
    items: jobs,
    loading,
    error,
    applying,
    applyError,
    applySuccessMessage,
  } = useSelector((state) => state.jobs);

  // ── Candidate form state ───────────────────────
  const [candidateType, setCandidateType] = useState("Fresher"); // Fresher | Experienced

  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidatePhone, setCandidatePhone] = useState("");

  const [qualification, setQualification] = useState("");
  const [passingYear, setPassingYear] = useState("");
  const [skills, setSkills] = useState("");

  const [totalExperience, setTotalExperience] = useState("");
  const [relevantExperience, setRelevantExperience] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [currentCtc, setCurrentCtc] = useState("");

  const [coverMessage, setCoverMessage] = useState("");

  // Load jobs on mount (or when jobId changes)
  useEffect(() => {
    if (!jobs || jobs.length === 0) {
      dispatch(fetchJobs());
    }
  }, [dispatch, jobs]);

  useEffect(() => {
    // When navigating between jobs, clear apply status
    dispatch(clearApplyStatus());
    setCoverMessage("");
  }, [dispatch, jobId]);

  const selectedJob = useMemo(() => {
    if (!jobs || jobs.length === 0) return null;
    return jobs.find((j) => String(j.id) === String(jobId)) || null;
  }, [jobs, jobId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedJob) return;

    // Basic validation
    if (!candidateName || !candidateEmail) {
      alert("Name and Email are required.");
      return;
    }
    if (!qualification || !passingYear || !skills) {
      alert("Qualification, Passing Year and Skills are required.");
      return;
    }

    if (candidateType === "Experienced") {
      if (
        !totalExperience ||
        !relevantExperience ||
        !noticePeriod ||
        !currentCtc
      ) {
        alert(
          "For experienced candidates, Total Experience, Relevant Experience, Notice Period and Current CTC are required."
        );
        return;
      }
    }

    const payload = {
      candidateType, // "Fresher" | "Experienced"
      name: candidateName,
      email: candidateEmail,
      phone: candidatePhone,
      qualification,
      passingYear: Number(passingYear),
      applyingForPosition: selectedJob.jobTitle,
      skills,
      totalExperience:
        candidateType === "Fresher" ? 0 : Number(totalExperience || 0),
      relevantExperience:
        candidateType === "Fresher" ? 0 : Number(relevantExperience || 0),
      noticePeriod:
        candidateType === "Fresher" ? "Not Applicable" : noticePeriod,
      currentCtc:
        candidateType === "Fresher" ? 0 : Number(currentCtc || 0),
      // coverMessage is *not* sent to backend since it's not in the Swagger schema
    };

    dispatch(applyForJob(selectedJob.id, payload));
  };

  const isLoadingJob = loading && !selectedJob;

  /* ───────────────── SEO Meta & Structured Data ───────────────── */

  const pageTitle = selectedJob
    ? `${selectedJob.jobTitle} | Careers at Vell Infotech`
    : "Job Overview | Careers at Vell Infotech";

  const pageDescription =
    selectedJob?.jobDescription ||
    "View detailed job responsibilities, skills, and application steps for current trainer openings at Vell Infotech in Chennai.";

  const jobStructuredData = selectedJob && {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: selectedJob.jobTitle,
    description:
      selectedJob.jobDescription ||
      "Trainer role at Vell Infotech involving concept teaching, hands-on labs and real-time project guidance.",
    hiringOrganization: {
      "@type": "Organization",
      name: "Vell Infotech",
      sameAs: "https://www.vellinfotech.com",
    },
    employmentType: "FULL_TIME",
    jobLocation: selectedJob.location
      ? {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: selectedJob.location,
            addressCountry: "IN",
          },
        }
      : undefined,
    datePosted: selectedJob.updatedAt || undefined,
    validThrough: undefined,
    baseSalary: selectedJob.salaryRange
      ? {
          "@type": "MonetaryAmount",
          currency: "INR",
          value: {
            "@type": "QuantitativeValue",
            value: selectedJob.salaryRange,
          },
        }
      : undefined,
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link
          rel="canonical"
          href={`https://www.vellinfotech.com/careers/${jobId}`}
        />
        {jobStructuredData && (
          <script type="application/ld+json">
            {JSON.stringify(jobStructuredData)}
          </script>
        )}
      </Helmet>

      <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 pt-28 pb-16 text-slate-100">
        {/* Decorative animated background */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            className="absolute -left-24 top-4 h-64 w-64 rounded-full bg-indigo-600/25 blur-3xl"
            initial={{ opacity: 0.6, scale: 1 }}
            animate={{
              opacity: [0.5, 0.9, 0.5],
              scale: [1, 1.1, 1],
              y: [0, -16, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute right-[-6rem] top-40 h-72 w-72 rounded-full bg-sky-500/25 blur-3xl"
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.08, 1],
              y: [0, 20, 0],
              x: [0, -14, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <div className="absolute bottom-[-4rem] left-1/4 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#020617_0,_#020617_50%,_#020617_100%)] opacity-95" />
        </div>

        <motion.div
          className="relative mx-auto max-w-5xl px-4 lg:px-0"
          variants={pageContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Top heading + back button below */}
          <motion.header className="mb-8 space-y-3" variants={fadeItem}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-300">
              Job Overview
            </p>
            {selectedJob && (
              <>
                <h1 className="text-3xl font-semibold leading-tight text-slate-50 sm:text-4xl">
                  {selectedJob.jobTitle}
                </h1>
                <p className="text-sm text-slate-300 sm:text-base">
                  Join Vell Infotech as a{" "}
                  <span className="font-medium text-indigo-200">
                    {selectedJob.department}
                  </span>{" "}
                  and mentor learners through real-time projects and
                  job-oriented training.
                </p>

                {/* Back button under header */}
                <motion.div
                  className="pt-2"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
                >
                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1.5 text-[11px] font-medium text-slate-200 shadow-sm transition hover:border-indigo-500 hover:text-indigo-100"
                  >
                    <ArrowLeft className="h-3 w-3" />
                    Back to all openings
                  </Link>
                </motion.div>
              </>
            )}
          </motion.header>

          {/* Loading / error / not found */}
          {isLoadingJob && (
            <motion.div
              className="flex items-center justify-center py-10 text-sm text-slate-400"
              variants={fadeItem}
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading job details...
            </motion.div>
          )}

          {error && !isLoadingJob && !selectedJob && (
            <motion.div
              className="rounded-xl border border-red-500/40 bg-red-950/40 px-3 py-2 text-xs text-red-100"
              variants={fadeItem}
            >
              {error}
            </motion.div>
          )}

          {!loading && !error && !selectedJob && (
            <motion.div
              className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-6 text-center text-sm text-slate-300"
              variants={fadeItem}
            >
              Job not found. It may have been closed or removed.
            </motion.div>
          )}

          {selectedJob && (
            <motion.div
              className="grid gap-6 lg:grid-cols-[1.2fr_1.1fr]"
              variants={fadeItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Left: Job Info */}
              <motion.div className="space-y-4" variants={fadeItem}>
                {/* Meta card */}
                <motion.div
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-xl shadow-slate-950/60"
                  variants={panelVariant}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20">
                          <Briefcase className="h-4 w-4 text-indigo-300" />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold text-slate-50">
                            {selectedJob.jobTitle}
                          </h2>
                          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                            {selectedJob.department}
                          </p>
                        </div>
                      </div>
                    </div>
                    {selectedJob.updatedAt && (
                      <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-medium text-emerald-200">
                        Posted: {new Date(selectedJob.updatedAt).toLocaleDateString("en-GB")}

                      </span>
                    )}
                  </div>

                  <div className="mt-4 grid gap-3 text-xs text-slate-200 sm:grid-cols-3">
                    <div className="rounded-xl bg-slate-900 px-3 py-2.5">
                      <p className="text-[11px] text-slate-400">Location</p>
                      <p className="mt-1 text-sm font-medium text-slate-50">
                        {selectedJob.location || "Not specified"}
                      </p>
                    </div>
                    <div className="rounded-xl bg-slate-900 px-3 py-2.5">
                      <p className="text-[11px] text-slate-400">
                        Experience Range
                      </p>
                      <p className="mt-1 text-sm font-medium text-slate-50">
                        {selectedJob.experience || "Not specified"}
                      </p>
                    </div>
                    <div className="rounded-xl bg-slate-900 px-3 py-2.5">
                      <p className="text-[11px] text-slate-400">Compensation</p>
                      <p className="mt-1 text-sm font-medium text-slate-50">
                        {selectedJob.salaryRange || "As per industry standards"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-300">
                    {selectedJob.location && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-1">
                        <MapPin className="h-3 w-3 text-indigo-300" />
                        {selectedJob.location}
                      </span>
                    )}
                    {selectedJob.experience && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-1">
                        <Clock className="h-3 w-3 text-indigo-300" />
                        {selectedJob.experience}
                      </span>
                    )}
                    {selectedJob.salaryRange && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-2 py-1">
                        <IndianRupee className="h-3 w-3 text-indigo-300" />
                        {selectedJob.salaryRange}
                      </span>
                    )}
                  </div>
                </motion.div>

                {/* Description & responsibilities */}
                <motion.div
                  className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 text-sm text-slate-200 shadow-xl shadow-slate-950/60"
                  variants={panelVariant}
                >
                  <div>
                    <p className="font-semibold text-slate-50">Role Overview</p>
                    <p className="mt-1 text-sm text-slate-200">
                      {selectedJob.jobDescription ||
                        "You will be responsible for delivering concept clarity, hands-on labs and real-time project guidance to our students. The role includes teaching, mentoring, doubt-clearing, and supporting placements through interview preparation."}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-50">
                      Key Responsibilities
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-[13px]">
                      {selectedJob?.responsibilities
                        ?.split(",")
                        .map((item, index) => (
                          <li key={index}>{item.trim()}</li>
                        ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-slate-50">
                      Skills & Requirements
                    </p>
                    <ul className="mt-1 list-disc space-y-1 pl-5 text-[13px]">
                      {selectedJob?.skills?.split(",").map((item, index) => (
                        <li key={index}>{item.trim()}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>

              {/* RIGHT: Apply form (updated for Fresher / Experienced + API schema) */}
              <motion.div
                className="rounded-2xl border border-slate-800 bg-slate-900/85 p-5 shadow-2xl shadow-slate-950/70"
                variants={panelVariant}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20">
                      <FileText className="h-4 w-4 text-indigo-300" />
                    </div>
                    <h3 className="text-sm font-semibold text-slate-50">
                      Apply for this role
                    </h3>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Fields marked * are mandatory
                  </p>
                </div>

                {applySuccessMessage && (
                  <motion.div
                    className="mb-3 rounded-lg border border-emerald-500/50 bg-emerald-500/15 px-3 py-2 text-xs text-emerald-100"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {applySuccessMessage}
                  </motion.div>
                )}

                {applyError && (
                  <motion.div
                    className="mb-3 rounded-lg border border-red-500/50 bg-red-500/15 px-3 py-2 text-xs text-red-100"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {applyError}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3 text-sm">
                  {/* Candidate Type */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-slate-200">
                      Candidate Type *
                    </label>
                    <div className="flex gap-4 text-xs text-slate-100">
                      <label className="inline-flex items-center gap-1">
                        <input
                          type="radio"
                          name="candidateType"
                          value="Fresher"
                          checked={candidateType === "Fresher"}
                          onChange={() => setCandidateType("Fresher")}
                        />
                        Fresher
                      </label>
                      <label className="inline-flex items-center gap-1">
                        <input
                          type="radio"
                          name="candidateType"
                          value="Experienced"
                          checked={candidateType === "Experienced"}
                          onChange={() => setCandidateType("Experienced")}
                        />
                        Experienced
                      </label>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-slate-200">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-2.5 text-sm text-slate-50 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-slate-200">
                      Email *
                    </label>
                    <div className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-2.5">
                      <Mail className="h-4 w-4 text-slate-400" />
                      <input
                        type="email"
                        className="h-8 w-full border-none bg-transparent text-sm text-slate-50 outline-none"
                        value={candidateEmail}
                        onChange={(e) => setCandidateEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-slate-200">
                      Phone
                    </label>
                    <div className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900 px-2.5">
                      <Phone className="h-4 w-4 text-slate-400" />
                      <input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        className="h-8 w-full border-none bg-transparent text-sm text-slate-50 outline-none"
                        value={candidatePhone}
                        onChange={(e) => {
                          const onlyNumbers = e.target.value.replace(/\D/g, "");
                          setCandidatePhone(onlyNumbers);
                        }}
                      />
                    </div>
                  </div>

                  {/* Qualification */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-slate-200">
                      Highest Qualification *
                    </label>
                    <input
                      type="text"
                      className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-2.5 text-sm text-slate-50 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                      value={qualification}
                      onChange={(e) => setQualification(e.target.value)}
                      placeholder="B.E CSE, B.Sc IT, MCA, etc."
                    />
                  </div>

                  {/* Passing Year */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-slate-200">
                      Passing Year *
                    </label>
                    <input
                      type="number"
                      className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-2.5 text-sm text-slate-50 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                      value={passingYear}
                      onChange={(e) => setPassingYear(e.target.value)}
                      placeholder="2024"
                    />
                  </div>

                  {/* Skills */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-slate-200">
                      Skills *
                    </label>
                    <textarea
                      rows={2}
                      className="w-full rounded-md border border-slate-700 bg-slate-900 px-2.5 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                      placeholder="React, Node.js, Java, SQL etc."
                      value={skills}
                      onChange={(e) => setSkills(e.target.value)}
                    />
                  </div>

                  {/* Experienced-only fields */}
                  {candidateType === "Experienced" && (
                    <>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="space-y-1">
                          <label className="block text-xs font-medium text-slate-200">
                            Total Experience (years) *
                          </label>
                          <input
                            type="number"
                            min={0}
                            step="0.5"
                            className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-2.5 text-sm text-slate-50 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                            value={totalExperience}
                            onChange={(e) =>
                              setTotalExperience(e.target.value)
                            }
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs font-medium text-slate-200">
                            Relevant Experience (years) *
                          </label>
                          <input
                            type="number"
                            min={0}
                            step="0.5"
                            className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-2.5 text-sm text-slate-50 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                            value={relevantExperience}
                            onChange={(e) =>
                              setRelevantExperience(e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="space-y-1">
                          <label className="block text-xs font-medium text-slate-200">
                            Notice Period *
                          </label>
                          <input
                            type="text"
                            className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-2.5 text-sm text-slate-50 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                            value={noticePeriod}
                            onChange={(e) => setNoticePeriod(e.target.value)}
                            placeholder="Immediate / 15 / 30 / 60 days"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="block text-xs font-medium text-slate-200">
                            Current CTC (LPA) *
                          </label>
                          <input
                            type="number"
                            min={0}
                            step="0.1"
                            className="h-9 w-full rounded-md border border-slate-700 bg-slate-900 px-2.5 text-sm text-slate-50 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                            value={currentCtc}
                            onChange={(e) => setCurrentCtc(e.target.value)}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* Short Message (frontend only) */}
                  <div className="space-y-1">
                    <label className="block text-xs font-medium text-slate-200">
                      Short Message / Profile Summary
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-md border border-slate-700 bg-slate-900 px-2.5 py-2 text-sm text-slate-50 outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500"
                      placeholder="Briefly describe your training experience, current role and notice period."
                      value={coverMessage}
                      onChange={(e) => setCoverMessage(e.target.value)}
                    />
                  </div>

                  <div className="mt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={applying}
                      className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-900/60 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
                    >
                      {applying && <Loader2 className="h-4 w-4 animate-spin" />}
                      Submit Application
                    </button>
                  </div>
                </form>

                <p className="mt-3 text-[11px] text-slate-400">
                  You can also send your resume directly to{" "}
                  <span className="font-semibold text-indigo-200">
                    vellinfotech10@gmail.com
                  </span>{" "}
                  with the job title in the subject line.
                </p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </section>
    </>
  );
}

export default JobOverview;
