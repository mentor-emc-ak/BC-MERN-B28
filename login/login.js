console.log("Login JS file is loaded");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("Username:", username);
    console.log("Password:", password);
    // Here you can add your login logic, such as sending a request to the server
});
