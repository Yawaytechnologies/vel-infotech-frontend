import React, { useEffect, useState } from "react";
import {
  User,
  GraduationCap,
  MessageSquare,
  Upload,
  CheckCircle2,
  ShieldCheck,
  Star,
  Mail,
  Phone,
  FileText,
  Briefcase,
  Link as LinkIcon,
} from "lucide-react";

/**
 * Learner Feedback Page – EdTech (Post‑college courses & placements)
 * Stack: React + Tailwind (no extra deps)
 *
 * Drop this file into: src/pages/FeedbackPage.jsx
 * Route example: <Route path="/feedback" element={<FeedbackPage />} />
 */

// Brand accent for Vel InfoTech
const ACCENT = "#005BAC"; // change once to retheme

// What is the feedback mainly about?
const TARGETS = [
  { key: "program", label: "Program / Course" },
  { key: "mentor", label: "Mentor / Trainer" },
  { key: "placement", label: "Placement Support" },
  { key: "platform", label: "Platform / Support" },
  { key: "other", label: "Other" },
];

const LIKERT = [
  { value: 1, label: "Very Poor" },
  { value: 2, label: "Poor" },
  { value: 3, label: "Average" },
  { value: 4, label: "Good" },
  { value: 5, label: "Excellent" },
];

// Tailored to EdTech outcomes
const RATING_CATEGORIES = [
  { key: "curriculum_relevance", label: "Curriculum relevance to industry" },
  { key: "trainer_expertise", label: "Trainer expertise & clarity" },
  { key: "hands_on", label: "Hands‑on practice & projects" },
  { key: "doubt_resolution", label: "Doubt resolution speed" },
  { key: "career_guidance", label: "Career guidance quality" },
  { key: "placement_updates", label: "Placement communication & updates" },
  { key: "mock_interviews", label: "Mock interview effectiveness" },
  { key: "resume_linkedin", label: "Resume & LinkedIn support" },
  { key: "role_alignment", label: "Company role alignment with training" },
  { key: "value_for_money", label: "Overall value for money" },
];

function Section({ icon: Icon, title, subtitle, children }) {
  return (
    <section className="relative">
      {/* Gradient border wrapper */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-sky-200/70 to-blue-200/70 shadow-[0_10px_30px_rgba(0,91,172,0.08)]">
        <div className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur-sm">
          <div className="flex items-start gap-3 border-b border-white/60/50 px-5 py-4">
            <div className="mt-0.5 rounded-xl bg-sky-50/80 p-2 text-sky-700">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">{title}</h2>
              {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
            </div>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </div>
    </section>
  );
}

function RadioPill({ name, value, checked, onChange, label }) {
  return (
    <label
      className={`inline-flex cursor-pointer select-none items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-all duration-150 ${
        checked
          ? "border-[color:var(--accent)] bg-[color:var(--accent-soft)] text-[color:var(--accent)] shadow-sm"
          : "border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:shadow"
      }`}
      style={{ ["--accent"]: ACCENT, ["--accent-soft"]: "color-mix(in oklab, var(--accent) 12%, white)" }}
    >
      <input type="radio" className="sr-only" name={name} value={value} checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}

function LikertRow({ name, label, required }) {
  return (
    <div className="grid grid-cols-1 items-center gap-3 border-b border-gray-100 py-3 last:border-none sm:grid-cols-12 odd:bg-gray-50/40">
      <div className="sm:col-span-5">
        <label className="text-sm font-medium text-gray-800" htmlFor={`${name}_3`}>
          {label}
        </label>
      </div>
      <div className="sm:col-span-7">
        <div className="flex flex-wrap items-center gap-2">
          {LIKERT.map((opt) => (
            <label key={opt.value} className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-700 shadow-sm backdrop-blur hover:border-gray-300">
              <input type="radio" name={name} value={opt.value} required={required} className="h-4 w-4 accent-[color:var(--accent)]" id={`${name}_${opt.value}`} style={{ ["--accent"]: ACCENT }} />
              <span className="min-w-[5.5rem]">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function StarRating({ name, label }) {
  const [val, setVal] = useState(0);
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium text-gray-800">{label}</span>
      <div className="inline-flex items-center gap-1" role="radiogroup" aria-label={label} style={{ ["--accent"]: ACCENT }}>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => setVal(n)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") setVal((v) => Math.min(5, v + 1));
              if (e.key === "ArrowLeft") setVal((v) => Math.max(1, v - 1));
            }}
            aria-checked={val === n}
            role="radio"
            className={`rounded-lg border p-2 transition-colors duration-150 ${val >= n ? "border-amber-400 bg-amber-50" : "border-gray-200 bg-white"}`}
          >
            <Star className={`h-5 w-5 transition-colors ${val >= n ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
          </button>
        ))}
      </div>
      <input type="hidden" name={name} value={val} />
    </div>
  );
}

export default function FeedbackPage() {
  const [anonymous, setAnonymous] = useState(false);
  const [target, setTarget] = useState("program");
  const [allowFollowUp, setAllowFollowUp] = useState(false);
  const [allowTestimonial, setAllowTestimonial] = useState(false);
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const draft = localStorage.getItem("feedback_draft_v2_edtech");
    if (draft) {
      try {
        const data = JSON.parse(draft);
        setAnonymous(!!data.anonymous);
        setTarget(data.target || "program");
        setAllowFollowUp(!!data.allowFollowUp);
        setAllowTestimonial(!!data.allowTestimonial);
      } catch {}
    }
  }, []);

  function saveDraft(e) {
    e.preventDefault();
    const form = e.currentTarget.form ?? document.getElementById("feedback-form");
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd.entries());
    obj.anonymous = anonymous;
    obj.target = target;
    obj.allowFollowUp = allowFollowUp;
    obj.allowTestimonial = allowTestimonial;
    localStorage.setItem("feedback_draft_v2_edtech", JSON.stringify(obj));
    alert("Draft saved locally.");
  }

  function resetForm() {
    const form = document.getElementById("feedback-form");
    form?.reset();
    setFiles([]);
    setAllowFollowUp(false);
    setAllowTestimonial(false);
    setAnonymous(false);
    setTarget("program");
    setSuccess(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);

    const fd = new FormData(e.currentTarget);
    const fileNames = files.map((f) => f.name);

    const payload = {
      meta: {
        submitted_at: new Date().toISOString(),
        anonymous,
        target,
      },
      learner: anonymous
        ? null
        : {
            full_name: fd.get("full_name") || "",
            email: fd.get("email") || "",
            phone: fd.get("phone") || "",
            learner_id: fd.get("learner_id") || "",
            graduation_year: fd.get("graduation_year") || "",
            degree: fd.get("degree") || "",
            specialization: fd.get("specialization") || "",
            college: fd.get("college") || "",
            experience_years: fd.get("experience_years") || "",
            current_status: fd.get("current_status") || "",
            preferred_domain: fd.get("preferred_domain") || "",
            location_preference: fd.get("location_preference") || "",
          },
      context: {
        // Program
        program_name: fd.get("program_name") || null,
        cohort: fd.get("cohort") || null,
        start_date: fd.get("start_date") || null,
        end_date: fd.get("end_date") || null,
        delivery: fd.get("delivery") || null,
        trainer_name: fd.get("trainer_name") || null,
        // Mentor
        mentor_name: fd.get("mentor_name") || null,
        sessions_attended: fd.get("sessions_attended") || null,
        one_on_one: fd.get("one_on_one") || null,
        // Platform/Support
        support_ticket_id: fd.get("support_ticket_id") || null,
        // Other
        other_topic: fd.get("other_topic") || null,
      },
      ratings: RATING_CATEGORIES.reduce((acc, r) => {
        acc[r.key] = Number(fd.get(r.key) || 0);
        return acc;
      }, {}),
      star_overall: Number(fd.get("star_overall") || 0),
      nps: Number(fd.get("nps") || 0),
      experience: {
        went_well: fd.get("went_well") || "",
        needs_improvement: fd.get("needs_improvement") || "",
        incident: fd.get("incident") || "",
        suggestions: fd.get("suggestions") || "",
        additional: fd.get("additional") || "",
      },
      issues: fd.getAll("issues"),
      placement: {
        status: fd.get("placement_status") || null,
        company: fd.get("company") || null,
        role: fd.get("role") || null,
        city: fd.get("city") || null,
        expected_ctc_lpa: fd.get("expected_ctc_lpa") || null,
        offered_ctc_lpa: fd.get("offered_ctc_lpa") || null,
        applications_submitted: fd.get("applications_submitted") || null,
        interviews_attended: fd.get("interviews_attended") || null,
        offers_received: fd.get("offers_received") || null,
        joining_date: fd.get("joining_date") || null,
        services_used: fd.getAll("services_used"),
        links: {
          github: fd.get("github") || null,
          project_demo: fd.get("project_demo") || null,
        },
      },
      follow_up: {
        allow: allowFollowUp,
        preferred: fd.get("preferred_contact") || null,
        best_time: fd.get("best_time") || null,
        timezone: fd.get("timezone") || null,
      },
      marketing_consent: {
        allow_testimonial: allowTestimonial,
        display_name_ok: fd.get("display_name_ok") === "on",
      },
      attachments: fileNames,
      consent_confirmed: fd.get("consent_confirmed") === "on",
      accuracy_confirmed: fd.get("accuracy_confirmed") === "on",
    };

    console.log("FEEDBACK_SUBMISSION", payload);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSuccess(true);
    localStorage.removeItem("feedback_draft_v2_edtech");
  }

  return (
    <main className="relative mx-auto max-w-6xl mt-23 px-4 py-8">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: "radial-gradient(rgba(0,91,172,0.12) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
        />
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-sky-200/70 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl" />
      </div>

      {/* Hero header */}
      <header className="mb-6">
        <div className="relative overflow-hidden rounded-2xl border border-blue-100/70 bg-gradient-to-r from-sky-50 to-blue-50 p-5 shadow-[0_12px_30px_rgba(0,91,172,0.08)]" style={{ boxShadow: "0 10px 30px rgba(0,91,172,0.08)" }}>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-3 py-1 text-xs font-medium text-sky-700 backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" /> Your responses are private. We only use them to improve quality.
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Learner Feedback (Programs & Placements)</h1>
          <p className="mt-1 max-w-3xl text-sm text-gray-600">For graduates taking our professional courses and using our placement services. Fields marked <span className="mx-1 text-red-600">*</span> are required.</p>
        </div>
      </header>

      <form id="feedback-form" onSubmit={handleSubmit} className="space-y-6">
        {/* Section: Learner details */}
        <Section icon={User} title="Learner details" subtitle="Identify yourself or submit anonymously">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <label className="inline-flex cursor-pointer items-center gap-3">
              <input type="checkbox" className="h-4 w-4 accent-[color:var(--accent)]" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} style={{ ["--accent"]: ACCENT }} />
              <span className="text-sm text-gray-700">Submit anonymously</span>
            </label>
            <div className="text-xs text-gray-500">If anonymous, we won’t ask for your personal contact details.</div>
          </div>

          {!anonymous && (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="full_name">Full name<span className="text-red-600"> *</span></label>
                <input id="full_name" name="full_name" required className="w-full rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none ring-[color:var(--accent-soft)] focus:ring-4" placeholder="e.g., Priya Sharma" style={{ ["--accent-soft"]: "color-mix(in oklab, var(--accent) 20%, white)", ["--accent"]: ACCENT }} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="learner_id">Learner ID</label>
                <input id="learner_id" name="learner_id" className="w-full rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none ring-[color:var(--accent-soft)] focus:ring-4" placeholder="If provided by institute" style={{ ["--accent-soft"]: "color-mix(in oklab, var(--accent) 20%, white)", ["--accent"]: ACCENT }} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="email">Email<span className="text-red-600"> *</span></label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input id="email" type="email" name="email" required className="w-full rounded-lg border border-gray-200 bg-white/90 px-9 py-2 text-sm outline-none ring-[color:var(--accent-soft)] focus:ring-4" placeholder="you@example.com" style={{ ["--accent-soft"]: "color-mix(in oklab, var(--accent) 20%, white)", ["--accent"]: ACCENT }} />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="phone">Phone</label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <input id="phone" name="phone" className="w-full rounded-lg border border-gray-200 bg-white/90 px-9 py-2 text-sm outline-none ring-[color:var(--accent-soft)] focus:ring-4" placeholder="Optional" style={{ ["--accent-soft"]: "color-mix(in oklab, var(--accent) 20%, white)", ["--accent"]: ACCENT }} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:col-span-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="graduation_year">Graduation year</label>
                  <input id="graduation_year" name="graduation_year" className="w-full rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none" placeholder="e.g., 2024" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="degree">Degree</label>
                  <input id="degree" name="degree" className="w-full rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none" placeholder="e.g., B.E / B.Tech / B.Sc" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="specialization">Specialization</label>
                  <input id="specialization" name="specialization" className="w-full rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none" placeholder="e.g., CSE / IT / ECE" />
                </div>
              </div>
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="college">College (optional)</label>
                  <input id="college" name="college" className="w-full rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none" placeholder="Your college" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="current_status">Current status</label>
                  <select id="current_status" name="current_status" className="w-full rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none">
                    <option>Job seeking (fresher)</option>
                    <option>Working (seeking change)</option>
                    <option>Working (not seeking)</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="experience_years">Experience (years)</label>
                  <input id="experience_years" name="experience_years" type="number" min="0" step="0.5" className="w-full rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none" placeholder="e.g., 0 / 1.5 / 3" />
                </div>
              </div>
              <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="preferred_domain">Preferred domain / role</label>
                  <input id="preferred_domain" name="preferred_domain" className="w-full rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none" placeholder="e.g., Full‑stack, QA, Data, Cloud" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="location_preference">Location preference</label>
                  <input id="location_preference" name="location_preference" className="w-full rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none" placeholder="e.g., Chennai / Bangalore / Remote" />
                </div>
              </div>
            </div>
          )}
        </Section>

        {/* Section: Feedback focus */}
        <Section icon={GraduationCap} title="Feedback focus" subtitle="What is this feedback about?">
          <div className="flex flex-wrap gap-2">
            {TARGETS.map((t) => (
              <RadioPill key={t.key} name="target" value={t.key} label={t.label} checked={target === t.key} onChange={(e) => setTarget(e.target.value)} />
            ))}
          </div>

          {/* Conditional fields */}
          {target === "program" && (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="program_name">Program / Course name<span className="text-red-600"> *</span></label>
                <input id="program_name" name="program_name" required className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., Full Stack Development" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="cohort">Batch / Cohort</label>
                <input id="cohort" name="cohort" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., Jan 2025 Weekday" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="trainer_name">Primary trainer</label>
                <input id="trainer_name" name="trainer_name" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., Mr. Raghav" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="start_date">Start date</label>
                  <input id="start_date" name="start_date" type="date" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="end_date">End date</label>
                  <input id="end_date" name="end_date" type="date" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="delivery">Delivery</label>
                  <select id="delivery" name="delivery" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none">
                    <option>In‑person</option>
                    <option>Online live</option>
                    <option>Online recorded</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="support_ticket_id">Support ticket (if any)</label>
                  <input id="support_ticket_id" name="support_ticket_id" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="#1234" />
                </div>
              </div>
            </div>
          )}

          {target === "mentor" && (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="mentor_name">Mentor / Trainer name<span className="text-red-600"> *</span></label>
                <input id="mentor_name" name="mentor_name" required className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., Ms. Kavya" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="sessions_attended">Sessions attended</label>
                <input id="sessions_attended" name="sessions_attended" type="number" min="0" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., 24" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="one_on_one">1:1 availability</label>
                <select id="one_on_one" name="one_on_one" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none">
                  <option>Not used</option>
                  <option>Occasional</option>
                  <option>Regular</option>
                </select>
              </div>
            </div>
          )}

          {target === "placement" && (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="cohort">Batch / Cohort</label>
                <input id="cohort" name="cohort" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., Jan 2025 Weekday" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="program_name">Program</label>
                <input id="program_name" name="program_name" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., Data Science" />
              </div>
            </div>
          )}

          {target === "platform" && (
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="support_ticket_id">Support ticket ID (optional)</label>
              <input id="support_ticket_id" name="support_ticket_id" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="#1234" />
            </div>
          )}

          {target === "other" && (
            <div className="mt-4">
              <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="other_topic">Topic<span className="text-red-600"> *</span></label>
              <input id="other_topic" name="other_topic" required className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., Fee, Scheduling, Infrastructure" />
            </div>
          )}
        </Section>

        {/* Section: Ratings */}
        <Section icon={Star} title="Ratings" subtitle="Rate each aspect using the scale">
          <div className="rounded-xl border border-gray-100">
            {RATING_CATEGORIES.map((r) => (
              <LikertRow key={r.key} name={r.key} label={r.label} required />
            ))}
          </div>
          <div className="mt-5">
            <StarRating name="star_overall" label="Overall experience (1–5)" />
          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-gray-800">
              How likely are you to recommend our {target === "program" ? "program" : target === "mentor" ? "mentor support" : target === "placement" ? "placement services" : target === "platform" ? "platform" : "experience"} to a friend? (0–10)
            </label>
            <div className="flex flex-wrap items-center gap-2">
              {Array.from({ length: 11 }).map((_, i) => (
                <label key={i} className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-700 shadow-sm backdrop-blur hover:border-gray-300">
                  <input type="radio" name="nps" value={i} className="h-4 w-4 accent-[color:var(--accent)]" required style={{ ["--accent"]: ACCENT }} />
                  <span className="w-5 text-center">{i}</span>
                </label>
              ))}
            </div>
            <div className="mt-1 text-xs text-gray-500">0 = Not at all likely, 10 = Extremely likely</div>
          </div>
        </Section>

        {/* Section: Open feedback */}
        <Section icon={MessageSquare} title="Your feedback" subtitle="Detailed comments help us fix problems faster">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="went_well">What went well?<span className="text-red-600"> *</span></label>
              <textarea id="went_well" name="went_well" required rows={4} className="w-full resize-y rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none ring-[color:var(--accent-soft)] focus:ring-4" placeholder="Share positive aspects…" style={{ ["--accent-soft"]: "color-mix(in oklab, var(--accent) 20%, white)", ["--accent"]: ACCENT }} />
            </div>
            <div className="sm:col-span-1">
              <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="needs_improvement">What needs improvement?<span className="text-red-600"> *</span></label>
              <textarea id="needs_improvement" name="needs_improvement" required rows={4} className="w-full resize-y rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none ring-[color:var(--accent-soft)] focus:ring-4" placeholder="Be specific (pace, assignments, projects, communication, etc.)" style={{ ["--accent-soft"]: "color-mix(in oklab, var(--accent) 20%, white)", ["--accent"]: ACCENT }} />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="incident">Any specific incident we should know about? <span className="text-gray-500">(optional)</span></label>
              <textarea id="incident" name="incident" rows={3} className="w-full resize-y rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none ring-[color:var(--accent-soft)] focus:ring-4" placeholder="Date/time, people involved, what happened" style={{ ["--accent-soft"]: "color-mix(in oklab, var(--accent) 20%, white)", ["--accent"]: ACCENT }} />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="suggestions">Your suggestions <span className="text-gray-500">(optional)</span></label>
              <textarea id="suggestions" name="suggestions" rows={3} className="w-full resize-y rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none ring-[color:var(--accent-soft)] focus:ring-4" placeholder="What changes would improve your experience?" style={{ ["--accent-soft"]: "color-mix(in oklab, var(--accent) 20%, white)", ["--accent"]: ACCENT }} />
            </div>
            <div className="sm:col-span-2">
              <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="additional">Anything else to add? <span className="text-gray-500">(optional)</span></label>
              <textarea id="additional" name="additional" rows={3} className="w-full resize-y rounded-lg border border-gray-200 bg-white/90 px-3 py-2 text-sm outline-none ring-[color:var(--accent-soft)] focus:ring-4" placeholder="Other notes, context, or appreciation" style={{ ["--accent-soft"]: "color-mix(in oklab, var(--accent) 20%, white)", ["--accent"]: ACCENT }} />
            </div>
          </div>

          <div className="mt-4">
            <span className="mb-2 block text-sm font-medium text-gray-800">Did you face any of these issues? <span className="text-gray-500">(select all that apply)</span></span>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Outdated content",
                "Pace too fast/slow",
                "Scheduling issues",
                "Tooling / setup problems",
                "Communication gaps",
                "Insufficient placement support",
                "Interview scheduling delays",
                "Salary / CTC mismatch",
                "Other",
              ].map((issue) => (
                <label key={issue} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-700 shadow-sm backdrop-blur hover:border-gray-300">
                  <input type="checkbox" name="issues" value={issue} className="h-4 w-4 accent-[color:var(--accent)]" style={{ ["--accent"]: ACCENT }} />
                  <span>{issue}</span>
                </label>
              ))}
            </div>
          </div>
        </Section>

        {/* Section: Outcomes & Placement */}
        <Section icon={Briefcase} title="Outcomes & placement" subtitle="Tell us about your job search and results">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="placement_status">Current status</label>
              <select id="placement_status" name="placement_status" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none">
                <option>No offer yet</option>
                <option>Interviews in progress</option>
                <option>Offer received – pending</option>
                <option>Offer received – accepted</option>
                <option>Offer received – declined</option>
                <option>Joined company</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="applications_submitted">Applications submitted</label>
                <input id="applications_submitted" name="applications_submitted" type="number" min="0" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., 35" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="interviews_attended">Interviews attended</label>
                <input id="interviews_attended" name="interviews_attended" type="number" min="0" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., 6" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 sm:col-span-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="offers_received">Offers received</label>
                <input id="offers_received" name="offers_received" type="number" min="0" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., 1" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="expected_ctc_lpa">Expected CTC (LPA)</label>
                <input id="expected_ctc_lpa" name="expected_ctc_lpa" type="number" min="0" step="0.1" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., 5.0" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="offered_ctc_lpa">Offered CTC (LPA)</label>
                <input id="offered_ctc_lpa" name="offered_ctc_lpa" type="number" min="0" step="0.1" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., 4.5" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:col-span-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="company">Company</label>
                <input id="company" name="company" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="If offer/joined" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="role">Role</label>
                <input id="role" name="role" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., Jr. Software Engineer" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:col-span-2">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="city">City / Location</label>
                <input id="city" name="city" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="e.g., Chennai / Remote" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="joining_date">Joining date</label>
                <input id="joining_date" name="joining_date" type="date" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" />
              </div>
            </div>

            <div className="sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-gray-800">Placement services you used <span className="text-gray-500">(select all that apply)</span></span>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {["Resume review", "LinkedIn optimization", "Mock interviews", "Job alerts / portal access", "Referral support", "Career counselling"].map((s) => (
                  <label key={s} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white/80 px-3 py-2 text-sm text-gray-700 shadow-sm backdrop-blur hover:border-gray-300">
                    <input type="checkbox" name="services_used" value={s} className="h-4 w-4 accent-[color:var(--accent)]" style={{ ["--accent"]: ACCENT }} />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="sm:col-span-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-800" htmlFor="github">
                  <LinkIcon className="h-4 w-4 text-gray-500" /> GitHub / portfolio link
                </label>
                <input id="github" name="github" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="https://github.com/username" />
              </div>
              <div>
                <label className="mb-1 flex items-center gap-2 text-sm font-medium text-gray-800" htmlFor="project_demo">
                  <LinkIcon className="h-4 w-4 text-gray-500" /> Project demo link (optional)
                </label>
                <input id="project_demo" name="project_demo" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" placeholder="Live demo / video" />
              </div>
            </div>
          </div>
        </Section>

        {/* Section: Attachments */}
        <Section icon={Upload} title="Attachments" subtitle="Screenshots or documents (optional)">
          <div className="rounded-xl border border-dashed border-gray-300 bg-gradient-to-b from-gray-50 to-white p-4 text-center shadow-sm">
            <input id="files" name="files" type="file" multiple className="hidden" onChange={(e) => setFiles(Array.from(e.target.files || []))} />
            <label htmlFor="files" className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-gray-300">
              <Upload className="h-4 w-4" /> Choose files (resume, offer letter screenshot, etc.)
            </label>
            {files.length > 0 && (
              <ul className="mx-auto mt-3 max-w-xl text-left text-sm text-gray-700">
                {files.map((f, i) => (
                  <li key={i} className="truncate">• {f.name}</li>
                ))}
              </ul>
            )}
          </div>
        </Section>

        {/* Section: Follow-up & consent */}
        <Section icon={CheckCircle2} title="Follow-up & consent" subtitle="Tell us if we may contact you">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <label className="inline-flex cursor-pointer items-center gap-3">
              <input type="checkbox" className="h-4 w-4 accent-[color:var(--accent)]" checked={allowFollowUp} onChange={(e) => setAllowFollowUp(e.target.checked)} style={{ ["--accent"]: ACCENT }} />
              <span className="text-sm text-gray-700">I’m okay with a team member contacting me to discuss this feedback</span>
            </label>
            <label className="inline-flex cursor-pointer items-center gap-3">
              <input type="checkbox" className="h-4 w-4 accent-[color:var(--accent)]" checked={allowTestimonial} onChange={(e) => setAllowTestimonial(e.target.checked)} style={{ ["--accent"]: ACCENT }} />
              <span className="text-sm text-gray-700">You may contact me for a success story / testimonial</span>
            </label>
          </div>

          {allowFollowUp && (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="preferred_contact">Preferred contact</label>
                <select id="preferred_contact" name="preferred_contact" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none">
                  <option>Email</option>
                  <option>Phone</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="best_time">Best time to reach</label>
                <input id="best_time" name="best_time" placeholder="e.g., 5–7 pm (IST)" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="timezone">Timezone</label>
                <input id="timezone" name="timezone" placeholder="e.g., Asia/Kolkata" className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm outline-none" />
              </div>
            </div>
          )}

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="inline-flex items-start gap-3 text-sm text-gray-700">
              <input type="checkbox" name="accuracy_confirmed" className="mt-0.5 h-4 w-4 accent-[color:var(--accent)]" required style={{ ["--accent"]: ACCENT }} />
              <span>I confirm the information provided is accurate to the best of my knowledge<span className="text-red-600"> *</span></span>
            </label>
            <label className="inline-flex items-start gap-3 text-sm text-gray-700">
              <input type="checkbox" name="consent_confirmed" className="mt-0.5 h-4 w-4 accent-[color:var(--accent)]" required style={{ ["--accent"]: ACCENT }} />
              <span>I agree that this feedback may be used to improve our programs and placement services<span className="text-red-600"> *</span></span>
            </label>
            {allowTestimonial && (
              <label className="inline-flex items-start gap-3 text-sm text-gray-700 sm:col-span-2">
                <input type="checkbox" name="display_name_ok" className="mt-0.5 h-4 w-4 accent-[color:var(--accent)]" style={{ ["--accent"]: ACCENT }} />
                <span>You may display my first name, program, and company on the website (optional)</span>
              </label>
            )}
          </div>
        </Section>

        {/* Actions */}
        <div className="sticky bottom-0 z-10 -mx-4 border-t border-blue-100 bg-white/80 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-white/70 sm:rounded-xl sm:border sm:shadow-[0_10px_30px_rgba(0,91,172,0.06)]">
          <div className="flex flex-wrap items-center justify-end gap-3">
            <button type="button" onClick={resetForm} className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">Reset</button>
            <button type="button" onClick={saveDraft} className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">Save draft</button>
            <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-[color:var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow hover:opacity-95 focus:outline-none focus:ring-4 focus:ring-[color:var(--accent-soft)] disabled:cursor-not-allowed disabled:opacity-70" disabled={submitting} style={{ ["--accent"]: ACCENT, ["--accent-soft"]: "color-mix(in oklab, var(--accent) 30%, white)" }}>
              <FileText className="h-4 w-4" /> {submitting ? "Submitting…" : "Submit feedback"}
            </button>
          </div>
          {success && (
            <div className="mt-3 flex items-center gap-2 text-sm text-green-700">
              <CheckCircle2 className="h-4 w-4" /> Thank you! Your feedback has been recorded.
            </div>
          )}
        </div>
      </form>

      <footer className="mt-8 text-center text-xs text-gray-500">Need help? Email support or contact the placement team.</footer>
    </main>
  );
}
