// Async action(s) using Redux Toolkit createAsyncThunk
// ============================================================================
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postRegistration, getRegistrations  } from "../service/enquiryService"


export const submitEnquiry = createAsyncThunk(
  "enquiry/submit",
  async (payload, { rejectWithValue, signal }) => {
    try {
      const res = await postRegistration(payload, signal);
      return res;
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Request failed";
      return rejectWithValue(msg);
    }
  }
);

// NEW: GET /api/registrations
export const fetchRegistrations = createAsyncThunk(
  "enquiry/fetchRegistrations",
  async (_, { rejectWithValue, signal }) => {
    try {
      const res = await getRegistrations(signal);
      // ensure array shape if backend wraps
      return Array.isArray(res) ? res : (res?.data ?? []);
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Request failed";
      return rejectWithValue(msg);
    }
  }
);