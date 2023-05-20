import React from "react";
import { useSelector } from "react-redux";
import Header from "../UtilityComponents/Header"
import profileIcon from "../assets/profileIcon.avif"
import "./Explore.css"
import { Link } from "react-router-dom";

const Explore = () => {
  
    const user = useSelector(state => state.authReducer)

  return (
    <div className="RecruiterExplore">
      <Header/>
      <div className = "buttonWrap">
        <Link className = "buttons">Post</Link>
        <Link className = "buttons">Go to Dashboard</Link>
        <p className = "updateRequirements">Update you Requirements to get a perfect employee for you</p>
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