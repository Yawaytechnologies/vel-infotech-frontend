// src/redux/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import enquiryReducer from '../reducer/enquirySlice';
import feedbackReducer from '../reducer/feedbackSlice';
export const store = configureStore({
  reducer: {
    enquiry: enquiryReducer,
    feedback:     feedbackReducer,
  },
});
