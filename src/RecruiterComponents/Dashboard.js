import "./Dashboard.css"
import Header from "../UtilityComponents/Header"
import profileIcon from "../assets/profileIcon.avif"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"


const Dashboard = () => {

    const user = useSelector(state => state.userReducer)

    return(
        <div className="RecruiterDashboard">
            <Header/>
            <div className="RecruiterProfile">
                    <div className = "wrapper">
                    <div className="RecruiterName">
                        <img className = "orgProfile" src={profileIcon} alt="" />
                        <h3>{user.data.username}</h3>
                    </div>
                    
                    <div className="RecruiterDetails">
                        <h3>Organization Type : </h3>
                        <p>{user.data.companySize}</p>

                        <h3>Location : </h3>
                        <p>{user.data.currentLocation}</p>

                        <h3>linkedin : </h3>
                        <p>{user.data.linkedin}</p>

                        <h3>Website : </h3>
                        <p>{user.data.website}</p>
                    </div>

                    <Link className = "buttons" to="/recruiter/job">See your jobs</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard