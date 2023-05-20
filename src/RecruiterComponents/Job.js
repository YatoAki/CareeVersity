import "./Job.css"
import Header from "../UtilityComponents/Header"

const Job = () => {

    return(
        <div className="Job">
            <Header/>
            <div className="JobCards">
                <div className="JobCard">
                    <h3>Fullstack Developer</h3>
                    <p>We would like a Fullstack developer for our compnay</p>
                    <ul>
                        <li>Redux</li>
                        <li>Node JS</li>
                        <li>TailwindCSS</li>
                    </ul>
                </div>

                <div className="JobCard">
                    <h3>Fullstack Developer</h3>
                    <p>We would like a Fullstack developer for our compnay</p>
                    <ul>
                        <li>Redux</li>
                        <li>Node JS</li>
                        <li>TailwindCSS</li>
                    </ul>
                </div>

                <div className="JobCard">
                    <h3>Fullstack Developer</h3>
                    <p>We would like a Fullstack developer for our compnay</p>
                    <ul>
                        <li>Redux</li>
                        <li>Node JS</li>
                        <li>TailwindCSS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Job