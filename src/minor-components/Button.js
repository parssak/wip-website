import React from 'react';
import { useSelector} from 'react-redux';


export default function Button({text, onClick, ...props }) {
    const theme = useSelector(state => state.theme);

    return (<>
        <button className={`cta clickable ${theme}`} onClick={onClick}>{text}</button>
        </>
    )
}
