import React, { useState } from "react";
import "./Signup.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const initialFormData = {
    orgName: "",
    email: "",
    password: "",
    passwordRepeat: "",
    website: "",
    currentLocation: "",
    companySize: "",
    linkedin: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with the form data
    console.log(formData);
  };

  const clearForm = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="Signup">
      <div className="signupCard">
        <div className="heading">
          <img src={Logo} alt="" />
          <h1>CareeVersity</h1>
          <h3>A University for your Career</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="inputArea">
            <label htmlFor="orgName">Org Name :</label>
            <input
              type="text"
              id="orgName"
              name="orgName"
              value={formData.orgName}
              onChange={handleChange}
            />

            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <label htmlFor="passwordRepeat">Password Repeat :</label>
            <input
              type="password"
              id="passwordRepeat"
              name="passwordRepeat"
              value={formData.passwordRepeat}
              onChange={handleChange}
            />

            <label htmlFor="website">Website :</label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
            />

            <label htmlFor="currentLocation">Current Location :</label>
            <input
              type="text"
              id="currentLocation"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
            />

            <label htmlFor="companySize">Company Size:</label>
            <select
              id="companySize"
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="startup">Startup (1-10)</option>
              <option value="medium">Medium (10-20)</option>
              <option value="large">Large (above 30)</option>
            </select>

            <label htmlFor="linkedin">Linkedin :</label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
            />
          </div>
          <div className="btnArea">
            <button type="button" onClick={clearForm}>
              Clear
            </button>
            <button type="submit">Sign up</button>
          </div>
        </form>
        <Link to={"/recruiter/login"}>Already have an account?</Link>
      </div>
    </div>
  );
};

export default Signup;