import "./Job.css"
import Header from "../UtilityComponents/Header"
import profileIcon from "../assets/profileIcon.avif"
import Slider from "./Slider"
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "@firebase/firestore";
import db from '../Firebase';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Job = () => {

    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
      loadData();
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount
  
    const loadData = async () => {
        try {
          console.log(id); // Check the value of id
          const q = query(collection(db, "job"), where("uid", "==", id));
          const querySnapshot = await getDocs(q);
          const fetchedData = querySnapshot.docs.map((doc) => doc.data());
          console.log(fetchedData);
          setData(fetchedData[0]);
        } catch (error) {
          console.error("Error fetching job data:", error);
        }
      };

    return(
        <div className="Job">
            <Header/>
            <div className="jobCard">
                <img src={profileIcon} alt="" />
                <h3 className="title">{data.username}</h3>
                <div className="jobDetails">
                    <h3>Organization Type : </h3>
                    <p>{data.companySize}</p>

                    <h3>Job Position :</h3> 
                    <p>{data.jobTitle}</p>

                    <h3>Salary Range :</h3>
                    <p>{data.salaryRange}</p>

                    <h3>Working Hour : </h3>
                    <p>{data.workingHours}</p>

                    <h3>Benefits : </h3>
                    <p>{data.benefits}</p>

                    <h3>Required Skills : </h3>
                    <ul>
                        {data.selectedTech ? data.selectedTech.map((name) => {
                            return(
                                <li>{name.label}</li>
                            )
                        }): null
                    }
                    </ul>
                </div>
                <div className="requiredCourses">
                    <h2>Required Course</h2>
                    <Slider/>
                </div>
                <Link to="/jobseeker">Back to explore</Link>
            </div>
        </div>
    )
}

export default Job