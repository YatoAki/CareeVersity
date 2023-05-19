import "./Signup.css"
import Logo from "../assets/Logo.png"
import { Link } from "react-router-dom"

const Signup = () => {

    return(
        <div className="Signup">
            <div className="signupCard">
                <div className="heading">
                    <img src={Logo} alt="" />
                    <h1>CareeVersity</h1>
                    <h3>A University for your Career</h3>
                </div>
                <div className="inputArea">
                    <label htmlFor="">Org Name :</label>
                    <input type="text" />

                    <label htmlFor="">Email :</label>
                    <input type="text" />

                    <label htmlFor="">Password :</label>
                    <input type="text" />

                    <label htmlFor="">Password Repeat :</label>
                    <input type="text" />

                    <label htmlFor="">Website :</label>
                    <input type="text" />

                    <label htmlFor="">Current Location :</label>
                    <input type="text" />

                    <label htmlFor="">Company Size:</label>
                    <select id="size">
                        <option value="">Select...</option>
                        <option value="startup">Startup (1-10)</option>
                        <option value="medium">Medium (10-20)</option>
                        <option value="large">Large (above 30)</option>
                    </select>

                    <label htmlFor="">Linkedin :</label>
                    <input type="text" />


                </div>
                <div className="btnArea">
                    <button>Clear</button>
                    <button>Sign up</button>
                </div>
                <Link to={"/recruiter/signup"}>Already have an account?</Link>
            </div>
        </div>
    )
}

export default Signup