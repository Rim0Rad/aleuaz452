import bgImage from "../assets/aboutMeBg.png"
import '../style/AboutMe.css'

export default function AboutMe () {

    return (
        <div id="aboutMePage">
            <img src={bgImage}/>
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