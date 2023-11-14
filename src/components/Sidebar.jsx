/* eslint-disable react/prop-types */
import { useState } from 'react';
import { HiHome, HiInformationCircle, HiCode, HiCog, HiPlus } from 'react-icons/hi';
import { HiWrenchScrewdriver } from 'react-icons/hi2'; 

const Sidebar = ({setSelectedSection}) => {

  const [section, setSection] = useState("Home");

  const clickHandler = (new_selected_section) => {
    setSelectedSection(new_selected_section);
    setSection(new_selected_section);
  }

  return (
    <div className="fixed top-5 left-0 h-[calc(100vh-1.25rem)] w-20 m-0 flex flex-col bg-skin-sidebarbg shadow-lg">

      <div onClick={()=>clickHandler("Home")}>
        <SidebarIcon 
          section={section} 
          icon={<HiHome size="28" />} 
          text="Home" />
      </div>
      <div onClick={()=>clickHandler("About")}>
        <SidebarIcon 
          section={section} 
          icon={<HiInformationCircle size="28" />} 
          text="About" />
      </div>
      <div onClick={()=>clickHandler("Projects")}>
        <SidebarIcon 
          section={section} 
          icon={<HiCode size="28" />} 
          text="Projects" />
      </div>
      <div onClick={()=>clickHandler("Experience")}>
        <SidebarIcon 
          section={section} 
          icon={<HiWrenchScrewdriver size="28" />} 
          text="Experience" />
      </div>
      <div onClick={()=>clickHandler("AddContent")}>
        <SidebarIcon 
          section={section} 
          icon={<HiPlus size="28" />}
          text="AddContent" />
      </div>
      

      {/* bottom settings icon */}
      <div className='absolute w-full bottom-0'
           onClick={()=>clickHandler("Settings")}>
        <SidebarIcon section={section} icon={<HiCog size="28" />} text="Settings" />
      </div>
      
    </div>
  )
}

// trying to create a component within another component (for use in parent component only)

// eslint-disable-next-line react/prop-types
const SidebarIcon = ({ section, icon, text = "tooltip" }) => (
    <div className={section === text ? 'selected-sidebar-icon group' : 'sidebar-icon group'}>
      <div className={section === text 
                      ? 'absolute top-0 -left-4 transition-all ease-in-out duration-250 h-full w-2 -ml-1 bg-skin-base rounded'
                      : 'absolute top-0 -left-4 transition-all ease-in-out duration-250 h-1/2 w-0 mt-3 group-hover:w-2 -ml-1 bg-skin-base rounded'}
      ></div>
      {icon}
      <div className='sidebar-tooltip group-hover:scale-100'>
        <div className="absolute top-2 -left-3 w-0 h-0 border-8 border-solid border-transparent border-r-skin-tooltipbg"></div>
        {text === "AddContent" ? "Add Content" : text}
      </div>
    </div>
)


export default Sidebar;