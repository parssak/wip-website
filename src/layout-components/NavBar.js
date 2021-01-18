import React from 'react'
import Button from '../minor-components/Button';
import "../styles/NavBar.scss";

export default function NavBar({ currentTheme, toggleTheme, heroFocus, projectFocus, contactFocus, currFocus}) {
    return (
        <div className="navBar">
            {/* <div className={`${currentTheme} tab`}>  */}
                {/* Toggle Theme */}
                {/* <Button theme={currentTheme} text={ "Toggle"}onClick={toggleTheme} /> */}
            {/* </div> */}
            <div className={`contacts-tab tab ${currFocus==='contact' && "currentTab"}`}> Contact </div>
            <div className={`projects-tab tab ${currFocus === 'projects'&& "currentTab"}`}> Projects </div>
            <div className={`welcome-tab tab ${currFocus === 'hero' && "currentTab"}`}> About Me </div>
            
        </div>
    )
}
