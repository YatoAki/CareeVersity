import React, { useState } from "react";
import "./Signup.css";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import db from "../Firebase";
import {  doc, setDoc } from "@firebase/firestore"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import {login} from "../actions/index"
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState(initialFormData);

  const keepUserData = async (uid) => {
    try {
      const docRef = doc(db, "Recruiter", uid);
      await setDoc(docRef, { 
        orgName: formData.orgName, 
        website: formData.website,
        currentLocation: formData.currentLocation,
        companySize: formData.companySize,
        linkedin: formData.linkedin
      });
      console.log("Document successfully written!");
      navigate('/recruiter');
    } catch (error) {
      console.error("Error writing document:", error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission with the form data
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login(user.uid))
        keepUserData(user.uid)
      })
      .catch((error) => {
        console.log(error.code,error.Message)
      });
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
        <Link to={"/"} id="backToHome">Back to home</Link>
        
      </div>
    </div>
  );
};

export default Signup;