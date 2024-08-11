// Local storage
// .setItem  , getItem , removeItem , clear

let num = 40;
let str = "Message";
let arr = [1, 2, 3, 4];
let obj = {
  id: 1,
  course: "fsd",
  timings: "4",
};
window.localStorage.setItem("num", num);
window.localStorage.setItem("str", str);
window.localStorage.setItem("arr", JSON.stringify(arr));
window.localStorage.setItem("obj", JSON.stringify(obj));

const keyNum = window.localStorage.getItem("num");

const arrAns = JSON.parse(localStorage.getItem("arr"));

const objAns = JSON.parse(localStorage.getItem("obj"));

window.localStorage.removeItem("num");

window.localStorage.clear();
