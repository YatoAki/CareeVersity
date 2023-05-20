import React from "react";
import { useSelector } from "react-redux";
import Header from "../UtilityComponents/Header"
import profileIcon from "../assets/profileIcon.avif"
import "./Explore.css"
import { Link } from "react-router-dom";
import { collection, getDocs, query, where } from "@firebase/firestore";
import db from "../Firebase";
import { useState, useEffect } from "react";
import JobSeekerCard from "./JobseekerCard";

const Explore = () => {
  
    const [data, setData] = useState([]);

    useEffect(() => {
      loadData();
    }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount
  
    const loadData = async () => {
      try {
        const q = query(collection(db, "user"), where("type", "==", "jobseeker"));
        const querySnapshot = await getDocs(q);
        const fetchedData = querySnapshot.docs.map((doc) => doc.data());
        console.log(fetchedData)
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

  return (
    <div className="RecruiterExplore">
      <Header/>
      <div className = "buttonWrap">
        <Link className = "buttons" to={"./job/post"}>Post</Link>
        <Link className = "buttons" to={"/recruiter/dashboard"}>Go to Dashboard</Link>
        <p className = "updateRequirements">Update you Requirements to get a perfect employee for you</p>
      </div>
      <div className="jobCards">
        {data.map((info) => {
          return <JobSeekerCard data={info}/>
        })}

      </div>
    </div>
  );
};

export default Explore;