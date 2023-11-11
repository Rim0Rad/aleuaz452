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

                        I've been traveling aboard a Russian production vehicle, UAZ452 since 2020. The vehicle was produced in 2020 and is a special version called EXPEDITION. Basically, the
                        UAZ452. The model has never been modified since 1965, with only the engine and transmission replaced with more efficient models.
                        <br></br>
                        <br></br>
                        I've traveled all over Europe, including trips to Norway (Lofoten), Sweden, Scotland (Orkney and Shetland), Moldova, Romania, Tunisia, Poland, Hungary, Ukraine and Bulgaria.
                        As well as taking family trips to Tunisia, Greece, France, Bulgaria and Italy.
                        <br></br>
                        <br></br>
                        I like to find places where I can find some peace and quiet, and spend quality time with my wife and two daughter.
                    </p>
                </div>

            </div>
        </div>
    )
}