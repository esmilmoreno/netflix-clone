import { Outlet } from "react-router-dom"
import Navbar from "../../components/authenticated/navbar"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}