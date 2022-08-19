import './signin.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../../../auth-context';
import Loader from '../components/loader';

export default function SignIn() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordIsValid, setPasswordIsValid] = useState(false)
  const [loading, setLoading] = useState(false)

  const [signinError, setSigninError] = useState('')

  const handleEmailChange = e => {
    setEmail(e.target.value)
    setEmailIsValid(e.target.checkValidity())
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
    setPasswordIsValid(e.target.checkValidity())
  }
  
  const onSubmit = async event => {
    event.preventDefault()
    
    try {
      setSigninError('')
      setLoading(true)
      await signIn(email, password)
    } catch (err) {
      setSigninError(err.message.split(': ').pop())
      setLoading(false)
    }
  }
  
  return (
    <div className='signin-page'>
      <img className='signin-background' src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/a4b5113a-9691-4f7a-9c7d-a8f1559624e0/DO-en-20220516-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="not found" />
      <div className='landing-header-navbar'>
        <Link to='/'>
          <svg viewBox="0 0 111 30" className="landing-header-logo" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
        </Link>
      </div>

      <form className='singin-form' onSubmit={onSubmit}>
        <h1 className='signin-title'>Sign In</h1>

        {signinError && <p className='signin-error-message'>
          {signinError}
        </p>}

        <div className='signin-input-container'>
          <input type='email' name='email' value={email} onChange={handleEmailChange} placeholder=' ' required />
          <label>Email address</label>
          {!emailIsValid && <p className='singin-invalid-input'>Please enter a valid email address</p>}
        </div>
        <div className='signin-input-container'>
          <input type='password' name='password' minLength={6} value={password} onChange={handlePasswordChange} placeholder=' ' required />
          <label>Password</label>
          {!passwordIsValid && <p className='singin-invalid-input'>Your password must contain between 6 and 60 characters.</p>}
        </div>
        
        <button disabled={loading} className='signin-button' type='submit'>
          {loading ? 
            <Loader />
            :
            'Sign In'
          }
        </button>

        <p className='new-to-netflix'>
          New to Netflix? <Link to='/'>Sign up now</Link>
        </p>
      </form>

      <div className='signin-footer-container'>
        <footer className='signin-footer'>
            <label style={{color: 'gray'}}>Questions? Call <Link to='tel: +1 (408) 000-0000 (USA)' className='footer-link'>+1 (408) 000-0000 (USA)</Link></label>
            
            <ul className='footer-nav'>
              <li className='footer-nav-item'>
                <Link to='' className='footer-link'>FAQ</Link>
              </li>
              <li className='footer-nav-item'>
                <Link to='' className='footer-link'>Help Center</Link>
              </li>
              <li className='footer-nav-item'>
                <Link to='' className='footer-link'>Terms of Use</Link>
              </li>
              <li className='footer-nav-item'>
                <Link to='' className='footer-link'>Privacy</Link>
              </li>
              <li className='footer-nav-item'>
                <Link to='' className='footer-link'>Cookie Preferences</Link>
              </li>
              <li className='footer-nav-item'>
                <Link to='' className='footer-link'>Corporate Information</Link>
              </li>
            </ul>
        </footer>
      </div>
    </div>
  )
}