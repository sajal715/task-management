document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".btn-login");

    loginButton.addEventListener("click", function (event) {
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            alert("Please fill in both email and password before logging in.");
            event.preventDefault(); // Prevent navigation
        }
    });
});