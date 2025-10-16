// src/pages/Review.jsx — Vel InfoTech · Institute Reviews (Google Reviews wired, hero: actions + trust badges)
import React, { useEffect, useMemo, useState } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";
import FeedbackSection from "../components/common/Feedback";
export default function Review() {
  /* -------------------- static data -------------------- */
  const trendingCourses = [
    { title: "Full-Stack (MERN)", tag: "In-Demand" },
    { title: "Java + Spring Boot", tag: "Placement-Ready" },
    { title: "Python & Data Science", tag: "Popular" },
    { title: "DevOps & Cloud Basics", tag: "Hot" },
  ];

  const ratingHistogram = { 5: 62, 4: 25, 3: 8, 2: 3, 1: 2 };

  /* -------------------- Google Reviews (live) -------------------- */
  const [masterReviews, setMasterReviews] = useState([]);
  const [googleMeta, setGoogleMeta] = useState({
    name: "",
    rating: null,
    total: null,
    url: "",
    status: "idle", // idle | loading | success | error
    error: null,
  });

  // Your actual Place ID
  const PLACE_ID = "ChIJqXVXO3xnUjoRSMMIWwz_R8o";

  useEffect(() => {
    if (!PLACE_ID) return;
    let cancelled = false;

    (async () => {
      try {
        setGoogleMeta((m) => ({ ...m, status: "loading", error: null }));

        const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
        if (!key) {
          setGoogleMeta((m) => ({
            ...m,
            status: "error",
            error: "Missing VITE_GOOGLE_MAPS_API_KEY",
          }));
          return;
        }

        setOptions({ apiKey: key });
        const { PlacesService } = await importLibrary("places");

        const node = document.createElement("div");
        const svc = new PlacesService(node);

        svc.getDetails(
          {
            placeId: PLACE_ID,
            fields: ["name", "rating", "user_ratings_total", "reviews", "url"],
          },
          (place, status) => {
            if (cancelled) return;

            if (
              status !== google.maps.places.PlacesServiceStatus.OK ||
              !place
            ) {
              setGoogleMeta((m) => ({
                ...m,
                status: "error",
                error: `Places Details status: ${status}`,
              }));
              return;
            }

            const reviews = (place.reviews || []).map((r, i) => ([
              i + 1,
              r.author_name || "Google User",
              "Google Review",
              r.rating,
              r.relative_time_description || timeAgoFromUnix(r.time),
              (r.text || "").slice(0, 160),
              r.text || "",
              place.name || "",
              []
            ])).map(([id, name, course, rating, ago, snippet, detail, center, tags]) => ({
              id, name, course, rating, ago, snippet, detail, center, tags
            }));

            setMasterReviews(reviews);
            setGoogleMeta({
              name: place.name || "",
              rating: place.rating ?? null,
              total: place.user_ratings_total ?? null,
              url: place.url || "",
              status: "success",
              error: null,
            });
          }
        );
      } catch (e) {
        if (!cancelled) {
          const msg = (e && e.message) || String(e);
          setGoogleMeta((m) => ({ ...m, status: "error", error: msg }));
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [PLACE_ID]);

  function timeAgoFromUnix(sec) {
    if (!sec) return "now";
    const diff = Math.max(1, (Date.now() - sec * 1000) / 1000);
    for (const [u, s] of [
      ["y", 31536000],
      ["mo", 2592000],
      ["d", 86400],
      ["h", 3600],
      ["m", 60],
    ]) {
      const v = Math.floor(diff / s);
      if (v >= 1) return `${v}${u}`;
    }
    return "now";
  }

  /* -------------------- page state -------------------- */
  const [search, setSearch] = useState(""); // still used for filtering/tag cloud
  const [courseFilter, setCourseFilter] = useState("All");
  const [centerFilter, setCenterFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortBy, setSortBy] = useState("new"); // new | rating-desc | rating-asc
  const [activeTab, setActiveTab] = useState("all"); // all | highlights | guidelines

  /* -------------------- derived -------------------- */
  const courses = useMemo(
    () => ["All", ...Array.from(new Set(masterReviews.map((r) => r.course)))],
    [masterReviews]
  );
  const centers = useMemo(
    () => ["All", ...Array.from(new Set(masterReviews.map((r) => r.center)))],
    [masterReviews]
  );

  const topTags = useMemo(() => {
    const m = new Map();
    masterReviews.forEach((r) =>
      (r.tags || []).forEach((t) => m.set(t, (m.get(t) || 0) + 1))
    );
    return [...m.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([k, v]) => ({ k, v }));
  }, [masterReviews]);

  const feed = useMemo(() => {
    let list = masterReviews.slice();

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.course.toLowerCase().includes(q) ||
          r.center.toLowerCase().includes(q) ||
          r.snippet.toLowerCase().includes(q) ||
          r.detail.toLowerCase().includes(q) ||
          (r.tags || []).some((t) => t.includes(q))
      );
    }
    if (courseFilter !== "All") list = list.filter((r) => r.course === courseFilter);
    if (centerFilter !== "All") list = list.filter((r) => r.center === centerFilter);
    if (ratingFilter > 0) list = list.filter((r) => r.rating === ratingFilter);

    if (sortBy === "rating-desc") list.sort((a, b) => b.rating - a.rating);
    if (sortBy === "rating-asc") list.sort((a, b) => a.rating - b.rating);

    return list;
  }, [masterReviews, search, courseFilter, centerFilter, ratingFilter, sortBy]);

  const overallRating = googleMeta.rating ?? 4.8;

  /* -------------------- styles -------------------- */
  const styles = `
    :root { --nav-h: 108px; }
    @media (max-width: 1024px){ :root { --nav-h: 120px; } }
    .pt-safe { padding-top: calc(var(--nav-h) + 24px); }
    @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
    .ticker { animation: ticker 28s linear infinite; }
    .edge-fade {
      mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
      -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    }
    .glass { background: rgba(255,255,255,.75); backdrop-filter: blur(10px); }
    .hero-panel { background: rgba(255,255,255,.96); backdrop-filter: blur(6px); }
    .shadow-soft { box-shadow: 0 10px 30px rgba(2,6,23,.08); }
    .btn { display:inline-flex; align-items:center; justify-content:center; border-radius:0.75rem; padding:0.5rem 1rem; font-weight:600; font-size:0.875rem; transition:transform .05s ease; }
    .btn:active { transform:scale(.98); }
    .btn-primary { color:#fff; background-image:linear-gradient(to right, #4f46e5, #0ea5e9); }
    .btn-ghost { background:#fff; border:1px solid #e2e8f0; color:#334155; }
    .chip { display:inline-flex; align-items:center; gap:0.5rem; border-radius:9999px; background:#f8fafc; padding:0.25rem 0.75rem; font-size:0.75rem; color:#334155; }
    .field { width:100%; border-radius:0.75rem; border:1px solid #e2e8f0; background:#fff; padding:0.5rem 0.75rem; outline:none; }
    .field:focus { box-shadow:0 0 0 3px rgba(14,165,233,.15); border-color:#bae6fd; }
    .label { display:block; font-size:0.75rem; font-weight:600; color:#475569; margin-bottom:0.25rem; }
    .masonry { column-gap: 1.25rem; }
    @media (min-width: 640px){ .masonry { column-count: 2; } }
    @media (min-width: 1280px){ .masonry { column-count: 3; } }
    .masonry-item { break-inside: avoid; margin-bottom: 1.25rem; }
  `;

  return (
    <div className="w-full bg-gradient-to-br from-[#F7F7FF] via-[#FFF8FB] to-[#F3FBFF] text-slate-900">
      <style>{styles}</style>

      {/* ===== HERO ===== */}
      <Hero
        masterReviews={masterReviews}
        trendingCourses={trendingCourses}
        overallRating={overallRating}
        ratingHistogram={ratingHistogram}
        googleMeta={googleMeta}
      />

      {/* ===== BODY ===== */}
      <section className="relative pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Tabs */}
          <div className="flex items-center justify-between gap-3">
            <BodyTabs active={activeTab} onChange={setActiveTab} />
            <div className="hidden md:flex items-center gap-2">
              <SortMenu value={sortBy} onChange={setSortBy} />
            </div>
          </div>

          {activeTab === "guidelines" && <GuidelinesPanel />}

          {activeTab === "highlights" && <HighlightsPanel reviews={masterReviews} />}

          {activeTab === "all" && (
            <div className="mt-8 grid md:grid-cols-12 gap-8">
              {/* Left / Main */}
              <div className="md:col-span-8">
                <FeaturedReview review={masterReviews[2]} />

                {/* Loading / Error */}
                {googleMeta.status === "loading" && (
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 animate-pulse">
                        <div className="h-4 w-28 bg-slate-200 rounded" />
                        <div className="mt-2 h-3 w-20 bg-slate-200 rounded" />
                        <div className="mt-4 h-3 w-full bg-slate-200 rounded" />
                        <div className="mt-2 h-3 w-5/6 bg-slate-200 rounded" />
                      </div>
                    ))}
                  </div>
                )}

                {googleMeta.status === "error" && (
                  <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
                    Couldn’t load Google reviews — {googleMeta.error}.
                  </div>
                )}

                {/* Masonry Grid */}
                <div className="mt-6 masonry">
                  {feed.map((r) => (
                    <div className="masonry-item" key={r.id}>
                      <ReviewCard review={r} />
                    </div>
                  ))}
                  {feed.length === 0 && googleMeta.status === "success" && (
                    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
                      <EmptyArt />
                      <p className="mt-3 text-slate-700 font-semibold">No reviews found</p>
                      <p className="text-slate-500 text-sm">Try adjusting filters or keywords.</p>
                    </div>
                  )}
                </div>

                {googleMeta.status === "success" && googleMeta.url && (
                  <p className="mt-4 text-xs text-slate-500 text-center">
                    Reviews via Google —{" "}
                    <a href={googleMeta.url} target="_blank" rel="noreferrer" className="underline">
                      View on Google Maps
                    </a>
                  </p>
                )}

                {/* Simple pagination (demo only) */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  <button className="btn btn-ghost">Prev</button>
                  <span className="text-sm text-slate-600">Page 1 of 3</span>
                  <button className="btn btn-ghost">Next</button>
                </div>
              </div>

              {/* Right / Sidebar */}
              <div className="md:col-span-4">
                <aside className="md:sticky md:top-[calc(var(--nav-h)+20px)] space-y-6">
                  <FilterCard
                    courses={courses}
                    centers={centers}
                    courseFilter={courseFilter}
                    setCourseFilter={setCourseFilter}
                    centerFilter={centerFilter}
                    setCenterFilter={setCenterFilter}
                    ratingFilter={ratingFilter}
                    setRatingFilter={setRatingFilter}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                  />

                  <TagCloud tags={topTags} onPick={(t) => setSearch(t.k)} />

                  {/* Replace old WriteCard with shared FeedbackSection */}
                  <FeedbackSection />
                </aside>
              </div>
            </div>
          )}

          {/* CTA band */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-500 text-white p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold">Have 60 seconds?</h3>
              <p className="opacity-90">Your feedback helps learners pick the right course and boosts transparent outcomes.</p>
            </div>
            {/* This link can simply scroll to the sidebar section where the FeedbackSection lives */}
           <a
  href="#"
  className="btn bg-white text-slate-900 hover:bg-slate-100"
  onClick={(e) => {
    e.preventDefault();
    window.dispatchEvent(new Event("vi:open-feedback"));
    // optional: scroll to top to ensure the dialog header is in view
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  Give Feedback
</a>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===================== HERO ===================== */
function Hero({ masterReviews, trendingCourses, overallRating, ratingHistogram, googleMeta }) {
  return (
    <section className="relative overflow-hidden">
      {/* Dark gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-[#0E1A33] to-[#142648]" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_20%_10%,rgba(37,99,235,.22),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_400px_at_80%_20%,rgba(16,185,129,.16),transparent)]" />
      </div>

      {/* bottom white curve */}
      <svg className="absolute bottom-[-1px] left-0 right-0 w-full h-16 md:h-24 text-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path fill="currentColor" d="M0,96L80,106.7C160,117,320,139,480,144C640,149,800,139,960,122.7C1120,107,1280,85,1360,74.7L1440,64L1440,120L0,120Z" />
      </svg>

      {/* CONTAINER */}
      <div className="pt-safe mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT */}
          <div className="md:col-span-7">
            <div className="hero-panel rounded-2xl p-5 md:p-6 shadow-soft">
              <Breadcrumb items={["Home", "Reviews"]} />
              <h1 className="mt-2 text-[28px] sm:text-4xl md:5xl font-extrabold leading-tight text-slate-900">
                Share your Learning Experience at Vel InfoTech
              </h1>
              <p className="mt-3 md:mt-4 max-w-2xl text-slate-700">
                Help future learners choose the right course, trainer, labs and career path with your honest review.
              </p>

              {/* Quick Actions */}
              <div className="mt-6 md:mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <ActionCard
                  href="#"
                  title="Give Feedback"
                  desc="Takes under 2 minutes."
                  onClick={(e) => {
                    e.preventDefault();
                    // Scroll to the sidebar where the FeedbackSection button is
                    const btn = Array.from(document.querySelectorAll("button"))
                      .find((b) => b.textContent?.trim().includes("Give Feedback"));
                    btn?.scrollIntoView({ behavior: "smooth", block: "center" });
                    btn?.focus();
                  }}
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25ZM20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"/>
                    </svg>
                  }
                />
                <ActionCard
                  href="#"
                  title="See Highlights"
                  desc="Top-rated learner stories."
                  onClick={(e) => {
                    e.preventDefault();
                    const tabs = document.querySelectorAll("button");
                    tabs.forEach(b => {
                      if (b.textContent?.includes("Highlights")) b.click();
                    });
                    window.scrollTo({ top: window.scrollY + 560, behavior: "smooth" });
                  }}
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path fill="currentColor" d="m12 2 3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
                    </svg>
                  }
                />
                <ActionCard
                  href={googleMeta?.url || "https://share.google/EE0quFC4ftHUAz9RH"}
                  target={googleMeta?.url ? "_blank" : undefined}
                  title="View on Google"
                  desc={googleMeta?.total ? `${googleMeta.total} public reviews` : "Public reviews"}
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M21 12.1c0-.7-.1-1.4-.2-2H12v3.9h5.1c-.2 1-.8 2-1.7 2.7v2.2h2.7c1.6-1.5 2.6-3.7 2.6-6.1z"/><path fill="currentColor" d="M12 22c2.4 0 4.5-.8 6-2.1l-2.7-2.2c-.8.5-1.9.9-3.3.9-2.5 0-4.6-1.7-5.3-4.1H3.8v2.3A10 10 0 0 0 12 22z"/><path fill="currentColor" d="M6.7 12a5.98 5.98 0 0 1 0-3.9V5.8H3.8A10 10 0 0 0 2 12c0 1.6.4 3.1 1 4.2l2.7-2.2A6.09 6.09 0 0 1 6.7 12z"/><path fill="currentColor" d="M12 4.7c1.3 0 2.5.4 3.4 1.3l2.6-2.6A9.99 9.99 0 0 0 12 2 10 10 0 0 0 3.8 5.8l2.9 2.3C7.4 6.4 9.5 4.7 12 4.7z"/>
                    </svg>
                  }
                />
              </div>

              {/* Trust badges */}
              <div className="mt-5 grid sm:grid-cols-3 gap-3">
                <TrustBadge title={`${overallRating}★ Overall`} subtitle="From learner reviews" />
                <TrustBadge title="15k+ Learners" subtitle="Trained so far" />
                <TrustBadge title="Placement Assisted" subtitle="Real interview prep" />
              </div>

              {/* Ticker */}
              <div className="mt-6">
                <span className="inline-block text-[11px] sm:text-xs tracking-wide uppercase bg-slate-100 rounded-full px-3 py-1 text-slate-700">
                  Recent Reviews
                </span>

                <div className="relative mt-4">
                  <div className="absolute -inset-2 rounded-2xl bg-slate-100/70 blur-xl" aria-hidden />
                  <div className="relative overflow-hidden edge-fade">
                    <div className="flex gap-3 pr-6 ticker w-[200%]">
                      {[...Array(2)].map((_, loop) => (
                        <div key={loop} className="flex gap-3 min-w-[100%]">
                          {masterReviews.slice(0, 6).map((r) => (
                            <ReviewChip key={`${loop}-${r.id}`} {...r} />
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Snapshot */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-[calc(var(--nav-h)+20px)]">
              <div className="rounded-2xl p-[1px] bg-gradient-to-tr from-indigo-600 via-sky-500 to-cyan-400 shadow-[0_18px_40px_-12px_rgba(59,130,246,0.45)]">
                <div className="glass rounded-2xl px-5 py-5 text-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-700">Institute Snapshot</span>
                    <Badge>Verified</Badge>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <SnapshotItem label="Overall" value={<Stars value={overallRating} />} note={`${overallRating} / 5`} />
                    <SnapshotItem label="Placement" value="87%" note="Assisted" />
                    <SnapshotItem label="Students" value="15k+" note="Trained" />
                  </div>

                  <div className="mt-5">
                    <h4 className="text-slate-800 font-semibold text-sm">Top Courses</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {trendingCourses.map((c, i) => (
                        <span key={i} className="chip">
                          <i className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                          {c.title}
                          <span className="ml-1 text-[10px] px-1.5 py-0.5 rounded bg-white/80 border border-indigo-200 text-indigo-600">{c.tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <RatingDistribution histogram={ratingHistogram} />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <StatBubble title="4.8★" subtitle="Google Rating" />
                <StatBubble title="120+" subtitle="Active Batches" />
                <StatBubble title="200+" subtitle="Industry Mentors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== BODY COMPONENTS ===================== */
function BodyTabs({ active, onChange }) {
  const tabs = [
    ["all", "All Reviews"],
    ["highlights", "Highlights"],
    ["guidelines", "Guidelines"],
  ];
  return (
    <div className="inline-flex bg-white border border-slate-200 rounded-2xl p-1 shadow-soft">
      {tabs.map(([k, label]) => (
        <button
          key={k}
          onClick={() => onChange(k)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold ${active === k ? "bg-gradient-to-r from-indigo-600 to-sky-500 text-white" : "text-slate-700 hover:bg-slate-50"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function GuidelinesPanel() {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-xl font-bold text-slate-900">Write helpful, specific reviews</h3>
        <ul className="mt-4 space-y-3 text-slate-700 list-disc pl-5">
          <li>Mention trainers, labs, projects, and placement support.</li>
          <li>Explain what improved your skills (mock interviews, capstones, mentoring).</li>
          <li>Be respectful; avoid sharing personal data.</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-xl font-bold text-slate-900">Publication & moderation</h3>
        <p className="mt-2 text-slate-700">Reviews may be verified using batch IDs or follow-ups. Edits are allowed within 7 days of publishing.</p>
      </div>
    </div>
  );
}

function HighlightsPanel({ reviews }) {
  const top = reviews.filter((r) => r.rating >= 5).slice(0, 3);
  return (
    <div className="mt-8 grid lg:grid-cols-3 gap-6">
      {top.map((r) => (
        <SpotlightCard key={r.id} review={r} />
      ))}
      {top.length === 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center lg:col-span-3">
          <EmptyArt />
          <p className="mt-3 text-slate-700 font-semibold">No highlights yet</p>
          <p className="text-slate-500 text-sm">Check back soon.</p>
        </div>
      )}
    </div>
  );
}

function SpotlightCard({ review }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md">Top Rated</span>
        <span className="text-xs text-slate-500">{review.ago} ago</span>
      </div>
      <div className="mt-3 text-lg font-semibold text-slate-900">{review.course}</div>
      <div className="mt-1 text-sm text-slate-600">{review.center}</div>
      <div className="mt-2">{StarsInline(review.rating)}</div>
      <p className="mt-3 text-slate-800">{review.snippet}</p>
      <p className="text-slate-600 text-sm">{review.detail}</p>
    </article>
  );
}

function FeaturedReview({ review }) {
  if (!review) return null;
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft relative overflow-hidden">
      <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-gradient-to-br from-indigo-100 to-sky-100" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="font-bold text-slate-900">{review.name}</div>
          <span className="text-xs text-slate-500">{review.ago} ago</span>
        </div>
        <div className="mt-1 text-sm text-slate-600">{review.center}</div>
        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-[11px] text-indigo-700 border border-indigo-100">
            {review.course}
          </span>
          <span className="inline-flex items-center text-sm">{StarsInline(review.rating)}</span>
        </div>
        <p className="mt-4 text-lg leading-relaxed text-slate-900">“{review.snippet}”</p>
        <p className="mt-1 text-slate-600">{review.detail}</p>
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          {(review.tags || []).map((t) => (
            <span key={t} className="chip border border-slate-200 bg-white">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function FilterCard({
  courses,
  centers,
  courseFilter,
  setCourseFilter,
  centerFilter,
  setCenterFilter,
  ratingFilter,
  setRatingFilter,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <h4 className="text-slate-900 font-semibold">Filters</h4>
      <div className="mt-4 space-y-4">
        <LabeledSelect label="Course" value={courseFilter} onChange={setCourseFilter} options={courses} />
        <LabeledSelect label="Center" value={centerFilter} onChange={setCenterFilter} options={centers} />
        <div>
          <label className="label">Rating</label>
          <div className="flex flex-wrap gap-2">
            {[0, 5, 4, 3, 2, 1].map((o) => (
              <button
                key={o}
                className={`px-3 py-1.5 rounded-lg text-sm border ${ratingFilter === o ? "border-amber-400 bg-amber-50" : "border-slate-200 bg-white hover:bg-slate-50"}`}
                onClick={() => setRatingFilter(o)}
              >
                {o === 0 ? "All" : `${o}★`}
              </button>
            ))}
          </div>
        </div>
        <div className="border-t border-slate-200 pt-4">
          <LabeledSelect
            label="Sort by"
            value={sortBy}
            onChange={setSortBy}
            options={[
              { label: "Newest", value: "new" },
              { label: "Rating: High → Low", value: "rating-desc" },
              { label: "Rating: Low → High", value: "rating-asc" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function TagCloud({ tags, onPick }) {
  if (!tags?.length) return null;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <h4 className="text-slate-900 font-semibold">Top Tags</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button key={t.k} onClick={() => onPick?.(t)} className="chip border border-slate-200 bg-white hover:bg-slate-50">
            #{t.k} <span className="text-[10px] text-slate-500">({t.v})</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ===================== SMALL UI ===================== */
function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
      <ol className="flex items-center gap-2">
        {items.map((it, idx) => (
          <li key={it} className="flex items-center gap-2">
            <span className={idx === items.length - 1 ? "text-slate-700 font-medium" : ""}>{it}</span>
            {idx < items.length - 1 && <span className="opacity-60">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function ReviewChip({ name, course, rating, ago, snippet }) {
  return (
    <div className="shrink-0 glass rounded-full px-3 py-2 flex items-center gap-3 border border-white/50 shadow-sm">
      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-400 to-sky-400 ring-2 ring-white/70" />
      <div className="flex items-center gap-2 text-[11px] sm:text-xs whitespace-nowrap text-slate-800">
        <span className="font-semibold">{name}</span>
        <span className="opacity-80">• {course}</span>
        <span className="opacity-80">• {StarsInline(rating)}</span>
        <span className="opacity-70">• {ago} ago</span>
        <span className="opacity-90 hidden xl:inline">“{snippet}”</span>
      </div>
    </div>
  );
}

function ActionCard({ href = "#", onClick, target, title, desc, icon }) {
  return (
    <a
      href={href}
      target={target}
      onClick={onClick}
      className="rounded-2xl bg-white border border-slate-200 p-4 shadow-soft hover:shadow-md transition flex items-start gap-3"
    >
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-slate-900">{title}</div>
        <div className="text-sm text-slate-600">{desc}</div>
      </div>
    </a>
  );
}

function TrustBadge({ title, subtitle }) {
  return (
    <div className="rounded-xl bg-white/90 border border-slate-200 p-3">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="text-[11px] text-slate-600">{subtitle}</div>
    </div>
  );
}

function StarsInline(n = 5) {
  return (
    <span className="inline-flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" className={i < n ? "text-amber-400" : "text-slate-300"}>
          <path fill="currentColor" d="m12 17.27 5.18 3.05-1.64-5.81L20 9.24l-6-.52L12 3 10 8.72l-6 .52 4.46 5.27-1.64 5.81L12 17.27Z" />
        </svg>
      ))}
    </span>
  );
}

function Stars({ value = 4.8 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1">
      <span className="font-bold">{value}</span>
      <span className="inline-flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const active = i < full || (i === full && half);
          return (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" className={active ? "text-amber-500" : "text-slate-300"}>
              <path fill="currentColor" d="m12 17.27 5.18 3.05-1.64-5.81L20 9.24l-6-.52L12 3 10 8.72l-6 .52 4.46 5.27-1.64 5.81L12 17.27Z" />
            </svg>
          );
        })}
      </span>
    </div>
  );
}

function SnapshotItem({ label, value, note }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white/85 p-3 text-center">
      <div className="text-[11px] text-slate-500">{label}</div>
      <div className="mt-1 text-base font-semibold text-slate-800">{value}</div>
      <div className="text-[10px] text-slate-500">{note}</div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <div className="relative">
      <div className="px-2 py-0.5 rounded bg-emerald-600 text-white text-xs font-semibold">{children}</div>
      <div className="absolute -bottom-1 left-1 right-1 h-1 bg-emerald-400/70 rounded-b" />
    </div>
  );
}

function StatBubble({ title, subtitle }) {
  return (
    <div className="glass rounded-2xl px-4 py-3 text-slate-800 shadow">
      <div className="text-sm sm:text-base font-bold leading-snug">{title}</div>
      <div className="text-[11px] sm:text-xs text-slate-600 leading-snug">{subtitle}</div>
    </div>
  );
}

function RatingDistribution({ histogram }) {
  return (
    <div>
      <h4 className="text-slate-800 font-semibold text-sm">Ratings Breakdown</h4>
      <div className="mt-2 space-y-2">
        {[5, 4, 3, 2, 1].map((star) => {
          const pct = histogram[star] || 0;
          return (
            <div key={star} className="grid grid-cols-[28px_1fr_40px] items-center gap-2 text-xs">
              <div className="text-slate-600">{star}★</div>
              <div className="h-2 rounded bg-slate-200 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-amber-400 to-amber-500" style={{ width: `${pct}%` }} />
              </div>
              <div className="text-right text-slate-600">{pct}%</div>
            </div>
          );
        })}
      </div>
      <p className="mt-2 text-[11px] text-slate-500">Based on recent verified reviews.</p>
    </div>
  );
}

function SortMenu({ value, onChange }) {
  return (
    <label className="text-xs text-slate-600">
      <span className="mr-2">Sort:</span>
      <select className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-sm text-slate-800" value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="new">Newest</option>
        <option value="rating-desc">Rating: High → Low</option>
        <option value="rating-asc">Rating: Low → High</option>
      </select>
    </label>
  );
}

function ReviewCard({ review }) {
  const { name, course, rating, ago, snippet, detail, center, tags = [] } = review;
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft hover:shadow-md transition">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-slate-900">{name}</div>
        <span className="text-xs text-slate-500">{ago} ago</span>
      </div>
      <div className="mt-1 text-xs text-slate-600">{center}</div>

      <div className="mt-3 flex items-center gap-2">
        <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-[11px] text-indigo-700 border border-indigo-100">{course}</span>
        <span className="inline-flex items-center text-sm">{StarsInline(rating)}</span>
      </div>

      <p className="mt-3 text-slate-800">{snippet}</p>
      <p className="mt-1 text-slate-600 text-sm">{detail}</p>

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="chip border border-slate-200 bg-white">
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex items-center gap-3">
        <button className="btn btn-ghost px-3 py-1.5" aria-label="Mark helpful">
          <svg width="16" height="16" viewBox="0 0 24 24" className="mr-1.5"><path fill="currentColor" d="M14 9V5a3 3 0 0 0-6 0v4H5v11h14V9h-5Zm-4-4a1 1 0 0 1 2 0v4h-2V5Z" /></svg>
          Helpful
        </button>
        <button className="btn btn-ghost px-3 py-1.5" aria-label="Appreciate">
          <svg width="16" height="16" viewBox="0 0 24 24" className="mr-1.5"><path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A4.49 4.49 0 0 1 6.5 4a5.2 5.2 0 0 1 4.24 2.34A5.2 5.2 0 0 1 15 4a4.5 4.5 0 0 1 4.5 4.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" /></svg>
          Appreciate
        </button>
      </div>
    </article>
  );
}

function LabeledSelect({ label, value, onChange, options }) {
  // Normalize options to [{label:string, value:string}]
  let opts = [];

  if (Array.isArray(options)) {
    const first = options[0];
    if (typeof first === "string" || typeof first === "number") {
      opts = options.map((v) => ({ label: String(v), value: String(v) }));
    } else if (first && typeof first === "object" && "label" in first && "value" in first) {
      opts = options.map((o) => ({
        label: String(o.label),
        value: String(o.value),
      }));
    } else {
      opts = options.map((o) => ({ label: String(o), value: String(o) }));
    }
  } else {
    opts = [{ label: String(options), value: String(options) }];
  }

  return (
    <div>
      <label className="label">{label}</label>
      <select className="field" value={value} onChange={(e) => onChange(e.target.value)}>
        {opts.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function EmptyArt() {
  return (
    <svg width="140" height="90" viewBox="0 0 280 180" className="mx-auto opacity-80">
      <rect x="20" y="30" width="240" height="120" rx="14" fill="#eef2ff" />
      <rect x="40" y="50" width="200" height="16" rx="6" fill="#c7d2fe" />
      <rect x="40" y="74" width="160" height="16" rx="6" fill="#e2e8f0" />
      <rect x="40" y="98" width="180" height="16" rx="6" fill="#e2e8f0" />
      <rect x="40" y="122" width="120" height="16" rx="6" fill="#e2e8f0" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-80">
      <path fill="currentColor" d="m7 10 5 5 5-5z" />
    </svg>
  );
}

function DeskIllustration() {
  return (
    <svg viewBox="0 0 640 420" className="w-full h-auto" role="img" aria-label="Illustration of desk and learning elements">
      <defs>
        <linearGradient id="bg" x1="0" x2="1">
          <stop offset="0%" stopColor="#EEF2FF" />
          <stop offset="100%" stopColor="#E0F2FE" />
        </linearGradient>
        <linearGradient id="gold" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#FFA000" />
        </linearGradient>
      </defs>
      <rect x="40" y="300" width="560" height="70" rx="16" fill="url(#bg)" />
      <rect x="70" y="260" width="220" height="28" rx="8" fill="#CBD5E1" />
      <rect x="320" y="250" width="120" height="40" rx="10" fill="#C7D2FE" />
      <rect x="110" y="210" width="120" height="16" rx="6" fill="#94A3B8" />
      <rect x="115" y="190" width="110" height="16" rx="6" fill="#A3BFFA" />
      <rect x="125" y="130" width="90" height="60" rx="10" fill="url(#gold)" />
      <rect x="145" y="100" width="50" height="30" rx="8" fill="#F59E0B" />
      <circle cx="430" cy="210" r="24" fill="#60A5FA" />
      <rect x="420" y="230" width="20" height="28" rx="6" fill="#1D4ED8" />
      <circle cx="490" cy="230" r="22" fill="#34D399" />
      <rect x="480" y="250" width="20" height="26" rx="6" fill="#059669" />
      <rect x="260" y="180" width="16" height="70" rx="6" fill="#93C5FD" />
      <rect x="280" y="160" width="16" height="90" rx="6" fill="#818CF8" />
      <rect x="300" y="190" width="16" height="60" rx="6" fill="#38BDF8" />
    </svg>
  );
}
