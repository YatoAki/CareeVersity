
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
                    <label htmlFor="">Username :</label>
                    <input type="text" />

                    <label htmlFor="">Email :</label>
                    <input type="text" />

                    <label htmlFor="">Password :</label>
                    <input type="text" />

                    <label htmlFor="">Password Repeat :</label>
                    <input type="text" />

                    <label htmlFor="">Date of Birth :</label>
                    <input type="text" />

                    <label htmlFor="">Current Location :</label>
                    <input type="text" />

                    <label htmlFor="">Role:</label>
                    <select id="role">
                        <option value="">Select...</option>
                        <option value="Frontend">Frontend Developer</option>
                        <option value="Backend">Backend Developer</option>
                        <option value="Fullstack">Fullstack Developer</option>
                        <option value="Devops">Devops engineer</option>
                    </select>

                    <label htmlFor="">NRC Number :</label>
                    <input type="text" />


                </div>
                <div className="btnArea">
                    <button>Clear</button>
                    <button>Sign up</button>
                </div>
                <Link to={"/jobseeker/login"}>Already have an account?</Link>
            </div>
        </div>
    )
}

export default Signup