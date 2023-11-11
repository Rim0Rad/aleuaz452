import { useNavigate } from "react-router-dom"

export default function TravelCard ( { data } ) {

    const navigate = useNavigate();

    function hanldeClick() {
        navigate("/" + data.path )
    }

    const cardStyle = {
        backgroundImage: `url(${data.cardImage})`
    }

    return (
        <div id="travelcardContainer">
            <div className="travelCard" 
                onClick={hanldeClick}
                style={cardStyle}
                >
                <p>{data.name}</p>
                {/* <img src={data.cardImage}/> */}
            </div>
        </div>
    )
}