// Theme page
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext"

const Themes = () => {

  // themeContext variables
  const { themeValue, setThemeValue, themeColor, setThemeColor } = useContext(ThemeContext)

  return (
    <div className="relative font-bold text-2xl mx-auto w-full h-full overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-skin-scrollbarbg scrollbar-track-skin-scrollbartrackbg">
      <div className="relative w-full h-[120vh]">
        <div className="relative px-12 py-4 w-full mx-auto text-skin-base bg-skin-fill-600">
          {"Theme"}
        </div>
        <div className="flex flex-col gap-2 font-normal text-lg px-16 py-10 text-skin-base">
          <div className="flex flex-row">
            <div>
              {"change theme color here"}
            </div>
            <div className="mr-10 ml-auto">
              {/* setThemeValue function in action from the context file */}
              <div
                className="px-4 py-2 rounded-md cursor-pointer bg-skin-accent text-skin-onaccent"
                onClick={() => setThemeValue((prev) => prev === 'light' ? 'dark' : 'light')}
              >
                {themeValue}
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div>
              {"change theme color here"}
            </div>
            <div className="mr-10 ml-auto">
              {/* setThemeColor function in action from the context file */}
              <div
                className="px-4 py-2 rounded-md cursor-pointer bg-skin-accent text-skin-onaccent"
                onClick={() => setThemeColor((prev) => prev === 'blue' ? 'green' : 'blue')}
              >
                {themeColor}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Themes
