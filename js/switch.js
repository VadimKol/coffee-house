//===============SWITCH CATEGORY=================
let currentgrid = "coffee";
function toggleCategory(){
    document.querySelector(".menu-tab__btn--active").classList.remove("menu-tab__btn--active");
    this.classList.add("menu-tab__btn--active");
    document.querySelector(".grid--active").classList.add("transition-fade-out");
    if (this.lastElementChild.innerText.includes("Coffee")) {
        currentgrid = "coffee";
        document.querySelector("#loadCoffee").classList.remove("hide-btn");
        document.querySelector("#loadDessert").classList.add("hide-btn");
    }
    if (this.lastElementChild.innerText.includes("Tea")) {
        currentgrid = "tea";
        document.querySelector("#loadCoffee").classList.add("hide-btn");
        document.querySelector("#loadDessert").classList.add("hide-btn");
    }
    if (this.lastElementChild.innerText.includes("Dessert")) {
        currentgrid = "dessert";
        document.querySelector("#loadCoffee").classList.add("hide-btn");
        document.querySelector("#loadDessert").classList.remove("hide-btn");
    }
    //отключить клики по категориям на время анимации
    COFFEE.removeEventListener("click", toggleCategory);
    TEA.removeEventListener("click", toggleCategory);
    DESSERT.removeEventListener("click", toggleCategory);
    //на время анимации, отключить сетку продуктов
    GRID.classList.add("disable-grid");
    //ховер еще отключим на время анимации
    //работает быстро, не стоит отключать
    //COFFEE.classList.add("disable-btn");
    //TEA.classList.add("disable-btn");
    //DESSERT.classList.add("disable-btn");
}

const COFFEE = document.querySelector("#coffee");
const TEA = document.querySelector("#tea");
const DESSERT = document.querySelector("#dessert");
const GRID = document.querySelector("#grid")

COFFEE.addEventListener("click", toggleCategory);
TEA.addEventListener("click", toggleCategory);
DESSERT.addEventListener("click", toggleCategory);

for(let child of GRID.children) {
    child.addEventListener("animationend", (animationEvent) => {
        if(animationEvent.animationName === "fadeOut"){
            child.classList.remove("transition-fade-out");
            child.classList.remove("grid--active");
            if (currentgrid === "coffee") {
                document.querySelector(".grid-coffee").classList.add("grid--active");
                document.querySelector(".grid-coffee").classList.add("transition-fade-in");
            }
            if (currentgrid === "tea") {
                document.querySelector(".grid-tea").classList.add("grid--active");
                document.querySelector(".grid-tea").classList.add("transition-fade-in");
            }
            if (currentgrid === "dessert") {
                document.querySelector(".grid-dessert").classList.add("grid--active");
                document.querySelector(".grid-dessert").classList.add("transition-fade-in");
            }
        }
        if(animationEvent.animationName === "fadeIn"){
            child.classList.remove("transition-fade-in");
            //вернуть обратно, в конце анимации
            GRID.classList.remove("disable-grid");
            //COFFEE.classList.remove("disable-btn");
            //TEA.classList.remove("disable-btn");
            //DESSERT.classList.remove("disable-btn");
            COFFEE.addEventListener("click", toggleCategory);
            TEA.addEventListener("click", toggleCategory);
            DESSERT.addEventListener("click", toggleCategory);
        }
    });
}
//===============SWITCH CATEGORY=================