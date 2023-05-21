import "./Job.css";
import Header from "../UtilityComponents/Header";
import profileIcon from "../assets/profileIcon.avif";
import Slider from "./Slider";
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, updateDoc } from "@firebase/firestore";
import db from '../Firebase';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Job = () => {
  const { id } = useParams();
  const auth = useSelector(state => state.authReducer);

  const [data, setData] = useState(null);

  const handleApply = async () => {
    try {
      console.log(id); // Check the value of id
      const docRef = doc(db, "job", id);
      const docSnapshot = await getDoc(docRef);
      const jobData = docSnapshot.data();
      console.log(jobData);
      
      const appliedIds = jobData.applied || []; // Get existing applied ids or initialize as empty array
      const updatedIds = [...new Set([...appliedIds, auth.user])]; // Append uid to existing applied ids
      console.log(updatedIds);
      
      await updateDoc(docRef, { applied: updatedIds });

      setData((prevData) => ({ ...prevData, applied: updatedIds }));
      console.log(data);
    } catch (error) {
      console.error("Error updating job data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  const loadData = async () => {
    try {
      console.log(id); // Check the value of id
      const docRef = doc(db, "job", id);
      const docSnapshot = await getDoc(docRef);
      const jobData = docSnapshot.data();
      console.log(jobData);
      setData(jobData);
    } catch (error) {
      console.error("Error fetching job data:", error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Job">
      <Header />
      <div className="jobCard">
        <img src={profileIcon} alt="" />
        <h3 className="title">{data.username}</h3>
        <div className="jobDetails">
          <h3>Organization Type:</h3>
          <p>{data.companySize}</p>

          <h3>Job Position:</h3>
          <p>{data.jobTitle}</p>

          <h3>Salary Range:</h3>
          <p>{data.salaryRange}</p>

          <h3>Working Hour:</h3>
          <p>{data.workingHours}</p>

          <h3>Benefits:</h3>
          <p>{data.benefits}</p>

          <h3>Required Skills:</h3>
          <ul>
            {data.selectedTech &&
              data.selectedTech.map((name) => <li key={name.value}>{name.label}</li>)}
          </ul>

          <h3>Apply:</h3>
          <button onClick={handleApply}>Apply</button>
        </div>
        <div className="requiredCourses">
          <h2>Required Course</h2>
          <Slider />
        </div>
        <Link to="/jobseeker">Back to explore</Link>
      </div>
    </div>
  );
};

export default Job;
