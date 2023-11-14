/* eslint-disable react/prop-types */

export default function SecondarySidebar({selected_section}) {

  // TODO: create a way to change the array for buttons based on the selected_section

  // TODO: clicking on a button should auto scroll to a section on the page -> possibly re think this

  return (
    <div className="fixed top-7 left-20 h-[calc(100vh-1.75rem)] w-60 m-0 
                    flex flex-col bg-skin-secondsidebarbg shadow-lg rounded-tl-xl"
    >
      <div id="Header" className="h-12 p-2.5 pl-4 font-bold text-lg shadow-md border-b-2 border-skin-secondsidebarline">
        {selected_section}
      </div>

      {/* work in progress 
          TODO: create component for buttons and render using a foreach loop 
                to display buttons based on the currently selected section. 
                eg. home section buttons will be different from about section buttons and so on.
      */}
      <div id="Buttons" className="flex flex-col mt-4">
        {/* TODO: conditionally render styles based on if the button is selected or not */}
        <div className="mt-0.5 mx-2 bg-skin-secondsidebarselected py-1 px-2 rounded-md">{"text 1 (selected)"}</div>
        <div className="mt-0.5 mx-2 hover:bg-skin-secondsidebarhover py-1 px-2 rounded-md">{"text 2 (hover)"}</div>
        <div className="mt-0.5 mx-2 py-1 px-2 rounded-md">{"text 3"}</div>
      </div>
    </div>
  )
}