import React from "react";
import { useSelector } from "react-redux";
import Header from "../UtilityComponents/Header"
import Logo from "../assets/Logo.png"
import "./Explore.css"

const Explore = () => {
  
    const user = useSelector(state => state.authReducer)

  return (
    <div className="RecruiterExplore">
      <Header/>
      <div className="jobCards">
        <div className="jobCard">
          <img src={Logo} alt="" />
          <h1>Name</h1>
          <p>This will be bio here</p>
        </div>

        <div className="jobCard">
          <img src={Logo} alt="" />
          <h1>Name</h1>
          <p>This will be bio here</p>
        </div>

        <div className="jobCard">
          <img src={Logo} alt="" />
          <h1>Name</h1>
          <p>This will be bio here</p>
        </div>

        <div className="jobCard">
          <img src={Logo} alt="" />
          <h1>Name</h1>
          <p>This will be bio here</p>
        </div>
      </div>
    </div>
  );
};

export default Explore;