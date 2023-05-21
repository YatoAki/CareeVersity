import { collection, getDocs, query, where } from "@firebase/firestore";
import Header from "../UtilityComponents/Header";

import db from "../Firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutJobApplicants from "./AboutJobApplicants";
import "./AboutJob.css"

const AboutJob = () => {

    const { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
      loadData();
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount
  
    const loadData = async () => {
        try {
          const q = query(collection(db, "job"), where("uid", "==", id));
          const querySnapshot = await getDocs(q);
          const fetchedData = querySnapshot.docs.map((doc) => doc.data());
          setData(fetchedData[0]);
          console.log(fetchedData[0].applied)
        } catch (error) {
          console.error("Error fetching job data:", error);
        }
      };

    return(

        <div className="AboutJob">
            <Header/>
            <div className = "wrapper">
            <div className="JobCard" >
                <h3 className = "jobtitle">{data.jobTitle}</h3>
                <div className="info">
                    <p className = "infoText">{data.salaryRange}</p>
                    <p className = "infoText">{data.workingHours}</p>
                </div>
                <p className = "infoText">{data.jobDescription}</p>
                <p className = "infoText">{data.benefits}</p>
                
                <ul className = "infoText">
                    {data.selectedTech ?
                        data.selectedTech.map((name) => {
                        return <li key={name.value}>{name.value}</li>
                        })
                        : null
                    }   
                </ul>
            </div>
            </div>
            <AboutJobApplicants info={data.applied}/>
        </div>
    )
}

export default AboutJob