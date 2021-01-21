import React from 'react'
export default function Popup({ currImage, removeImage }) {
    return (
        <>
            <div className="popup" onClick={() => removeImage()}>
                <img src={currImage} onClick={() => removeImage()} alt=""></img>
            </div>
        </>
    )
}
