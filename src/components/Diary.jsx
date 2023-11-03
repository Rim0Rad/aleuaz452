import { useEffect, useState } from 'react';
import '../style/Diary.css'

import bgImage  from '../assets/diary_bg_croped.jpg'

// Will retireve this from back end
import countries from '../data/diary.js'

export default function Diary ( ) {

    
    useEffect( () => {
    }, [])
   

    const [ targetCountry, setTargetCountry ] = useState(false)


    const handleClick  = (e) => {
        if(e.target.id === "Tunisia"){
            setTargetCountry(e.target.id)
        }
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
                                <hr></hr>
                                <div id="spacetimeCotainer">
                                    <p>{entry.location}</p>
                                    <p>{entry.date}</p>
                                </div>
                                <p>{entry.text}</p>
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
                            <div className='diary-country-container' onClick={handleClick}>
                                <h3>Romania</h3>
                            </div>
                            <div className='diary-country-container' onClick={handleClick}>
                                <h3>Moldova</h3>
                            </div>
                            <div className='diary-country-container' onClick={handleClick}>
                                <h3 id="Tunisia">Tunisia</h3>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
            )
        }
            
    }

    return (
        <div id="diaryPage">
            <div id="diaryPageHeaderImgContainer">
                <h2 className='diaryPageTitle'>Diaries</h2>
                <img src={bgImage}/>
            </div>
            { switchCountry() }
        </div>
    )
}