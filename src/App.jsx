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
        <Route index element={<Dashboard />} />
        
        <Route path="/teacher/:id" element={<Teacher />} />
        <Route path="classrooms" element={<Classrooms />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}

export default App