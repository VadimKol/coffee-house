import products from '../products.json' assert {type: 'json'};
//=====================PARSING-JSON========================
let grid = document.querySelector(".grid");

let grid_coffee = document.createElement("div");
let grid_tea = document.createElement("div");
let grid_dessert = document.createElement("div");

grid_coffee.classList.add("grid-coffee");
grid_coffee.classList.add("grid--active");
grid_tea.classList.add("grid-tea");
grid_dessert.classList.add("grid-dessert");

grid.append(grid_coffee);
grid.append(grid_tea);
grid.append(grid_dessert);

function CreateGridItem (product) {
    let category = document.querySelector(".grid-" + product.category);
    let category_item = document.createElement("div");
    let category_item_box = document.createElement("div");
    let category_item_box__pic = document.createElement("img");
    category_item.classList.add("grid-" + product.category + "-item");
    category_item.classList.add("grid-" + product.category + "-item-" + i);
    category_item_box.classList.add("grid-" + product.category + "-item-box");
    category_item_box__pic.classList.add("grid-" + product.category + "-item-box__pic");
    category_item_box__pic.src = "img/menu_" + product.category + "/"+ product.category + "-" + i + ".jpg";
    category_item_box__pic.alt = product.name;
    category_item_box__pic.width = 680;
    category_item_box__pic.height = 680;
    i++;
    category.append(category_item);
    category_item.append(category_item_box);
    category_item_box.append(category_item_box__pic);
}
let i = 1;
let prod = products[0].category;
for(let product of products){
    if(prod !== product.category) { //смена категории
        i = 1;
        prod = product.category;
    }
    CreateGridItem(product);
}

let coffeeItem = document.querySelector(".grid-coffee-item");
let teaItem = document.querySelector(".grid-tea-item");
let dessertItem = document.querySelector(".grid-dessert-item");

function AddItemDesc (item, product) {
    let type = document.createElement("p");
    let desc = document.createElement("p");
    let price = document.createElement("p");

    type.append(product.name);
    desc.append(product.description);
    price.append('$' + product.price);

    type.classList.add("grid-" + product.category + "-item__type");
    desc.classList.add("grid-" + product.category + "-item__desc");
    price.classList.add("grid-" + product.category + "-item__price");

    item.append(type);
    item.append(desc);
    item.append(price);
    return item.nextElementSibling;
}
for(let product of products){
    //console.log(product.category, product.name, product.description, product.price);
    if (product.category == 'coffee') {
        coffeeItem = AddItemDesc(coffeeItem, product);
    }
    if (product.category == 'tea') {
        teaItem = AddItemDesc(teaItem, product);
    }
    if (product.category == 'dessert') {
        dessertItem = AddItemDesc(dessertItem, product);
    }
}

//=====================PARSING-JSON========================