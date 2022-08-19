import { Link, useLocation } from "react-router-dom";

export default function SignUp() {
  const { state } = useLocation()

  return (
    <div className='signup-step'>
      <div className='step-container-centered'>
        <img width='260px' src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" alt="not found" />
        <label className='current-step-number'>STEP <b>1</b> OF <b>4</b></label>
        <h1 className='signup-step-title'>Finish setting up your account</h1>
        <p className='signup-step-details margin'>
          Netflix is personalized for you. Create a password to watch on any device at any time.
        </p>
        <Link to='/signup/step2' state={state} style={{width: '100%'}}><button className="signup-button">Next</button></Link>
      </div>
    </div>
  )
}