const btn = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

btn.addEventListener("click", () => {
    const task = input.value.trim();

    if(task === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    li.addEventListener("click", () => {
        li.remove();   // delete task on click
    });

    list.appendChild(li);
    input.value = "";
});
