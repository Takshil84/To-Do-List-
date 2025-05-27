document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = ""; // Clear input
    }
  });

  // Add task to list
  function addTask(taskText) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="remove-btn">Remove</button>
    `;

    // Toggle complete on task click
    li.querySelector(".task-text").addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Remove task on button click
    li.querySelector(".remove-btn").addEventListener("click", () => {
      li.remove();
    });

    taskList.appendChild(li);
  }
});
