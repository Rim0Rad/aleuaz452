import { useEffect, useState } from 'react';
import '../style/Diary.css'

import bgImage  from '../assets/diary_bg_croped.jpg'

// Will retireve this from back end
import countries from '../data/diary.js'

export default function Diary ( ) {

    // TODO: scroll to to the botom of the header when opening diary entiries
    // TODO: update the botom button to scroll back to the top
    // TODO: tome down the orange bacground
    useEffect( () => {
    }, [])
   

    const [ targetCountry, setTargetCountry ] = useState(false)


    const handleClick  = (e) => {
        setTargetCountry(e.target.id)
    }

    function handleGoBack () {
        setTargetCountry(false)
    }
    const handleScrollTop = () => {
        window.scrollTo({top: "100"})
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
                            <button key={index} id={country.name} className='diaryEntryBt' onClick={handleClick}>
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