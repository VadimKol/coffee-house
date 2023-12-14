const addClass = (to, which_class) => document.querySelector(to).classList.add(which_class);
const removeClass = (from, which_class) => document.querySelector(from).classList.remove(which_class);
const toggleClass = (from, which_class) => document.querySelector(from).classList.toggle(which_class);

//=================BUTTON-MENU===============
function ToggleMobileMenu() {
    toggleClass(".nav-btn-mobile-equal","cross-btn");
    toggleClass(".nav--mobile", "active-mobile");
    toggleClass("body","overflow-body");
}
//=================BUTTON-MENU===============

//=================RESIZE===============
window.onresize = () => {
    if (window.innerWidth > "768") {
        removeClass(".nav-btn-mobile-equal", "cross-btn");
        removeClass(".nav--mobile", "active-mobile");
    }
};
//=================RESIZE===============