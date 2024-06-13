import {link} from "react-router-dom";
import logo from "../assets/logo.svg"
import Navbar from "./Navbar";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
        <div>
        <div>
            <link><img src={logo} alt="" height={66} width={66} /></link>
        </div>
        <Navbar/>
        <div>buttons</div>
        </div>
    </header>
  )
}

export default Header