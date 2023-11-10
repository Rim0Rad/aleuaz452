
import { useEffect, useState } from 'react';
import '../style/Adventure.css'
import { useNavigate } from "react-router-dom"

import diaries from "../data/diary.js"


export default function  Adventure ( { data }) {

    // TODO: add filler for when the photos are loading
    // TODO: add in videos

    const navigate = useNavigate();

    const [ isDiaryEntry, setIsDiaryEntry ] = useState(false)


    // enable got to diary entry button if diary exists
    useEffect(()=> {
        if(diaries.find( entry => {
            return entry.name === data.name
        })){
            setIsDiaryEntry(true)
        }
    }, [])

    function handleGoBack () {
        navigate("/adventures")
    }
    function handleGotoDiaries() {
        navigate(`/diary:${data.name}`)
    }

    function loadImages () {
        const imgs = data.images.map( ( image, index ) => {
            return <img key={index} src={image} />
        })
        return imgs;
    }

    return (
        <div id="adventurePage">
            <div className="pageHeader">
                <img  src={data.cardImage}/>
                <h2>{data.name}</h2>
            </div>
            <div id="contentContainer">
                <button className="backButton" onClick={handleGoBack}>Back To Adventures</button>
                {isDiaryEntry && <button className="backButton" onClick={handleGotoDiaries}>Diaries</button>}
                <div id="photoContainer">
                    {loadImages()}
                </div>
            </div>
        </div>
    )
}