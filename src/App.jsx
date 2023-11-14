// import hooks
import { useState } from "react"
// component imports
import Sidebar from "./components/Sidebar"
import SecondarySidebar from "./components/SecondarySidebar"
// page/content imports
import Home from "./home/Home"
import About from "./about/About"
import Experience from "./experience/Experience"
import Projects from "./projects/Projects"
import Settings from "./settings/Settings"
import AddContent from "./lib/admin/AddContent"

// auth modals TODO: finish Auth

// import SignIn from "./auth/SignIn"
// import Login from "./auth/Login"
// import Signup from "./auth/SignUp"
import { AuthProvider } from "./contexts/AuthContext"
// import { AuthDetails } from "./auth/AuthDetails"

function App() {
  const [color, setColor] = useState("green")
  const [mode, setMode] = useState("dark")
  // const [show_auth_section, setAuthSection] = useState("signup")
  const [selected_section, setSelectedSection] = useState("Home")

  function setNewMode(current_mode) {
    if (current_mode === "light") {
      setMode("dark")
    } else {
      setMode("light")
    }
  }

  function setNewColor(current_color) {
    if (current_color === "green") {
      setColor("red")
    } else if (current_color === "red") {
      setColor("blue")
    } else {
      setColor("green")
    }
  }

  return (
    <AuthProvider>
      <div className="theme-red theme-green theme-blue theme-light theme-dark">
        {" "}
        {/* initialize all themes and colors for later use (do this becasue otherwise they will be excluded from the tailwind classes on build)*/}
        <div
          className={[
            "bg-skin-contentbg",
            `theme-${color}`,
            `theme-${mode}`,
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {/* signup / login modals */}
          {/* <div id="auth-container" className="fixed top-0 left-0 z-50">
            {(show_auth_section === "signup" && (
              <Signup setAuthSection={setAuthSection} />
            )) ||
              (show_auth_section === "signin" && (
                <SignIn setAuthSection={setAuthSection} />
              ))}
          </div> */}

          {/* website content */}
          <div className="flex text-skin-base h-screen overflow-hidden z-10">
            <div className="fixed top-0 left-0 h-screen w-full pt-1 pl-3 bg-skin-sidebarbg text-skin-base text-sm font-extrabold">
              <div className="flex">
                <div className="mr-20 text">{"Kieran Harris"}</div>
                <div
                  className="w-16 bg-skin-accent text-skin-onaccent rounded-md text-center cursor-pointer"
                  onClick={() => setNewMode(mode)}
                >
                  {mode}
                </div>

                <div
                  className="ml-4 w-16 bg-skin-accent text-skin-onaccent rounded-md text-center cursor-pointer"
                  onClick={() => setNewColor(color)}
                >
                  {color}
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <Sidebar setSelectedSection={setSelectedSection} />
            </div>

            <div className="relative">
              <SecondarySidebar selected_section={selected_section} />
            </div>

            {/* pages */}
            <div
              id="Content"
              className="relative bg-skin-contentbg w-full ml-80 mt-7 p-1"
            >
              { (selected_section === "Home"        && <Home        />) ||
                (selected_section === "About"       && <About       />) ||
                (selected_section === "Projects"    && <Projects    />) ||
                (selected_section === "Experience"  && <Experience  />) ||
                (selected_section === "AddContent"  && <AddContent  />) ||
                (selected_section === "Settings"    && <Settings    />)
              }
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  )
}

export default App
