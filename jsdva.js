
    let emailInput = document.getElementById("email");
    let emailError = document.getElementById("emailError");

    let passwordInput = document.getElementById("password");
    let passwordError = document.getElementById("passwordError");

    let usernameInput = document.getElementById("username");
    let usernameError = document.getElementById("usernameError");

    emailInput.addEventListener("focus", function() {
        emailError.style.display = "none";
    });

    emailInput.addEventListener("blur", function() {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(emailInput.value)) {
            emailError.style.display = "block";
        } else {
            emailError.style.display = "none";
        }
    });

    passwordInput.addEventListener("focus", function() {
        passwordError.style.display = "none";
    });

    passwordInput.addEventListener("blur", function() {
        if (passwordInput.value.length < 8) {
            passwordError.style.display = "block";
        } else {
            passwordError.style.display = "none";
        }
    });

    usernameInput.addEventListener("focus", function() {
        usernameError.style.display = "none";
    });


    usernameInput.addEventListener("blur", function() {
        let regex = /^[a-zA-Z\d]+$/;
        if (!regex.test(usernameInput.value)) {
            usernameError.style.display = "block";
        } else {
            usernameError.style.display = "none";
        }
    });

    document.getElementById("mujFormular").addEventListener("submit", function(e) {

        if (!regexEmail.test(emailInput.value)) {
            e.preventDefault();
            emailError.style.display = "block";
        }

        if (passwordInput.value.length < 8) {
            e.preventDefault();
            passwordError.style.display = "block";
        }

        if (!regexUsername.test(usernameInput.value)) {
            e.preventDefault();
            usernameError.style.display = "block";
        }
    });
