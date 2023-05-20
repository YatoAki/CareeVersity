import profileIcon from "../assets/profileIcon.avif"
import { useNavigate } from "react-router-dom"
const JobSeekerCard = (props) => {

    const navigate = useNavigate()

    const handleClick = ()=> {
        console.log(props.data.uid)
        navigate("/people/" + props.data.uid.trim())
    }

    return(
        <div className="jobCard" onClick={handleClick}>
          <img className = "profilePic" src={profileIcon} alt="" />
          <h1 className = "userName">{props.data.username}</h1>
          <h4>{props.data.role}</h4>
          <p>{props.data.bio}</p>
        </div>
    )
}

export default JobSeekerCard