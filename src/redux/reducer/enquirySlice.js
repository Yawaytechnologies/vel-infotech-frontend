// Reducer slice to track submission status and last result
// ============================================================================
import { createSlice } from "@reduxjs/toolkit";
import { submitEnquiry, fetchRegistrations } from "../actions/enquiryAction";

const initialState = {
  // ---- submit (UNCHANGED) ----
  status: "idle",          // idle | loading | succeeded | failed  (used by your form)
  error: null,
  last: null,

  // ---- list (NEW for GET) ----
  list: {
    items: [],
    status: "idle",        // idle | loading | succeeded | failed
    error: null,
  },
};

const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    // keeps your existing behavior
    resetEnquiryState: () => initialState,
    clearEnquiryError: (state) => {
      state.error = null;
    },

    // optional helper to clear the table state
    clearRegistrations(state) {
      state.list.items = [];
      state.list.status = "idle";
      state.list.error = null;
    },
  },
  extraReducers: (builder) => {
    // ---- submit (UNCHANGED) ----
    builder
      .addCase(submitEnquiry.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(submitEnquiry.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.last = action.payload;
      })
      .addCase(submitEnquiry.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Something went wrong";
      });

    // ---- registrations list (NEW) ----
    builder
      .addCase(fetchRegistrations.pending, (state) => {
        state.list.status = "loading";
        state.list.error = null;
      })
      .addCase(fetchRegistrations.fulfilled, (state, action) => {
        state.list.status = "succeeded";
        state.list.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchRegistrations.rejected, (state, action) => {
        state.list.status = "failed";
        state.list.error = action.payload || "Failed to fetch registrations";
      });
  },
});

export const {
  resetEnquiryState,
  clearEnquiryError,
  clearRegistrations, // optional
} = enquirySlice.actions;

export default enquirySlice.reducer;

// --- selectors (handy) ---
export const selectEnquiryStatus = (s) => s.enquiry.status;
export const selectEnquiryError  = (s) => s.enquiry.error;

export const selectRegistrations = (s) => s.enquiry.list.items;
export const selectRegStatus     = (s) => s.enquiry.list.status;
export const selectRegError      = (s) => s.enquiry.list.error;
