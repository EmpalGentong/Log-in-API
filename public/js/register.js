//const { application } = require("express");
//const { json } = require("sequelize");

form.addEventListener("submit", () => {
  const register = { email: email.value, password: password.value };
  console.log(register);
  fetch("/register", {
    method: "POST",
    body: json.stringify(register),
    headers: { "content-type": "application / json" },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status == "error") {
        success.style.display = "none";
        error.style.display = "block";
        error.innerText = data.error;
      } else {
        error.style.display = "none";
        success.style.display = "block";
        success.innerText = data.success;
      }
    });
});
