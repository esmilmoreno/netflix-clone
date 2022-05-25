import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className='signup-step'>
      <div className='step-container-centered'>
        <img width='50px' src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Checkmark.png" alt="not found" />
        <label className='current-step-number'>STEP <b>3</b> OF <b>4</b></label>
        <h1 className='signup-step-title'>Choose your plan.</h1>
        <p className='signup-step-details-item margin'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
          No commitments, cancel anytime.
        </p>
        <p className='signup-step-details-item margin'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
          Everything on Netflix for one low price.
        </p>
        <p className='signup-step-details-item margin'>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
          </svg>
          Unlimited viewing on all your devices.
        </p>
        <Link to='/signup/step4' style={{width: '100%'}}><button className="signup-button">Next</button></Link>
      </div>
    </div>
  )
}