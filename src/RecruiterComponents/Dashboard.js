import "./Dashboard.css"
import Header from "../UtilityComponents/Header"
import profileIcon from "../assets/profileIcon.avif"
import { Link } from "react-router-dom"

const Dashboard = () => {

    return(
        <div className="RecruiterDashboard">
            <Header/>
            <div className="RecruiterProfile">
                <div className="RecruiterName">
                    <img src={profileIcon} alt="" />
                    <h3>Name</h3>
                </div>
                
                <div className="RecruiterDetails">
                    <h3>Organization Type</h3>
                    <p>demo text</p>

                    <h3>Organization Type</h3>
                    <p>demo text</p>

                    <h3>Organization Type</h3>
                    <p>demo text</p>

                    <h3>Organization Type</h3>
                    <p>demo text</p>

                    <h3>Organization Type</h3>
                    <p>demo text</p>

                    <h3>Organization Type</h3>
                    <p>demo text</p>
                </div>

                <Link to="/recruiter/job">See your jobs</Link>
            </div>
        </div>
    )
}

export default Dashboard