/* eslint-disable react/prop-types */

const SecondarySidebar = ({ title, sidebarList, selected, setSelected }) => {

  // TODO: clicking on a button should auto scroll to a section on the page on some pages others should change the content 
  return (
    <div className="fixed top-7 left-20 h-[calc(100vh-1.75rem)] w-60 m-0 
                    flex flex-col bg-skin-secondsidebarbg shadow-lg rounded-tl-xl"
    >
      <div id="Header" className="h-12 p-2.5 pl-4 font-bold text-lg shadow-md border-b-2 border-skin-secondsidebarline">
        {title}
      </div>
      <div id="Buttons" className="flex flex-col mt-4">
        {sidebarList.map((item, index) => (
          <div
            key={item}
            className={`mt-0.5 mx-2 py-1 px-2 rounded-md hover:bg-skin-secondsidebarhover ${selected === item && 'bg-skin-secondsidebarselected'}`}
            onClick={() => setSelected(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SecondarySidebar
