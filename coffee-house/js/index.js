const addClass = (to, which_class) => document.querySelector(to).classList.add(which_class);
const removeClass = (from, which_class) => document.querySelector(from).classList.remove(which_class);
const toggleClass = (from, which_class) => document.querySelector(from).classList.toggle(which_class);

//const afterTransition = (element, callback) => { // НЕ МОЯ НЕЛЬЗЯ
    //element.addEventListener('transitionend', callback, false);
//};

function ToggleDisplayMobile() {
    toggleClass(".nav--mobile", "display-mobile");
}
function ToggleActiveMobile() {
    toggleClass(".nav--mobile", "active-mobile");
}
function ToggleMobileMenu() {
    toggleClass(".nav-btn-mobile-equal","cross-btn");
    toggleClass(".nav--mobile", "active-mobile");
/*
    //setTimeout(function request() {
      
        if (document.querySelector(".nav--mobile").classList[3] === "active-mobile") {
            setTimeout(ToggleDisplayMobile, 800);
            //document.querySelector(".nav--mobile").transition().on("end", ToggleDisplayMobile);
            //afterTransition(document.querySelector(".nav--mobile"),ToggleDisplayMobile);
            //console.log(3000);
        } else {
            //setTimeout(ToggleDisplayMobile);
            ToggleDisplayMobile();
            //document.querySelector(".nav--mobile").removeEventListener('transitionend', ToggleDisplayMobile, false);
            //console.log(1000);
        }
        setTimeout(ToggleActiveMobile, 50); // не пойму почему сдвига нет, это время самой анимации чтоли
        //ToggleActiveMobile();// не работает transition  не пойму нифига
      //});
      */
}
function HideMobile(){
    if (window.innerWidth > "768") {
        removeClass(".nav-btn-mobile-equal", "cross-btn");
        removeClass(".nav--mobile", "active-mobile");
        removeClass(".nav--mobile", "display-mobile");
    }
}

window.onresize = HideMobile;


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
/*console.log({
    src: video.getAttribute('src'),
    type: video.getAttribute('type'),
  });*/