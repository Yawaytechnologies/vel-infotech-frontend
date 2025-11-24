// src/pages/jobposting.jsx
import React, { useState, useMemo } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  IndianRupee,
  ChevronRight,
  Search,
  Filter,
  Sparkles,
} from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "Java Full Stack Trainer",
    department: "Training · Full Time",
    location: "Ekkatuthangal, Chennai",
    mode: "On-site",
    experience: "3–7 Years",
    salary: "₹6L – ₹10L / year",
    tags: ["Java", "Spring Boot", "Microservices", "Mentoring"],
    postedAt: "2 days ago",
  },
  {
    id: 2,
    title: "Python / Data Science Trainer",
    department: "Training · Full Time",
    location: "Ekkatuthangal, Chennai / Remote",
    mode: "Hybrid",
    experience: "2–6 Years",
    salary: "₹5L – ₹9L / year",
    tags: ["Python", "Pandas", "ML", "Statistics"],
    postedAt: "1 week ago",
  },
  {
    id: 3,
    title: "AWS & DevOps Trainer",
    department: "Cloud · Contract",
    location: "Remote (India)",
    mode: "Remote",
    experience: "4–8 Years",
    salary: "₹7L – ₹12L / year",
    tags: ["AWS", "DevOps", "CI/CD", "Docker", "Kubernetes"],
    postedAt: "3 weeks ago",
  },
  {
    id: 4,
    title: "Software Testing Trainer",
    department: "QA · Part Time",
    location: "Ekkatuthangal, Chennai",
    mode: "On-site",
    experience: "2–5 Years",
    salary: "₹4L – ₹7L / year",
    tags: ["Manual Testing", "Selenium", "Automation"],
    postedAt: "5 days ago",
  },
];

const MODES = ["All", "On-site", "Hybrid", "Remote"];

function JobPosting() {
  const [search, setSearch] = useState("");
  const [modeFilter, setModeFilter] = useState("All");
  const [selectedJobId, setSelectedJobId] = useState(JOBS[0]?.id ?? null);

  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      const searchValue = search.toLowerCase();
      const matchesSearch =
        job.title.toLowerCase().includes(searchValue) ||
        job.location.toLowerCase().includes(searchValue) ||
        job.tags.some((t) => t.toLowerCase().includes(searchValue));

      const matchesMode =
        modeFilter === "All" ? true : job.mode === modeFilter;

      return matchesSearch && matchesMode;
    });
  }, [search, modeFilter]);

  const selectedJob =
    filteredJobs.find((job) => job.id === selectedJobId) ||
    filteredJobs[0] ||
    null;

  return (
    <section className="relative w-full bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-950 to-slate-950" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 lg:flex-row lg:gap-12 lg:px-6">
        {/* LEFT: JOB LIST */}
        <div className="flex-1 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-medium tracking-wide text-indigo-200">
              <Sparkles className="h-3 w-3" />
              <span>We&apos;re hiring at Vell Infotech</span>
            </div>

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  Join our{" "}
                  <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                    Training &amp; Placement
                  </span>{" "}
                  team
                </h1>
                <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
                  Help learners master real-time skills in Java, Python, Data
                  Science, AWS, DevOps, Testing and more – while growing your
                  own career.
                </p>
              </div>
              <div className="text-sm text-slate-400">
                <div className="font-semibold text-slate-100">
                  {JOBS.length} Open Roles
                </div>
                <div>Chennai · Remote · Hybrid</div>
              </div>
            </div>
          </div>

          

          {/* Job Cards */}
          <div className="space-y-3">
            {filteredJobs.length === 0 && (
              <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 px-4 py-8 text-center text-sm text-slate-300">
                No roles match your search right now. Try clearing filters or
                send your resume to{" "}
                <span className="font-semibold text-indigo-300">
                  vellinfotech10@gmail.com
                </span>
                .
              </div>
            )}

            {filteredJobs.map((job) => {
              const isSelected = selectedJobId === job.id;

              return (
                <div
                  key={job.id}
                  className={`group cursor-pointer rounded-2xl border bg-slate-900/60 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-indigo-500/80 hover:bg-slate-900 ${
                    isSelected
                      ? "border-indigo-500/80 ring-1 ring-indigo-500/40"
                      : "border-slate-800"
                  }`}
                  onClick={() => setSelectedJobId(job.id)}
                >
                  {/* Header */}
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-indigo-300" />
                        <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
                          {job.title}
                        </h3>
                      </div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {job.department}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-300">
                      {job.postedAt}
                    </span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
                      <MapPin className="h-3.5 w-3.5 text-indigo-300" />
                      <span>{job.location}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
                      <Clock className="h-3.5 w-3.5 text-indigo-300" />
                      <span>{job.experience}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
                      <Briefcase className="h-3.5 w-3.5 text-indigo-300" />
                      <span>{job.mode}</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
                      <IndianRupee className="h-3.5 w-3.5 text-indigo-300" />
                      <span>{job.salary}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-700 bg-slate-950/60 px-2.5 py-1 text-[11px] text-slate-200 group-hover:border-indigo-500/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="mt-3 flex justify-between gap-3 text-xs text-slate-400">
                    <span>
                      Shape the careers of 1000+ learners every year with hands
                      on labs, real projects and placement support.
                    </span>
                    <span className="hidden shrink-0 items-center gap-1 text-[11px] font-semibold text-indigo-300 sm:inline-flex">
                      View details
                      <ChevronRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT: FEATURED JOB + CTA */}
        <aside className="w-full max-w-md space-y-4 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/50 backdrop-blur-lg lg:sticky lg:top-24">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-50">
              Why work with Vell Infotech?
            </h2>
            <p className="text-sm text-slate-300">
              Build your brand as a top trainer, work on real-time projects and
              mentor students into job-ready professionals.
            </p>
          </div>

          <div className="grid gap-3 text-sm text-slate-200">
            {/* Featured role */}
            <div className="rounded-2xl bg-gradient-to-r from-indigo-600/80 via-sky-500/80 to-emerald-500/80 p-[1px]">
              <div className="flex h-full flex-col justify-between rounded-2xl bg-slate-950/95 p-4">
                <div>
                  <div className="mb-1 inline-flex items-center gap-2 rounded-full bg-indigo-500/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-indigo-100">
                    <Sparkles className="h-3 w-3" />
                    <span>Featured Role</span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-slate-50">
                    {selectedJob ? selectedJob.title : "Trainer / Mentor"}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300">
                    {selectedJob
                      ? selectedJob.department
                      : "Training · Full Time / Part Time"}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1">
                      <MapPin className="h-3.5 w-3.5 text-sky-300" />
                      {selectedJob ? selectedJob.location : "Chennai & Remote"}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1">
                      <Clock className="h-3.5 w-3.5 text-sky-300" />
                      {selectedJob
                        ? selectedJob.experience
                        : "2+ Years Experience"}
                    </span>
                  </div>
                </div>

                {/* Steps */}
                <div className="mt-4 flex flex-col gap-2 text-xs text-slate-200">
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/80 text-[11px] font-semibold text-slate-200">
                      1
                    </span>
                    <div>
                      <div className="font-semibold">
                        Teach modern, in-demand skills
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Curriculum aligned to real-time industry requirements
                        (AWS, Python, Data Science, DevOps, Testing, etc.).
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/80 text-[11px] font-semibold text-slate-200">
                      2
                    </span>
                    <div>
                      <div className="font-semibold">
                        Mentor learners end-to-end
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Guide students through projects, assignments and
                        interview preparation with our placement team.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/80 text-[11px] font-semibold text-slate-200">
                      3
                    </span>
                    <div>
                      <div className="font-semibold">
                        Flexible slots &amp; competitive pay
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Choose weekday/weekend batches with attractive salary
                        and incentives.
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <button className="flex-1 rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-slate-50 transition hover:bg-indigo-600">
                    Apply Now
                    <ChevronRight className="ml-1.5 inline h-4 w-4" />
                  </button>
                  <button className="flex-1 rounded-xl border border-slate-600 bg-slate-950/70 px-4 py-2 text-sm text-slate-100 transition hover:bg-slate-900">
                    Upload Resume
                  </button>
                </div>
              </div>
            </div>

            {/* How to apply */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 text-xs text-slate-300">
              <div className="font-semibold text-slate-100">How to apply</div>
              <ol className="mt-2 list-decimal space-y-1 pl-4">
                <li>
                  Send your updated resume to{" "}
                  <span className="font-semibold text-indigo-300">
                    vellinfotech10@gmail.com
                  </span>
                  .
                </li>
                <li>Mention the role you&apos;re applying for in the subject.</li>
                <li>
                  Shortlisted profiles will receive a{" "}
                  <span className="font-semibold">technical discussion</span> and{" "}
                  <span className="font-semibold">demo session slot</span>.
                </li>
              </ol>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default JobPosting;
