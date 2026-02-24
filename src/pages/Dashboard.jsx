import { useState } from "react"
import StatCard from "../components/StatCard"
import WeeklyChart from "../components/WeeklyChart"
import AIPulse from "../components/AIPulse"

const dummySummary = {
  active_teachers: 52,
  lessons: 64,
  assessments: 39,
  quizzes: 50,
}

const dummyWeekly = [
  { day: "Sun", lessons: 2, quizzes: 1 },
  { day: "Mon", lessons: 5, quizzes: 3 },
  { day: "Tue", lessons: 3, quizzes: 2 },
  { day: "Wed", lessons: 6, quizzes: 4 },
  { day: "Thu", lessons: 4, quizzes: 2 },
  { day: "Fri", lessons: 7, quizzes: 5 },
]

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState("week")

  return (
    <div className="w-full bg-gray-50 p-6 lg:p-10">

      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">

        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            Admin Companion
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            See what's happening across your school
          </p>
        </div>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Ask Savra AI..."
            className="border rounded-full px-4 py-2 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

        </div>
      </div>

      {/* Time Range Tabs */}
      <div className="flex gap-3 mb-8">
        {["week", "month", "year"].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-1.5 rounded-lg text-sm transition ${
              timeRange === range
                ? "bg-purple-100 text-purple-600 font-medium"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            This {range}
          </button>
        ))}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        <StatCard
          title="Active Teachers"
          value={dummySummary.active_teachers}
          accent="bg-purple-500"
          growth="+4%"
        />

        <StatCard
          title="Lessons Created"
          value={dummySummary.lessons}
          accent="bg-green-500"
          growth="+8%"
        />

        <StatCard
          title="Assessments Made"
          value={dummySummary.assessments}
          accent="bg-yellow-500"
          growth="+5%"
        />

        <StatCard
          title="Quizzes Conducted"
          value={dummySummary.quizzes}
          accent="bg-pink-500"
          growth="+6%"
        />

      </div>

      {/* Chart + AI Pulse */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
          <WeeklyChart data={dummyWeekly} />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <AIPulse summary={dummySummary} />
        </div>

      </div>

    </div>
  )
}

export default Dashboard