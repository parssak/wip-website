import React from 'react'
import Project from './Project';
import { useSelector } from 'react-redux';
import { projects } from '../projects';

export default function Projects({selectedImage}) {
    const theme = useSelector(state => state.theme);

    function clickedImage(e) {
        selectedImage(e.target.src);
    }

    return (
        <div className="projects" id="projects">
            <div className={`sticky-header ${theme}`}>
                <h3>Projects</h3>
            </div>
            {projects.map((project, x) => (
                <Project project={project} x={x} key={"project-component" + x} clickedImage={clickedImage}/>
            ))}
        </div>
    )
}
