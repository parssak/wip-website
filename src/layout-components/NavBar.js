import React from 'react'
import "../styles/NavBar.scss";
import Toggle from '../minor-components/Toggle';
export default function NavBar({heroFocus, projectFocus, contactFocus, currFocus}) {
    return (
        <div className="navBar">
            <Toggle helperClasses={"tilted"}/>
            <div className={`tab tilted ${currFocus==='contact' && "currentTab"}`}> Contact </div>
            <div className={`tab tilted ${currFocus === 'projects'&& "currentTab"}`}> Projects </div>
            <div className={`tab tilted ${currFocus === 'hero' && "currentTab"}`}> About Me </div>
        </div>
    )
}
