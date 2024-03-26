import { Navigate, createBrowserRouter } from 'react-router-dom'
import { Protected } from './Protected.jsx'
import Layout from '../components/Layout/index.jsx'
import Home from '../pages/home/Home.jsx'
import About from '../pages/about/About.jsx'
import Error from '../pages/error/error.jsx'
import Settings from '../pages/settings/Settings.jsx'
import Experience from '../pages/experience/Experience.jsx'
import Projects from '../pages/projects/Projects.jsx'
import AddContent from '../pages/addContent/AddContent.jsx'
import SignIn from '../pages/auth/signin.jsx'
import SignUp from '../pages/auth/SignUp.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout />
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: 'home',
        element: <Protected><Home /></Protected>
      },
      {
        path: 'about',
        element: <Protected><About /></Protected>
      },
      {
        path: 'projects',
        element: <Protected><Projects /></Protected>
      },
      {
        path: 'experience',
        element: <Protected><Experience /></Protected>
      },
      {
        path: 'add_content',
        element: <Protected><AddContent /></Protected>
      },
      {
        path: 'settings',
        element: <Protected><Settings /></Protected>
      },
      {
        path: '*',
        element: <Error />
      },
      {
        path: '/signin',
        element: <SignIn />
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }

    ],
    errorElement: <Error />
  },
])

export default routes
