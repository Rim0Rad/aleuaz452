import { useEffect, useState } from 'react';
import '../style/Diary.css'

import bgImage  from '../assets/diary_bg_croped.jpg'

// Will retireve this from back end
import countries from '../data/diary.js'
import { useParams } from 'react-router-dom';

export default function Diary ( ) {

    // TODO: add a button in the diaries to go back to the photo album


    const [ targetCountry, setTargetCountry ] = useState(false)
    const [ isBackToAdventure, setIsBackToAdventure ] = useState(false)

    // Navigation to the diary entries when coming from adventure page
    let { lastLocation } = useParams()
    useEffect( () => {
        if(lastLocation){
            lastLocation = lastLocation.replace("diary:", "")
            document.getElementById(lastLocation).click()
            setIsBackToAdventure(true)
        }
    }, [])
    
    // Open target diary
    const handleClick  = (e) => {
        document.getElementById("diaryContentContainer").style.alignItems = "center";
        setTargetCountry(e.target.id)
    }
    // go back to the list
    function handleGoBack () {
        document.getElementById("diaryContentContainer").style.alignItems = "flex-end";
        setTargetCountry(false)
    }
    const handleScrollTop = () => {
        window.scrollTo({top: "0", behavior: "smooth"})
    }
    // return to adventure page
    function handleGoBackToAdventure () {
        window.history.back()
    }

    useEffect( () => {}, [targetCountry])

    // Switch between display of a list of countries and diary entries for that country
    const switchCountry = () => {

        const country = countries.find( (country) => {
            return targetCountry === country.name;
        })
        
        if(country){
            
            return (
                <div id="diaryEntries">
                    <h1>{country.name}</h1>
                    <div id="diaryHeader">
                        { targetCountry && <button className="backButton" onClick={handleGoBack}>Back To Diaries</button> }
                        { isBackToAdventure && <button className="backButton" onClick={handleGoBackToAdventure}>Back To Adventure</button>}
                    </div>
                    {country.diaryEntries.map( (entry, index) => {
                        return (
                            <div key={index} id="diaryEntry">
                                <div id="spacetimeCotainer">
                                    <p>{entry.location}</p>
                                    <p>{entry.datePosted}</p>
                                </div>
                                <hr></hr>
                                <p id="diaryText">{entry.text}</p>
                            </div>
                        )
                    })}
                { targetCountry && <button className="backButton endButton" onClick={handleScrollTop}>Scroll To The Top</button> }

                </div>
            )
        }else {
            return (
                <div id="diary-countries">
                    { countries.map( (country, index) => {
                        return (
                            <button key={index} 
                                id={country.name} 
                                className='diaryEntryBt' 
                                onClick={handleClick}
                            >
                                {country.name}
                            </button>
                        )
                    })}
                </div>
            )
        }
            
    }

    

    return (
        <div id="diaryPage">
            
            <div id="diaryPageHeaderImgContainer">
                <h2 className='diaryPageTitle'>Diaries</h2>
                <div id="bgImgContainer">
                    <div id="backgroundImageForeground"></div>
                    <img src={bgImage}/>
                </div>
            </div>

            <div id="diaryContentContainer">
                { switchCountry() }
            </div>
        </div>
    )
}