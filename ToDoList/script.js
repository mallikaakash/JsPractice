function addItem() {
  var taskList = document.getElementById("task-list");
  var taskListLength = taskList.childElementCount;
  const newTask = document.getElementById("task-input");
  if (newTask.value == "") {
    alert("Please enter a task");
    return;
  }
  if (newTask.value !== "") {
    var task = document.createElement("li");
    task.innerHTML = `${taskListLength + 1}) ` + newTask.value;
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    task.setAttribute("class", "task");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.onclick = function () {
      task.remove();
    };
    task.appendChild(deleteButton);
    taskList.appendChild(task);
    newTask.value = "";
  }
}
