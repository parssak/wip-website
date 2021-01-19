export const toggleLight = () => {
    console.log("CHANGING TO LIGHT");
    return {
        type: 'light'
    };
};

export const toggleDark = () => {
    console.log("CHANGING TO DARK");
    return {
        type: 'dark'
    };
};