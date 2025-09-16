// src/redux/actions/feedbackActions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postFeedback, getFeedbacks } from "../service/feedbackService";

export const submitFeedback = createAsyncThunk(
  "feedback/submitFeedback",
  async (payload, { signal, rejectWithValue }) => {
    try {
      const data = await postFeedback(payload, { signal });
      return data; // whatever your API returns (saved object, message, etc.)
    } catch (err) {
      return rejectWithValue(err.message || "Submit failed");
    }
  }
);

// Optional: list feedbacks (admin)
export const fetchFeedbacks = createAsyncThunk(
  "feedback/fetchFeedbacks",
  async (_, { signal, rejectWithValue }) => {
    try {
      const data = await getFeedbacks({ signal });
      return data; // array
    } catch (err) {
      return rejectWithValue(err.message || "Load failed");
    }
  }
);
