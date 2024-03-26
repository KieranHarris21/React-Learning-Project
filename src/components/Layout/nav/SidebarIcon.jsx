// eslint-disable-next-line react/prop-types
const SidebarIcon = ({ active, icon, label = "tooltip" }) => (
  <div className={active ? 'selected-sidebar-icon group' : 'sidebar-icon group'}>
    <div className={active
      ? 'absolute top-0 -left-4 transition-all ease-in-out duration-250 h-full w-2 -ml-1 bg-skin-base rounded'
      : 'absolute top-0 -left-4 transition-all ease-in-out duration-250 h-1/2 w-0 mt-3 group-hover:w-2 -ml-1 bg-skin-base rounded'}
    ></div>
    {icon}
    <div className='sidebar-tooltip group-hover:scale-100'>
      <div className="absolute top-2 -left-3 w-0 h-0 border-8 border-solid border-transparent border-r-skin-tooltipbg"></div>
      {label}
    </div>
  </div>
)

export default SidebarIcon
