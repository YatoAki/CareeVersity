import React from "react";
import profileIcon from "../assets/profileIcon.avif"
import Header from "../UtilityComponents/Header";
import { Link } from "react-router-dom";
import "./Explore.css"

const Explore = () => {
  

  return (
    <div className="jobseekerExplore">
      <Header/>
      <div className = "progressWrap">
        <div className="learningProgress">
          <h2>Your progress</h2>
          <progress value={20} max="100"></progress>
          <Link className = "buttons">Continue Learning</Link>
        </div>
      </div>
      <div className="jobCards">
        <div className="jobCard">
          <img className = "profilePic" src={profileIcon} alt="" />
          <h1 className = "userName">Name</h1>
          <p>This will be bio here</p>
        </div>

        <div className="jobCard">
          <img className = "profilePic" src={profileIcon} alt="" />
          <h1 className = "userName">Name</h1>
          <p>This will be bio here</p>
        </div>

        <div className="jobCard">
          <img className = "profilePic" src={profileIcon} alt="" />
          <h1 className = "userName">Name</h1>
          <p>This will be bio here</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;