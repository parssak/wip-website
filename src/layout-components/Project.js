import React, { useEffect } from 'react'
import Bubble from '../minor-components/Bubble';
import Header from '../minor-components/Header';

export default function Project({ project, x, clickedImage, currentStickyName }) {
    const handleSticky = e => {
        currentStickyName([project.name, e])
    }
    const ref = React.createRef()

    // mount 
    useEffect(() => {
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                ([e]) => {
                    handleSticky(e.boundingClientRect.top < 0 && e.intersectionRect.top === 0);
                },
                { threshold: [1] })

        observer.observe(cachedRef)

        // unmount
        return function () {
            observer.unobserve(cachedRef)
        }
    }, [])

    return (
        <div className="project" key={"project" + x} ref={ref}>
            <Header>{project.name}</Header>

            <div className="media" key={"mediaz-platformz" + x + project.name}>
                {project.media.map((media, x) => (
                    <img src={media} alt="" width="250px" height="150px" key={"media-img" + x + project.name} onClick={clickedImage}/>
                ))}
            </div>
            
            <div className="flex-wrapper" key={"flex-wrapperz" + x + project.name}>
                <div className="description" key={"desc" + x + project.name}>
                    <p>
                        {project.description}
                    </p>
                </div>
                <div className="bubbles" key={"tech-platformz" + x + project.name}>
                    <div className="platforms">
                        <h4>Platforms</h4>
                        {project.platforms.map((platform, x) => (
                            <div className="platform bubble" key={"platform-bubble" + x + project.name}>
                                {platform}
                            </div>
                        ))}
                    </div>

                    <div className="technologies" key={"technologiez" + x + project.name}>
                        <h4>Technologies</h4>
                        {project.tech.map((tech, x) => (
                            <div className="tech bubble" key={"tech-bubble" + x + project.name}>
                                {tech}
                            </div>
                        ))}
                    </div>

                    <div className="links" key={"linkz" + x + project.name}>
                        <h4>Links</h4>
                        {project.links.map((link, x) => (
                            <Bubble text={link.text} link={link.link}/>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
