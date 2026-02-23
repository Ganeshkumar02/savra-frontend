const StatCard = ({ title, value, color }) => (
  <div
    className={`
      w-full
      ${color}
      rounded-2xl
      p-4 sm:p-5 lg:p-6
      shadow-sm
      transition-all duration-300
      hover:shadow-md hover:-translate-y-1
    `}
  >
    <p className="text-xs sm:text-sm text-gray-500">
      {title}
    </p>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl 
                   font-semibold 
                   mt-2 text-gray-900">
      {value}
    </h2>

    <p className="text-xs sm:text-sm text-gray-400 mt-1">
      This week
    </p>
  </div>
)

export default StatCard