import { useEffect, useState } from "react"
import StatCard from "../components/StatCard"
import WeeklyChart from "../components/WeeklyChart"
import AIPulse from "../components/AIPulse"
import { getSummary, getWeekly } from "../services/api"

const dayMap = {
  1: "Sun",
  2: "Mon",
  3: "Tue",
  4: "Wed",
  5: "Thu",
  6: "Fri",
  7: "Sat"
}

const Dashboard = () => {
  const [summary, setSummary] = useState(null)
  const [weeklyData, setWeeklyData] = useState([])

  const [selectedGrade, setSelectedGrade] = useState("")
  const [selectedSubject, setSelectedSubject] = useState("")
  const [timeRange, setTimeRange] = useState("week")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const summaryData = await getSummary({
          grade: selectedGrade,
          subject: selectedSubject,
          range: timeRange
        })

        setSummary(summaryData)

        const weeklyRaw = await getWeekly({
          grade: selectedGrade,
          subject: selectedSubject,
          range: timeRange
        })

        const formatted = {}

        weeklyRaw.forEach(item => {
          const day = item?._id?.day
          const type = item?._id?.type

          if (!day || !type) return

          if (!formatted[day]) {
            formatted[day] = {
              day: dayMap[day],
              lessons: 0,
              quizzes: 0
            }
          }

          if (type.toLowerCase().includes("lesson"))
            formatted[day].lessons = item.count

          if (type.toLowerCase().includes("quiz"))
            formatted[day].quizzes = item.count
        })

        const ordered = Object.keys(formatted)
          .sort((a, b) => a - b)
          .map(key => formatted[key])

        setWeeklyData(ordered)

      } catch (err) {
        console.error("Dashboard error:", err)
      }
    }

    fetchData()
  }, [selectedGrade, selectedSubject, timeRange])

  if (!summary) {
    return <div className="p-6 text-gray-500">Loading dashboard...</div>
  }

  return (
    <div className="w-full bg-gray-50 
                    p-4 sm:p-6 lg:p-10">

      {/* 🔹 Header */}
      <div className="flex flex-col lg:flex-row 
                      justify-between 
                      gap-6 mb-8">

        <div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Admin Companion
          </h1>
          <p className="text-gray-400 text-sm">
            See What's Happening Across your School
          </p>
        </div>

        <div className="flex flex-col sm:flex-row 
                        gap-3 w-full lg:w-auto">

          <input
            type="text"
            placeholder="Ask Savra AI"
            className="border rounded-full 
                       px-4 py-2 
                       w-full sm:w-64 
                       text-sm"
          />

          <select
            className="bg-purple-500 text-white 
                       px-4 py-2 rounded-lg 
                       text-sm w-full sm:w-auto"
            onChange={(e) => setSelectedGrade(e.target.value)}
          >
            <option value="">Grade 7</option>
            <option value="8">Grade 8</option>
            <option value="9">Grade 9</option>
          </select>

          <select
            className="border px-4 py-2 
                       rounded-lg text-sm 
                       w-full sm:w-auto"
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="">All Subjects</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
          </select>

        </div>
      </div>

      {/* 🔹 Time Range */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["week", "month", "year"].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-1 rounded-lg text-sm transition ${
              timeRange === range
                ? "bg-gray-200 font-medium"
                : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            This {range}
          </button>
        ))}
      </div>

      {/* 🔹 Stat Cards */}
      <div className="grid grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-4 
                      gap-4 sm:gap-6 mb-8">

        <StatCard
          title="Active Teachers"
          value={summary.active_teachers}
          color="bg-purple-100"
        />
        <StatCard
          title="Lessons Created"
          value={summary.lessons}
          color="bg-green-100"
        />
        <StatCard
          title="Assessments Made"
          value={summary.assessments}
          color="bg-yellow-100"
        />
        <StatCard
          title="Quizzes Conducted"
          value={summary.quizzes}
          color="bg-pink-100"
        />
      </div>

      {/* 🔹 Chart + AI Pulse */}
      <div className="grid grid-cols-1 
                      lg:grid-cols-3 
                      gap-6 lg:gap-8">

        <div className="lg:col-span-2">
          <WeeklyChart data={weeklyData} />
        </div>

        <AIPulse summary={summary} />

      </div>

    </div>
  )
}

export default Dashboard