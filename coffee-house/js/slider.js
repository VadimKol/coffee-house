//=================SLIDER===============
let AddListeners = (item) => {
    item.addEventListener('touchstart', handleTouchStart);
    item.addEventListener('touchmove', handleTouchMove);
    item.addEventListener('touchend', handleTouchEnd);
    item.addEventListener('mousedown', handleMouseDown);
    item.addEventListener('mousemove', handleMouseMove);
    item.addEventListener('mouseup', handleMouseUp);
    item.addEventListener('mouseover', handleMouseOver);
    item.addEventListener('mouseout', handleMouseOut);
};
let RemoveListeners = (item) => {
    item.removeEventListener('touchstart', handleTouchStart);
    item.removeEventListener('touchmove', handleTouchMove);
    item.removeEventListener('touchend', handleTouchEnd);
    item.removeEventListener('mousedown', handleMouseDown);
    item.removeEventListener('mousemove', handleMouseMove);
    item.removeEventListener('mouseup', handleMouseUp);
    item.removeEventListener('mouseover', handleMouseOver);
    item.removeEventListener('mouseout', handleMouseOut);

};
const BTN_LEFT = document.querySelector(".slider__btn-left");
const BTN_RIGHT = document.querySelector(".slider__btn-right");
const SLIDER = document.querySelector(".slider");
const FIRST = document.querySelector("#first");
const SECOND = document.querySelector("#second");
const THIRD = document.querySelector("#third");
const FIRST_CONTROL = document.querySelector("#firstControl");
const SECOND_CONTROL = document.querySelector("#secondControl");
const THIRD_CONTROL = document.querySelector("#thirdControl");

//по дибильному сделал, для 3 элементов, больше или меньше элементов и все идет по одному месту
//он работает, но нужен рефактор для разного количества элементов в слайдере
//если добавится 1 элемент, 4 то есть, то надо поменять 2 анимации, и добавить еще 2, чушь кароче
//походу понял как поправить, надо было в css использовать переменную и увеличивать ее на +100% либо уменьшать :(
const moveLeft = () => {
    let activeItem = document.querySelector(".slider-item--active");
    if (activeItem.innerText.includes('5.50')) {
        SLIDER.classList.add("transition-righter");
    } else if (activeItem.innerText.includes('5.00')) {
        SLIDER.classList.add("transition-leftery");
    } else {
        SLIDER.classList.add("transition-left");
    }
    //блокируем кнопки, чтобы не тыкали!
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
    BTN_LEFT.classList.add("disable-btn");
    BTN_RIGHT.classList.add("disable-btn");
    //на время анимации, нужно перестать слушать все события
    RemoveListeners(activeItem);
    let activeProgress = document.querySelector(".progression");
    activeProgress.classList.remove("progression");
};
  
const moveRight = () => {
    let activeItem = document.querySelector(".slider-item--active");
    if (activeItem.innerText.includes('4.50')) {
        SLIDER.classList.add("transition-lefter");
    } else if (activeItem.innerText.includes('5.00')) {
        SLIDER.classList.add("transition-rightery");
    } else {
        SLIDER.classList.add("transition-right");
    }
    //блокируем кнопки, чтобы не тыкали!
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
    BTN_LEFT.classList.add("disable-btn");
    BTN_RIGHT.classList.add("disable-btn");
    //на время анимации, нужно перестать слушать все события
    RemoveListeners(activeItem);
    let activeProgress = document.querySelector(".progression");
    activeProgress.classList.remove("progression");
};
  
BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

SLIDER.addEventListener("animationend", (animationEvent) => {
    let activeItem = document.querySelector(".slider-item--active");
    let activeControl = document.querySelector(".slider-controls__item--active");
    activeItem.classList.remove("slider-item--active");
    activeControl.classList.remove("slider-controls__item--active");
    //очистка от ненужных сдвигов слайдера, анимации, и добавление нужного сдвига и прогрессбара
    if (animationEvent.animationName === "move-left") {
        SLIDER.classList.remove("transition-left");
        SLIDER.classList.remove("right");
        SLIDER.classList.remove("righter");
        SLIDER.classList.remove("lefter");
        SLIDER.classList.add("left");
        SECOND.classList.add("slider-item--active");
        SECOND_CONTROL.classList.add("slider-controls__item--active");
        SECOND_CONTROL.firstElementChild.classList.add("progression");
    } else if (animationEvent.animationName === "move-lefter" || animationEvent.animationName === "move-leftery") {
        SLIDER.classList.remove("transition-lefter");
        SLIDER.classList.remove("transition-leftery");
        SLIDER.classList.remove("right");
        SLIDER.classList.remove("righter");
        SLIDER.classList.remove("left");
        SLIDER.classList.add("lefter");
        FIRST.classList.add("slider-item--active");
        FIRST_CONTROL.classList.add("slider-controls__item--active");
        FIRST_CONTROL.firstElementChild.classList.add("progression");
    } else if (animationEvent.animationName === "move-righter" || animationEvent.animationName === "move-rightery") {
            SLIDER.classList.remove("transition-righter");
            SLIDER.classList.remove("transition-rightery");
            SLIDER.classList.remove("right");
            SLIDER.classList.remove("left");
            SLIDER.classList.remove("lefter");
            SLIDER.classList.add("righter");
            THIRD.classList.add("slider-item--active");
            THIRD_CONTROL.classList.add("slider-controls__item--active");
            THIRD_CONTROL.firstElementChild.classList.add("progression");
    } else {
        SLIDER.classList.remove("transition-right");
        SLIDER.classList.remove("left");
        SLIDER.classList.remove("lefter");
        SLIDER.classList.remove("righter");
        SLIDER.classList.add("right");
        SECOND.classList.add("slider-item--active");
        SECOND_CONTROL.classList.add("slider-controls__item--active");
        SECOND_CONTROL.firstElementChild.classList.add("progression");
    }
    //снова слушаем кнопки, в конце анимации и сдвига слайдера
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
    BTN_LEFT.classList.remove("disable-btn");
    BTN_RIGHT.classList.remove("disable-btn");
    //и в конце анимации нужно снова слушать все события у нового активного элемента
    activeItem = document.querySelector(".slider-item--active");
    AddListeners(activeItem);
})

let active = document.querySelector(".slider-item--active");
AddListeners(active);

let x1 = null;
let xDiff = null;
function handleTouchStart (event) {
    x1 = event.touches[0].clientX;
    document.querySelector(".progression").classList.add("stop-animation");
}

function handleTouchMove (event) {
    let x2 = event.touches[0].clientX;
    xDiff = x2 - x1;
}

function handleTouchEnd () {
    document.querySelector(".progression").classList.remove("stop-animation");
    if (xDiff > 60) { // 60 это ограничение, от сдвига по самой странице вверх и вниз, в среднем там от -10 до 10
        BTN_LEFT.click();
    } else if (xDiff < -60) {
        BTN_RIGHT.click();
    }

    xDiff = null;
    x1 = null;
}
function handleMouseDown (event) {
    x1 = event.clientX;
}

function handleMouseMove (event) {
    let x2 = event.clientX;
    xDiff = x2 - x1;
}

function handleMouseUp () {
    document.querySelector(".progression").classList.remove("stop-animation");
    if (xDiff > 60) { // 60 это ограничение, от сдвига по самой странице вверх и вниз, в среднем там от -10 до 10
        BTN_LEFT.click();
    } else if (xDiff < -60) {
        BTN_RIGHT.click();
    }

    xDiff = null;
    x1 = null;
}

function handleMouseOver () {
    document.querySelector(".progression").classList.add("stop-animation");
}

function handleMouseOut () {
    document.querySelector(".progression").classList.remove("stop-animation");
}
//есть таймер, спустя который происходит клик на правую кнопку
//этот таймер, выглядит как прогресс бар на текущем слайде
let progressBars = document.querySelectorAll(".slider-controls__item");
for (let progress of progressBars)
    progress.firstElementChild.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "progress-bar") {
        let activeProgress = document.querySelector(".slider-controls__item--active").firstElementChild;
        activeProgress.classList.add("progression-back");//а это и есть нормальный случай
        BTN_RIGHT.click();
    }
    if (animationEvent.animationName === "progress-bar-back") {
        let activeProgress = document.querySelector(".progression-back");
        let root = document.documentElement;
        activeProgress.classList.remove("progression-back");
        root.style.setProperty('--left', '0'); //нужно в 0 вернуть обязательно, для нормального случая
    }
});
//при отмене, есть возврат анимации с точки, на которой она остановилась
for (let progress of progressBars)
    progress.firstElementChild.addEventListener("animationcancel", (animationEvent) => {
    if (animationEvent.animationName === "progress-bar") {
        let activeProgress = document.querySelector(".slider-controls__item--active").firstElementChild;
        let root = document.documentElement;
        //20% = 100% / 5s, делать -100 или нет, это уже было видно по самой анимации, остаток или пройденный путь
        root.style.setProperty('--left', (animationEvent.elapsedTime.toFixed(2) * 20 - 100) + "%");
        activeProgress.classList.add("progression-back");
    }
});
//=================SLIDER===============