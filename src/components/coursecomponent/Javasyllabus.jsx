// src/components/JavaSyllabusLocked.jsx
import React, { useMemo, useState, useEffect } from "react";
import {
  FaClock,
  FaUserGraduate,
  FaSignal,
  FaCalendarAlt,
  FaBookOpen,
  FaCheckCircle,
  FaLock,
  FaTimes,
} from "react-icons/fa";

/**
 * JavaSyllabusLocked.jsx — PRIVACY-FIRST (Outline only)
 * - Shows only a high-level syllabus outline (no weeks, no topics).
 * - Outline renders ONLY after unlock (nothing sensitive in initial DOM).
 * - External form flow supported via `useExternalForm`, `isUnlocked`, `onRequestUnlock`.
 * - Re-locks on refresh by default (persistUnlock = false).
 */
export default function JavaSyllabus({
  title = "Java Developer Syllabus",
  accent = "#005BAC",
  persistUnlock = false,               // default: do NOT persist unlock
  storageKey = "vi_java_syllabus_unlocked",
  useExternalForm = true,              // using your external form flow
  isUnlocked,                          // parent controls unlock when external
  onRequestUnlock,                     // called on “View Syllabus”
  onRegister,                          // only used if useExternalForm === false (internal modal)
}) {
  const data = useMemo(() => baseSyllabusData(), []);

  const [localUnlocked, setLocalUnlocked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Internal persistence only when not using external flow
  useEffect(() => {
    if (useExternalForm) return;
    if (!persistUnlock) {
      try { localStorage.removeItem(storageKey); } catch (_) {}
      return;
    }
    try {
      setLocalUnlocked(localStorage.getItem(storageKey) === "1");
    } catch (_) {}
  }, [useExternalForm, persistUnlock, storageKey]);

  const handleInternalUnlock = async (formData) => {
    try {
      if (typeof onRegister === "function") await onRegister(formData);
    } catch (e) {
      console.error("Registration submit failed:", e);
    }
    if (persistUnlock) {
      try { localStorage.setItem(storageKey, "1"); } catch (_) {}
    }
    setLocalUnlocked(true);
    setModalOpen(false);
  };

  const unlocked = useExternalForm ? !!isUnlocked : localUnlocked;

  return (
    <section className="relative w-full bg-[#f6f9ff] py-10 sm:py-12">
      {/* Accent bar */}
      <div className="absolute inset-x-0 top-0 h-[6px]" style={{ backgroundColor: accent }} />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <header className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-[#0f172a] tracking-tight">{title}</h2>
          <p className="text-slate-600 mt-2 flex items-center gap-3 flex-wrap">
            <Badge icon={FaClock} text={data.meta.duration} accent={accent} />
            <Badge icon={FaUserGraduate} text={data.meta.audience} />
            <Badge icon={FaSignal} text={`Level: ${data.meta.level}`} />
            <Badge icon={FaCalendarAlt} text={`${data.meta.mode} • ${data.meta.schedule}`} />
          </p>

          {/* CTA */}
          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            {!unlocked ? (
              <button
                onClick={() => {
                  if (useExternalForm) onRequestUnlock?.();
                  else setModalOpen(true);
                }}
                className="px-5 py-3 rounded-xl text-white font-semibold shadow-sm hover:shadow-md active:scale-[.99]"
                style={{ backgroundColor: accent }}
              >
                View Syllabus
              </button>
            ) : (
              <div className="inline-flex items-center gap-2 text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-lg">
                <FaCheckCircle className="opacity-80" /> Unlocked – syllabus visible below
              </div>
            )}
          </div>
        </header>

        {/* Body grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT: Syllabus Outline */}
          <div className="lg:col-span-2">
            <Card>
              <div className="p-5 sm:p-6 relative">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                  <FaBookOpen className="text-slate-500" /> Syllabus Outline
                </h3>
                <p className="text-slate-600 mt-1 mb-4">
                  High-level outline only. Detailed breakdown is private by design.
                </p>

                {/* Safe preview chips BEFORE unlock */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {data.preview.map((t) => (
                    <span
                      key={t}
                      className="text-[12px] px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Outline list renders ONLY after unlock */}
                {unlocked && (
                  <ul className="divide-y divide-slate-100 mt-4">
                    {data.outline.map((item, idx) => (
                      <li key={idx} className="py-3">
                        <div className="font-semibold text-slate-900">{item.title}</div>
                        {item.tags?.length ? (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {item.tags.map((t) => (
                              <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-slate-100 text-slate-700">
                                {t}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Strong blue blur overlay until unlock */}
                {!unlocked && (
                  <div
                    className="absolute inset-0 rounded-2xl border border-slate-200/60 flex flex-col items-center justify-center text-center p-6 backdrop-blur-[60px] backdrop-saturate-150"
                    style={{ background: `linear-gradient(180deg, ${accent}40, ${accent}66)` }}
                  >
                    <div className="flex items-center gap-2 text-white font-semibold drop-shadow">
                      <FaLock /> Syllabus is private
                    </div>
                    <p className="text-sm text-white/90 mt-1">Submit a quick registration to view the outline.</p>
                    <button
                      onClick={() => {
                        if (useExternalForm) onRequestUnlock?.();
                        else setModalOpen(true);
                      }}
                      className="mt-3 px-4 py-2 rounded-lg text-white font-medium shadow-sm"
                      style={{ backgroundColor: accent }}
                    >
                      View Syllabus
                    </button>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* RIGHT: Glance + Prereq */}
          <div className="lg:col-span-1">
            <Card className="top-4">
              <div className="p-5 sm:p-6">
                <h4 className="font-bold text-slate-900">At a Glance</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {data.glance.map((g, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="mt-0.5 text-green-500" /> {g}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card className="mt-6">
              <div className="p-5 sm:p-6">
                <h4 className="font-bold text-slate-900">Prerequisites</h4>
                <p className="text-sm text-slate-700 mt-2">
                  Basic programming familiarity helps. Motivated beginners are welcome.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Internal modal only when not using external form */}
      {!useExternalForm && modalOpen && (
        <RegisterModal accent={accent} onClose={() => setModalOpen(false)} onSubmit={handleInternalUnlock} />
      )}
    </section>
  );
}

/* ------------------------------ pieces ------------------------------ */
function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-2xl shadow-[0_10px_30px_rgba(80,89,143,0.12)] border border-slate-100 ${className}`}>
      {children}
    </div>
  );
}

function Badge({ icon: Icon, text, accent }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm text-slate-700">
      {Icon ? <Icon className="text-slate-500" style={accent ? { color: accent } : undefined} /> : null}
      <span>{text}</span>
    </span>
  );
}

function RegisterModal({ accent, onClose, onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const emailParts = String(form.email).split("@");
    const emailOk = emailParts.length === 2 && emailParts[1].includes(".");
    const digits = Array.from(String(form.phone)).filter((c) => c >= "0" && c <= "9").join("");
    const phoneOk = digits.length === 10;

    if (!form.name || !emailOk || !phoneOk) {
      setError("Please enter a valid name, email and 10-digit phone number.");
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit?.(form);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-[92%] max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
        <button onClick={onClose} className="absolute right-3 top-3 p-2 rounded-full hover:bg-slate-100" aria-label="Close registration">
          <FaTimes />
        </button>
        <h3 className="text-xl font-bold text-slate-900">Quick Registration</h3>
        <p className="text-slate-600 text-sm mt-1">Fill this once to unlock the syllabus.</p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <input type="text" name="name" placeholder="Your name" className="w-full rounded-lg border border-slate-300 px-3 py-2" required />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input type="email" name="email" placeholder="you@example.com" className="rounded-lg border border-slate-300 px-3 py-2" required />
            <input type="tel" name="phone" placeholder="10-digit mobile" className="rounded-lg border border-slate-300 px-3 py-2" required />
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-slate-500">We won’t share your info. <b>No spam.</b></span>
            <button type="submit" className="px-4 py-2 rounded-lg text-white font-medium shadow-sm" style={{ backgroundColor: accent }}>
              Unlock Syllabus
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ------------------------------ data (HIGH-LEVEL, NO WEEKS) ------------------------------ */
function baseSyllabusData() {
  return {
    meta: {
      duration: "10–12 weeks",
      audience: "Students & Working Professionals",
      level: "Beginner → Intermediate",
      mode: "Online / Classroom",
      schedule: "Weekday & Weekend Batches",
    },
    // Safe preview chips (always public)
    preview: [
      "Core Java",
      "OOP",
      "Collections",
      "Spring Boot",
      "JPA/Hibernate",
      "REST APIs",
      "Security (JWT)",
      "Testing",
      "Deploy",
    ],
    // Outline items (titles only, no descriptions, no weeks)
    outline: [
      { title: "Core Java Basics", tags: ["Syntax", "IDE"] },
      { title: "Object-Oriented Programming", tags: ["Classes", "Interfaces"] },
      { title: "Collections & Generics", tags: ["Collections", "Streams"] },
      { title: "Exceptions, I/O & Time API", tags: ["I/O", "Error Handling"] },
      { title: "Intro to Concurrency", tags: ["Threads"] },
      { title: "SQL & JDBC Essentials", tags: ["JDBC", "SQL"] },
      { title: "Spring Core & Boot", tags: ["Spring", "Boot"] },
      { title: "REST with Spring MVC", tags: ["Controllers", "DTOs"] },
      { title: "JPA/Hibernate", tags: ["ORM"] },
      { title: "Security & Auth (JWT)", tags: ["Spring Security"] },
      { title: "Testing & Quality", tags: ["JUnit", "Mockito"] },
      { title: "Build & Deploy", tags: ["Maven", "Docker"] },
    ],
    glance: [
      "Core Java → Spring Boot",
      "JPA/Hibernate with SQL DBs",
      "REST APIs & authentication",
      "Deploy a working project",
    ],
  };
}
