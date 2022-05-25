import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../auth-context'
import './navbar.css'

export default function Navbar() {
  const { signOut } = useAuth()
  
  const alerts = [
    {
      img: 'https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABcJxhlPo63shqfoLssgynYEGYk5MvvH1iBYq5IU0DtCQLISZ16g3HJxDVtpHSrgGgwVtbDS5GD294MOGB6HIAt4O1IUIQlHkFs1KtHiOjaETrt_XlwiffGmkg5SJ0KQKHMmyYlwlM0hDZqE.jpg?r=0e6',
      event: 'New Arrival',
      title: 'Welcome to Eden',
      date: '3 days ago'
    },
    {
      img: 'https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABfU5JHbuB273lp2KpOet8k_OiGGoL-nFaXlURBMwiT484Rja4Z7WzR_bUdWz7xkea1ab-r-qtwBMDABj0UOWT8v0-w0YH8D-VLRAavmFW-L_Qn0gRJiwuZY8HvmQP2e51TV2N2J1iDjDNP4.jpg?r=4b0',
      event: 'New Arrival',
      title: '47 Metters Down: Uncaged',
      date: '1 week ago'
    },
    {
      img: 'https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABVTs6JHn2HhYww-1PU0BERbL-PAhHFb27Oiu8EioOFsJD5ObsCvj-ZYEu0Oot2DczdFKrbDrvoyfU8L-U6xqBBCl3hGsRG6foV_us9jdi43fC5izEPsCtiVdVvzgnwabm1CoIAOzM9c1Udo.jpg?r=4e9',
      event: 'New Arrival',
      title: '365 Days: This Day',
      date: '1 week ago'
    },
  ]
  
  useEffect( () => {
    const listenToScroll = () => {
      const scrollY = window.scrollY
      
      document.querySelector('.navbar').classList.toggle('dark', scrollY > 0)
    }
    
    window.addEventListener('scroll', listenToScroll)

    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  }, [])
  
  return (
    <nav className='navbar'>
      <Link to='all' className='logo'>
        <svg viewBox="0 0 111 30" className="" focusable="false">
          <g id="netflix-logo">
            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path>
          </g>
        </svg>
      </Link>
      <ul className='primary-navigation'>
        <NavLink to='all' className='item'>Home</NavLink>
        <NavLink to='genres' className='item'>TV Shows</NavLink>
        <NavLink to='movies' className='item'>Movies</NavLink>
        <NavLink to='year' className='item'>New & Popular</NavLink>
        <NavLink to='my-list' className='item'>My List</NavLink>
      </ul>
      <ul className='secondary-navigation'>
        <div className='search-box'>
          <input
            id='search-input'
            type='text'
            className='search-input'
            autoComplete='off'
            placeholder='Titles, people, genres'
          />
          <label htmlFor='search-input' className='transparent-button'>
            <img className='icon' alt='not found' src='/icons/search.png' />
          </label>
        </div>
        <Link to='/kids' className='item'>Kids</Link>
        <div className='alerts-drop-down'>
          <button className='alerts-drop-down-button'>
            <img className='icon' alt='not found' src='/icons/alerts.png' />
          </button>
          <ul className='alerts-drop-down-menu' style={{width: '375px'}}>
            {alerts.map( ({img, event, title, date}, ind) => {
              return (
                <li key={ind} className='alerts-drop-down-item alert'>
                  <img className='rounded' src={img} alt="not found" />
                  <div>
                    <div>{event}</div>
                    <div>{title}</div>
                    <div className='alerts-drop-down-date'>{date}</div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='user-drop-down'>
          <button className='user-drop-down-button'>
            <div className='display-flex'>
              <img className='rounded' src="https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVc8CzKPARNHEu1d2nkiTr1bk5uJcQLbLWko8foPeu9HwFWx7Ewwq_7Kz2tnkQvnDaIgnEJY7eQYmdelii9HOzmKPKGAoTY.png?r=a41" alt="not found" />
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
            </div>
          </button>
          <ul className='user-drop-down-menu' style={{width: '200px'}}>
            <li className='user-drop-down-menu-item'>
              <Link to='' className='display-flex margin-bottom'>
                <img className='rounded' src='https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbixeApBW3-Nl2SD40H-NBGKmv-eneU73h6hBcupBZNKnIWKbGO_18HrX2MQBnAL0_JYocPH62UHd58T1ZGF-l0Yoil7sHE.png?r=f71' alt="not found" />
                User 1
              </Link>
              <Link to='' className='display-flex margin-bottom'>
                <img className='rounded' src='https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZltMGrbjUxXYnK36RwsKIJBJe06r4p87oJlLWdBvTsZhvHzaYeB6ZivJh5i2iki_gK1e8nX5CDIGF6OsvPrGHvnrzkYOe0.png?r=b97' alt="not found" />
                User 1
              </Link>
              <Link to='' className='display-flex margin-bottom'>
                <img className='rounded' src='https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeNs0Y10aoAgJ48Vej3YQiWbOgMCkTEgNd33LRKOgL6CvLgRC95Mu4cMDLFLyFLsuWKfM2grv6Or3qTpPOU-FwF3B9bKSH0.png?r=fcc' alt="not found" />
                User 1
              </Link>
              <Link to='' className='display-flex margin-bottom'>
                <img className='rounded' src='https://occ-0-1033-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVdd3ixeBOfi58wD97RIuaBnbw5-dhis915qFDUUppsAOuYMCFwAnEg7XoTo5eNgOCeTgEPKEyDzOPZUG5hWwSdwOmt00Ms.png?r=fcd' alt="not found" />
                User 1
              </Link>
              <Link to='' className='display-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
                Manage Profiles
              </Link>
            </li>
            <li className='user-drop-down-menu-item'>
              <Link to=''>Kids</Link>
            </li>
            <li className='user-drop-down-menu-item'>
              <Link to='' className='display-flex margin-bottom'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>
                Account</Link>
              <Link to='' className='display-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                Help Center</Link>
            </li>
            <li className='user-drop-down-menu-item'>
              <button onClick={signOut}>Sign out of Movies</button>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  )
}