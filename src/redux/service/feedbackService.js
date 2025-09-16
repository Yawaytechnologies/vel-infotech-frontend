// src/redux/services/feedbackService.js

const BASE_URL =import.meta.env.VITE_API_BASE_URL;

const JSON_HEADERS = {
  "Content-Type": "application/json",
};

function normalizeForApi(data) {
  // data can be coming from your component (already normalized)
  // or raw form. This ensures API shape exactly as the backend expects.
  const recommendBool =
    typeof data.recommend === "boolean"
      ? data.recommend
      : (data.wouldRecommend || "").toString().toLowerCase() === "yes";

  return {
    name: data.name || "",
    email: data.email || "",
    courseTitle: data.courseTitle,
    trainerName: data.trainerName,
    courseRating: Number(data.courseRating),
    trainerRating: Number(data.trainerRating),
    recommend: recommendBool,
    comments: data.comments || "",
    submittedAt: data.submittedAt || new Date().toISOString(),
  };
}

export async function postFeedback(payload, { signal } = {}) {
  const body = normalizeForApi(payload);

  const res = await fetch(`${BASE_URL}/feedbacks`, {
    method: "POST",
    headers: JSON_HEADERS,
    body: JSON.stringify(body),
    signal,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Failed to submit feedback (${res.status})${
        text ? `: ${text.slice(0, 300)}` : ""
      }`
    );
  }
  return res.json();
}

// Optional: fetch list (for admin page, etc.)
export async function getFeedbacks({ signal } = {}) {
  const res = await fetch(`${BASE_URL}/api/feedbacks`, { signal });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Failed to load feedbacks (${res.status})${
        text ? `: ${text.slice(0, 300)}` : ""
      }`
    );
  }
  return res.json();
}
