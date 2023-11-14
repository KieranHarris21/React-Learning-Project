import React, { useContext, useEffect, useState } from 'react'
// import { auth } from '../firebase/auth'

const AuthContext = React.createContext()

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext)
}

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [current_user, setCurrentUser] = useState()

  function signup(email, password) {
    // return auth.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChanged(user => {
    //   setCurrentUser(user)
    // })

    // return unsubscribe
  }, [])
  

  const value = {
    current_user,
    signup
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}