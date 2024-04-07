import { Outlet } from "react-router"
import Sidebar from "./nav/Sidebar"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"

const Layout = () => {

  const { themeValue, themeColor } = useContext(ThemeContext)

  return (
    <div className="theme-green theme-blue theme-light theme-dark">
      {/* initialize all themes and colors for later use (do this becasue otherwise they will be excluded from the tailwind classes on build)*/}
      <div
        className={`bg-skin-contentbg theme-${themeColor} theme-${themeValue}`}
      >
        {/* website content */}
        <div className="flex text-skin-base h-screen overflow-hidden z-10">
          <div className="fixed top-0 left-0 h-screen w-full pt-1 pl-3 bg-skin-sidebarbg text-skin-base text-sm font-extrabold">
            <div className="flex">
              <div
                className="mr-20 text"
              >
                {"CV - Platform"}
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <Sidebar />
          </div>

          <div className="relative w-[calc(100%-320px)] mt-7">
            <Outlet />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Layout
