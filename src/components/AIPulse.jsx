const AIPulse = ({ summary }) => {
  let insight = ""

  if (summary.lessons > summary.quizzes) {
    insight = "Lesson creation is higher than quiz activity this week."
  } else {
    insight = "Quiz engagement is stronger this week."
  }

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm 
                    p-4 sm:p-6 lg:p-8 
                    transition-all duration-300 
                    hover:shadow-md">

      {/* Header */}
      <h2 className="text-base sm:text-lg lg:text-xl 
                     font-semibold text-gray-700 
                     mb-4 sm:mb-6">
        AI Pulse Summary
      </h2>

      {/* Content */}
      <div className="flex flex-col gap-4">

        {/* Insight Card */}
        <div className="bg-purple-50 
                        p-4 sm:p-5 
                        rounded-xl 
                        text-sm sm:text-base 
                        text-gray-700 
                        leading-relaxed">
          {insight}
        </div>

        {/* Active Teachers Card */}
        <div className="bg-green-50 
                        p-4 sm:p-5 
                        rounded-xl 
                        text-sm sm:text-base 
                        text-gray-700 
                        flex flex-col sm:flex-row 
                        sm:items-center 
                        sm:justify-between 
                        gap-2">

          <span>Total active teachers</span>

          <span className="text-lg sm:text-xl font-semibold text-gray-900">
            {summary.active_teachers}
          </span>

        </div>

      </div>
    </div>
  )
}

export default AIPulse