import React from 'react'
import Button from '../minor-components/Button'
import { Link } from 'react-scroll';
import Toggle from '../minor-components/Toggle';
import Socials from '../minor-components/Socials';

export default function Hero() {
    return (
        <div className="hero" id="hero">
            <div className="hero-text">
                <h1>Hi, I'm Parssa  <span className="wave noselect"> 👋</span></h1>
                <p>I am a math/cs student at the University of Toronto. I'm passionate about game development, web development, design, and UI/UX.</p>
                <p> I'm currently looking for an internship for summer 2021, and would love to work on any projects relating to front-end, full-stack, or app development. </p>
                <div className="hero-flex-wrapper">
                    <div className="hero-cta clickable mobile">
                        <Link activeClass="active" to="projects" spy={true} smooth={true}>
                            <Button text={"My Projects"} />
                        </Link>
                    </div>
                    
                    <div className="hero-cta clickable mobile">
                        <Link activeClass="active" to="contact" spy={true} smooth={true}>
                            <Button text={"Contact Me"} />
                        </Link>
                    </div>
                    <div className="mobile">
                        <Toggle className="hero-toggle" />
                    </div>
                    <Socials helperClasses={"desktop-only"}/>
                </div>
            </div>
        </div>
    )
}
