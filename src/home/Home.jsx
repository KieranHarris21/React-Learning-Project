// home page

export default function Home() {

  return (
      <div className="font-bold text-2xl h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-skin-scrollbarbg scrollbar-track-skin-scrollbartrackbg">
        <div className="h-[120vh]">
          <div className="px-12 py-4 w-fit mx-auto text-skin-base bg-skin-fill-600">
            {"Home Page"}
          </div>

          <div className="w-fit p-12 mx-auto mt-10 text-base bg-skin-accent text-skin-onaccent rounded-lg">
            {"Testing that the theme colors are consistent all the way through to the components"}
          </div>
        </div>
      </div>
  )
}