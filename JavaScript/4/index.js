const btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const department = document.getElementById("department").value.trim();

    const nameErr = document.getElementById("nameErr");
    const rollErr = document.getElementById("rollErr");
    const departmentErr = document.getElementById("departmentErr");

    nameErr.innerHTML = "";
    rollErr.innerHTML = "";
    departmentErr.innerHTML = "";

    let hasErr = false;

    if (name == "") {
        nameErr.innerHTML = "name cannot be empty";
        hasErr = true;
    }

    if (roll == "") {
        rollErr.innerHTML = "roll cannot be empty";
        hasErr = true;
    }

    if (department == "") {
        departmentErr.innerHTML = "department cannot be empty";
        hasErr = true;
    }

    if (!hasErr) {
        const studentTable = document.getElementById("studentTable");

        const row = document.createElement("tr");
        const nameTd = document.createElement("td");
        const rollTd = document.createElement("td");
        const departmentTd = document.createElement("td");
        const actionTd = document.createElement("td");
        const deleteBtn = document.createElement("button");

        nameTd.innerText = name;
        rollTd.innerText = roll;
        departmentTd.innerText = department;

        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("deleteBtn");

        deleteBtn.addEventListener("click", function () {
            row.remove();
        })

        actionTd.appendChild(deleteBtn);
        row.append(nameTd, rollTd, departmentTd, actionTd);
        studentTable.appendChild(row);

        document.getElementById("name").value = "";
        document.getElementById("roll").value = "";
        document.getElementById("department").value = "";
    }
})
