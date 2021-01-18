import React from 'react'
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLight, toggleDark } from '../actions';


export default function Toggle({helperClasses}) {
    const theme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    function toggleTheme() {dispatch(theme === 'dark' ? toggleLight() : toggleDark());}

    return (
        <div className={`${helperClasses}`}>
            <Button onClick={() => toggleTheme()} text={"Toggle Theme"} />
        </div>
    )
}
