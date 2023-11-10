import TravelCard from './TravelCard.jsx'
import travelData from '../data/travels.js'

import '../style/Travels.css'

export default function Travels () {

    function createTravelCards ( ){
        const travels = []
        for(let travel in travelData){
            travels.push(<TravelCard key={travel} data={travelData[travel]}/>)
        }
        return travels
    }

    return (
        <div id="travelsPage">
            <div className='background'>
            </div>
            <h2>Adventures</h2>
        
            <div id='travelsContentContainer'>
                { createTravelCards() }
            </div>
        </div>
    )
}