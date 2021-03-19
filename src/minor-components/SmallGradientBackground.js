import React from 'react'

export default function SmallGradientBackground() {
    return (
        <svg width="70vw" height="100vh" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', zIndex: -1, overflow: 'visible'}}>
            <g>  
                <title>Layer 1</title>
                {/* <ellipse rx="-455.056" ry="432.842" cx="100vw - 10" cy="432.842" transform="translate(1000 279)" stroke-width="0" id="svg_10"opacity="0.3" stroke="#000" fill="url(#paint2_radial)" /> */}
                {/* <ellipse rx="455.056" ry="455.056" cx="0" cy="0" transform="translate(0, 300)" stroke-width="0" id="svg_11" opacity="0.3" stroke="#000" fill="url(#paint3_radial)" /> */}
            </g>
            <defs>
                <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 398.167) rotate(90) scale(432.842 455.056)" >
                    <stop stopColor="#FF693A" />
                    <stop offset="0.59375" stopColor="#F3BBA7" stopOpacity="0.27" />
                    <stop offset="0.902794" stopColor="#F7C15B" stopOpacity="0" />
                    <stop offset="1" stopColor="#F3F0E9" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-5 100) rotate(90) scale(469.977 404.848)">
                    <stop stopColor="#5844D3" />
                    <stop offset="0.59375" stopColor="#F3BBA7" stopOpacity="0.27" />
                    <stop offset="0.876752" stopColor="#F6C068" stopOpacity="0.047296" />
                    <stop offset="1" stopColor="#F3F0E9" stopOpacity="0" />
                </radialGradient>
            </defs>
        </svg>
    )
}
