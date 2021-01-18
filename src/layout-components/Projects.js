import React from 'react'
import Project from './Project';
import { useSelector } from 'react-redux';
import { projects } from '../projects';

export default function Projects() {
    const theme = useSelector(state => state.theme);
    return (
        <div className="projects">
            <div className={`sticky-header ${theme}`}>
                <h3>Projects</h3>
            </div>

            {projects.map((project, x) => (
                // <div className="project" key={"project" + x}>hi</div>
                <Project project={project} x={x} key={"project-component"+x}/>
            ))}
        </div>
    )
}
