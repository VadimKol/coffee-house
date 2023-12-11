const addClass = (to, which_class) => document.querySelector(to).classList.add(which_class);
const removeClass = (from, which_class) => document.querySelector(from).classList.remove(which_class);
const toggleClass = (from, which_class) => document.querySelector(from).classList.toggle(which_class);

//=================BUTTON-MENU===============
function ToggleMobileMenu() {
    toggleClass(".nav-btn-mobile-equal","cross-btn");
    toggleClass(".nav--mobile", "active-mobile");
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

//=================VIDEO===============
let video = document.querySelector(".enjoy-video");

if (window.innerWidth > "1920") {
    video.setAttribute('src', 'video/video (2160p).mp4');
} else if (window.innerWidth > "1440") {
    video.setAttribute('src', 'video/video (1440p).mp4');
} else if (window.innerWidth > "1080") {
    video.setAttribute('src', 'video/video (1080p).mp4');
} else if (window.innerWidth > "720") {
    video.setAttribute('src', 'video/video (720p).mp4');
} else if (window.innerWidth > "540") {
    video.setAttribute('src', 'video/video (540p).mp4');
} else if (window.innerWidth > "360") {
    video.setAttribute('src', 'video/video (360p).mp4');
} else {
    video.setAttribute('src', 'video/video (240p).mp4');
}
video.load();
video.play();
//=================VIDEO===============