// HELPER FUNCTIONS
const qs = (s) => document.querySelector(s);
const qsa = (s) => document.querySelectorAll(s);
const is = (s) => document.getElementById(s);

// CONSTANTS
class Item {
  constructor(id, logo) {
    this.id = id;
    this.logo = logo;
    this.name = "";
    this.altName = "";
    this.erned = "";
    this.price = "";
    this.inDollar = "";
    this.staked = "";
    this.apr = "";
    this.endSln = "";
    this.status = "";
    this.links = "";
  }
}

const items = [];

// DOM
const itemsDOM = qs("ul#items");
const addItemBtnDOM = qs("button#addItem");
const deleteItemBtnDOM = qs("button#deleteItem");

// MODEL
// let model = {
//   isNavBarOpen: false, // Bool
//   items: INIT_ITEMS, // Array {id: Int, name: String, img: String, alt: String}
// };

let model = {
  isDarkMode: false,
  isSettingsOpen: false,
  ads: {
    number: 1,
    amount: 3,
  },
  topCoins: ["syrup pool", "farms"],
  items,
};

let myObj_serialized = JSON.stringify(model);
localStorage.setItem("model", myObj_serialized);
let myObj_deserialized = JSON.parse(localStorage.getItem("model"));
console.log(myObj_deserialized);

// UPDATE
const addItem = (newItem, items) => [...items, newItem];
const deleteItem = (itemId, items) => items.filter(({ id }) => id !== itemId);

// VIEW
const renderItems = () => {
  itemsDOM.innerHTML = model.items
    .map(
      ({ id, name, img, alt }) => `
    <li class="item">
      <h3 class="item__header">${name}</h3>
      <img src="${img}" alt="${alt}" />
      <button class="deleteItem" data-id="${id}">x</button>
    </li>
  `
    )
    .join("");

  const deleteItemBtnsDOM = qsa("button.deleteItem");

  deleteItemBtnsDOM.forEach((node) => {
    node.addEventListener("click", (e) => {
      const itemId = Number(e.target.dataset.id);
      const newItems = deleteItem(itemId, model.items);
      const newModel = { ...model, items: newItems };
      model = newModel;
      renderItems();
    });
  });
};

const renderView = () => {
  renderItems();
};

// EVENTS
addItemBtnDOM.addEventListener("click", (e) => {
  const newItem = {
    id: 10,
    name: "Lion King",
    img: "",
    alt: "Lion King image",
  };
  const newItems = addItem(newItem, model.items);
  const newModel = { ...model, items: newItems };
  model = newModel;
  renderItems();
});

// APP START
renderView();
