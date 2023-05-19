import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with the form data
    console.log(formData);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        window.location.href = '/CareeVersity/jobseeker';
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
    });

  };

  return (
    <div className="Login">
      <div className="Signup">
        <div className="signupCard Login">
          <div className="heading">
            <img src={Logo} alt="" />
            <h1>CareeVersity</h1>
            <h3>A University for your Career</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="inputArea Login">
              <label>Email :</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />

              <label>Password :</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="loginBtnArea">
              <button type="submit">Login</button>
            </div>
          </form>
          <Link to={"/recruiter/signup"}>Do not have an account yet?</Link>
          <Link to={"/"} id="backToHome">Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;