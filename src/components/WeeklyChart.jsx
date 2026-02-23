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

const WeeklyChart = ({ data }) => (
  <div
    className="
      w-full
      bg-white
      rounded-2xl
      shadow-sm
      p-4 sm:p-6 lg:p-8
      transition-all duration-300
      hover:shadow-md
    "
  >
    {/* Header */}
    <h2 className="text-base sm:text-lg lg:text-xl 
                   font-semibold text-gray-700 mb-1">
      Weekly Activity
    </h2>

    <p className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-6">
      Content creation trends
    </p>

    {/* Responsive Chart Height */}
    <div className="w-full h-[220px] sm:h-[280px] lg:h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis 
            dataKey="day"
            tick={{ fontSize: 12 }}
          />

          <YAxis 
            tick={{ fontSize: 12 }}
          />

          <Tooltip />

          <Legend wrapperStyle={{ fontSize: "12px" }} />

          <Line
            type="monotone"
            dataKey="lessons"
            stroke="#34d399"
            strokeWidth={3}
            dot={{ r: 3 }}
          />

          <Line
            type="monotone"
            dataKey="quizzes"
            stroke="#f87171"
            strokeWidth={3}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
)

export default WeeklyChart