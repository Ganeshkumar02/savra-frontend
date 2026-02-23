import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <Sidebar />

      <main className="lg:ml-64 pt-16 lg:pt-0 
                       min-h-screen 
                       overflow-x-hidden">
        <Outlet />
      </main>

    </div>
  )
}

export default Layout