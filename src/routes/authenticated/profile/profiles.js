import './profiles.css'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'

export default function Profiles() {
  return (
    <div className='profiles-page'>
      <Navbar />

      <Outlet />
    </div>
  )
}