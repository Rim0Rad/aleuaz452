import tiktockIcon from '../assets/tiktok.svg'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.png'
import youtubeIcon from '../assets/youtube.png'

import bgImage from '../assets/contacts_bg.jpg'

import '../style/Contacts.css'


export default function Contacts () {

    // TODO: link social button 
    // TODO: adjust the sizes to match
    // TODO: enalbe email sending from the page

    const bgStyle = {
        backgroundImage: `url(${bgImage})`,
    }

    return (
        <div id="contactsPage">
            <div id="aboutmebg" className="backgroundContainer" style={bgStyle}></div>

            <div id="contactsContainer">
                <div id="socialmediaContainer">
                    <a href='https://www.instagram.com/aleuaz452/' target="_blank">
                        <img src={instagramIcon}/>
                    </a>
                    <a href='https://www.facebook.com/geom.domenino' target="_blank">
                        <img src={facebookIcon}/>
                    </a>
                    <a href='https://www.tiktok.com/@alessandrodomenin' target="_blank">
                        <img src={tiktockIcon}/>
                    </a>
                    <a href='https://www.youtube.com/@aleuaz452' target="_blank">
                        <img src={youtubeIcon}/>
                    </a>
                </div>
                <hr></hr>
                {/* <div id="sendMessageContainer">
                    <p>Send a Message</p>
                        <input type="text" placeholder='Name'></input>
                        <input type="text" placeholder='Email'></input>
                    <textarea id="messageTextBox" type="textBox" placeholder=' Your Message'></textarea>
                    <button id="sendBt" type="submit">Send Message</button>
                </div> */}
            </div>
        </div>
    )
}