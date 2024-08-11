"use strict";

const store = document.querySelector("#store");
const mac = document.querySelector("#mac");
const iphone = document.querySelector("#iphone");
const storeNav = `
<div class="row">
    <div class="col-3">
        <p>Shop</p>
        <h5>Shop the Latest</h5>
        <h5>Mac</h5>
        <h5>iPad</h5>
        <h5>iPhone</h5>
        <h5>Apple Watch</h5>
        <h5>Apple Vision Pro</h5>
    </div>
    <div class="col-2">
        <p>Quick Links</p>
        <h5>Find a Store</h5>
        <h5>Order Status</h5>
        <h5>Apple Trade In</h5>
        <h5>Financing</h5>
        <h5>College Student Offer</h5>
    </div>
    <div class="col-7">
        <p>Shop Special Stores</p>
        <h5>Certified Refurbished</h5>
        <h5>Education</h5>
        <h5>Business</h5>
        <h5>Veterans and Millitary</h5>
        <h5>Government</h4>
    </div>
</div>
`;

const macNav = `
<div class="row">
    <div class="col-3">
        <p>Explore Mac</p>
        <h5>Explore all mac</h5>
        <h5>MacBook Air</h5>
        <h5>MacBook Pro</h5>
        <h5>iMac</h5>
        <h5>Mac mini</h5>
        <h5>Mac Studio</h5>
        <h5>Displays </h5>
    </div>
    <div class="col-2">
        <p>Shop Mac</p>
        <h5>Shop Mac</h5>
        <h5>Help Me Choose</h5>
        <h5>Mac Accessories</h5>
        <h5>Apple Trade In</h5>
        <h5>College Student Offer</h5>
    </div>
    <div class="col-7">
        <p>More from iPad</p>
        <h5>Certified Refurbished</h5>
        <h5>iPad Support</h5>
        <h5>Apple Intelligence</h5>
        <h5>Apps by Apple</h5>
        <h5>Government</h4>
    </div>
</div>
`;

const iphoneNav = `
  <div class="row">
  <p>iPhones</p>
  </div>`;

store.addEventListener("mouseenter", () => {
  document.querySelector("#nav-drop").innerHTML = storeNav;
});
// store.addEventListener("mouseleave", () => {
//   document.querySelector("#nav-drop").innerHTML = "";
// });
mac.addEventListener("mouseenter", () => {
  document.querySelector("#nav-drop").innerHTML = macNav;
});

iphone.addEventListener("mouseenter", () => {
  document.querySelector("#nav-drop").innerHTML = iphoneNav;
});

const navDiv = document.querySelector("#nav-drop");
navDiv.innerHTML = "";
navDiv.addEventListener("mouseleave", () => {
  navDiv.innerHTML = "";
});
// document.querySelector("#nav-drop").innerHTML = "";

// function run_event() {
//   let name = document.querySelector("#name");
//   let mob = document.querySelector("#mob");
//   let address = document.querySelector("#address");
//   let course = document.querySelector("#course");

//   const html = `
//    <div>
//         <p>Name: ${name}</p>
//         <p>Mobile No.: ${mob}</p>
//         <p>Address: ${address}</p>
//         <p>Course: ${course}</p>
//       </div>`;
//   console.log(name, mob, address, course);
//   document.querySelector("#output").innerHTML = html;

//   return false;
// }
