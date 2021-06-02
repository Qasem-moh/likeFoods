"use strict";

let arrayForFood = [];

class Food {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    arrayForFood.push(this);
  }
}

function randomenumber() {
  let number = Math.floor(Math.random() * 100);
  return number;
}

function setDataInLS() {
  localStorage.setItem("order", JSON.stringify(arrayForFood));
}

function getdataFromLS() {
  let data = JSON.parse(localStorage.getItem("order"));
  arrayForFood = [];
  if (data != null) {
    arrayForFood = data;
  }
  setDataInLS();
}
/**
 * @param{event}event
 */
document.getElementById("myform").addEventListener("submit", (event) => {
  event.preventDefault();

  let userName = event.target.user.value;
  let foodtype = event.target.foodType.value;

  new Food(userName, foodtype);
  setDataInLS();
  render();
});

let orders = document.getElementById("orders");
let tableElement = document.createElement("table");
orders.appendChild(tableElement);

//***************** */
let theadElement = document.createElement("thead");
tableElement.appendChild(theadElement);
/**** */

let trElementHead = document.createElement("tr");
theadElement.appendChild(trElementHead);
/*** */

let thInHead1 = document.createElement("th");
thInHead1.textContent = "order Image";
trElementHead.appendChild(thInHead1);
/************* */

let thInHead2 = document.createElement("th");
thInHead2.textContent = "order Details";
trElementHead.appendChild(thInHead2);
/**** */
let tBody = document.createElement("tbody");
tableElement.appendChild(tBody);
tBody.textContent = "";

function render() {
  tBody.textContent = "";
let count=0
  /*** */

  for (let i = 0; i < arrayForFood.length; i++) {
    let trInTboyElement = document.createElement("tr");
    tBody.appendChild(trInTboyElement);
    /** */
    let tdInTrBody1 = document.createElement("td");
    trInTboyElement.appendChild(tdInTrBody1);
    /*** */
    let imgElement = document.createElement("img");
    imgElement.setAttribute("src", "img/" + arrayForFood[i].type + ".jpg");
    imgElement.setAttribute("id", "imgFood");
    imgElement.setAttribute('indexInArray',`${count}`)
    imgElement.setAttribute("onClick", `removeitem(${count})`);
    tdInTrBody1.appendChild(imgElement);

    /*** */
    let tdInTrBody = document.createElement("td");
    trInTboyElement.appendChild(tdInTrBody);
    /** */

    let pElement = document.createElement("p");
    pElement.textContent = "Customer Name: " + arrayForFood[i].name;
    tdInTrBody.appendChild(pElement);
    /*** */

    let pElement2 = document.createElement("p");
    pElement2.textContent = "Customer Name: " + arrayForFood[i].type;
    tdInTrBody.appendChild(pElement2);
    /*** */
    let pElement3 = document.createElement("p");
    pElement3.textContent = "Customer Name: " + randomenumber();
    tdInTrBody.appendChild(pElement3);
    /*** */
    count++
  }

}

function removeitem(index){
    let newarray=arrayForFood.filter((item)=>item!==arrayForFood[index])
    arrayForFood=newarray
    setDataInLS()
    getdataFromLS()
    location.reload()
    render()
}

document.getElementById("delordes").addEventListener("click", () => {
  localStorage.removeItem("order");
  location.reload();
})
// let f1 = new Food("Qasem", "pizza");

// console.log(f1.randomenumber());
getdataFromLS();
render();
