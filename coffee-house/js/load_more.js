function showCoffee() {
    if (window.innerWidth > "767") {
        document.querySelector(".grid--active").classList.add("show-grid");
    } else {
        document.querySelector(".grid--active").classList.add("show-mobile-grid");
    }
    document.querySelector("#loadCoffee").style.display = "none";
}
function showDessert() {
    if (window.innerWidth > "767") {
        document.querySelector(".grid--active").classList.add("show-grid");
    } else {
        document.querySelector(".grid--active").classList.add("show-mobile-grid");
    }
    document.querySelector("#loadDessert").style.display = "none";
}