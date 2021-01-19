import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLight, toggleDark } from '../actions';


export default function UserThemeListener() {
    const [mode, setMode] = useState(
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    );

    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    useEffect(() => {
        const modeMe = (e) => {
            console.log("CHANGED", e);
            setMode(e.matches ? "dark" : "light");
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', modeMe);
        console.log("got:", mode, "and theme is:", theme);
        if (theme !== mode) {
            console.log("changing theme to", mode);
            // toggleLight();
            // dispatch(mode === 'dark' ? toggleDark() : toggleDark());
        }
        return window.matchMedia('(prefers-color-scheme: dark)').removeListener(modeMe);

    }, []);

    useEffect(() => {
        console.log("hit effect");
        dispatch(mode === 'dark' ? toggleDark(): toggleLight());
    }, [mode]);

  
    return null;
}
