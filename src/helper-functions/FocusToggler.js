
let heroFocus = true;
let projectFocus = false;
let contactFocus = false;

const projects = 'projects';
const hero = 'hero';
const contact = 'contact'

const focusToggler = (newFocus, isInView) => {

    if (newFocus === hero && newFocus !== heroFocus) {
        heroFocus = isInView;
        if (isInView) {
            return newFocus;
        } else {
            if (projectFocus) {
                return projects;
            } else if (contactFocus) {
                return contact;
            }
        }
    }
    else if (newFocus === projects && newFocus !== projectFocus) {
        projectFocus = isInView;
        if (isInView) {
            return projects;
        } else {
            if (heroFocus) {
                return hero;
            } else if (contactFocus) {
                return contact;
            }
        }
    }
    else if (newFocus === contact && newFocus !== contactFocus) {
        contactFocus = isInView;
        if (isInView) {
            return contact;
        } else {
            if (heroFocus) {
                return hero;
            } else if (projectFocus) {
                return projects;
            }
        }
    }
}
export default focusToggler;