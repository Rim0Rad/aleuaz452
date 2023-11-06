
import '../style/Adventure.css'
import { useLocation, useNavigate } from "react-router-dom"


export default function  Adventure ( { data }) {

    const navigate = useNavigate();
    const location = useLocation()

    function handleGoBack () {
        navigate("/adventures")
    }
    function handleGotoDiaries() {
        
        navigate(`/diary:${data.name}`)
    }

    return (
        <div id="adventurePage">
            <div className="pageHeader">
                <img  src={data.cardImage}/>
                <h2>{data.name}</h2>
            </div>
            <div id="contentContainer">
                <button className="backButton" onClick={handleGoBack}>Back To Adventures</button>
                <button className="backButton" onClick={handleGotoDiaries}>Diaries</button>
                <div id="photoContainer">
                    {data.images.map( ( image, index ) => {
                        return <img key={index} src={image}/>
                    })}
                </div>
                
                {/*                 
                { adventuresData.tunisia.entries.map( entry => {
                    return <AdventureEntry data={entry}/>
                })} */}
            </div>
    
        </div>
    )
}