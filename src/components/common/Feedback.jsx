// src/components/FeedbackSection.jsx
import React, { useEffect, useRef, useState } from "react";

export default function FeedbackSection({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const original = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = original; };
  }, [open]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    courseTitle: "",
    trainerName: "",
    courseRating: "",
    trainerRating: "",
    wouldRecommend: "yes",
    comments: "",
  });
  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));
  const required = (v) => String(v || "").trim().length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !required(form.courseTitle) ||
      !required(form.trainerName) ||
      !required(form.courseRating) ||
      !required(form.trainerRating)
    ) {
      alert("Please fill Course, Trainer, and both Ratings.");
      return;
    }
    const payload = {
      ...form,
      courseRating: Number(form.courseRating),
      trainerRating: Number(form.trainerRating),
      submittedAt: new Date().toISOString(),
    };
    try {
      setSubmitting(true);
      if (typeof onSubmit === "function") await onSubmit(payload);
      else console.log("Feedback submitted:", payload);
      setSubmitted(true);
      setForm({
        name: "", email: "", courseTitle: "", trainerName: "",
        courseRating: "", trainerRating: "", wouldRecommend: "yes", comments: "",
      });
      setTimeout(() => { setOpen(false); setSubmitted(false); }, 1000);
    } catch (err) {
      console.error(err);
      alert("Failed to submit feedback. Please try again.");
    } finally { setSubmitting(false); }
  };

  // Reusable input base styles
  const inputCls =
    "mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm " +
    "text-gray-900 placeholder:text-gray-500 caret-gray-900 shadow-sm " +
    "focus:border-[#0073CE] focus:ring-2 focus:ring-[#0073CE]/30";

  return (
    <section className="w-full">
      {/* Left→Right full-cover band (matches your subheader palette) */}
      <div className="w-full bg-gradient-to-r from-[#005BAC] via-[#0073CE] to-[#00AEEF]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold drop-shadow-sm">
            We value your feedback
          </h1>
          <p className="mt-2 opacity-90">
            Share quick thoughts about the course and trainer.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-white/95 px-6 py-3 font-semibold text-gray-900 shadow-sm ring-1 ring-white/70 hover:bg-white"
          >
            Give Feedback
          </button>
        </div>
      </div>

      {/* Centered modal — no scrollbars, fully rounded */}
      {open && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-2 sm:p-4 overflow-hidden"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-title"
            ref={dialogRef}
            className="w-[min(92vw,740px)] rounded-3xl bg-white p-5 sm:p-6 shadow-2xl outline-none text-gray-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 flex items-start justify-between gap-4">
              <h2 id="feedback-title" className="text-2xl font-semibold">
                Course & Trainer Feedback
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Your Name (optional)
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={update("name")}
                    className={inputCls}
                    placeholder="e.g., Priya K"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className={inputCls}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Course Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.courseTitle}
                    onChange={update("courseTitle")}
                    className={inputCls}
                    placeholder="e.g., React Fundamentals"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Trainer Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.trainerName}
                    onChange={update("trainerName")}
                    className={inputCls}
                    placeholder="e.g., Mr. Sharma"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Course Rating *
                  </label>
                  <select
                    required
                    value={form.courseRating}
                    onChange={update("courseRating")}
                    className={inputCls}
                  >
                    <option value="" disabled className="text-gray-500">
                      Select rating
                    </option>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n} className="text-gray-900">
                        {n} / 5
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-800">
                    Trainer Rating *
                  </label>
                  <select
                    required
                    value={form.trainerRating}
                    onChange={update("trainerRating")}
                    className={inputCls}
                  >
                    <option value="" disabled className="text-gray-500">
                      Select rating
                    </option>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n} className="text-gray-900">
                        {n} / 5
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <span className="block text-sm font-medium text-gray-800">
                  Would you recommend this course?
                </span>
                <div className="mt-2 flex gap-6">
                  <label className="inline-flex items-center gap-2 text-sm text-gray-800">
                    <input
                      type="radio"
                      name="wouldRecommend"
                      value="yes"
                      checked={form.wouldRecommend === "yes"}
                      onChange={update("wouldRecommend")}
                      className="h-4 w-4 accent-[#0073CE] rounded-full"
                    />
                    Yes
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm text-gray-800">
                    <input
                      type="radio"
                      name="wouldRecommend"
                      value="no"
                      checked={form.wouldRecommend === "no"}
                      onChange={update("wouldRecommend")}
                      className="h-4 w-4 accent-[#0073CE] rounded-full"
                    />
                    No
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800">
                  Comments
                </label>
                <textarea
                  rows={3}
                  value={form.comments}
                  onChange={update("comments")}
                  className={inputCls}
                  placeholder="What worked well? What can we improve?"
                />
              </div>

              <div className="mt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center rounded-full bg-[#5B3CF3] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Submit Feedback"}
                </button>
              </div>

              {submitted && (
                <p className="pt-1 text-sm font-medium text-green-700">
                  Thanks! Your feedback was submitted.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
