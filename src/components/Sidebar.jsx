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
    { name: "Teacher", path: "/teacher/T001", icon: Users },
    { name: "Classrooms", path: "/classrooms", icon: School },
    { name: "Reports", path: "/reports", icon: BarChart3 }
  ]

  return (
    <>
      {/* Mobile Top Bar */}
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
        className={`fixed top-0 left-0 h-screen w-64 bg-purple-50 
        border-r border-gray-100 p-6 flex flex-col 
        transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* Close button mobile */}
        <div className="flex justify-between items-center lg:hidden mb-6">
          <h2 className="text-xl font-semibold text-purple-600">
            SAVRA
          </h2>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Logo Desktop */}
        <h2 className="hidden lg:block text-2xl font-semibold text-purple-600 mb-10">
          SAVRA
        </h2>

        {/* Menu */}
        <ul className="space-y-3">
          {menu.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path

            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-white text-purple-600 shadow-sm"
                      : "text-gray-500 hover:text-purple-600 hover:bg-white"
                  }`}
                >
                  <Icon size={18} />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Bottom Admin Card */}
        <div className="mt-auto">
          <div className="bg-white p-4 rounded-xl shadow-sm text-center">
            <p className="text-xs text-gray-400">School Admin</p>
            <p className="font-semibold">Shauryaman Ray</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar