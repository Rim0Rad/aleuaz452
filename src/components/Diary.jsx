import { useEffect, useState } from 'react';
import '../style/Diary.css'

import bgImage  from '../assets/diary_bg_croped.jpg'

// Will retireve this from back end
import countries from '../data/diary.js'

export default function Diary ( ) {

    // TODO: scroll to to the botom of the header when opening diary entiries
    useEffect( () => {
    }, [])
   

    const [ targetCountry, setTargetCountry ] = useState(false)


    const handleClick  = (e) => {
        setTargetCountry(e.target.id)
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
                    {country.diaryEntries.map( (entry) => {
                        return (
                            <div id="diaryEntry">
                                <div id="spacetimeCotainer">
                                    <p>{entry.location}</p>
                                    <p>{entry.datePosted}</p>
                                </div>
                                <hr></hr>
                                <p id="diaryText">{entry.text}</p>
                            </div>
                        )
                    })}
                </div>
            )
        }else {
            return (
                <div id="contentContainer">
                    {/* <div id="countriesContainer"> */}
                        <div id="diary-countries">
                            { countries.map( (country, index) => {
                                return (
                                    <div key={index} id={country.name} className='diary-country-container' onClick={handleClick}>
                                        <h3>{country.name}</h3>
                                    </div>
                                )
                            })}
                        </div>
                </div>
            )
        }
            
    }

    function hanldeClick () {
        setTargetCountry(false)
    }

    return (
        <div id="diaryPage">
            <div id="diaryPageHeaderImgContainer">
                <h2 className='diaryPageTitle'>Diaries</h2>
                <img src={bgImage}/>
            </div>
            { targetCountry && <button className="backButton" onClick={hanldeClick}>Back To Diaries</button> }
            { switchCountry() }
            { targetCountry && <button className="backButton endButton" onClick={hanldeClick}>Scrooll To The Top</button> }
        </div>
    )
}