import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"



export default function NavDropdown ( { title, dropdownItems, navId } ) {

    const navigate = useNavigate();

    const [ adventureTab, setAdventureTab ] = useState(false)

    useEffect(() => {}, [adventureTab])

    const handleMouseEnter = () => {
        setAdventureTab(true)
    }
    const handleMouseLeave = () => {
        setAdventureTab(false)
    }


    function openDropdown() {
        if(navId === "navbar-home"){
            return (
                <div id={title} className='menuDropDown'
                    style={{bottom: "100px"}}
                >
                    { dropdownItems.map(  (item, index) => {
                        return (
                            <p key={index} onClick={ () => {
                                    navigate(item.path)
                                }}
                            >{item.title}</p>
                        )
                    })}
                </div>
            )
        }else{
            return (
                <div id={title} className='menuDropDown'
                    style={{top:"100px"}}
                >
                    { dropdownItems.map(  (item, index) => {
                        return (
                            <p key={index} onClick={ () => {
                                    navigate(item.path)
                                }}
                            >{item.title}</p>
                        )
                    })}
                </div>
            )
        }
    }

    return (

        <div className='dropDownContainer'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
        >
            <p className='dropDownButton'>{title}</p>
            { adventureTab && openDropdown()}

        </div>
    )
}