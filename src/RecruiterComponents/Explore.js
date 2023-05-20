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
      <Link>Post</Link>
      <Link>Go to Dashboard</Link>
      <p>Update you Requirements to get a perfect employee for you</p>
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