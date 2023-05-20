import "./Job.css";
import Header from "../UtilityComponents/Header";
import JobCard from "./JobCard";
import { collection, getDocs, query, where } from "@firebase/firestore";

import db from "../Firebase";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Job = () => {
  const [data, setData] = useState([]);
  const auth = useSelector((state) => state.authReducer);

  useEffect(() => {
    loadData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  const loadData = async () => {
    try {
      const q = query(collection(db, "job"), where("userID", "==", auth.user));
      const querySnapshot = await getDocs(q);
      const fetchedData = querySnapshot.docs.map((doc) => doc.data());
      setData(fetchedData);
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  return (
    <div className="Job">
      <Header />
      <div className="JobHead">
        <h1>Posted Jobs</h1>
        <Link to={"/recruiter"}>Go back to Explore</Link>
      </div>
      
      <div className="JobCards">
        {data.map((info) => {
            return <JobCard data={info} />
        })}
        
      </div>
    </div>
  );
};

export default Job;
