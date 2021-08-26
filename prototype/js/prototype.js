const tasks = document.querySelectorAll('div.task');
const lists = document.querySelectorAll('div.list');

const taskDragged = e => {
  const { id, textContent } = e.target;
  e.dataTransfer.setData('taskId', id);
};

const taskDropped = e => {
  e.preventDefault();
  const taskId = e.dataTransfer.getData('taskId');
  const task = document.querySelector(`div#${taskId}`);
  e.target.appendChild(task);
}

for (let task of tasks) {
  task.addEventListener('dragstart', taskDragged);
}

for (let list of lists) {
  list.addEventListener('dragover', e => e.preventDefault());
  list.addEventListener('drop', taskDropped);
}