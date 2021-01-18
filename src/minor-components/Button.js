import React from 'react'

// todo use styled components
export default function Button({theme, text, onClick}) {
    return (<>
        <button className={`cta ${theme}`} onClick={onClick}>{text}</button>
        </>
    )
}
