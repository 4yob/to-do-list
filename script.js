function adicionar() {
    let task = document.getElementById("task").value;
    let taskDate = document.getElementById("taskDate").value;

    let message = `Tarefa: ${task} | Data: ${taskDate}`;

    let newTask = document.createElement("div");
    newTask.className = "newTask";
    newTask.innerText = message;
    

    if (task === "") {
        alert("Digite uma tarefa.");
        return
    }

    document.getElementById("tasks").appendChild(newTask);

    let remove = document.createElement("button");
    remove.className = "remove";
    remove.innerText = "-";
    remove.onclick = function () {
        removeTask(newTask);
    };

    newTask.appendChild(remove);
}

function removeTask(task) {
    task.remove();
}