const ran = Math.floor(Math.random() * 1000000);
console.log(ran);

let loader = false;
const loaderDiv = document.getElementsByClassName("lds-roller");

setTimeout(() => {
  if (!loader) {
    console.log("Loading completed");
    loaderDiv.innerHTML = " ";
  }
  loader = false;
}, 2000);
