import React from "react"
import { useNavigate } from "react-router-dom"

const JobCard = (props) =>{

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("./"+props.data.uid)
    }

    return(
        <div className="JobCard" onClick={handleClick}>
            <h3>{props.data.jobTitle}</h3>
            <div className="info">
                <p>{props.data.salaryRange}</p>
                <p>{props.data.workingHours}</p>
            </div>
            <p>{props.data.jobDescription}</p>
            <p>{props.data.benefits}</p>
            
            <ul>
                {props.data.selectedTech.map((name) => {
                    return <li key={name.value}>{name.value}</li>
                })}
            </ul>
        </div>
    )
}

export default JobCard