import "./Post.css"
import Header from "../UtilityComponents/Header"
import React, { useState } from 'react'
import Select from 'react-select'
import { useSelector } from "react-redux"
import db from "../Firebase";
import {  collection, addDoc } from "@firebase/firestore"
import { useNavigate } from "react-router-dom"

const Post = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [salaryRange, setSalaryRange] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [benefits, setBenefits] = useState("");
  const [selectedTech, setSelectedTech] = useState([]);
  const [jobDescription, setJobDescription] = useState("");
  const user = useSelector(state => state.userReducer)
  const auth = useSelector(state => state.authReducer)
  const navigate = useNavigate()

  const options = [
    { value: 'reactJS', label: 'ReactJS' },
    { value: 'react-Native', label: 'React-Native' },
    { value: 'Node JS', label: 'Node JS' },
    { value: 'Vue.js', label: 'Vue.js' },
    { value: 'TailwindCSS', label: 'TailwindCSS' },
    { value: 'HTML/CSS', label: 'HTML/CSS' },
    { value: 'Ruby on Rails', label: 'Ruby on Rails' },
    // Add more technology names here
  ];

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  const handleSalaryRangeChange = (event) => {
    setSalaryRange(event.target.value);
  };

  const handleWorkingHoursChange = (event) => {
    setWorkingHours(event.target.value);
  };

  const handleBenefitsChange = (event) => {
    setBenefits(event.target.value);
  };

  const handleTechSelectChange = (selectedOptions) => {
    setSelectedTech(selectedOptions);
  };

  const saveData = async () => {
    try {
        const docRef = collection(db, "job");
        await addDoc(docRef, { 
          username: user.data.username,
          userID: auth.user,
          companySize: user.data.companySize,
          jobTitle: jobTitle,
          salaryRange: salaryRange,
          workingHours: workingHours,
          benefits: benefits,
          selectedTech: selectedTech,
          jobDescription: jobDescription
        });
        navigate("/recruiter/job")
        console.log("Document successfully written!");
      } catch (error) {
        console.error("Error writing document:", error);
      }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(user,auth)
    saveData()
    console.log(selectedTech[0]);
  };

  return (
    <div className="Post">
      <Header />
      <div className="inputArea">
        <h2>Fill in job position details</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="jobTitle">We are looking for</label>
          <input type="text" id="jobTitle" value={jobTitle} onChange={handleJobTitleChange}/>

          <label htmlFor="salaryRange">Salary Range</label>
          <input type="text" id="salaryRange" value={salaryRange} onChange={handleSalaryRangeChange} />

          <label htmlFor="workingHours">Working Hours</label>
          <input type="text" id="workingHours" value={workingHours} onChange={handleWorkingHoursChange} />

          <label htmlFor="benefits">Benefits</label>
          <input type="text" id="benefits" value={benefits} onChange={handleBenefitsChange} />

          <label htmlFor="jobDescription">Job Description</label>
          <textarea id="jobDescription" value={jobDescription} onChange={handleJobDescriptionChange}/>

          <label htmlFor="tech">Technologies</label>
          <Select
            id="tech"
            options={options}
            value={selectedTech}
            onChange={handleTechSelectChange}
            isMulti
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
