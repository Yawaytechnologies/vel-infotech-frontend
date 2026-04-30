// src/pages/BlogDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPostById } from "../redux/actions/blogAction";
import { FiArrowLeft } from "react-icons/fi";
import career from "../assets/career.jpg";

function readTime(content) {
  if (!content) return 1;
  const words = content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export default function BlogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedPost, selectedStatus, selectedError } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    if (id) dispatch(fetchBlogPostById(id));
  }, [id, dispatch]);

  if (selectedStatus === "loading" || selectedStatus === "idle") {
    return (
      <div className="min-h-screen bg-[#021733] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          <p className="text-slate-400 text-sm">Loading article…</p>
        </div>
      </div>
    );
  }

  if (selectedStatus === "failed" || !selectedPost) {
    return (
      <div className="min-h-screen bg-[#021733] text-white flex flex-col items-center justify-center gap-4">
        <p className="text-slate-300">
          {selectedStatus === "failed"
            ? "Unable to load this blog post."
            : "No blog post found for this ID."}
        </p>
        {selectedError && (
          <p className="text-xs text-red-300">{selectedError.toString()}</p>
        )}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#005BAC] hover:bg-[#004b8d] transition-colors text-sm"
        >
          <FiArrowLeft /> Back to blog
        </Link>
      </div>
    );
  }

  const { title, content, excerpt, imageBase64 } = selectedPost;
  const imageSrc = imageBase64 || career;
  const mins = readTime(content);
  const isHtml = typeof content === "string" && /<[a-z][\s\S]*>/i.test(content);

  return (
    <main className="bg-[#021733] min-h-screen text-white pt-20 pb-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Back link */}
        <div className="mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs md:text-sm text-slate-300 hover:text-white transition-colors"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 border border-white/15">
              <FiArrowLeft className="text-[13px]" />
            </span>
            Back to all articles
          </Link>
        </div>

        {/* Article card */}
        <article className="bg-[#031735] rounded-3xl shadow-[0_18px_45px_rgba(0,0,0,0.55)] border border-slate-800 overflow-hidden">
          {/* Hero image */}
          <div className="relative h-56 md:h-72 lg:h-80 w-full overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = career; }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#021733]/85 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="px-5 md:px-8 lg:px-10 pb-8 md:pb-10 -mt-10 relative">
            <div className="bg-[#041b3f]/95 rounded-2xl border border-slate-700/70 px-4 md:px-6 lg:px-7 py-5 md:py-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* Meta row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                  Vel InfoTech · Blog
                </span>
                <span className="text-[11px] text-slate-400">{mins} min read</span>
              </div>

              {/* Title */}
              <h1 className="text-xl md:text-3xl lg:text-[32px] font-extrabold leading-tight mb-3 md:mb-4">
                {title}
              </h1>

              {/* Excerpt */}
              {excerpt && (
                <p className="text-sm md:text-[15px] text-slate-200/95 mb-5 md:mb-6 leading-relaxed border-l-2 border-emerald-400/40 pl-4 italic">
                  {excerpt}
                </p>
              )}

              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600/60 to-transparent mb-5 md:mb-6" />

              {/* Body */}
              <div className="text-[13px] md:text-[15px] text-slate-100 leading-relaxed md:leading-[1.9]">
                {isHtml ? (
                  <div
                    className="prose prose-invert prose-sm md:prose-base max-w-none"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                ) : (
                  <p className="whitespace-pre-line">{content}</p>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Back to blog */}
        <div className="mt-8 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-sm text-slate-200 transition-colors"
          >
            <FiArrowLeft className="text-sm" />
            Back to all articles
          </Link>
        </div>
      </div>
    </main>
  );
}
