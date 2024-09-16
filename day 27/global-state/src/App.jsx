import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <div>Footer</div>

    </>
  )
}

export default App
