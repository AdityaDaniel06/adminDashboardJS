"use strict";

let response = null;
(async function () {
  // display data on page laoding--IIFE
  let url = "http://localhost:4000/product";
  let data = await fetch(url);
  response = await data.json();
  console.log(response);

  document.querySelector("#productData").innerHTML = response
    .map(
      (e, i) => `
        <tr>
          <td> ${i + 1}</td>
           <td> ${e.pname}</td>
           <td>₹ ${e.pprice}</td>
           <td><img height="50px" src="${e.pimage}" alt="not found"></td>
           <td> ${e.pbrand}</td>
           <td onClick="updateProduct(${e.id})"  data-bs-toggle="modal"
                  data-bs-target="#myModal"><button class="btn-icon"><i class="fa-solid fa-pen-to-square"></i></button></td>
           <td onClick="deleteProduct(${
             e.id
           })"><button class="btn-icon"><i class="fa-solid fa-trash"></i></button></td>
        </tr>`
    )
    .join("");
})();

function deleteProduct(id) {
  fetch(`http://localhost:4000/product/${id}`, {
    method: "DELETE",
  });
}

async function updateProduct(id) {
  let url = `http://localhost:4000/product/${id}`;
  let data = await fetch(url);
  response = await data.json();
  console.log(response);

  document.querySelector("#productId").value = response.id;
  document.querySelector("#productName").value = response.pname;
  document.querySelector("#productPrice").value = response.pprice;
  document.querySelector("#productImage").value = response.pimage;
  document.querySelector("#productBrand").value = response.pbrand;

  document.querySelector("#updateProduct").style.display = "block";
  document.querySelector("#addProduct").style.display = "none";

  editedProduct();
}
// edit
function editedProduct() {
  let id = document.getElementById("productId").value;
  let name = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;
  let image = document.getElementById("productImage").value;
  let brand = document.getElementById("productBrand").value;

  let product = {
    pname: name,
    pprice: price,
    pimage: image,
    pbrand: brand,
  };

  let ur = `http://localhost:4000/product/${id}`;
  let method = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  };

  fetch(ur, method);
}

// Add new product
function addProduct() {
  let id = document.getElementById("productId").value;
  let name = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;
  let image = document.getElementById("productImage").value;
  let brand = document.getElementById("productBrand").value;
  document.querySelector("#updateProduct").style.display = "none";
  document.querySelector("#addProduct").style.display = "block";
  console.log(name, price, image, brand);

  let product = {
    pname: name,
    pprice: price,
    pimage: image,
    pbrand: brand,
  };

  let url = "http://localhost:4000/product";
  let method = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  };

  fetch(url, method);
}

function filterData(arg) {
  let s = null;
  if (arg == 500) {
    s = response.filter((e) => e.pprice > 0 && e.pprice < arg);
  } else if (arg == 1000) {
    s = response.filter((e) => e.pprice > 500 && e.pprice < arg);

    console.log(s);
  } else if (arg == 2000) {
    s = response.filter((e) => e.pprice > 1000 && e.pprice < arg);

    console.log(s);
  } else if (arg == 2500) {
    s = response.filter((e) => e.pprice > 2000 && e.pprice < 3000);

    console.log(s);
  } else if (arg == 3000) {
    s = response.filter((e) => e.pprice > 3000);

    console.log(s);
  }

  if (s.length == 0) {
    console.log(s.length);
    document.querySelector(
      "#productData"
    ).innerHTML = `<h4 class="text-center">No results found.</h4>`;
  } else {
    document.querySelector("#productData").innerHTML = s
      .map(
        (e, i) => `
     <tr>
          <td> ${i + 1}</td>
           <td> ${e.pname}</td>
           <td>₹ ${e.pprice}</td>
           <td><img height="50px" src="${e.pimage}" alt="not found"></td>
           <td> ${e.pbrand}</td>
           <td onClick="updateProduct(${e.id})"  data-bs-toggle="modal"
                  data-bs-target="#myModal"><button class="btn-icon"><i class="fa-solid fa-pen-to-square"></i></button></td>
           <td onClick="deleteProduct(${
             e.id
           })"><button class="btn-icon"><i class="fa-solid fa-trash"></i></button></td>
        </tr>`
      )
      .join("");
  }
}

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
    display = document.querySelector("#time");
  startTimer(fiveMinutes, display);
};
window.setTimeout(function () {
  window.location.href = "login.html";
}, 300000);
