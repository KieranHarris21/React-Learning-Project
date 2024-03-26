// home page
import { useState } from "react"
import SecondarySidebar from "../../components/DetailSideBar/SecondarySidebar"

const Home = () => {

  const sidebarList = ['Headder 1', 'Headder 2']
  const [selected, setSelected] = useState(sidebarList[0])

  return (
    <div className="relatvie w-full">
      <div className="relative w-full">
        <SecondarySidebar
          title={"Home"}
          sidebarList={sidebarList}
          selected={selected}
          setSelected={(index) => setSelected(sidebarList[index])}
        />
      </div>
      <div
        id="Content"
        className="relative bg-skin-contentbg w-full ml-80 p-1"
      >
        <div className="relative font-bold text-2xl h-full w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-skin-scrollbarbg scrollbar-track-skin-scrollbartrackbg">
          <div className="relative h-[120vh] w-full">
            <div className="relative px-12 py-4 w-fit mx-auto text-skin-base bg-skin-fill-600">
              {"Home Page"}
            </div>

            <div className="w-fit p-12 mx-auto mt-10 text-base bg-skin-accent text-skin-onaccent rounded-lg">
              {"Testing that the theme colors are consistent all the way through to the components"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
