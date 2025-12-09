// src/pages/BlogDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogPostById } from "../redux/actions/blogAction";
import { FiArrowLeft, FiCalendar } from "react-icons/fi";
import career from "../assets/career.jpg";

export default function BlogDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedPost, selectedStatus, selectedError } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchBlogPostById(id));
    }
  }, [id, dispatch]);

  if (selectedStatus === "loading" || selectedStatus === "idle") {
    return (
      <div className="min-h-screen bg-[#021733] text-white flex items-center justify-center">
        Loading blog...
      </div>
    );
  }

  if (selectedStatus === "failed") {
    return (
      <div className="min-h-screen bg-[#021733] text-white flex flex-col items-center justify-center gap-4">
        <p>Unable to load this blog post.</p>
        {selectedError && (
          <p className="text-xs text-red-300">
            {selectedError.toString()}
          </p>
        )}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#005BAC]"
        >
          <FiArrowLeft /> Back to blog
        </Link>
      </div>
    );
  }

  if (!selectedPost) {
    return (
      <div className="min-h-screen bg-[#021733] text-white flex flex-col items-center justify-center gap-4">
        <p>No blog found for this ID.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#005BAC]"
        >
          <FiArrowLeft /> Back to blog
        </Link>
      </div>
    );
  }

  const { title, content, excerpt, image, date, createdAt } = selectedPost;
  const imageSrc = image || career;
  const displayDate =
    date ||
    (typeof createdAt === "string" ? createdAt.slice(0, 10) : null);

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
          {/* Image with subtle overlay */}
          <div className="relative h-56 md:h-72 lg:h-80 w-full overflow-hidden">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#021733]/85 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          {/* Content */}
          <div className="px-5 md:px-8 lg:px-10 pb-8 md:pb-10 -mt-10 relative">
            {/* elevated inner card */}
            <div className="bg-[#041b3f]/95 rounded-2xl border border-slate-700/70 px-4 md:px-6 lg:px-7 py-5 md:py-7 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
              {/* Meta row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-400/10 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    Vell InfoTech · Blog
                  </span>
                </div>

                {displayDate && (
                  <div className="inline-flex items-center gap-1.5 text-[11px] md:text-xs text-slate-300">
                    <FiCalendar className="text-[13px]" />
                    <time className="tracking-wide uppercase">
                      {displayDate}
                    </time>
                  </div>
                )}
              </div>

              {/* Title */}
              <h1 className="text-xl md:text-3xl lg:text-[32px] font-extrabold leading-tight mb-3 md:mb-4">
                {title}
              </h1>

              {/* Excerpt */}
              {excerpt && (
                <p className="text-sm md:text-[15px] text-slate-200/95 mb-5 md:mb-6 leading-relaxed">
                  {excerpt}
                </p>
              )}

              {/* Divider */}
              <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600/60 to-transparent mb-5 md:mb-6" />

              {/* Main content */}
              <div className="text-[13px] md:text-[15px] text-slate-100 leading-relaxed md:leading-[1.9] space-y-4">
                {typeof content === "string" && content.includes("<p>")
                  ? (
                    <div
                      className="prose prose-invert prose-sm md:prose-base max-w-none"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                    )
                  : (
                    <p className="whitespace-pre-line">
                      {content}
                    </p>
                    )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
