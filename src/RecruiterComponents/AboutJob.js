import { collection, getDocs, query, where } from "@firebase/firestore";
import Header from "../UtilityComponents/Header";

import db from "../Firebase";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AboutJobApplicants from "./AboutJobApplicants";

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
            <div className="JobCard" >
                <h3>{data.jobTitle}</h3>
                <div className="info">
                    <p>{data.salaryRange}</p>
                    <p>{data.workingHours}</p>
                </div>
                <p>{data.jobDescription}</p>
                <p>{data.benefits}</p>
                
                <ul>
                    {data.selectedTech ?
                        data.selectedTech.map((name) => {
                        return <li key={name.value}>{name.value}</li>
                        })
                        : null
                    }   
                </ul>
            </div>
            <AboutJobApplicants info={data.applied}/>
        </div>
    )
}

export default AboutJob