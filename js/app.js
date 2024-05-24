let addButton = document.getElementById('addButton');
let newTodo = document.getElementById('newTodo');
let todoList = document.getElementById('todoList');

document.addEventListener('click', function() {
    
addButton.addEventListener('click', function() { 
if (newTodo.value !== '') { 
let listItem = document.createElement('li'); 
listItem.textContent = newTodo.value;
listItem.classList.add('mb-2', 'flex', 'justify-between', 'items-center');

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';
deleteButton.classList.add('bg-red-500', 'hover:bg-red-700', 'text-white', 'font-bold', 'py-1', 'px-2', 'rounded');
// Help from the Internet
deleteButton.addEventListener('click', function() {
listItem.remove();
  });
  // Help from the Internet
listItem.appendChild(deleteButton);
todoList.appendChild(listItem);
}
});
});