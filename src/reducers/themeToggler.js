const toggleTheme = (state, action) => {
    console.log("hit theme toggler");
    switch (action.type) {
        case 'light':
            return 'light';
        case 'dark':
            return 'dark';
        default: {
            return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ?
                'dark' : 'light'
        }
            
    }
};
export default toggleTheme;