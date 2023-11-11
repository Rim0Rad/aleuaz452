import TravelCard from './TravelCard.jsx'
import travelData from '../data/travels.js'

import '../style/Travels.css'
import bgImage from '../assets/gallery_bg.jpg'

export default function Travels () {

    function createTravelCards ( ){
        const travels = []
        for(let travel in travelData){
            travels.push(<TravelCard key={travel} data={travelData[travel]}/>)
        }
        return travels
    }

    const bgStyle = {
        backgroundImage: `url(${bgImage})`,
    }

    return (
        <div id="travelsPage">
            <div id="travelPageBg" className='backgroundContainer' style={bgStyle}>
            </div>
            <h2>Adventures</h2>
        
            <div id='travelsContentContainer'>
                { createTravelCards() }
            </div>
        </div>
    )
}