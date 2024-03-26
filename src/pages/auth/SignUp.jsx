import { createUserWithEmailAndPassword, validatePassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../../firebase"
import { useNavigate } from "react-router-dom";

const SignUp = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState({
    email: null,
    displayName: null,
    password: null,
    confirmPassword: null
  })

  const signUp = (e) => {

    e.preventDefault()

    if (authValidation()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          // TODO: update newly created user with displayName that was input by the user
          navigate('/signin')
        })
        .catch((fberror) => {
          console.log(fberror.code)
          if (fberror.code === "auth/invalid-email") {
            setError((prevError) => {
              let error = Object.assign({}, prevError)
              error.email = "invalid email"
              return error
            })
          }
        })
    }

  }

  const authValidation = () => {
    let valid = false

    if (!email) {
      setError((prevError) => {
        let error = Object.assign({}, prevError)
        error.email = "required"
        return error
      })
    }

    if (!displayName) {
      setError((prevError) => {
        let error = Object.assign({}, prevError)
        error.displayName = "required"
        return error
      })
    }

    if (!password) {
      setError((prevError) => {
        let error = Object.assign({}, prevError)
        error.password = "required"
        return error
      })
    } else if (!validatePassword(password)) {
      console.log(validatePassword(password))
      setError((prevError) => {
        let error = Object.assign({}, prevError)
        error.password = "min length 8 characters"
        return error
      })
    }

    if (!confirmPassword) {
      setError((prevError) => {
        let error = Object.assign({}, prevError)
        error.confirmPassword = "required"
        return error
      })
    } else if (confirmPassword !== password) {
      setError((prevError) => {
        let error = Object.assign({}, prevError)
        error.confirmPassword = "must match password"
        return error
      })
    } else {
      setError((prevError) => {
        let error = Object.assign({}, prevError)
        error.confirmPassword = null
        return error
      })
    }

    if (error.email && error.displayName && error.password && error.confirmPassword === null) {
      valid = true
    }

    return valid
  }

  const validatePassword = (password) => {
    console.log("password regex validation", password)
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    let valid = mediumRegex.test(password)
    console.log(valid)
    return valid
  }

  return (
    <div id="auth-container" className="fixed top-0 left-0 z-50">
      <div id="background" className="flex h-screen w-screen bg-skin-sidebarbg items-center justify-center">
        <div id="card" className="relative w-[32rem] py-8 px-12 bg-skin-secondsidebarbg rounded-xl shadow-lg text-skin-base">

          <div id="card-body" className="">
            <div id="heading" className="w-full text-center text-2xl font-extrabold">{"Sign Up"}</div>
            <form id="form" type="submit" className="w-full p-4">

              <div id="Input" className="relative w-full mb-4">
                <div id="label" className="absolute -top-2 left-2 px-2 bg-skin-secondsidebarbg">
                  {"email"}
                </div>
                <div className="absolute -top-2 right-2 px-2 bg-skin-secondsidebarbg text-red-700">
                  {error.email}
                </div>
                <input
                  type='email'
                  className='w-full my-2 px-2 bg-skin-secondsidebarbg text-lg rounded-md border border-skin-muted'
                  value={email}
                  onChange={e => setEmail(e.target.value)} />
              </div>

              <div id="Input" className="relative w-full mb-4">
                <div id="label"
                  className="absolute -top-2 left-2 px-2 bg-skin-secondsidebarbg">
                  {"username"}
                </div>
                <div className="absolute -top-2 right-2 px-2 bg-skin-secondsidebarbg text-red-700">
                  {error.displayName}
                </div>
                <input type='text'
                  className='w-full my-2 px-2 bg-skin-secondsidebarbg text-lg rounded-md border border-skin-muted'
                  value={displayName}
                  onChange={e => setDisplayName(e.target.value)} />
              </div>

              <div id="Input" className="relative w-full mb-4">
                <div id="label"
                  className="absolute -top-2 left-2 px-2 bg-skin-secondsidebarbg">
                  {"password"}
                </div>
                <div className="absolute -top-2 right-2 px-2 bg-skin-secondsidebarbg text-red-700">
                  {error.password}
                </div>
                <input type='password'
                  className='w-full my-2 px-2 bg-skin-secondsidebarbg text-lg rounded-md border border-skin-muted'
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
              </div>

              <div id="Input" className="relative w-full mb-4">
                <div id="label"
                  className="absolute -top-2 left-2 px-2 bg-skin-secondsidebarbg">
                  {"confirm password"}
                </div>
                <div className="absolute -top-2 right-2 px-2 bg-skin-secondsidebarbg text-red-700">
                  {error.confirmPassword}
                </div>
                <input type='password'
                  className='w-full my-2 px-2 bg-skin-secondsidebarbg text-lg rounded-md border border-skin-muted'
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)} />
              </div>

              <div id='btn-section' className='flex w-full justify-center'>
                <button
                  id='submit-btn'
                  type="submit"
                  className='mt-2 border-2 border-skin-accent text-skin-accent hover:text-skin-onaccent hover:bg-skin-accent py-2 px-4 rounded-full hover:rounded-xl transition-all duration-75 cursor-pointer'
                  onClick={signUp}
                >
                  {"Sign Up"}
                </button>
              </div>

            </form>
          </div>

          <div id="Login-btn"
            className="text-center hover:text-skin-accent p-2 cursor-pointer"
            onClick={() => navigate('/signin')}>
            {"Already have an account? Log In"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp