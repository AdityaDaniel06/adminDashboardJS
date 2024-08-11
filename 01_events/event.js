"use strict";

const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");
const box4 = document.querySelector("#box4");

const enlargedBox = document.querySelector("#imgEnlarged");

function show(arg) {
  if (arg === 1) {
    enlargedBox.style.backgroundColor = "blueviolet";
  } else if (arg === 2) {
    enlargedBox.style.backgroundColor = "brown";
  } else if (arg === 3) {
    enlargedBox.style.backgroundColor = "burlywood";
  } else if (arg === 4) {
    enlargedBox.style.backgroundColor = "aqua";
  }
}

let message = "Hello World";

let btnOne = document.querySelector("#btn1");
let btnTwo = document.querySelector("#btn2");
let btnThree = document.querySelector("#btn3");

// window.alert();
btnOne.addEventListener("click", () => {
  window.alert(message);
});

btnTwo.addEventListener("click", () => {
  const ans = window.confirm("Are you sure you want to");
  console.log(ans);
});

btnThree.addEventListener("click", () => {
  const val = +window.prompt("Please enter your age");
  if (val < 18) {
    window.alert("You are less than 18 years.");
  } else {
    window.alert("You are older than 18");
  }
});

// window.location --------- route to differet page;

// window.open("event.html", "_self/Parent");
// window.open("event.html", "_blank" , width="100%", height="");
const btnChange = document.querySelector("#changeImg");
const img01 = document.querySelector("#img01");

btnChange.addEventListener("click", () => {
  img01.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUgQUScOAWEM0DivC_QEVIvzBHSLp4ZfQ6Sw&s";
});

const showOutputBtn = document.querySelector("#showOutputBtn");
const card_design = `
<h2>Card Title </h2>
<div id="card"></div>`;
showOutputBtn.addEventListener("click", () => {
  document.querySelector("#showOutput").innerHTML = card_design;
});
