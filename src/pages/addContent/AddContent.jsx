// Add Content page
import { useState } from "react";
import SecondarySidebar from "../../components/DetailSideBar/SecondarySidebar";

const AddContent = () => {

  const sidebarList = ['Headder 1', 'Headder 2']
  const [selected, setSelected] = useState(sidebarList[0])

  return (
    <div>
      <div className="relative">
        <SecondarySidebar
          title={"Add Content"}
          sidebarList={sidebarList}
          selected={selected}
          setSelected={(index) => setSelected(sidebarList[index])}
        />
      </div>
      <div
        id="Content"
        className="relative mx-auto bg-skin-contentbg w-full ml-80 p-1"
      >
        <div className="relative font-bold text-2xl mx-auto w-full h-full overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-skin-scrollbarbg scrollbar-track-skin-scrollbartrackbg">
          <div className="relative w-full h-[120vh]">
            <div className="relative px-12 py-4 w-full mx-auto text-skin-base bg-skin-fill-600">
              {"Add Content"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddContent
