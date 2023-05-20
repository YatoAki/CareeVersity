import React from "react";
import profileIcon from "../assets/profileIcon.avif"
import Header from "../UtilityComponents/Header";
import { Link } from "react-router-dom";
import "./Explore.css"

const Explore = () => {
  

  return (
    <div className="jobseekerExplore">
      <Header/>
      <div className="learningProgress">
        <h2>Your progress</h2>
        <progress value={10} max="100"></progress>
        <Link>Continue Learning</Link>
      </div>
      <div className="jobCards">
        <div className="jobCard">
          <img src={profileIcon} alt="" />
          <h1>Name</h1>
          <p>This will be bio here</p>
        </div>

        <div className="jobCard">
          <img src={profileIcon} alt="" />
          <h1>Name</h1>
          <p>This will be bio here</p>
        </div>

        <div className="jobCard">
          <img src={profileIcon} alt="" />
          <h1>Name</h1>
          <p>This will be bio here</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;