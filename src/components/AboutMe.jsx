import bgImage from "../assets/aboutMeBg.png"
import '../style/AboutMe.css'

export default function AboutMe () {

    // TODO: get the description from the webpage that lidija sent


    const bgStyle = {
        backgroundImage: `url(${bgImage})`,
    }

    return (
        <div id="aboutMePage">
            <div id="aboutmebg" className="backgroundContainer" style={bgStyle}></div>
            <h2>About Me</h2>
            <div id="aboutMeContent">
                <div id="aboutmetxt">
                    <p>
                        It's a me Alesandro
                        <br></br>
                        <br></br>

                        I love to travel and I love UAZ.
                    </p>
                </div>

            </div>
        </div>
    )
}