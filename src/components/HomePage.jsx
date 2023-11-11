import { useEffect, useState} from 'react';

import bgImage from '../assets/header_bg.png'
import '../style/HomePage.css'


export default function Home () {

    // TODO: make scrolling into overview of the page with links to each page


    // const [ isTop, setIsTop ] = useState(true)
    
    // useEffect( () => {
    //     window.addEventListener("wheel", scrollDownToElement)
    //     return () => {
    //         window.removeEventListener("wheel", scrollDownToElement)
    //     }
    // }, [])

    
    // function scrollDownToElement (e) {
    //     const homeBottom = document.getElementById("homeBottom")
    //     if(e.deltaY > 0){
    //         document.getElementsByClassName("navbar")[0].id = "navbar"
    //         homeBottom.style.position = "absolute"
    //         homeBottom.style.top = "0vh"
    //         console.log(document.getElementsByClassName("navbar")[0].id)
    //         setIsTop(false)
    //         console.log("change state")

    //     }else{
    //         document.getElementsByClassName("navbar")[0].id = "navbarBottom"

    //         console.log(document.getElementsByClassName("navbar")[0].id)
    //         homeBottom.style.top = "100vh"
    //         setIsTop(true)

        
    //     }
    //     window.removeEventListener("wheel", scrollDownToElement)
    //     setTimeout( ()=> {
    //         window.addEventListener("wheel", scrollDownToElement)
    //     }, 1000)
    // }

    const bgStyle = {
        backgroundImage: `url(${bgImage})`,
    }

    return (
        <div id="homepage">
            <div id="homeTop" className='backgroundContainer' style={bgStyle}>
                {/* <img src={bgImage}/> */}
            </div>
            {/* <div id="homeBottom">
                <p>Some text about the vebpage. (to be writen by Ale)</p>
            </div> */}
        </div>
    )
}