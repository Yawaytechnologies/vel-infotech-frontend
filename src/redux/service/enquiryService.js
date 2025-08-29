// API layer (axios). Swap BASE_URL once your Docker backend link is ready.
// Includes a local MOCK mode you can toggle until the real API is live.
// ============================================================================
import axios from "axios";


const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
const API_PREFIX = "/api"; // e.g., Spring: "/api" or "/v1"
const RESOURCE = "/enquiries"; // match your backend route (e.g., /api/enquiries)


// Toggle this to true to simulate success without calling any server
export const ENQUIRY_USE_MOCK = (import.meta.env.VITE_ENQUIRY_USE_MOCK === "true") || false;


const client = axios.create({
baseURL: `${BASE_URL}${API_PREFIX}`,
timeout: 10000,
headers: {
"Content-Type": "application/json",
},
});


/**
* @typedef {Object} EnquiryPayload
* @property {string} name
* @property {string} email
* @property {string} phone
* @property {string} batch // "Morning Batch" | "Evening Batch" | "Weekend"
* @property {string} course
* @property {string} message
*/


/**
* POST /api/enquiries
* @param {EnquiryPayload} payload
* @param {AbortSignal} [signal]
*/
export async function postEnquiry(payload, signal) {
if (ENQUIRY_USE_MOCK) {
// simulate network delay + echo back a fake id
return new Promise((resolve) => {
setTimeout(() => {
resolve({
id: Math.floor(Math.random() * 1_000_000),
...payload,
createdAt: new Date().toISOString(),
source: "MOCK",
});
}, 800);
});
}


const { data } = await client.post(RESOURCE, payload, { signal });
return data; // expect backend to return created object or {success:true}
}

