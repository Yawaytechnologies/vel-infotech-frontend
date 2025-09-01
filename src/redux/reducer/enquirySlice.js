// Reducer slice to track submission status and last result
// ============================================================================
import { createSlice } from "@reduxjs/toolkit";
import { submitEnquiry } from "../actions/enquiryAction";


const initialState = {
status: "idle", // idle | loading | succeeded | failed
error: null,
last: null, // stores last successful payload/response
};


const enquirySlice = createSlice({
name: "enquiry",
initialState,
reducers: {
resetEnquiryState: () => initialState,
clearEnquiryError: (state) => { state.error = null; },
},
extraReducers: (builder) => {
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
},
});


export const { resetEnquiryState, clearEnquiryError } = enquirySlice.actions;
export default enquirySlice.reducer;