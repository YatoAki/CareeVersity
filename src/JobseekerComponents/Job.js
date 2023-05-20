import "./Job.css"
import Header from "../UtilityComponents/Header"
import profileIcon from "../assets/profileIcon.avif"
import Slider from "./Slider"

const Job = () => {

    return(
        <div className="Job">
            <Header/>
            <div className="jobCard">
                <img src={profileIcon} alt="" />
                <h3>Job Title</h3>
                <div className="jobDetails">
                    <h3>Organization Type : </h3>
                    <p>Somevalue</p>

                    <h3>Job Position :</h3> 
                    <p>Somevalue</p>

                    <h3>Salary Range :</h3>
                    <p>Somevalue</p>

                    <h3>Working Hour : </h3>
                    <p>Somevalue</p>

                    <h3>Benefits : </h3>
                    <p>Somevalue</p>

                    <h3>Required Skills : </h3>
                    <p>Somevalue</p>
                </div>
                <div className="requiredCourses">
                    <h2>Required Course</h2>
                    <Slider/>
                </div>
            </div>
        </div>
    )
}

export default Job