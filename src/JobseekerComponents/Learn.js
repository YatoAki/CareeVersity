import "./Learn.css"
import Header from "../UtilityComponents/Header"
import SwiperSlider from "./SwiperSlider"

const Learn = () => {

    return(
        <div className="JobseekerLearn">
            <Header/>
            
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