import './home.css'
import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <div className='home-page'>
      <Navbar />
      <Outlet />
    </div>
  )
}