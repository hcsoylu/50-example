let x = "John";
let y = "Doe";
console.log(x + " " + y);

let object = {
  name: "Can",
  surname: "Soylu",
  email: "can@gmail.com",
};

console.log(object);

delete object.email;
console.log(object);

let myArr = [
  "onyekuru",
  "muslera",
  "arda",
  "linnes",
  "donk",
  "marcao",
  "sarachi",
  "taylan",
  "belhanda",
  "falcao",
];

for (let oyuncu of myArr) {
  console.log(oyuncu);
}

let arr = [];
while (arr.length < 100) {
  var r = Math.floor(Math.random() * 100) + 1;
  if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
console.log(arr.length);

var max = arr.reduce((a, b) => Math.max(a, b));

console.log(max);

var min = arr.reduce((a, b) => Math.min(a, b));

console.log(min);

let arrOne = [0, 1, 2, 3, 4, 5];

let arrTwo = [11, 12];

if (arrOne.length > arrTwo.length) {
  console.log("arr1 bigger than arr2");
} else {
  console.log("arr2 bigger than arr1");
}

let array10 = [1, 2, 3, 4];
let array11 = [1, 2];

let sum10 = array10.reduce((a, b) => a + b, 0);
console.log(sum10);

let sum11 = array11.reduce((a, b) => a + b, 0);
console.log(sum11);

let result = function () {
  if (sum10 > sum11) {
    return "sum10 bigger than sum11";
  }
  return "sum11 bigger than sum10";
};

console.log(result());

let getAllTd = document.querySelectorAll("td");

let heading = document.querySelector("h1");

let changeHeading = function () {
  heading.innerText = "Hello!!!I am new Heading!!!".toLocaleUpperCase();
};
let container = document.querySelector("#container");
let addingNewRow = function () {
  let myTable = document.querySelector(".border").insertRow(0);
  let c1 = myTable.insertCell(0);
  let c2 = myTable.insertCell(1);
  let c3 = myTable.insertCell(2);
  let c4 = myTable.insertCell(3);
  let c5 = myTable.insertCell(4);
  c1.innerHTML = "New Cell1";
  c2.innerHTML = "New Cell2";
  c3.innerHTML = "New Cell3";
  c4.innerHTML = "New Cell4";
  c5.innerHTML = "New Cell5";
};

let addClass = function () {
  let allRow = document.querySelectorAll("tr");
  for (i = 0; i < allRow.length; i++) {
    allRow[i].className += "test";
  }
};

let paintRed = function () {
  let allLink = document.querySelectorAll("a");
  for (i = 0; i < allLink.length; i++) {
    allLink[i].style.backgroundColor = "red";
  }
};

window.onload = (event) => {
  console.log("page is fully loaded");
};

let addNewList = function () {
  let newLi = document.createElement("li");
  newLi.innerText = "Cola";

  babaLi.appendChild(newLi);
};

let removeList = function () {
  let babaLi = document.querySelector("ul");
  let allList = babaLi.children;
  allList[0].remove();
};

function myFunction() {
  var x = document.querySelector("table");
  if (x.style.visibility === "hidden") {
    x.style.visibility = "visible";
  } else {
    x.style.visibility = "hidden";
  }
}
