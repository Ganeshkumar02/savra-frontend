import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Teachers = () => {
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/analytics/teachers`)
      .then(res => res.json())
      .then(data => setTeachers(data))
  }, [])

  return (
    <div className="p-10 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-8">
        Teachers
      </h1>

      <div className="grid grid-cols-3 gap-6">
        {teachers.map(t => (
          <Link
            key={t.Teacher_id}
            to={`/teacher/${t.Teacher_id}`}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold">
              {t.Teacher_name}
            </h2>
            <p className="text-sm text-gray-400">
              Grade {t.Grade}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Teachers