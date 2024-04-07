// Settings page
import { useState } from "react"
import SecondarySidebar from "../../components/DetailSideBar/SecondarySidebar"
import Themes from "./settingsPages/Theme"
import Profile from "./settingsPages/Profile"

const Settings = () => {

  const sidebarList = ['Themes', 'Profile']
  const [selected, setSelected] = useState(sidebarList[0])

  const sidebarContent = (section) => {
    switch (section) {
      default:
        return <Themes />
      case 'Profile':
        return <Profile />
    }
  }

  return (
    <div>
      <div className="relative">
        <SecondarySidebar
          title={"Settings"}
          sidebarList={sidebarList}
          selected={selected}
          setSelected={(index) => setSelected(sidebarList[index])}
        />
      </div>
      <div
        id="Content"
        className="relative mx-auto bg-skin-contentbg w-full ml-80 p-1"
      >
        {sidebarContent(selected)}
      </div>
    </div>
  )
}

export default Settings
