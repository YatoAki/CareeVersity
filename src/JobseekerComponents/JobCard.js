import profileIcon from "../assets/profileIcon.avif"
import { useNavigate } from "react-router-dom"

const JobCard = (props) => {

    const navigate = useNavigate()
  
    const handleJobClick = () => {
        navigate("./job")
    }

    return(
        <div className="jobCard" onClick={handleJobClick}>
          <h1 className = "userName">{props.data.jobTitle}</h1>
          <p>{props.data.salaryRange}</p>
          <p>{props.data.jobDescription}</p>
        </div>
    )
}

export default JobCard