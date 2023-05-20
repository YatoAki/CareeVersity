import "./Learn.css"
import Header from "../UtilityComponents/Header"
import SwiperSlider from "./SwiperSlider"

const Learn = () => {

    return(
        <div className="JobseekerLearn">
            <Header/>
            <div className="currentCourse">
                <h2>Current Course</h2>
                <div className="currentCourseCard">
                    <h3>Course Name</h3>
                    <p>User story. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className="yourCourses">
                <h3>Your Courses</h3>
                <SwiperSlider/>
            </div>

            <div className="finishedCourses">
                <h3>Finished Courses</h3>
                <SwiperSlider/>
            </div>
        </div>
    )
}

export default Learn