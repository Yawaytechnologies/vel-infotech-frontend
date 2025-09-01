// src/pages/Reviews.jsx
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiSearch, FiPlay, FiExternalLink, FiFilter, FiImage } from "react-icons/fi";

/* ---------------------------------------------
   CONFIG
---------------------------------------------- */
const BRAND = { primary: "#005BAC", dark: "#003c6a" };
const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"; // ← replace

/* ---------------------------------------------
   MOCK REVIEWS
---------------------------------------------- */
const REVIEWS = [
  {
    id: 1,
    name: "Srinivas Rao",
    role: "Fullstack Developer @ MNC",
    rating: 5,
    date: "2025-03-18",
    category: "Fullstack",
    source: "Google",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
    text:
      "Excellent mentors and practical projects. I cracked interviews faster than expected!",
    // photos: [
    //   "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    // ],
  },
  {
    id: 2,
    name: "Janani V",
    role: "QA Engineer",
    rating: 4,
    date: "2025-02-11",
    category: "Testing",
    source: "Google",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text:
      "Good curriculum. Mock interviews and placement support really helped.",
    // photos: [],
  },
  {
    id: 3,
    name: "Ashwin Kumar",
    role: "Cloud Engineer",
    rating: 5,
    date: "2025-01-27",
    category: "AWS & DevOps",
    source: "LinkedIn",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text:
      "Cloud labs were on point. The case studies made concepts crystal clear.",
    // photos: [
    //   "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=600&auto=format&fit=crop",
    //   "https://images.unsplash.com/photo-1484981138541-b1f3f4151d5a?q=80&w=600&auto=format&fit=crop",
    // ],
  },
  {
    id: 4,
    name: "Priya Dharshini",
    role: "PL/SQL Developer",
    rating: 4,
    date: "2025-01-08",
    category: "PL/SQL",
    source: "Google",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Neat explanations and assignments; would love more weekend doubt sessions.",
    // photos: [],
  },
  {
    id: 5,
    name: "John Vimal",
    role: "Python Developer",
    rating: 5,
    date: "2024-12-20",
    category: "Python",
    source: "Google",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "From basics to projects — the mentor support was the best part!",
    // photos: [],
  },
  {
    id: 6,
    name: "Naveen K",
    role: "Data Analyst",
    rating: 5,
    date: "2025-03-01",
    category: "Data Science",
    source: "Google",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    text:
      "Capstone + resume review + referrals = offer from a top MNC. Worth it!",
    // photos: [
    //   "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=600&auto=format&fit=crop",
    // ],
  },
];

/* ---------------------------------------------
   UTILITIES
---------------------------------------------- */
const toDate = (d) => new Date(d);
const formatDate = (d) =>
  new Date(d).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

const range = (n) => Array.from({ length: n }, (_, i) => i);
const avatarGradients = [
  "from-[#005BAC] to-[#003c6a]",
  "from-indigo-600 to-blue-600",
  "from-cyan-600 to-teal-600",
  "from-rose-600 to-pink-600",
  "from-amber-600 to-orange-600",
];
const initials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");
const gradFor = (key) => {
  let h = 0;
  for (let i = 0; i < key.length; i++) h = key.charCodeAt(i) + ((h << 5) - h);
  return avatarGradients[Math.abs(h) % avatarGradients.length];
};

function Stars({ value = 5, size = "w-4 h-4" }) {
  return (
    <div className="flex items-center gap-1" title={`${value.toFixed(1)} / 5`}>
      {range(5).map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`${size} ${
            i < Math.round(value) ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10.5 13.348a1 1 0 00-1 0l-2.985 2.134c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ---------------------------------------------
   SUB-COMPONENTS
---------------------------------------------- */
function RatingBar({ label, count, total, onClick }) {
  const pct = total ? Math.round((count / total) * 100) : 0;
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 text-left"
    >
      <span className="w-10 text-sm font-medium text-slate-700">{label}★</span>
      <div className="relative h-2 flex-1 rounded-full bg-slate-200 overflow-hidden">
        <div
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.dark})`,
          }}
          className="absolute inset-y-0 left-0 rounded-full"
        />
      </div>
      <span className="w-12 text-right text-sm tabular-nums text-slate-600">
        {count}
      </span>
    </button>
  );
}

function ReviewCard({ r }) {
  const g = gradFor(r.name + r.category);
  return (
    <article className="bg-white rounded-2xl border shadow hover:shadow-lg transition p-6">
      <header className="flex items-center gap-3">
        {r.image ? (
          <img
            src={r.image}
            alt={r.name}
            className="w-12 h-12 rounded-xl object-cover"
          />
        ) : (
          <div
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${g} text-white font-bold flex items-center justify-center`}
          >
            {initials(r.name)}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-slate-900 leading-tight">
            {r.name}
          </h3>
          <div className="text-xs text-slate-500">
            {formatDate(r.date)} • {r.source}
          </div>
        </div>
        <div className="ml-auto">
          <Stars value={r.rating} />
        </div>
      </header>

      <p className="mt-3 text-slate-700 leading-relaxed">{r.text}</p>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-xs px-2 py-1 rounded-full bg-sky-100 text-sky-800 font-semibold">
          {r.category}
        </span>
        {r.photos?.length ? (
          <span className="text-xs text-slate-600 inline-flex items-center gap-1">
            <FiImage /> {r.photos.length} photo(s)
          </span>
        ) : null}
      </div>

      {r.photos?.length ? (
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
          {r.photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="review"
              className="rounded-xl w-full h-28 object-cover"
            />
          ))}
        </div>
      ) : null}
    </article>
  );
}

/* ---------------------------------------------
   PAGE
---------------------------------------------- */
export default function Reviews() {
  // Stats
  const stats = useMemo(() => {
    const total = REVIEWS.length;
    const sum = REVIEWS.reduce((a, b) => a + b.rating, 0);
    const avg = total ? sum / total : 0;
    const buckets = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    REVIEWS.forEach((r) => (buckets[r.rating] = (buckets[r.rating] || 0) + 1));
    return { avg, total, buckets };
  }, []);

  // Filters
  const [q, setQ] = useState("");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(REVIEWS.map((r) => r.category)))],
    []
  );
  const [cat, setCat] = useState("All");
  const [min, setMin] = useState(0);
  const [withPhotos, setWithPhotos] = useState(false);
  const [sort, setSort] = useState("new"); // new | old | hi | lo
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let data = [...REVIEWS];
    if (q.trim()) {
      const t = q.toLowerCase();
      data = data.filter((r) =>
        [r.name, r.role, r.text, r.category, r.source]
          .join(" ")
          .toLowerCase()
          .includes(t)
      );
    }
    if (cat !== "All") data = data.filter((r) => r.category === cat);
    if (min > 0) data = data.filter((r) => r.rating >= min);
    if (withPhotos) data = data.filter((r) => (r.photos || []).length > 0);

    if (sort === "new") data.sort((a, b) => toDate(b.date) - toDate(a.date));
    if (sort === "old") data.sort((a, b) => toDate(a.date) - toDate(b.date));
    if (sort === "hi") data.sort((a, b) => b.rating - a.rating);
    if (sort === "lo") data.sort((a, b) => a.rating - b.rating);

    return data;
  }, [q, cat, min, withPhotos, sort]);

  // JSON-LD for SEO
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vel InfoTech",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: stats.avg.toFixed(1),
        ratingCount: stats.total,
        bestRating: 5,
        worstRating: 1,
      },
      review: REVIEWS.slice(0, 10).map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: {
          "@type": "Rating",
          ratingValue: r.rating,
          bestRating: 5,
          worstRating: 1,
        },
        datePublished: r.date,
        reviewBody: r.text,
      })),
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "reviews-jsonld";
    el.text = JSON.stringify(jsonLd);
    const prev = document.getElementById("reviews-jsonld");
    if (prev) prev.remove();
    document.head.appendChild(el);
    return () => el.remove();
  }, [stats.avg, stats.total]);

  return (
    <main className="bg-[#f6f9ff] min-h-screen">
      {/* HERO */}
      <section
        className="relative w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,91,172,.25), rgba(0,60,106,.35)), url('https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-14 sm:py-20 md:py-24 mt-28 ">
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold drop-shadow">
            Student Reviews
          </h1>
          <p className="text-white/90 mt-2 max-w-2xl">
            Real stories from learners who trained with us and got placed.
          </p>
        </div>
      </section>

      {/* STATS + FILTERS */}
      <section className="max-w-7xl mx-auto px-4 mt-8 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white rounded-2xl shadow p-6 border"
          >
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <div className="text-slate-600 font-medium">Average Rating</div>
                <div className="mt-1 flex items-end gap-3">
                  <span className="text-5xl font-extrabold text-slate-900 leading-none">
                    {stats.avg.toFixed(1)}
                  </span>
                  <span className="text-slate-600">/ 5</span>
                </div>
                <div className="mt-2">
                  <Stars value={stats.avg} />
                </div>
                <p className="mt-1 text-slate-600">
                  Based on {stats.total} reviews
                </p>
              </div>
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-11 px-5 rounded-xl font-semibold text-white shadow"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.dark})`,
                }}
              >
                Write a Google Review
              </a>
            </div>

            <div className="mt-6 space-y-2">
              {[5, 4, 3, 2, 1].map((r) => (
                <RatingBar
                  key={r}
                  label={r}
                  count={stats.buckets[r] || 0}
                  total={stats.total}
                  onClick={() => setMin(r)}
                />
              ))}
            </div>
          </motion.div>

          {/* Desktop Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hidden lg:block lg:col-span-8 bg-white rounded-2xl shadow p-6 border"
          >
            {/* 6 columns for generous spacing */}
            <div className="grid lg:grid-cols-6 gap-4">
              {/* Search (3 cols) */}
              <div className="lg:col-span-3 relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search name, course, keyword…"
                  className="w-full pl-9 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#003c6a]"
                />
              </div>

              {/* Category (1 col) */}
              <div className="lg:col-span-1">
                <select
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border"
                >
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Sort (1 col) */}
              <div className="lg:col-span-1">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border"
                >
                  <option value="new">Newest</option>
                  <option value="old">Oldest</option>
                  <option value="hi">Highest rating</option>
                  <option value="lo">Lowest rating</option>
                </select>
              </div>

              {/* Reset (1 col) */}
              <div className="lg:col-span-1">
                <button
                  onClick={() => {
                    setQ("");
                    setCat("All");
                    setMin(0);
                    setWithPhotos(false);
                    setSort("new");
                  }}
                  className="w-full px-4 py-3 rounded-xl border"
                >
                  Reset
                </button>
              </div>

              {/* Min rating buttons (3 cols) */}
              <div className="lg:col-span-3 flex items-center gap-3 flex-wrap mt-1">
                <FiFilter className="text-gray-500" />
                <div className="flex gap-2">
                  {[0, 3, 4, 5].map((r) => (
                    <button
                      key={r}
                      onClick={() => setMin(r)}
                      className={`px-3 py-1.5 rounded-lg border text-sm ${
                        min === r ? "bg-slate-900 text-white" : "bg-white"
                      }`}
                    >
                      {r === 0 ? "All" : `${r}+★`}
                    </button>
                  ))}
                </div>
              </div>

              {/* With photos (1 col) — extra gap + top margin */}
              <div className="lg:col-span-1 mt-1">
                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={withPhotos}
                    onChange={(e) => setWithPhotos(e.target.checked)}
                  />
                  <span className="text-slate-700">With photos</span>
                </label>
              </div>
            </div>
          </motion.div>

          {/* Mobile toolbar + collapsible filters */}
          <div className="lg:hidden bg-white rounded-2xl shadow p-4 border">
            <div className="flex items-center justify-between gap-3">
              <button
                onClick={() => setMobileFiltersOpen((v) => !v)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border"
                aria-expanded={mobileFiltersOpen}
              >
                <FiFilter /> Filters
              </button>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2 rounded-xl border"
              >
                <option value="new">Newest</option>
                <option value="old">Oldest</option>
                <option value="hi">Highest rating</option>
                <option value="lo">Lowest rating</option>
              </select>
              <div className="text-sm text-slate-500">
                Showing <strong>{filtered.length}</strong>/{stats.total}
              </div>
            </div>

            {mobileFiltersOpen && (
              <div className="mt-4 grid grid-cols-1 gap-4">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search name, course, keyword…"
                    className="w-full pl-9 pr-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#003c6a]"
                  />
                </div>

                <select
                  value={cat}
                  onChange={(e) => setCat(e.target.value)}
                  className="px-4 py-3 rounded-xl border"
                >
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-sm text-slate-600">Min rating:</span>
                  {[0, 3, 4, 5].map((r) => (
                    <button
                      key={r}
                      onClick={() => setMin(r)}
                      className={`px-3 py-1.5 rounded-lg border text-sm ${
                        min === r ? "bg-slate-900 text-white" : "bg-white"
                      }`}
                    >
                      {r === 0 ? "All" : `${r}+★`}
                    </button>
                  ))}
                </div>

                {/* Mobile "With photos" — more vertical space */}
                <label className="flex items-center gap-3 mt-1">
                  <input
                    type="checkbox"
                    checked={withPhotos}
                    onChange={(e) => setWithPhotos(e.target.checked)}
                  />
                  <span className="text-slate-700">With photos</span>
                </label>

                <button
                  onClick={() => {
                    setQ("");
                    setCat("All");
                    setMin(0);
                    setWithPhotos(false);
                    setSort("new");
                  }}
                  className="px-4 py-2 rounded-xl border"
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 mb-10">
        <div className="bg-white rounded-2xl border shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-900">
              Highlights from our learners
            </h3>
            <div className="text-sm text-slate-500">
              Auto-plays & supports swipe
            </div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3800, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1.1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
          >
            {REVIEWS.slice(0, 6).map((r) => (
              <SwiperSlide key={r.id}>
                <ReviewCard r={r} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length ? (
            filtered.map((r) => <ReviewCard key={r.id} r={r} />)
          ) : (
            <div className="col-span-full text-center bg-white border rounded-2xl p-12 text-slate-600 shadow">
              No reviews match your filters.
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-2xl font-semibold text-white shadow-lg"
            style={{
              backgroundImage: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.dark})`,
            }}
          >
            ⭐ Write your review on Google <FiExternalLink />
          </a>
          <p className="text-slate-500 mt-2 text-sm">
            Share this link in WhatsApp/email to invite reviews.
          </p>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl border shadow p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Video testimonials
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { id: "dQw4w9WgXcQ", title: "Fullstack Journey" },
              { id: "3GwjfUFyY6M", title: "QA to SDET" },
              { id: "LXb3EKWsInQ", title: "Cloud & DevOps" },
            ].map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-xl bg-slate-100 aspect-video flex items-center justify-center"
              >
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition"
                />
                <div className="relative z-10 bg-white/90 rounded-full p-3 shadow">
                  <FiPlay className="text-slate-900 text-xl" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-sm">
                  {v.title}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
 