import "./StoryCard.css"
import Logo from "../assets/Logo.png"

const StoryCard = () => {

    return(
        <div className="storyCard">
            <img src={Logo} alt="" />
            <h3>Kaung Nay Lin Khant</h3>
            <p>User story. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}

export default StoryCard