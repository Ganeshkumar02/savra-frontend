import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts"

const WeeklyChart = ({ data }) => {
  return (
    <div className="w-full">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Weekly Activity
        </h2>
        <p className="text-sm text-gray-400">
          Lessons vs Quizzes comparison
        </p>
      </div>

      {/* Chart */}
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid stroke="#f3f4f6" strokeDasharray="4 4" />

            <XAxis
              dataKey="day"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
              }}
            />

            <Legend
              wrapperStyle={{
                fontSize: "12px",
                paddingTop: "10px"
              }}
            />

            <Line
              type="monotone"
              dataKey="lessons"
              name="Lessons"
              stroke="#7c3aed"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

            <Line
              type="monotone"
              dataKey="quizzes"
              name="Quizzes"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}

export default WeeklyChart