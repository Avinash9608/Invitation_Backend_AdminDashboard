// const API_URL = "http://localhost:5000/api/invitations";

// export const fetchInvitations = async () => {
//   const response = await fetch(
//     "http://localhost:5000/save-invitation/save-invitations"
//   );
//   const data = await response.json();
//   return data;
// };

// export const createInvitation = async (invitation) => {
//   const response = await fetch(
//     "http://localhost:5000/save-invitation/save-invitations",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(invitation),
//     }
//   );
//   return response;
// };

import axios from "axios";
const dotenv = require("dotenv");
dotenv.config();
// Base URL from environment variables or fallback to localhost
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Axios instance for all requests
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// User Authentication APIs
export const loginUser = async (email, password) => {
  return apiClient.post("/api/users/login", { email, password });
};

export const registerUser = async (name, email, password) => {
  return apiClient.post("/api/users/register", { name, email, password });
};

export const sendResetLink = async (email) => {
  return apiClient.post("/api/users/forgot-password", { email });
};

export const resetPassword = async (email, otp, newPassword) => {
  return apiClient.post("/api/users/reset-password", {
    email,
    otp,
    newPassword,
  });
};

// Invitation APIs
export const fetchInvitations = async () => {
  const response = await apiClient.get("/save-invitation/save-invitations");
  return response.data; // Assuming the server responds with the invitation data
};

export const createInvitation = async (invitation) => {
  const response = await apiClient.post(
    "/save-invitation/save-invitations",
    invitation
  );
  return response.data; // Assuming the server responds with the created invitation
};

export const fetchUserStats = async () => {
  try {
    const response = await apiClient.get("/api/users/stats");
    return response.data;
  } catch (error) {
    console.error("Error fetching user stats:", error);
    throw error;
  }
};

export const getActiveUsers = async () => {
  return await fetchData("/api/users/active-users");
};

export const fetchInvitationStats = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/invitations-stats`);
    const { totalInvitations, invitationStats } = response.data;
    return { totalInvitations, invitationStats };
  } catch (error) {
    console.log("Error fetching invitation stats:", error);
    throw error; // Re-throw the error for handling in the calling component
  }
};

export const fetchSubscriptions=async()=>{
  try{
    const response = await apiClient.get("/api/users/subscription");
    return response.data;
  }catch(error){
    console.error("Error fetching subscription data:", error);
    throw error;
  }
};