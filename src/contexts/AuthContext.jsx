import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { auth } from "../firebase"
// import { auth } from '../firebase/auth'

export const Context = createContext()

// eslint-disable-next-line react/prop-types
export const AuthContext = ({ children }) => {

  const auth = getAuth()

  const [authUser, setAuthUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let unsubscribe
    unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }

      return () => {
        if (unsubscribe) {
          unsubscribe()
        }
      }
    })
  }, [])

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("user signed out")
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const values = {
    authUser,
    setAuthUser,
    userSignOut
  }

  console.log("AuthProvider", authUser)

  return (
    <Context.Provider value={values}>
      {!loading && children}
    </Context.Provider>
  )
}