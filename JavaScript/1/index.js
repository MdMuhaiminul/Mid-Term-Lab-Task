const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const phone = document.getElementById("phone").value.trim();

    const nameErr = document.getElementById("nameErr");
    const emailErr = document.getElementById("emailErr");
    const passwordErr = document.getElementById("passwordErr");
    const confirmPasswordErr = document.getElementById("confirmPasswordErr");
    const phoneErr = document.getElementById("phoneErr");
    const successMessage = document.getElementById("successMessage");

    nameErr.innerHTML = "";
    emailErr.innerHTML = "";
    passwordErr.innerHTML = "";
    confirmPasswordErr.innerHTML = "";
    phoneErr.innerHTML = "";
    successMessage.innerHTML = "";

    let hasErr = false;

    if (fullName == "") {
        nameErr.innerHTML = "full name cannot be empty";
        hasErr = true;
    }

    if (email == "") {
        emailErr.innerHTML = "email cannot be empty";
        hasErr = true;
    }

    else if (!email.includes("@") || !email.includes(".")) {
        emailErr.innerHTML = "invalid email format";
        hasErr = true;
    }

    if (password == "") {
        passwordErr.innerHTML = "password cannot be empty";
        hasErr = true;
    }

    else if (password.length < 6) {
        passwordErr.innerHTML = "password must be at least 6 characters";
        hasErr = true;
    }

    if (confirmPassword == "") {
        confirmPasswordErr.innerHTML = "confirm password cannot be empty";
        hasErr = true;
    }

    else if (password != confirmPassword) {
        confirmPasswordErr.innerHTML = "password does not match";
        hasErr = true;
    }

    if (phone == "") {
        phoneErr.innerHTML = "phone number cannot be empty";
        hasErr = true;
    }

    else if (isNaN(phone)) {
        phoneErr.innerHTML = "phone number must contain only digits";
        hasErr = true;
    }

    if (!hasErr) {
        successMessage.innerHTML = "Registration Successful!";

        document.getElementById("fullName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("phone").value = "";
    }
})
