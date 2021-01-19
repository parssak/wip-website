import React from 'react';
import { useSelector} from 'react-redux';


export default function Button({text, onClick, helperClasses, ...props }) {
    const theme = useSelector(state => state.theme);

    return (<>
        <button className={`cta clickable ${theme} ${helperClasses}`} onClick={onClick}>{text}</button>
        </>
    )
}
