import React, { useEffect, useState } from 'react'
import Project from './Project';
import { useSelector } from 'react-redux';
import { projects } from '../projects';
const { v4: uuidv4 } = require('uuid');

// let all = [[' ', true]];
// let curr = [' ', true];
export default function Projects({ selectedImage }) {
    const theme = useSelector(state => state.theme);
    // const [currentStickyName, setCurrentStickyName] = useState([' ', true]);
    // const [onMobile, setOnMobile] = useState(false)
    function clickedImage(e) {
        selectedImage(e.target.src);
    }
    // useEffect(() => {
    //    window.addEventListener("touchstart", () => {setOnMobile(true)})
    // }, []);


    return (
        <div className="projects" id="projects">
            <div className={`sticky-header ${theme}`}>
                <h3>Projects
                </h3>
            </div>
            <div className="projects-container">
                {projects.map((project, x) => (
                    <Project project={project} x={x} key={uuidv4()} clickedImage={clickedImage}/>
                ))}
            </div>
        </div>
    )
}
