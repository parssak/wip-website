import React from 'react'
import Bubble from '../minor-components/Bubble';
import { v4 as uuidv4 } from 'uuid';
import useWindowSize from "@rooks/use-window-size"


export default function Project({ project, clickedImage }) {
    const { innerWidth } = useWindowSize();

    return (
        <div className="project" key={uuidv4()} >
            <header>{project.name}</header>
            <div className="media">
                {
                    innerWidth > 1120 ? project.media.map((media) => (
                        <img src={media} alt="" width="250px" height="150px" key={uuidv4()} onClick={clickedImage} />
                    )) : <img src={project.media[0]} alt="" width="250px" height="150px" />
                }
            </div>
            
            <div className="flex-wrapper">
                <div className="description">
                    <p>
                        {project.description}
                    </p>
                </div>
                <div className="bubbles">
                    <div className="platforms">
                        <h4>Platforms</h4>
                        {project.platforms.map((platform) => (
                            <div className="platform bubble" key={uuidv4()}>
                                {platform}
                            </div>
                        ))}
                    </div>

                    <div className="technologies">
                        <h4>Technologies</h4>
                        {project.tech.map((tech) => (
                            <div className="tech bubble" key={uuidv4()}>
                                {tech}
                            </div>
                        ))}
                    </div>

                    <div className="links">
                        <h4>Links</h4>
                        {project.links.map((link) => (
                            <Bubble text={link.text} link={link.link} key={uuidv4()}/>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
