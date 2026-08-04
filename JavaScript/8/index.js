const userType = document.getElementById("userType");
const rollField = document.getElementById("rollField");
const departmentField = document.getElementById("departmentField");

userType.addEventListener("change", function () {

    if (userType.value == "student") {
        rollField.style.display = "block";
        departmentField.style.display = "none";
    }
    else if (userType.value == "teacher") {
        departmentField.style.display = "block";
        rollField.style.display = "none";
    }
    else {
        rollField.style.display = "none";
        departmentField.style.display = "none";
    }
})
