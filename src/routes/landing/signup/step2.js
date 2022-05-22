import { useState } from "react"
import { useLocation } from "react-router-dom"

export default function RegForm() {
  const { state } = useLocation()
  const [email, setEamil] = useState(state.email)
  const [password, setPassword] = useState('')

  const onSubmit = event => {
    event.preventDefault()

    alert('onSubmit')
  }
  
  return (
    <div className='signup-step'>
      <div className='step-container'>
        <label className='current-step-number'>STEP <b>2</b> OF <b>4</b></label>
        <h1 className='signup-step-title'>Create a password to start your membership</h1>
        <p className='signup-step-details'>
          Just a few more steps and you're done!
        </p>
        <p className='signup-step-details'>
          We hate paperwork, too.
        </p>

        <form className='signup-form' onSubmit={onSubmit}>
          <div className='floating-label-input'>
            <input type='email' value={email} onChange={ ({target}) => setEamil(target.value) } placeholder=' ' required />
            <label>Email address</label>
          </div>

          <div className='floating-label-input'>
            <input type='password' value={password} onChange={ ({target}) => setPassword(target.value) } placeholder=' ' required />
            <label>Add a password</label>
          </div>

          <button className="signup-button">Next</button>
        </form>
      </div>
    </div>
  )
}