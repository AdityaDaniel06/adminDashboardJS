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

function updateProduct(id) {
  console.log(response);
  document.querySelector("#productId").value = response[0].id;
  document.querySelector("#productName").value = response[0].pname;
  document.querySelector("#productPrice").value = response[0].pprice;
  document.querySelector("#productImage").value = response[0].pimage;
  document.querySelector("#productBrand").value = response[0].pbrand;
  fetch(`http://localhost:4000/product/${id}`, {
    method: "GET",
  });
}

// Add new product
function addProduct() {
  let id = document.getElementById("productId").value;
  let name = document.getElementById("productName").value;
  let price = document.getElementById("productPrice").value;
  let image = document.getElementById("productImage").value;
  let brand = document.getElementById("productBrand").value;
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
