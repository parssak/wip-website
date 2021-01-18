const toggleTheme = (state, action) => {
    switch (action.type) {
        case 'light':
            return 'light';
        case 'dark':
            return 'dark';
        default:
            return 'dark';
    }
};
export default toggleTheme;