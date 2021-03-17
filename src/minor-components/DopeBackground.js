function DopeBackground() {
    return (
        <div className="dope-bg" style={{ position: 'absolute', maxWidth: '100vw' }}>
            <svg width='90vw' height="1024" viewBox="0 0 100vw 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                    <rect width="100vw" height="1024" fill="none" />
                    <ellipse opacity="0.35" cx="-5.66509" cy="398.167" rx="455.056" ry="432.842" transform="rotate(-31.116 -5.66509 398.167)" fill="url(#paint0_radial)" />
                    <ellipse opacity="0.35" cx="39.5973" cy="29.8937" rx="804.848" ry="569.977" transform="rotate(-31.116 39.5973 29.8937)" fill="url(#paint1_radial)" />
                </g>
                <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-5.66513 398.167) rotate(90) scale(432.842 455.056)">
                        <stop stop-color="#FF693A" />
                        <stop offset="0.59375" stop-color="#F3BBA7" stop-opacity="0.27" />
                        <stop offset="0.902794" stop-color="#F7C15B" stop-opacity="0" />
                        <stop offset="1" stop-color="#F3F0E9" stop-opacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.5972 29.8937) rotate(90) scale(569.977 804.848)">
                        <stop stop-color="#5844D3" />
                        <stop offset="0.59375" stop-color="#F3BBA7" stop-opacity="0.27" />
                        <stop offset="0.876752" stop-color="#F6C068" stop-opacity="0.047296" />
                        <stop offset="1" stop-color="#F3F0E9" stop-opacity="0" />
                    </radialGradient>
                    <clipPath id="clip0">
                        <rect width="100vw" height="1024" fill="#000000" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default DopeBackground;