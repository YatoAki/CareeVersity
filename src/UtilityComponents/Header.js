import "./Header.css"
import Logo from "../assets/Logo.png"
import nav from "../assets/nav.png"
import { Link } from "react-router-dom"
import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import { getAuth, signOut } from "firebase/auth";

const Header = () => {

    const [view, setView] = useState(false)
    const auth = useSelector(state => state.authReducer)
    const user = useSelector(state => state.userReducer)

    const handleMenuClick = () => {
        setView(!view)
    }

    const handleLogout = () => {
        const auth = getAuth()
        signOut(auth).then(() => {
            console.log("success")
            window.location.href = 'http://localhost:3000/CareeVersity/home';
          }).catch((error) => {
            console.log(error)
          });
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
                {auth.user && user.data ? 
                <>
                    <p>Welcome {user.data.username}</p>
                    <a href="" onClick={handleLogout}><li>Logout</li></a>
                </> : 
                <>
                <Link to="/recruiter/login"><li>Recruiter Login</li></Link>
                <Link to="/jobseeker/login"><li>Jobseeker Login</li></Link>
                </>
                
                }
                <Link to=""><li>Contact us</li></Link>
                <Link to=""><li>About us</li></Link>
                <Link to=""><li>Partners</li></Link>
                <Link to=""><li>Privacy Policy</li></Link>
            </ul>
        </div>
    )
}

export default Header