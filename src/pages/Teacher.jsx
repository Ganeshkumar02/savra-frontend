import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

const Teacher = () => {
  const { id } = useParams()

  const [data, setData] = useState(null)
  const [selectedGrade, setSelectedGrade] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [timeRange, setTimeRange] = useState("week")

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/api/analytics/teacher/${id}?grade=${selectedGrade}&subject=${selectedSubject}&range=${timeRange}`
    )
      .then(res => res.json())
      .then(result => setData(result))
  }, [id, selectedGrade, selectedSubject, timeRange])

  if (!data) return <div className="p-6">Loading...</div>

  const chartData = Object.keys(data.classBreakdown || {}).map(key => ({
    grade: `Class ${key}`,
    count: data.classBreakdown[key]
  }))

  const totalActivity =
    (data.lessons || 0) +
    (data.quizzes || 0) +
    (data.assessments || 0)

  const lowEngagement = totalActivity < 3

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 lg:p-10 bg-gray-50">

      {/* Header + Filters */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mb-8">

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">
            {data.teacher_name}
          </h1>
          <p className="text-gray-400 text-sm">
            Performance Overview
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

          <input
            type="text"
            placeholder="Ask Savra AI"
            className="border rounded-full px-4 py-2 w-full sm:w-64 text-sm"
          />

          <select
            value={selectedGrade}
            onChange={(e) => setSelectedGrade(e.target.value)}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg w-full sm:w-auto"
          >
            <option value="">All Grades</option>
            {data.grades?.map((g, i) => (
              <option key={i} value={g}>
                Class {g}
              </option>
            ))}
          </select>

          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="border px-4 py-2 rounded-lg w-full sm:w-auto"
          >
            <option value="">All Subjects</option>
            {data.subjects?.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>

        </div>
      </div>

      {/* Time Range */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["week", "month", "year"].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-1 rounded-lg text-sm ${
              timeRange === range
                ? "bg-gray-200 font-medium"
                : "text-gray-500"
            }`}
          >
            This {range}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card title="Lessons Created" value={data.lessons || 0} color="bg-purple-100" />
        <Card title="Quizzes Conducted" value={data.quizzes || 0} color="bg-green-100" />
        <Card title="Assessments Assigned" value={data.assessments || 0} color="bg-yellow-100" />
        <Card
          title="Low Engagement Note"
          value={lowEngagement ? "Review Needed" : "Healthy"}
          color={lowEngagement ? "bg-red-100" : "bg-green-100"}
        />
      </div>

      {/* Chart + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold mb-4">
            Class-wise Breakdown
          </h2>

          <div className="w-full h-[250px] sm:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="grade" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#7c3aed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm">
          <h2 className="font-semibold mb-4">
            Recent Activity
          </h2>

          <div className="space-y-3 text-sm">
            {data.recent?.length === 0 ? (
              <div className="text-gray-400">
                No Recent Activity
              </div>
            ) : (
              data.recent?.map((item, index) => (
                <div
                  key={index}
                  className="bg-purple-50 p-3 rounded-lg"
                >
                  {item.Activity_type} - Class {item.Grade}
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

const Card = ({ title, value, color }) => (
  <div className={`${color} p-5 sm:p-6 rounded-2xl shadow-sm`}>
    <h3 className="text-gray-600 text-sm">{title}</h3>
    <p className="text-xl sm:text-2xl font-semibold mt-2">{value}</p>
  </div>
)

export default Teacher