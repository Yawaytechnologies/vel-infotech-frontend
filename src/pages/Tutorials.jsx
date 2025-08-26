// src/pages/Tutorials.jsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiCalendar,
  FiFolder,
  FiChevronRight,
  FiSearch,
} from "react-icons/fi";
import tutorialsImg from "../assets/tutorials.jpg"; // banner + card image

// --- demo data (replace with API later) ---
const TUTORIALS = [
  {
    id: 1,
    title: "Django Tutorial — Learn Django Framework from Scratch",
    author: "Global 04",
    date: "2024-10-11",
    categories: ["Blog", "Software Engineering", "Tutorials"],
    image: tutorialsImg,
    slug: "/tutorials/django-framework-from-scratch",
    excerpt:
      "Introduction to Django, environment setup, project structure, models and views, templates, and deployment basics. Django's high-level Python web framework promotes quick development through simple, pragmatic design…",
  },
  {
    id: 2,
    title: "Building Your First Data Warehouse: A Hands-on Tutorial",
    author: "Global 04",
    date: "2024-10-10",
    categories: ["Blog", "Datawarehouse", "Tutorials"],
    image: tutorialsImg,
    slug: "/tutorials/build-your-first-data-warehouse",
    excerpt:
      "What is a data warehouse, architecture, ETL process, best practices, and a step-by-step implementation guide with common pitfalls and validation strategies…",
  },
  {
    id: 3,
    title: "Git Tutorial for Beginners — From Zero to PR",
    author: "Team",
    date: "2024-10-08",
    categories: ["Blog", "DevTools", "Tutorials"],
    image: tutorialsImg,
    slug: "/tutorials/git-beginners",
    excerpt:
      "Install Git, init repository, branching, commits, rebase vs merge, remote workflows, and opening your first pull request the right way…",
  },
  {
    id: 4,
    title: "Spring Boot REST API — Clean Controllers & Validation",
    author: "Team",
    date: "2024-10-05",
    categories: ["Blog", "Backend", "Tutorials"],
    image: tutorialsImg,
    slug: "/tutorials/spring-boot-rest",
    excerpt:
      "Build a REST API with layered architecture, DTOs, Bean Validation, global exception handling, and OpenAPI documentation…",
  },
  {
    id: 5,
    title: "React Hooks Deep Dive — useState, useEffect, and Beyond",
    author: "Team",
    date: "2024-10-02",
    categories: ["Blog", "Frontend", "Tutorials"],
    image: tutorialsImg,
    slug: "/tutorials/react-hooks-deep-dive",
    excerpt:
      "Understand how hooks compose logic, avoid infinite renders, and structure effects and custom hooks for maintainable React apps…",
  },
  {
    id: 6,
    title: "SQL Joins Explained with Visuals",
    author: "Team",
    date: "2024-09-24",
    categories: ["Blog", "Databases", "Tutorials"],
    image: tutorialsImg,
    slug: "/tutorials/sql-joins-explained",
    excerpt:
      "INNER, LEFT, RIGHT, FULL, CROSS joins — where each is useful, pitfalls to avoid, and performance notes with indexes…",
  },
];

const PER_PAGE = 5;

const Tutorials = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (!query.trim()) return TUTORIALS;
    const q = query.toLowerCase();
    return TUTORIALS.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.excerpt.toLowerCase().includes(q) ||
        t.categories.some((c) => c.toLowerCase().includes(q))
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const items = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <section className="pt-25">
      {/* Banner */}
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded border border-slate-200">
          <img
            src={tutorialsImg}
            alt="Tutorials banner"
            className="w-full h-48 md:h-72 lg:h-80 object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/20" />
          <h1 className="absolute left-5 bottom-5 text-3xl md:text-4xl font-extrabold text-white drop-shadow">
            Tutorials
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* LEFT: list */}
        <div className="space-y-6">
          {items.map((t) => (
            <article
              key={t.id}
              className="bg-white rounded-lg border border-slate-200 shadow-sm p-4"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full md:w-56 h-40 object-cover rounded-md border border-slate-200"
                  loading="lazy"
                />

                <div className="flex-1">
                  {/* Title */}
                  <Link to={t.slug}>
                    <h2 className="text-xl md:text-2xl font-bold hover:text-[#005BAC] transition-colors">
                      {t.title}
                    </h2>
                  </Link>

                  {/* Meta */}
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-1">
                      <FiUser /> {t.author}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiCalendar />{" "}
                      {new Date(t.date).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      })}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiFolder /> {t.categories.join(", ")}
                    </span>
                  </div>

                  {/* Excerpt */}
                  <p className="mt-3 text-slate-700 leading-relaxed">
                    {t.excerpt}
                  </p>

                  {/* Read more */}
                  <div className="mt-4">
                    <Link
                      to={t.slug}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#14a3db] text-white hover:bg-[#0f8fbe] transition-colors"
                    >
                      Read more <FiChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* Empty state */}
          {items.length === 0 && (
            <div className="bg-white rounded-lg border border-slate-200 p-10 text-center">
              <p className="text-slate-700">
                No tutorials match your search.
              </p>
            </div>
          )}

          {/* Pagination */}
          {filtered.length > PER_PAGE && (
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-2 rounded border border-slate-300 disabled:opacity-50"
              >
                Prev
              </button>
              <span className="text-sm">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-2 rounded border border-slate-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* RIGHT: sidebar */}
        <aside className="space-y-6">
          {/* Search */}
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <label className="text-sm font-semibold text-slate-700">
              Search for Courses
            </label>
            <div className="mt-2 flex items-center gap-2 rounded border border-slate-300 px-3 py-2">
              <FiSearch className="opacity-60" />
              <input
                type="text"
                placeholder="Search tutorials…"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Video */}
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <div className="aspect-video w-full overflow-hidden rounded">
              {/* Replace the video ID with your own */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Digital Marketing"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Interview Q&A list */}
          <div className="bg-white rounded-lg border border-slate-200 p-4">
            <h3 className="text-lg font-semibold">
              Interview Questions and Answers
            </h3>
            <ul className="mt-3 space-y-2 text-[#005BAC]">
              <li>
                <Link to="/interview-questions" className="hover:underline">
                  Telephone Interview Questions and Answers
                </Link>
              </li>
              <li>
                <Link to="/interview-questions" className="hover:underline">
                  Genpact Interview Questions and Answers
                </Link>
              </li>
              <li>
                <Link to="/interview-questions" className="hover:underline">
                  50+ Real-time Interview Questions
                </Link>
              </li>
              <li>
                <Link to="/interview-questions" className="hover:underline">
                  Behavioural Interview Questions
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Tutorials;
