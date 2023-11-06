import { useNavigate } from "react-router-dom"

export default function TravelCard ( { data } ) {

    const navigate = useNavigate();

    function hanldeClick() {
        navigate("/" + data.path )
    }

    return (
        <div id="travelcardContainer">

            <div className="travelCard" 
                onClick={hanldeClick}
                >
                <p>{data.name}</p>
                <img src={data.cardImage}/>
            </div>
        </div>
    )
}