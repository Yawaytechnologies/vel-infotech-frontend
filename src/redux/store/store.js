// src/redux/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import enquiryReducer from '../reducer/enquirySlice';

export const store = configureStore({
  reducer: {
    enquiry: enquiryReducer,
  },
});
