// src/redux/reducers/blogReducer.js
import {
  BLOG_FETCH_REQUEST,
  BLOG_FETCH_SUCCESS,
  BLOG_FETCH_FAILURE,
} from "../actions/blogAction";
import { dummyPosts } from "../service/blogService";

const initialState = {
  items: dummyPosts,    // start with dummy
  status: "idle",       // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  fromApi: false,
};

export default function blogReducer(state = initialState, action) {
  switch (action.type) {
    case BLOG_FETCH_REQUEST:
      return {
        ...state,
        status: "loading",
        error: null,
      };

    case BLOG_FETCH_SUCCESS:
      return {
        ...state,
        status: "succeeded",
        items: action.payload.items,
        fromApi: action.payload.fromApi,
        error: action.payload.error ?? null,
      };

    case BLOG_FETCH_FAILURE:
      return {
        ...state,
        status: "failed",
        error: action.error || "Failed to load posts",
      };

    default:
      return state;
  }
}
