import React from 'react'
import Button from '../minor-components/Button'

export default function Hero({theme}) {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>Hi, I'm Parssa 👋</h1>
                <p>I am a math/cs student at the University of Toronto. I'm passioniate about game development, web development, design, and UI/UX.</p>
                <p> I'm currently looking for an internship for summer 2021, and would love to work on any projects relating to front-end, full-stack, or app development. </p>
                <Button theme={theme} text={"Contact Me"} onClick={() => console.log("Hit Contact Me")}/>
            </div>
            <div className="hero-img">
                {/* <img src="./memoji.png" alt="aaaa" width="250px" height="250px"></img> */}
            </div>
        </div>
    )
}
