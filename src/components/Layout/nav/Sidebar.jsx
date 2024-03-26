import { useNavigate } from 'react-router';
import SidebarIcon from './SideBarIcon';
import {
  HiHome,
  HiInformationCircle,
  HiCode,
  HiCog,
  HiPlus,
  HiLogout
} from 'react-icons/hi';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { Context } from '../../../contexts/AuthContext';
import { useContext } from 'react';

const Sidebar = () => {

  const navigate = useNavigate();

  const { userSignOut } = useContext(Context)

  const checkActiveLink = (link) => {
    return link === window.location.pathname
  }

  return (
    <div className="fixed top-5 left-0 h-[calc(100vh-1.25rem)] w-20 m-0 flex flex-col bg-skin-sidebarbg shadow-lg">

      <div onClick={() => { navigate(`home`) }}>
        <SidebarIcon
          label={"Home"}
          active={checkActiveLink('/home')}
          icon={<HiHome size="28" />}
        />
      </div>
      <div onClick={() => navigate("about")}>
        <SidebarIcon
          label={"About"}
          active={checkActiveLink('/about')}
          icon={<HiInformationCircle size="28" />}
        />
      </div>
      <div onClick={() => navigate("projects")}>
        <SidebarIcon
          label={"Projects"}
          active={checkActiveLink('/projects')}
          icon={<HiCode size="28" />}
          text="Projects" />
      </div>
      <div onClick={() => navigate("experience")}>
        <SidebarIcon
          label={"Experience"}
          active={checkActiveLink('/experience')}
          icon={<HiWrenchScrewdriver size="28" />}
        />
      </div>
      <div onClick={() => navigate("add_content")}>
        <SidebarIcon
          label={"Add Content"}
          active={checkActiveLink('/add_content')}
          icon={<HiPlus size="28" />}
        />
      </div>

      <div onClick={() => navigate("settings")}>
        <SidebarIcon
          label={"Settings"}
          active={checkActiveLink('/settings')}
          icon={<HiCog size="28" />}
        />
      </div>

      {/* bottom settings icon */}
      <div className='absolute w-full bottom-0'
        onClick={userSignOut}>
        <SidebarIcon
          label={"Logout"}
          active={checkActiveLink('/signin')}
          icon={<HiLogout size="28" />}
        />
      </div>

    </div>
  )
}

export default Sidebar;
