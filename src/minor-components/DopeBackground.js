function DopeBackground() {
    return (
        <div className="dope-bg" style={{ position: 'absolute', maxWidth: '99vw', overflow: "overflow", margin: 0 }}>
            <svg width='95vw' height="1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <rect width="100vw" height="1024" fill="none"/>
                    <ellipse opacity="0.35" cx="-5.66509" cy="398.167" rx="455.056" ry="432.842" transform="rotate(-31.116 -5.66509 398.167)" fill="url(#paint0_radial)" />
                    <ellipse opacity="0.35" cx="39.5973" cy="29.8937" rx="804.848" ry="569.977" transform="rotate(-31.116 39.5973 29.8937)" fill="url(#paint1_radial)" />
                </g>
                <defs>
                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-5.66513 398.167) rotate(90) scale(432.842 455.056)">
                        <stop stopColor="#FF693A" />
                        <stop offset="0.59375" stopColor="#F3BBA7" stopOpacity="0.27" />
                        <stop offset="0.902794" stopColor="#F7C15B" stopOpacity="0" />
                        <stop offset="1" stopColor="#F3F0E9" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.5972 29.8937) rotate(90) scale(569.977 804.848)">
                        <stop stopColor="#5844D3" />
                        <stop offset="0.59375" stopColor="#F3BBA7" stopOpacity="0.27" />
                        <stop offset="0.876752" stopColor="#F6C068" stopOpacity="0.047296" />
                        <stop offset="1" stopColor="#F3F0E9" stopOpacity="0" />
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