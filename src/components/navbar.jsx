import '../style/NavBar.css'

import NavButton from './NavButton.jsx'
import NavDropdown from './NavDropdown'


export default function NavBar ( { id }) {

    

    return (
        <div id={id} className='navbar'>
            <NavButton title="Home" path="home"/>
            <NavDropdown navId={id} title="Adventures" dropdownItems={
                [
                    {title: "Adventure List", path: "/adventures"}, 
                    {title: "Map", path: "/map"}]}/>

            <NavButton title="Diary" path="diary"/>
            {/* <NavDropdown navId={id} title="Publicity" dropdownItems={[{title: "User Photos", path: "/userphotos"}, {title: "Media", path: "/media"}]}/> */}
            <NavDropdown navId={id} title="About" dropdownItems={
                [
                    {title: "Alessandro", path: "/about-me"},
                    {title: "The Van", path: "/van"}, 
                    {title: "Q&A", path: '/questions'}]}/>

            <NavButton title="Contacts" path="contacts"/>
        </div>
    )
}