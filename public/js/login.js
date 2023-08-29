const { application } = require("express");
const { json } = require("sequelize");

format.addEventListener("submit", () => {
  const login = { email: email.value, password: password.value };
  fetch("/login", {
    method: "POST",
    body: json.stringify(login),
    headers: { "content-type": "application/json" },
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
