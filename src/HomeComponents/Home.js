import "./Home.css"
import Header from "../UtilityComponents/Header"
import Slider from "./Slider"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Home = () => {

    const user = useSelector(state => state.authReducer)
    return(
        <div className="Home">
            <Header/>
            <div className="homeContents">
                <h1 className="title">Our user experience</h1>
                <Slider/>
                <div className="homeNav">
                    <h3>Are you looking for a</h3>
                    <div className="homeBtns">
                        {user.user ? 
                        <>
                            <Link to="/jobseeker" className="homeBtn">
                                <span>Job</span>
                            </Link>

                            <Link to="/recruiter" className="homeBtn">
                                <span>Qualified Professonal</span>
                            </Link>
                        </>
                        :
                        <>
                            <Link to="/jobseeker/login" className="homeBtn">
                                <span>Job</span>
                            </Link>

                            <Link to="/recruiter/login" className="homeBtn">
                                <span>Qualified Professonal</span>
                            </Link>
                        </>
                        }
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home