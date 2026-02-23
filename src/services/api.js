const BASE_URL = import.meta.env.VITE_API_URL

// 🔹 Summary API (Supports filters)
export const getSummary = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString()

  const response = await fetch(
    `${BASE_URL}/api/analytics/summary${query ? `?${query}` : ""}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch summary data")
  }

  return response.json()
}


// 🔹 Weekly API (Supports filters)
export const getWeekly = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString()

  const response = await fetch(
    `${BASE_URL}/api/analytics/weekly${query ? `?${query}` : ""}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch weekly data")
  }

  return response.json()
}


// 🔹 Single Teacher API
export const getTeacherAnalytics = async (id) => {
  const response = await fetch(
    `${BASE_URL}/api/analytics/teacher/${id}`
  )

  if (!response.ok) {
    throw new Error("Failed to fetch teacher data")
  }

  return response.json()
}