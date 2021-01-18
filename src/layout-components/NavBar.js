import React from 'react'
import "../styles/NavBar.scss";
import Toggle from '../minor-components/Toggle';
import { Link } from 'react-scroll';
import { useSelector } from 'react-redux';

export default function NavBar({ heroFocus, projectFocus, contactFocus, currFocus }) {
    const theme = useSelector(state => state.theme);

    return (
        <div className="navBar">
            <Toggle helperClasses={"tilted"} />

            <Link activeClass="active" to="contact" spy={true} smooth={true}>
                <div className={`tab tilted clickable ${currFocus === 'contact' && `currentTab ${theme}`}`}>
                    Contact Me
                </div>
            </Link>
            
            <Link activeClass="active" to="projects" spy={true} smooth={true}>
                <div className={`tab tilted clickable ${currFocus === 'projects' && `currentTab ${theme}`}`}>Projects</div>
            </Link>

            <Link activeClass="active" to="hero" spy={true} smooth={true}>
                <div className={`tab tilted clickable ${currFocus === 'hero' && `currentTab ${theme}`}`}>
                    About Me
                </div>
            </Link>

        </div>
    )
}
