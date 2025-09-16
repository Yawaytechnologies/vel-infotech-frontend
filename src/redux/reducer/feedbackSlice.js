// src/redux/reducer/feedbackSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { submitFeedback, fetchFeedbacks } from "../actions/feedbackAction";

const initialState = {
  submitting: false,
  submitted: false,
  loading: false,
  error: null,
  items: [],
  lastCreated: null,
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    resetSubmitState(state) {
      state.submitting = false;
      state.submitted = false;
      state.error = null;
      state.lastCreated = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // submit
      .addCase(submitFeedback.pending, (state) => {
        state.submitting = true;
        state.submitted = false;
        state.error = null;
      })
      .addCase(submitFeedback.fulfilled, (state, action) => {
        state.submitting = false;
        state.submitted = true;
        state.lastCreated = action.payload || null;
        if (action.payload) state.items.unshift(action.payload);
      })
      .addCase(submitFeedback.rejected, (state, action) => {
        state.submitting = false;
        state.submitted = false;
        state.error = action.payload || "Submit failed";
      });

    builder
      // fetch list
      .addCase(fetchFeedbacks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFeedbacks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchFeedbacks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Load failed";
      });
  },
});

export const { resetSubmitState } = feedbackSlice.actions;
export default feedbackSlice.reducer;
