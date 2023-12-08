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