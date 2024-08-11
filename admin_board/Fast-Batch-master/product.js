(async function () {
  let url = "http://localhost:4000/product";
  let data = await fetch(url);
  let response = await data.json();

  document.querySelector("#productdata").innerHTML = response
    .map(
      (e) => `
        <tr>
           <td> ${e.id}</td>
           <td> ${e.pname}</td>
           <td> ${e.pprice}</td>
           <td><img height="50px" src="${e.pimage}" alt="not found"></td>
           <td> ${e.pbrand}</td>
           <td onClick="deleteProduct(${e.id})"><button>Delete Data</button></td>
           <td onClick="UpdateProduct(${e.id})"><button>Update Data</button></td>
        </tr>`
    )
    .join("");
})();

function deleteProduct(id) {
  fetch(`http://localhost:4000/product/${id}`, {
    method: "DELETE",
  });
}

function UpdateProduct(id) {
  fetch(`http://localhost:4000/product/${id}`, {
    method: "PUT",
  });
}

function openForm(args) {
  let form = ` <div>
            <input type="text" name="" id="pname" placeholder="Enter Product Name">
            <input type="text" name="" id="pprice" placeholder="Enter Product Price">
            <input type="text" name="" id="pimage" placeholder="Enter Product image">
            <input type="text" name="" id="pbrand" placeholder="Enter Product Brand">
        </div>
        <div><button onclick="addProduct()">ADD PRODUCT</button></div>`;
  let;
}
