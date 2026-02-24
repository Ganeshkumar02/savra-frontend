const StatCard = ({
  title,
  value,
  accent = "bg-purple-500",
  growth = "+12%"
}) => {
  return (
    <div
      className="
        relative
        bg-white
        rounded-2xl
        p-6
        shadow-sm
        transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
      "
    >
      {/* Accent Bar */}
      <div
        className={`absolute top-0 left-0 h-full w-1 rounded-l-2xl ${accent}`}
      />

      {/* Content */}
      <div className="ml-3">

        <p className="text-sm text-gray-500">
          {title}
        </p>

        <h2 className="text-3xl font-semibold mt-2 text-gray-900">
          {value}
        </h2>

        <p className="text-xs text-green-500 mt-2 font-medium">
          {growth} from last week
        </p>

      </div>
    </div>
  )
}

export default StatCard