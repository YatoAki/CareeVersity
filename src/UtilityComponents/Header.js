import "./Header.css"
import Logo from "../assets/Logo.png"
import nav from "../assets/nav.png"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"

const Header = () => {

    const [view, setView] = useState(false)

    const handleMenuClick = () => {
        setView(!view)
    }

    useEffect( () => {

        const hamburger = document.querySelector(".popUpNav")
        if (view){
            hamburger.classList.add("appear")
        }else{
            hamburger.classList.remove("appear")
        }
    },[view])
    

    return(
        <div className="Header">
            <Link to="/" className="headerLogo">
                <img src={Logo} alt="" />
                <h1>CareeVersity</h1>
            </Link>
            <button id="menu" onClick={handleMenuClick}><img src={nav} alt="" /></button>
            <ul className="popUpNav">
                <Link to="/employee"><li>Explore Jobs</li></Link>
                <Link to="/employer"><li>Explore Employees</li></Link>
                <Link to=""><li>Curriculum</li></Link>
                <Link to=""><li>About us</li></Link>
                <Link to=""><li>Partners</li></Link>
                <Link to=""><li>Privacy Policy</li></Link>
            </ul>
        </div>
    )
}

export default Header