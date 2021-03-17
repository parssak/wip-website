import React, { useEffect, useState } from 'react'
import Project from './Project';
import { useSelector } from 'react-redux';
import { projects } from '../projects';
let all = [[' ', true]];
let curr = [' ', true];
export default function Projects({ selectedImage }) {
    const theme = useSelector(state => state.theme);
    const [currentStickyName, setCurrentStickyName] = useState([' ', true]);
    const [onMobile, setOnMobile] = useState(false)
    function clickedImage(e) {
        selectedImage(e.target.src);
    }
    
    useEffect(() => {
       window.addEventListener("touchstart", () => {setOnMobile(true)})
    }, []);

    const handle = newProj => {
        if (newProj[1]) {
            all = all.filter(e => e[0] !== newProj[0]);
            all.push(newProj);
            setCurrentStickyName(newProj)
        }
        else if (!newProj[1] && newProj[0] === curr[0]) {
            let foo = projects.map(e => e.name).indexOf(curr[0])
            setCurrentStickyName(foo <= 0 ? [' ', true] : [projects[foo - 1].name, true]);
        }
    }

    useEffect(() => {
        curr = currentStickyName;
    }, [currentStickyName])
    return (
        <div className="projects" id="projects">
            <div className={`sticky-header ${theme}`}>
                
                <h3>Projects
                    {
                        !onMobile && currentStickyName[0] !== ' ' && <span className={'project-name'}>: {currentStickyName[0]}</span>
                    }
                </h3>
                {/* // {`Projects` + (currentStickyName[0] ? ': ' + currentStickyName[0] : ' ')} */}
            </div>
            <div className="projects-container">
                {projects.map((project, x) => (
                    <Project project={project} x={x} key={"project-component" + x} clickedImage={clickedImage} currentStickyName={e => handle(e)} />
                ))}
            </div>
        </div>
    )
}
