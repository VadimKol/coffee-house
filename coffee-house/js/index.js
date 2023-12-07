const addClass = (to, which_class) => document.querySelector(to).classList.add(which_class);
const removeClass = (from, which_class) => document.querySelector(from).classList.remove(which_class);
function ShowMobileMenu() {
    removeClass(".nav-btn-mobile-equal", "active-btn");
    removeClass(".nav-btn-mobile-cross", "disable-btn");
    removeClass(".nav--mobile", "disable-mobile");

    addClass(".nav-btn-mobile-equal", "disable-btn");
    addClass(".nav-btn-mobile-cross", "active-btn");
    addClass(".nav--mobile", "active-mobile");
}
function HideMobileMenu() {
    removeClass(".nav-btn-mobile-equal", "disable-btn");
    removeClass(".nav-btn-mobile-cross", "active-btn");
    removeClass(".nav--mobile", "active-mobile");

    addClass(".nav-btn-mobile-equal", "active-btn");
    addClass(".nav-btn-mobile-cross", "disable-btn");
    addClass(".nav--mobile", "disable-mobile");
}
function HideMobile(){
    if (window.innerWidth > "835") {
        removeClass(".nav-btn-mobile-equal", "disable-btn");
        removeClass(".nav-btn-mobile-cross", "disable-btn");
        removeClass(".nav-btn-mobile-equal", "active-btn");
        removeClass(".nav-btn-mobile-cross", "active-btn");
        removeClass(".nav--mobile", "active-mobile");
        removeClass(".nav--mobile", "disable-mobile");
    }
}

window.onresize = HideMobile;

let start = "Start new task!";