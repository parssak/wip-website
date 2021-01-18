import React from 'react'

export default function Project({ project, x, theme }) {
    return (
        <div className="project" key={"project" + x}>
            <div className={`title sticky-subheader ${theme}`} key={"title" + x}>
                <h3>{project.name}</h3>
            </div>

            <div className="media">
                {project.media.map((media, x) => (
                    <img src={media} alt="" width="250px" height="150px" key={"media" + x} />
                ))}
            </div>

            <div className="flex-wrapper">
                <div className="description" key={"desc" + x}>
                    <p>
                        {project.description}
                    </p>
                </div>
                <div className="bubbles">
                    <div className="platforms">
                        <h4>Platforms</h4>
                        {project.platforms.map((platform, x) => (
                            <div className="platform bubble" key={"platform-bubble" + x}>
                                {platform}
                            </div>
                        ))}
                    </div>

                    <div className="technologies">
                        <h4>Technologies</h4>
                        {project.tech.map((tech, x) => (
                            <div className="tech bubble" key={"tech-bubble" + x}>
                                {tech}
                            </div>
                        ))}
                    </div>

                    <div className="links">
                        <h4>Links</h4>
                        {project.links.map((link, x) => (
                            <div className="link bubble" key={"link" + x}>
                                {link.text}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
