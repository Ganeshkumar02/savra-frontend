const AIPulse = ({ summary }) => {
  const { lessons, quizzes, active_teachers, assessments } = summary

  let insight = ""
  let toneClass = "bg-purple-50 text-purple-700"

  if (lessons > quizzes) {
    insight = "Lesson creation is currently leading. Consider encouraging more quiz-based assessments to balance engagement."
  } else if (quizzes > lessons) {
    insight = "Quiz engagement is stronger this week. Students appear actively participating in evaluations."
    toneClass = "bg-green-50 text-green-700"
  } else {
    insight = "Lesson and quiz activity are evenly balanced this week."
    toneClass = "bg-blue-50 text-blue-700"
  }

  return (
    <div className="w-full">

      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          AI Pulse Summary
        </h2>
        <p className="text-sm text-gray-400">
          Automated weekly insights
        </p>
      </div>

      <div className="space-y-5">

        {/* Insight Card */}
        <div className={`p-5 rounded-2xl text-sm leading-relaxed ${toneClass}`}>
          {insight}
        </div>

        {/* Metrics Cards */}
        <div className="space-y-4">

          <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Total Active Teachers
            </span>
            <span className="text-lg font-semibold text-gray-900">
              {active_teachers}
            </span>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Total Assessments
            </span>
            <span className="text-lg font-semibold text-gray-900">
              {assessments}
            </span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AIPulse