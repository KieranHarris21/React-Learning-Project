import { AuthContext } from "./contexts/AuthContext"
import { RouterProvider } from 'react-router-dom'
import routes from './routes/root.jsx'
import { ThemeContextProvider } from "./contexts/ThemeContext.jsx"

const App = () => {

  return (
    <>
      <ThemeContextProvider>
        <AuthContext>
          <RouterProvider router={routes} />
        </AuthContext>
      </ThemeContextProvider>
    </>
  )
}

export default App
