function run_event() {
  let name = document.querySelector("#name").value;
  let mob = document.querySelector("#mob").value;
  let address = document.querySelector("#address").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;
  // let course = document.querySelector("#course").value;
  console.log(name, mob, address);

  const html = `
     <div>
          <p>Name: ${name}</p>
          <p>Mobile No.: ${mob}</p>
          <p>Email: ${email}</p>
          <p>Address: ${address}</p>
         
        </div>`;

  if (password !== cpassword) {
    // document.querySelector("#output").innerHTML = html;
    window.alert("Password do not match");
    document.querySelector("#password").focus();
    document.querySelector("#password").value = "";
    document.querySelector("#cpassword").value = "";
    return false;
  } else if (password === "") {
    window.alert("Please enter password");
  } else if (!email.includes("@gmail.com")) {
    alert("Invalid email address");
    document.querySelector("#email").focus();
    return false;
  } else if (mob.length !== 10 || isNaN(mob)) {
    alert("Invalid mobile number");
    document.querySelector("#mob").focus();
    return false;
  } else {
    window.alert("Form submitted succesfully");
    document.querySelector("#output").innerHTML = html;
    return false;
  }
}

console.log(Math.round(Math.random() * 10));
let captcha;

for (let i = 0; i < 6; i++) {
  let str = "qwertyuiopasdfghjklzxcvbnm1234567890";
  let s = str.length;
  let randomNumber = Math.floor(Math.random() * str.length);
  let chr = str.charAt(randomNumber);
  captcha += chr;
  console.log(captcha);
}
