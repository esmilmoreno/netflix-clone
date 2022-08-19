import './signup.css'
import { useEffect } from "react"
import Navbar from '../components/navbar'
import { Link, Outlet } from "react-router-dom"

export default function SignUp() {
  useEffect( () => {
    document.title = 'Netflix'
  }, [])
  
  return (
    <div className='signup-page'>
      <Navbar />
      
      <div className='signup-container'>
        <Outlet />
      </div>

      <div className='signup-footer-container'>
        <footer className='signup-footer'>
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