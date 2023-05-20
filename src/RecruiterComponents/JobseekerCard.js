import profileIcon from "../assets/profileIcon.avif"
const JobSeekerCard = (props) => {

    return(
        <div className="jobCard">
          <img className = "profilePic" src={profileIcon} alt="" />
          <h1 className = "userName">{props.data.username}</h1>
          <h4>{props.data.role}</h4>
          <p>{props.data.bio}</p>
        </div>
    )
}

export default JobSeekerCard