function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var task = taskInput.value;

    if (task.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");

    // Create checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onchange = function() {
        if (this.checked) {
            li.style.textDecoration = "line-through"; // Strikethrough when checked
        } else {
            li.style.textDecoration = "none"; // Remove strikethrough when unchecked
        }
    };
    li.appendChild(checkbox);

    // Create task text
    var taskText = document.createElement("span");
    taskText.textContent = task;
    li.appendChild(taskText);

    // Add delete button
    var deleteButton = document.createElement("span");
    deleteButton.textContent = " ❌";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";
}