// src/redux/actions/blogActions.js
import { getBlogPosts, dummyPosts } from "../service/blogService";

// Action types
export const BLOG_FETCH_REQUEST = "BLOG_FETCH_REQUEST";
export const BLOG_FETCH_SUCCESS = "BLOG_FETCH_SUCCESS";
export const BLOG_FETCH_FAILURE = "BLOG_FETCH_FAILURE";

// Sync actions
export const blogFetchRequest = () => ({
  type: BLOG_FETCH_REQUEST,
});

export const blogFetchSuccess = (payload) => ({
  type: BLOG_FETCH_SUCCESS,
  payload, // { items, fromApi, error }
});

export const blogFetchFailure = (error) => ({
  type: BLOG_FETCH_FAILURE,
  error,
});

// Thunk action (API → fallback)
export const fetchBlogPosts = () => {
  return async (dispatch) => {
    dispatch(blogFetchRequest());

    try {
      const result = await getBlogPosts(); // service handles API + fallback

      dispatch(
        blogFetchSuccess({
          items: result.posts ?? dummyPosts,
          fromApi: result.fromApi,
          error: result.error ?? null,
        })
      );
    } catch (err) {
      console.error("[fetchBlogPosts] error:", err);

      dispatch(
        blogFetchFailure(
          err?.message || "Failed to fetch posts, using fallback"
        )
      );

      // optional: ensure we still have something in UI
      dispatch(
        blogFetchSuccess({
          items: dummyPosts,
          fromApi: false,
          error: err?.message || "API failed, showing fallback posts",
        })
      );
    }
  };
};
