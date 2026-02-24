import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import {
  Menu,
  X,
  LayoutDashboard,
  Users,
  School,
  BarChart3
} from "lucide-react"

const Sidebar = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const menu = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Teachers", path: "/teachers/T001", icon: Users },
    { name: "Classrooms", path: "/classrooms", icon: School },
    { name: "Reports", path: "/reports", icon: BarChart3 }
  ]

  const isActiveRoute = (path) => {
    if (path === "/") return location.pathname === "/"
    return location.pathname.startsWith(path.split("/")[1])
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white shadow-sm fixed w-full z-40">
        <h2 className="text-xl font-semibold text-purple-600">
          SAVRA
        </h2>
        <button onClick={() => setOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-purple-100 
        border-r border-purple-200 p-6 flex flex-col 
        transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* Logo */}
        <h2 className="text-2xl font-bold text-purple-600 mb-12">
          SAVRA
        </h2>

        {/* Menu */}
        <ul className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon
            const isActive = isActiveRoute(item.path)

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-white text-purple-600 shadow"
                      : "text-gray-600 hover:bg-white hover:text-purple-600"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Bottom User Card */}
        <div className="mt-auto pt-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm text-center">
            <div className="w-10 h-10 mx-auto rounded-full bg-yellow-400 flex items-center justify-center text-sm font-bold mb-2">
              SR
            </div>
            <p className="text-xs text-gray-400">School Admin</p>
            <p className="font-semibold text-gray-700">
              Shauryaman Ray
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar