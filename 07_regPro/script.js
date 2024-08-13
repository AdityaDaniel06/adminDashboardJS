function regUser() {
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let contactNumber = document.querySelector("#contactNumber").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;

  console.log(name, email, contactNumber, password, cpassword);

  let userInfo = {
    name: name,
    email: email,
    contactNumber: contactNumber,
    password: password,
    cpassword: cpassword,
  };

  const url = "http://localhost:4000/registration";
  const method = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  };

  fetch(url, method);

  window.location.href = "landing-page.html";
}

const loginUser = async () => {
  const data = await fetch("http://localhost:4000/registration");
  const response = await data.json();

  let userName = document.querySelector("#email");
  let password = document.querySelector("#password");

  let userValue = response.find(
    (val) => val.email === userName && val.password === password
  );

  if (userValue) {
    window.localStorage.setItem("userDetails", JSON.stringify(userValue));
    window.location.href = "home.html";
  } else {
    window.alert("Please Register First");
    window.location.href = "reg.html";
  }
};
