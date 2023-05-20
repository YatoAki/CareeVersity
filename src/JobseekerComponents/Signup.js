import React, { useState } from "react";
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
    username: "",
    email: "",
    password: "",
    passwordRepeat: "",
    dateOfBirth: "",
    currentLocation: "",
    role: "",
    nrcNumber: "",
  };

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [formData, setFormData] = useState(initialFormData);

  const keepUserData = async (uid) => {
    try {
      const docRef = doc(db, "user", uid);
      await setDoc(docRef, { 
        username: formData.username, 
        dateOfBirth: formData.dateOfBirth,
        currentLocation: formData.currentLocation,
        role: formData.role,
        nrcNumber: formData.nrcNumber
      });
      console.log("Document successfully written!");
      navigate('/jobseeker');
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

  const handleClear = () => {
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
            <label htmlFor="username">Username :</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
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

            <label htmlFor="dateOfBirth">Date of Birth :</label>
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
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

            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="Frontend">Frontend Developer</option>
              <option value="Backend">Backend Developer</option>
              <option value="Fullstack">Fullstack Developer</option>
              <option value="Devops">Devops engineer</option>
            </select>

            <label htmlFor="nrcNumber">NRC Number :</label>
            <input
              type="text"
              id="nrcNumber"
              name="nrcNumber"
              value={formData.nrcNumber}
              onChange={handleChange}
            />
          </div>
          <div className="btnArea">
            <button type="button" onClick={handleClear}>
              Clear
            </button>
            <button type="submit">Sign up</button>
          </div>
        </form>
        <Link to={"/jobseeker/login"}>Already have an account?</Link>
        <Link to={"/"} id="backToHome">Back to home</Link>
      </div>
    </div>
  );
};

export default Signup;
