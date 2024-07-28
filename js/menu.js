import { products } from "./products.js";
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

function CreateGridItem(product) {
  let category = document.querySelector(".grid-" + product.category);
  let category_item = document.createElement("div");
  let category_item_box = document.createElement("div");
  let category_item_box__pic = document.createElement("img");
  category_item.classList.add("grid-" + product.category + "-item");
  category_item.classList.add("grid-" + product.category + "-item-" + i);
  category_item_box.classList.add("grid-" + product.category + "-item-box");
  category_item_box__pic.classList.add(
    "grid-" + product.category + "-item-box__pic"
  );
  category_item_box__pic.src =
    "img/menu_" + product.category + "/" + product.category + "-" + i + ".jpg";
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
for (let product of products) {
  if (prod !== product.category) {
    //смена категории
    i = 1;
    prod = product.category;
  }
  CreateGridItem(product);
}

let coffeeItem = document.querySelector(".grid-coffee-item");
let teaItem = document.querySelector(".grid-tea-item");
let dessertItem = document.querySelector(".grid-dessert-item");

function AddItemDesc(item, product) {
  let type = document.createElement("p");
  let desc = document.createElement("p");
  let price = document.createElement("p");

  type.append(product.name);
  desc.append(product.description);
  price.append("$" + product.price);

  type.classList.add("grid-" + product.category + "-item__type");
  desc.classList.add("grid-" + product.category + "-item__desc");
  price.classList.add("grid-" + product.category + "-item__price");

  item.append(type);
  item.append(desc);
  item.append(price);
  return item.nextElementSibling;
}
for (let product of products) {
  //console.log(product.category, product.name, product.description, product.price);
  if (product.category == "coffee") {
    coffeeItem = AddItemDesc(coffeeItem, product);
  }
  if (product.category == "tea") {
    teaItem = AddItemDesc(teaItem, product);
  }
  if (product.category == "dessert") {
    dessertItem = AddItemDesc(dessertItem, product);
  }
}

//=====================PARSING-JSON========================

//====================CREATE-MODAL=========================
export function CreateModal(item, products, element) {
  let type;
  for (let product of products) {
    type = item.querySelector(".grid-" + product.category + "-item__type");
    if (type !== null && type.innerText === product.name) {
      let src = item.querySelector(
        ".grid-" + product.category + "-item-box__pic"
      ).src;
      let modal_item__pic = document.createElement("img");
      let modal_item_info = document.createElement("div");
      modal_item_info.classList.add("modal-item-info");
      modal_item__pic.classList.add("modal-item__pic");
      modal_item__pic.src = src.slice(src.indexOf("coffee-house") + 13); //13 это подрезать место картинки, без http и другой инфы
      modal_item__pic.alt = product.name;
      modal_item__pic.width = 680;
      modal_item__pic.height = 680;

      let modal_item_info__type = document.createElement("p");
      modal_item_info__type.classList.add("modal-item-info__type");
      modal_item_info__type.append(product.name);
      modal_item_info.append(modal_item_info__type);

      let modal_item_info__desc = document.createElement("p");
      modal_item_info__desc.classList.add("modal-item-info__desc");
      modal_item_info__desc.append(product.description);
      modal_item_info.append(modal_item_info__desc);

      let modal_item_info__size = document.createElement("p");
      modal_item_info__size.classList.add("modal-item-info__size");
      modal_item_info__size.append("Size");
      modal_item_info.append(modal_item_info__size);

      let modal_item_info_list_s = document.createElement("ul");
      modal_item_info_list_s.classList.add("modal-item-info-list-s");

      let li = document.createElement("li");
      let modal_item_info_list_s__btn = document.createElement("button");
      modal_item_info_list_s__btn.classList.add("modal-item-info-list-s__btn");
      modal_item_info_list_s__btn.classList.add(
        "modal-item-info-list-s__btn--active"
      );
      modal_item_info_list_s__btn.id = "S";
      modal_item_info_list_s__btn.type = "button";
      let span = document.createElement("span");
      span.append("S");
      modal_item_info_list_s__btn.append(span);
      let hidden_price = document.createElement("p");
      hidden_price.classList.add("hidden_price");
      hidden_price.append(product.sizes.s["add-price"]);
      modal_item_info_list_s__btn.append(hidden_price);
      modal_item_info_list_s__btn.append(product.sizes.s.size);
      li.append(modal_item_info_list_s__btn);

      modal_item_info_list_s.append(li);

      li = document.createElement("li");
      modal_item_info_list_s__btn = document.createElement("button");
      modal_item_info_list_s__btn.classList.add("modal-item-info-list-s__btn");
      modal_item_info_list_s__btn.id = "M";
      modal_item_info_list_s__btn.type = "button";
      span = document.createElement("span");
      span.append("M");
      modal_item_info_list_s__btn.append(span);
      hidden_price = document.createElement("p");
      hidden_price.classList.add("hidden_price");
      hidden_price.append(product.sizes.m["add-price"]);
      modal_item_info_list_s__btn.append(hidden_price);
      modal_item_info_list_s__btn.append(product.sizes.m.size);
      li.append(modal_item_info_list_s__btn);

      modal_item_info_list_s.append(li);

      li = document.createElement("li");
      modal_item_info_list_s__btn = document.createElement("button");
      modal_item_info_list_s__btn.classList.add("modal-item-info-list-s__btn");
      modal_item_info_list_s__btn.id = "L";
      modal_item_info_list_s__btn.type = "button";
      span = document.createElement("span");
      span.append("L");
      modal_item_info_list_s__btn.append(span);
      hidden_price = document.createElement("p");
      hidden_price.classList.add("hidden_price");
      hidden_price.append(product.sizes.l["add-price"]);
      modal_item_info_list_s__btn.append(hidden_price);
      modal_item_info_list_s__btn.append(product.sizes.l.size);
      li.append(modal_item_info_list_s__btn);

      modal_item_info_list_s.append(li);

      modal_item_info.append(modal_item_info_list_s);

      let modal_item_info__add = document.createElement("p");
      modal_item_info__add.classList.add("modal-item-info__add");
      modal_item_info__add.append("Additives");
      modal_item_info.append(modal_item_info__add);
      let modal_item_info_list_a = document.createElement("ul");
      modal_item_info_list_a.classList.add("modal-item-info-list-a");

      li = document.createElement("li");
      let modal_item_info_list_a__btn = document.createElement("button");
      modal_item_info_list_a__btn.classList.add("modal-item-info-list-a__btn");
      modal_item_info_list_a__btn.id = "add-1";
      modal_item_info_list_a__btn.type = "button";
      span = document.createElement("span");
      span.append("1");
      modal_item_info_list_a__btn.append(span);
      hidden_price = document.createElement("p");
      hidden_price.classList.add("hidden_price");
      hidden_price.append(product.additives[0]["add-price"]);
      modal_item_info_list_a__btn.append(hidden_price);
      modal_item_info_list_a__btn.append(product.additives[0].name);
      li.append(modal_item_info_list_a__btn);

      modal_item_info_list_a.append(li);

      li = document.createElement("li");
      modal_item_info_list_a__btn = document.createElement("button");
      modal_item_info_list_a__btn.classList.add("modal-item-info-list-a__btn");
      modal_item_info_list_a__btn.id = "add-2";
      modal_item_info_list_a__btn.type = "button";
      span = document.createElement("span");
      span.append("2");
      modal_item_info_list_a__btn.append(span);
      hidden_price = document.createElement("p");
      hidden_price.classList.add("hidden_price");
      hidden_price.append(product.additives[1]["add-price"]);
      modal_item_info_list_a__btn.append(hidden_price);
      modal_item_info_list_a__btn.append(product.additives[1].name);
      li.append(modal_item_info_list_a__btn);

      modal_item_info_list_a.append(li);

      li = document.createElement("li");
      modal_item_info_list_a__btn = document.createElement("button");
      modal_item_info_list_a__btn.classList.add("modal-item-info-list-a__btn");
      modal_item_info_list_a__btn.id = "add-3";
      modal_item_info_list_a__btn.type = "button";
      span = document.createElement("span");
      span.append("3");
      modal_item_info_list_a__btn.append(span);
      hidden_price = document.createElement("p");
      hidden_price.classList.add("hidden_price");
      hidden_price.append(product.additives[2]["add-price"]);
      modal_item_info_list_a__btn.append(hidden_price);
      modal_item_info_list_a__btn.append(product.additives[2].name);
      li.append(modal_item_info_list_a__btn);

      modal_item_info_list_a.append(li);

      modal_item_info.append(modal_item_info_list_a);

      let modal_item_info_total = document.createElement("p");
      modal_item_info_total.classList.add("modal-item-info-total");
      modal_item_info_total.append("Total:");
      let modal_item_info_total__price = document.createElement("span");
      modal_item_info_total__price.classList.add(
        "modal-item-info-total__price"
      );
      modal_item_info_total__price.append("$" + product.price);
      modal_item_info_total.append(modal_item_info_total__price);
      modal_item_info.append(modal_item_info_total);

      let modal_item_info_alert = document.createElement("small");
      modal_item_info_alert.classList.add("modal-item-info-alert");
      span = document.createElement("span");
      modal_item_info_alert.append(span);
      modal_item_info_alert.append(
        "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount."
      );
      modal_item_info.append(modal_item_info_alert);
      let modal_item_info__btn_close = document.createElement("button");
      modal_item_info__btn_close.classList.add("modal-item-info__btn-close");
      modal_item_info__btn_close.type = "button";
      modal_item_info__btn_close.setAttribute("onclick", "closeModal()");
      modal_item_info__btn_close.append("Close");
      modal_item_info.append(modal_item_info__btn_close);

      let price = document.createElement("p");
      price.classList.add("current-price");
      price.append(product.price);
      price.style.display = "none";

      element.append(modal_item__pic);
      element.append(modal_item_info);
      element.append(price);
    }
  }
}
//====================CREATE-MODAL=========================
