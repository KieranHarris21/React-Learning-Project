import { useEffect, useState } from "react"
import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from "firebase/auth"

export function AuthDetails() {
    const [ authUser, setAuthUser ] = useState(null)
    
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        })

        return () => {
            listen()
        }

    }, [])

    function userSignOut() {
        signOut(auth)
        .then(() => {
            console.log('signed out successfully!')
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            { authUser 
            ? <div className="my-5 text-base">
                <p>{`Signed In as ${authUser.email}`}</p>
                <button className="mt-2 border-2 border-skin-accent text-skin-accent hover:text-skin-onaccent hover:bg-skin-accent py-2 px-4 rounded-full hover:rounded-xl transition-all duration-75"
                        onClick={userSignOut}>
                    Sign Out
                </button>
              </div>
            : <p>Signed Out</p>
            }
        </div>
    )
}