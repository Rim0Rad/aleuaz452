import { useEffect, useState } from "react"


export default function DiagramButton ( { id, title, data}) {

    const [ isOn, setIsOn ] = useState(false)
    const [ vanButtonOn, setVanButtonOn ] = useState(true)

    const [ vanDataAray, setvanDataArray ] = useState(false)


    useEffect( () => {
        const arr = []
        const infoContainer =  document.getElementById("infoContainerBackdrop" + id)

        if(infoContainer.childNodes[0].childElementCount <= 0){

            for(let key in data){
                infoContainer.childNodes[0].appendChild(createVanInfoBox(id, data, key))
            }
        }
        setvanDataArray(arr)
    },[])

    function handleClick(e) {

        setIsOn(true)
        document.getElementById("infoContainerBackdrop" + id).style.opacity = "1"

    }

    function handleMouseLeave (){
        console.log("mouse leave")
        const style = { opacity: 0}
        console.log(document.getElementById("infoContainerBackdrop" + id).style)
        document.getElementById("infoContainerBackdrop" + id).style.opacity = "0"
    }

    

    return (
        <div id="diagramElementContainer">

            <div id={id} className={`vanButtonContainer ${id}`} >
                { vanButtonOn && 
                    <div id={id}  className="vanButtonOuter" onClick={handleClick}>
                        <div id={id} className="vanButtonInner">
                            <p id={id}>{title}</p>
                        </div>
                    </div>
                }
            </div>

            <div id={`infoContainerBackdrop` + id} className="infoContainerBackdrop" style={{opacity: "0"}} onMouseLeave={handleMouseLeave}>
                <div className="infoContainer" >

                </div>
            </div>
    </div>
    )
}

function createVanInfoBox(id, data, key){

    // Create container
    const container =  document.createElement("div")
    container.classList.add("infoBox")

    // Create key text box
    const keyPara = document.createElement("p")
    const keyText = document.createTextNode(key)
    // keyPara.classList.add("")
    keyPara.appendChild(keyText)
    keyPara.style.maxWidth = "50%";

    // Create separator
    const seperatorContainer = document.createElement("div")
    const separator =  document.createElement("hr")
    separator.classList.add("verticalSeparator")
    seperatorContainer.appendChild(separator)

    // Create value text box
    const valuePara = document.createElement("p")
    const valueText = document.createTextNode(data[key])
    valuePara.appendChild(valueText)
    valuePara.maxWidth = "50%"

    container.appendChild(keyPara)
    container.appendChild(seperatorContainer)
    container.appendChild(valuePara)


    return container;
}