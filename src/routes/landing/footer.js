import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className='landing-section landing-footer' style={{border: 'none'}}>
      <div className='section-container'>
        <label style={{color: 'gray'}}>Questions? Call <Link to='tel: +1 (408) 000-0000 (USA)' className='footer-link'>+1 (408) 000-0000 (USA)</Link></label>
        
        <ul className='footer-nav'>
          <li className='footer-nav-item'>
            <Link to='' className='footer-link'>FAQ</Link>
          </li>
          <li className='footer-nav-item'>
            <Link to='' className='footer-link'>Help Center</Link>
          </li>
          <li className='footer-nav-item'>
            <Link to='' className='footer-link'>Account</Link>
          </li>
          <li className='footer-nav-item'>
            <Link to='' className='footer-link'>Media Center</Link>
          </li>
          <li className='footer-nav-item'>
            <Link to='' className='footer-link'>Investor Relations</Link>
          </li>
          <li className='footer-nav-item'>
            <Link to='' className='footer-link'>Jobs</Link>
          </li>
          <li className='footer-nav-item'>
            <Link to='' className='footer-link'>Ways to Watch</Link>
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
          <li className='footer-nav-item'>
            <Link to='' className='footer-link'>Contact Us</Link>
          </li>
          <li className='footer-nav-item'>
            <Link to='' className='footer-link'>Speed Test</Link>
          </li>
          <li className='footer-nav-item'>
            <Link to='' className='footer-link'>Legal Notices</Link>
          </li>
          <li className='footer-nav-item'>
            <Link to='' className='footer-link'>Only on Netflix</Link>
          </li>
        </ul>

        <p className='footer-country'>Netflix United States</p>
      </div>
    </footer>
  )
}