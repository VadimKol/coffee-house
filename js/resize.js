//=================RESIZE-MENU===============
window.onresize = () => {
    //этот код можно либо убрать, либо оставить, хз
    removeClass(".grid-coffee", "show-mobile-grid");
    removeClass(".grid-dessert", "show-mobile-grid");
    removeClass(".grid-coffee", "show-grid");
    removeClass(".grid-dessert", "show-grid");
    document.querySelector("#loadCoffee").removeAttribute("style");
    document.querySelector("#loadDessert").removeAttribute("style");
    let active_tab = document.querySelector(".menu-tab__btn--active");
    if (active_tab.lastElementChild.innerText.includes("Coffee")) {
        removeClass("#loadCoffee", "hide-btn");
        addClass("#loadDessert", "hide-btn");
    }
    if (active_tab.lastElementChild.innerText.includes("Tea")) {
        addClass("#loadCoffee", "hide-btn");
        addClass("#loadDessert", "hide-btn");
    }
    if (active_tab.lastElementChild.innerText.includes("Dessert")) {
        addClass("#loadCoffee", "hide-btn");
        removeClass("#loadDessert", "hide-btn");
    }
};
//=================RESIZE-MENU===============