import "./Dashboard.css"
import Header from "../UtilityComponents/Header"
import profileIcon from "../assets/profileIcon.avif"
import { Link } from "react-router-dom"

const Dashboard = () => {

    return(
        <div className="RecruiterDashboard">
            <Header/>
            <div className="RecruiterProfile">
                    <div className = "wrapper">
                    <div className="RecruiterName">
                        <img className = "orgProfile" src={profileIcon} alt="" />
                        <h3>Name</h3>
                    </div>
                    
                    <div className="RecruiterDetails">
                        <h3>Organization Type : </h3>
                        <p>demo text</p>

                        <h3>Job Position : </h3>
                        <p>demo text</p>

                        <h3>Salary Range : </h3>
                        <p>demo text</p>

                        <h3>Working Hours : </h3>
                        <p>demo text</p>

                        <h3>Benefits : </h3>
                        <p>demo text</p>

                        <h3>Required Skills : </h3>
                        <p>demo text</p>
                    </div>

                    <Link className = "buttons" to="/recruiter/job">See your jobs</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard