import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <main className="p-6">
          <Outlet />
        </main>
      </div>

    </div>
  )
}

export default Layout