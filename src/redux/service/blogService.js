// src/redux/services/blog.service.js

import careerImg from "../../assets/career.jpg";
import careerImg1 from "../../assets/career1.jpg";

/**
 * Dummy posts – same as your component earlier
 */
export const dummyPosts = [
  {
    id: 1,
    title: "Switching to Data Analytics: A Step-by-Step Starter Plan",
    excerpt:
      "Moving from non-tech or testing into analytics? Use this roadmap to pick tools, structure your learning, and build a portfolio that actually gets callbacks.",
    date: "JULY 31, 2025",
    iso: "2025-07-31",
    image: careerImg,
    slug: "switch-to-data-analytics-starter-plan",
  },
  {
    id: 2,
    title: "Entry-Level Data Analyst Pay in 2025: Who’s Paying the Most?",
    excerpt:
      "We break down salaries across product companies, MNCs, and startups so you know what a fair first offer looks like in 2025.",
    date: "JULY 28, 2025",
    iso: "2025-07-28",
    image: careerImg1,
    slug: "entry-level-data-analyst-salary-2025",
  },
  {
    id: 3,
    title: "Your First 90 Days in Analytics: Skills to Learn Fast",
    excerpt:
      "Day-by-day focus areas for SQL, Excel, and dashboards to survive your probation and impress your manager at the same time.",
    date: "JULY 22, 2025",
    iso: "2025-07-22",
    image: careerImg1,
    slug: "first-90-days-in-analytics",
  },
  {
    id: 4,
    title: "Portfolio Ideas for New Analysts: 6 Projects That Stand Out",
    excerpt:
      "Six project ideas using public datasets, plus how to explain your work in interviews so hiring managers actually remember you.",
    date: "JULY 18, 2025",
    iso: "2025-07-18",
    image: careerImg,
    slug: "data-analytics-portfolio-ideas",
  },
];

/**
 * BASE URL
 * from .env:
 *  VITE_API_BASE_URL=https://backend-velinfotech.onrender.com/api
 */
const rawBase =
  import.meta.env.VITE_API_BASE_URL ??
  "https://backend-velinfotech.onrender.com/api";

// normalize (remove trailing / if present)
const API_BASE = rawBase.endsWith("/") ? rawBase.slice(0, -1) : rawBase;

// 👇 adjust this path to match your backend route
// e.g. /blog/posts OR /blog OR /blogs/featured etc.
const BLOG_POSTS_ENDPOINT = `${API_BASE}/blog/posts`;

/**
 * Adapt API response → UI shape.
 * Change field names here to match your actual backend.
 */
function adaptPostsFromApi(apiPosts = []) {
  return apiPosts.map((p, index) => ({
    id: p.id ?? index + 1,
    title: p.title,
    excerpt: p.excerpt ?? p.summary ?? "",
    // you can format date on backend or frontend; for now use fallback labels
    date: p.displayDate ?? p.dateLabel ?? "JULY 31, 2025",
    iso: p.publishedAt ?? p.iso ?? "2025-07-31",
    image: p.imageUrl ?? p.image ?? careerImg,
    slug: p.slug ?? p.slugTitle ?? "",
  }));
}

/**
 * Try API → if anything fails, fallback to dummyPosts.
 */
export async function getBlogPosts() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(BLOG_POSTS_ENDPOINT, {
      method: "GET",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      throw new Error(`API error: ${res.status}`);
    }

    const data = await res.json();

    const posts = adaptPostsFromApi(data);
    if (!Array.isArray(posts) || posts.length === 0) {
      throw new Error("Empty API posts, using fallback");
    }

    return {
      posts,
      fromApi: true,
      error: null,
    };
  } catch (error) {
    console.warn("[blog.service] Falling back to dummy posts:", error?.message);
    return {
      posts: dummyPosts,
      fromApi: false,
      error: error?.message ?? "Failed to fetch posts, fallback used",
    };
  }
}
