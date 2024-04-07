// Add Content page
import { useState } from "react";
import SecondarySidebar from "../../components/DetailSideBar/SecondarySidebar";
import CustomTemplate from "./templates/CustomTemplate"
import DefaultTemplate from "./templates/DefaultTemplate"
import SimpleTemplate from "./templates/SimpleTemplate"
// import { CustomTemplate, DefaultTemplate, SimpleTemplate } from './templates';

const AddContent = () => {

  const sidebarList = ['Default', 'Simple', 'Custom']
  const [selected, setSelected] = useState(sidebarList[0])

  const displayContent = (section) => {
    switch (section) {
      default:
        return <DefaultTemplate />
      case 'Simple':
        return <SimpleTemplate />
      case 'Custom':
        return <CustomTemplate />
    }
  }

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
        {displayContent(selected)}
      </div>
    </div>
  )
}

export default AddContent
