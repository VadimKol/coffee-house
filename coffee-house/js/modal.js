import products from '../products.json' assert {type: 'json'};
import {CreateModal} from './menu.js';

for(let child of document.querySelector("#grid").children) { //3 сетки кофе, чай и десерт 
    for(let item of child.children) {
        item.addEventListener("click", showModal);
    }
}
let isModal = false;
let isBtnClose = false;

window.closeModal = function () { //так как модуль, видимость модуля, нужно функцию сделать глобальной
    if ((isBtnClose && isModal) || (!isModal && !isBtnClose)){//закрываем если кликаем на кнопку в модалке, или не на модалку и не на кнопку
        document.querySelector(".modal").classList.remove("show-modal");
        document.body.classList.remove("disable-scrolling");
        document.querySelector(".modal-item").removeEventListener("click", isInModal);
        document.querySelector(".modal-item-info__btn-close").removeEventListener("mousedown", isInBtnCLose);
        document.querySelector(".modal-item").innerHTML = ''; //уничтожаем все внутри
    }
    //обнуляем состояния чекеров при попытке закрыть окно
    isModal = false;
}
function showModal() {
    isBtnClose = false;//обнуляем чекер кнопки здесь, при открытии новой модалки, защита от двойного закрытия
    document.querySelector(".modal").classList.add("show-modal");
    document.body.classList.add("disable-scrolling");
    CreateModal(this, products, document.querySelector(".modal-item"));
    document.querySelector(".modal-item").addEventListener("click", isInModal);
    document.querySelector(".modal-item-info__btn-close").addEventListener("mousedown", isInBtnCLose);

    function toggleSize(){
        document.querySelector(".modal-item-info-list-s__btn--active").classList.remove("modal-item-info-list-s__btn--active");
        this.classList.add("modal-item-info-list-s__btn--active");
        calcTotalPrice();
    }

    function toggleAdditives(){
        this.classList.toggle("modal-item-info-list-a__btn--active");
        calcTotalPrice();
    }
    function calcTotalPrice(){
        let basePrice = document.querySelector(".current-price").innerText;
        let totalPrice = document.querySelector(".modal-item-info-total__price");
        let activeSizePrice = document.querySelector(".modal-item-info-list-s__btn--active").querySelector(".hidden_price").innerText;
        let allActiveAdditives = document.querySelectorAll(".modal-item-info-list-a__btn--active");
        let allAdditivesPrice = 0;
        for(let add of allActiveAdditives) {
            allAdditivesPrice += Number(add.querySelector(".hidden_price").innerText);
        }
        totalPrice.innerText = '$' +(Number(basePrice) + Number(activeSizePrice) + allAdditivesPrice).toFixed(2);
    }

    const S = document.querySelector("#S");
    const M = document.querySelector("#M");
    const L = document.querySelector("#L");
    const ADD_1 = document.querySelector("#add-1");
    const ADD_2 = document.querySelector("#add-2");
    const ADD_3 = document.querySelector("#add-3");
    
    S.addEventListener("click", toggleSize);
    M.addEventListener("click", toggleSize);
    L.addEventListener("click", toggleSize);
    ADD_1.addEventListener("click", toggleAdditives);
    ADD_2.addEventListener("click", toggleAdditives);
    ADD_3.addEventListener("click", toggleAdditives);
}
function isInModal() {
    isModal = true;
}
function isInBtnCLose() {
    isBtnClose = true;
}