import "./Home.css"
import Header from "../UtilityComponents/Header"
import Slider from "./Slider"
import { Link } from "react-router-dom"

const Home = () => {

    return(
        <div className="Home">
            <Header/>
            <div className="homeContents">
                <h1 className="title">Our user experience</h1>
                <Slider/>
                <div className="homeNav">
                    <h3>Are you looking for a</h3>
                    <div className="homeBtns">
                        <Link to="/employee" className="homeBtn">
                            <span>Job</span>
                        </Link>

                        <Link to="/employer" className="homeBtn">
                            <span>Qualified Professonal</span>
                        </Link>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home