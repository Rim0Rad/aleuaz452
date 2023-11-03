import { useEffect} from 'react';

import bgImage from '../assets/header_bg.png'
import '../style/HomePage.css'


export default function Home () {
    
    useEffect( () => {
        window.addEventListener("wheel", scrollDownToElement)
        return () => {
            window.removeEventListener("wheel", scrollDownToElement)
        }
    }, [])

    
    function scrollDownToElement (e) {
        const homeBottom = document.getElementById("homeBottom")
        if(e.deltaY > 0){
            document.getElementsByClassName("navbar")[0].id = "navbar"
            homeBottom.style.position = "absolute"
            homeBottom.style.top = "0vh"
        }else{
            document.getElementsByClassName("navbar")[0].id = "navbar-home"
            homeBottom.style.top = "100vh"
        
        }
        window.removeEventListener("wheel", scrollDownToElement)
        setTimeout( ()=> {
            window.addEventListener("wheel", scrollDownToElement)
        }, 1000)
    }

    return (
        <div id="homepage">
            <div id="homeTop">
                <img src={bgImage}/>
            </div>
            <div id="homeBottom">
                <p>Some text about the vebpage. (to be writen by Ale)</p>
            </div>
        </div>
    )
}