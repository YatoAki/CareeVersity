import React from "react";
import profileIcon from "../assets/profileIcon.avif"
import Header from "../UtilityComponents/Header";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Explore.css"
import JobCard from "./JobCard";
import { useState, useEffect } from "react";
import { collection, getDocs, query } from "@firebase/firestore";
import db from "../Firebase";

const Explore = () => {

  const navigate = useNavigate()
  const [data, setData] = useState([]);
  
    const handleJobClick = () => {
      navigate("./job")
    }

  

    useEffect(() => {
      loadData();
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount
  
    const loadData = async () => {
      try {
        const q = query(collection(db, "job"));
        const querySnapshot = await getDocs(q);
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());
        console.log(fetchedData)
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

  return (
    <div className="jobseekerExplore">
      <Header/>
      <div className = "progressWrap">
        <div className="learningProgress">
          <h2>Your progress</h2>
          <progress value={20} max="100"></progress>
          <Link to={"./learn"} className = "buttons">Continue Learning</Link>
        </div>
      </div>
      <div className="jobCards">
        {data.map((info) => {
          return <JobCard data={info}/>
        })}
        
      </div>
    </div>
  );
};

export default Explore;