// 🔹 Base URL (Fallback added for safety)
const BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

// 🔹 Common fetch function (Reusable)
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error.message);
    throw error;
  }
};

// 🔹 Summary API
export const getSummary = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const endpoint = `/api/analytics/summary${
    query ? `?${query}` : ""
  }`;

  return fetchData(endpoint);
};

// 🔹 Weekly API
export const getWeekly = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const endpoint = `/api/analytics/weekly${
    query ? `?${query}` : ""
  }`;

  return fetchData(endpoint);
};

// 🔹 Single Teacher API
export const getTeacherAnalytics = async (id) => {
  return fetchData(`/api/analytics/teacher/${id}`);
};