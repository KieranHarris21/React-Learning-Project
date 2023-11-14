import { HiX } from 'react-icons/hi'

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Login({setAuthSection}) {

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
                    <div id="heading" className="w-full text-center text-2xl font-extrabold">{"Log In"}</div>
                    <div id="form" className="w-full p-4">

                        <div id="Input" className="relative w-full mb-4">
                            <div id="label" className="absolute -top-2 left-2 px-2 bg-skin-secondsidebarbg">{"email"}</div>
                            <input type='text' className='w-full my-2 px-2 bg-skin-secondsidebarbg text-lg rounded-md border border-skin-muted' />
                        </div>

                        <div id="Input" className="relative w-full">
                            <div id="label" className="absolute -top-2 left-2 px-2 bg-skin-secondsidebarbg">{"password"}</div>
                            <input type='password' className='w-full my-2 px-2 bg-skin-secondsidebarbg text-lg rounded-md border border-skin-muted' />
                        </div>

                    </div>
                </div>

                <div id="Login-btn" 
                     className="text-center hover:text-skin-accent p-2 cursor-pointer"
                     onClick={()=>handleSectionClick('signup')}>
                    {"Don't have an account yet? Sign Up"}
                </div>
            </div>
        </div>
    )
}