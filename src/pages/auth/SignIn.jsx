import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const signIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/home')
      })
      .catch(() => {
        setError(true)
      })
  }

  return (
    <div id="auth-container" className="fixed top-0 left-0 z-50">
      <div id="background" className="flex h-screen w-screen bg-skin-sidebarbg items-center justify-center z-50">
        <div id="card" className="relative w-[32rem] py-8 px-12 bg-skin-secondsidebarbg rounded-xl shadow-lg text-skin-base">
          <div id="card-body" className="">

            <div id="heading" className="w-full text-center text-2xl font-extrabold">
              {"Sign In"}
            </div>

            <div
              id="error"
              className="text-red-700 w-full text-center mt-5 mb-2"
            >
              {error && "Login Failed: Your email or password is incorrect"}
            </div>

            <form id="form" type="submit" className="w-full p-4">

              <div id="Input" className="relative w-full mb-4">
                <div id="label"
                  className="absolute -top-2 left-2 px-2 bg-skin-secondsidebarbg">
                  {"email"}
                </div>
                <input type='text'
                  className='w-full my-2 px-2 bg-skin-secondsidebarbg text-lg rounded-md border border-skin-muted'
                  value={email}
                  onChange={e => setEmail(e.target.value)} />
              </div>

              <div id="Input" className="relative w-full mb-4">
                <div id="label"
                  className="absolute -top-2 left-2 px-2 bg-skin-secondsidebarbg">
                  {"password"}
                </div>
                <input type='password'
                  className='w-full my-2 px-2 bg-skin-secondsidebarbg text-lg rounded-md border border-skin-muted'
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
              </div>

              <div id='btn-section' className='flex w-full justify-center'>
                <button
                  id='submit-btn'
                  type="submit"
                  className='mt-2 border-2 border-skin-accent text-skin-accent hover:text-skin-onaccent hover:bg-skin-accent py-2 px-4 rounded-full hover:rounded-xl transition-all duration-75 cursor-pointer'
                  onClick={signIn}
                >
                  {"Sign In"}
                </button>
              </div>

            </form>
          </div>

          <div id="Login-btn"
            className="text-center hover:text-skin-accent p-2 cursor-pointer"
            onClick={() => navigate('/signup')}>
            {"Don't have an account yet? Sign Up"}
          </div>
        </div>
      </div>
    </div >
  )
}

export default SignIn