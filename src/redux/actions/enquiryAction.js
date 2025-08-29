// Async action(s) using Redux Toolkit createAsyncThunk
// ============================================================================
import { createAsyncThunk } from "@reduxjs/toolkit";
import { postEnquiry } from "../service/enquiryService"


export const submitEnquiry = createAsyncThunk(
"enquiry/submit",
/**
* @param {import("./enquiryService").EnquiryPayload} payload
*/
async (payload, { rejectWithValue, signal }) => {
try {
const res = await postEnquiry(payload, signal);
return res;
} catch (err) {
const message = err?.response?.data?.message || err?.message || "Request failed";
return rejectWithValue(message);
}
}
);