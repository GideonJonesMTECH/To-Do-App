const deleteTaskButton = document.querySelector('[data-delete-task-button]');
deleteTaskButton.addEventListener('click', e => {
 e.preventDefault();
 if (confirm("Are you sure you want to delete this task?")) {
  console.log("Confirmed Delete");
  selectedList.tasks = selectedList.tasks.filter(task => {
   task.id !== e.target.id;
  });
  console.log("Delete Finished. Save and Render");
  saveAndRender();
 } else {
  console.log("Canceled Delete");
 }
});

const editTaskButton = document.querySelector('[data-edit-tasks-button]');
editTaskButton.addEventListener('click', e => {
 let newName = prompt("What would you like to change the item to?");
 if (newName !== null) {
  const selectedTask = selectedList.tasks.find(task => task.id === e.target.id);
  selectedTask.name = newName;
  saveAndRender();
 } else {
  console.log("Canceled Edit");
 }
});

function deleteTask(selectedTask, selectedList) {
 if (confirm("Are you sure you want to delete this task?")) {
  console.log("Confirmed Delete");
  selectedList.tasks = selectedList.tasks.filter(task => {
   task.id !== selectedTask.id;
  });
  saveAndRender();
 } else {
  console.log("Canceled Delete");
 }
}

function editTask(selectedTask, selectedList) {
 let newName = prompt("What would you like to change the item to?");
 if (newName !== null) {
  createTask(newName);
  deleteTask(selectedTask, selectedList)
 }
}