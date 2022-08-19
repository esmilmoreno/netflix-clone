import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../../../auth-context"
import Loader from './../components/loader'

export default function Step2() {
  const { user } = useAuth()

  return !user ? <RegForm /> : <Authenticated user={user} />
}

function RegForm() {
  const { state } = useLocation()
  const [email, setEamil] = useState(state.email)
  const [password, setPassword] = useState('')
  const [signupErrorMessage, setSignupErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const { signUp } = useAuth()

  const onSubmit = async event => {
    event.preventDefault()

    try {
      setLoading(true)
      setSignupErrorMessage('')
      await signUp(email, password)
    } catch (err) {
      setSignupErrorMessage(err.message.split(': ').pop())
      setLoading(false)
    }
  }
  
  return (
    <div className='signup-step'>
      <div className='step-container'>
        {signupErrorMessage && <p className='signup-error-message'>
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
          {signupErrorMessage}
        </p>}
        
        <label className='current-step-number'>STEP <b>2</b> OF <b>4</b></label>
        <h1 className='signup-step-title'>Create a password to start your membership</h1>
        <p className='signup-step-details'>
          Just a few more steps and you're done!
        </p>
        <p className='signup-step-details'>
          We hate paperwork, too.
        </p>

        <form className='signup-form' onSubmit={onSubmit}>
          <div className='getstarted-input-container'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={ ({target}) => setEamil(target.value) }
              placeholder=' '
              required
            />
            <label>Email address</label>
          </div>

          <div className='getstarted-input-container'>
            <input
              type='password'
              name='password'
              value={password}
              onChange={ ({target}) => setPassword(target.value) }
              placeholder=' '
              required
              minLength={6}
            />
            <label>Add a password</label>
          </div>

          <button disabled={loading} className="signup-button">
          {loading ? 
            <Loader />
          :
            'Next'
          }
          </button>
        </form>
      </div>
    </div>
  )
}

function Authenticated({user}) {
  return (
    <div className='signup-step'>
      <div className='step-container'>
        <label className='current-step-number'>STEP <b>2</b> OF <b>4</b></label>
        <h1 className='signup-step-title'>Account Created</h1>
        <p className='signup-step-details'>
          Use this email to access your account:
        </p>

        <b className='signup-step-details margin'>{user.email}</b>
        <br/><br/>

        <Link to='/signup/step3' className="signup-button">
          <button className="signup-button">Next</button>
        </Link>
      </div>
    </div>
  )
}