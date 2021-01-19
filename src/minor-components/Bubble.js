import React from 'react'
// key={"link" + x + project.name}
export default function Bubble({ text, link }) {

    return (
        <button
            className="link bubble clickable"
            onClick={() => window.open(link, "_blank")}
        >{text}</button>
    )
}
