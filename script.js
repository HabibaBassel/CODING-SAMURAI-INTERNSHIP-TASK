const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addTask(input.value);
  input.value = '';
});

function addTask(taskText) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = taskText;
  
  const actions = document.createElement('div');
  actions.className = 'actions';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => {
    const newText = prompt('Edit task:', span.textContent);
    if (newText) span.textContent = newText;
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => li.remove();

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.onclick = () => li.classList.toggle('completed');

  actions.appendChild(editBtn);
  actions.appendChild(completeBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  list.appendChild(li);
}
