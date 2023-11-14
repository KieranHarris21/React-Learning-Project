import { useState } from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { HiX } from 'react-icons/hi'

// eslint-disable-next-line react/prop-types, no-unused-vars
function SignIn({setAuthSection}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function signUp(event) {
        event.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const handleSectionClick = (newAuthSection) => {
        setAuthSection(newAuthSection);
    }

    return (
        <div id="background" className="flex h-screen w-screen bg-grey-500/80 items-center justify-center">
            <div id="card" className="relative w-[32rem] py-8 px-12 bg-skin-secondsidebarbg rounded-xl shadow-lg text-skin-base">

                <div onClick={()=>handleSectionClick('none')}
                     className="absolute top-3 right-4 cursor-pointer">
                    <HiX className='h-5 w-5'/>
                </div>

                <div id="card-body" className="">
                    <div id="heading" className="w-full text-center text-2xl font-extrabold">{"Sign Up"}</div>
                    <div id="form" className="w-full p-4">

                        <div id="Input" className="relative w-full mb-4">
                            <div id="label" 
                                 className="absolute -top-2 left-2 px-2 bg-skin-secondsidebarbg">
                                {"email"}
                            </div>
                            <input type='text' 
                                   className='w-full my-2 px-2 bg-skin-secondsidebarbg text-lg rounded-md border border-skin-muted' 
                                   value={email}
                                   onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div id="Input" className="relative w-full mb-4">
                            <div id="label" 
                                 className="absolute -top-2 left-2 px-2 bg-skin-secondsidebarbg">
                                {"password"}
                            </div>
                            <input type='password' 
                                   className='w-full my-2 px-2 bg-skin-secondsidebarbg text-lg rounded-md border border-skin-muted' 
                                   value={password}
                                   onChange={e => setPassword(e.target.value)}/>
                        </div>

                        <div id='btn-section' className='flex w-full justify-center'>
                            <div 
                                id='submit-btn'
                                className='mt-2 border-2 border-skin-accent text-skin-accent hover:text-skin-onaccent hover:bg-skin-accent py-2 px-4 rounded-full hover:rounded-xl transition-all duration-75'
                                onClick={signUp}
                            >
                                Sign Up
                            </div>
                        </div>

                    </div>
                </div>

                <div id="Login-btn" 
                     className="text-center hover:text-skin-accent p-2 cursor-pointer"
                     onClick={()=>handleSectionClick('signin')}>
                    {"Already have an account? Log In"}
                </div>
            </div>
        </div>
    )
}

export default SignIn
