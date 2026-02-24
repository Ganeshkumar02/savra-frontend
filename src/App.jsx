import { Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import Dashboard from "./pages/Dashboard"
import Teacher from "./pages/Teacher"
import Classrooms from "./pages/Classrooms"
import Reports from "./pages/Reports"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* Teacher Analysis */}
        <Route path="teachers/:id" element={<Teacher />} />

        {/* Other Pages */}
        <Route path="classrooms" element={<Classrooms />} />
        <Route path="reports" element={<Reports />} />

      </Route>
    </Routes>
  )
}

export default App