let formTodoList = document.querySelector(".formTodoList");
let todoList = document.querySelector(".todolist")
let todolists = [];

formTodoList.addEventListener("submit", (e)=>{
const newTodo = {
    title: e.target.title.value,
    isFinished: false,
    id: Math.random(),
};
todolists.push(newTodo);


showtodolistsINUI(todolists);

e.preventDefault();

});

function showtodolistsINUI(Todo){
    Todo.forEach(item => {
        let div = document.createElement("div");
        div.classList.add(
        "list",
        "w-[90%]",
        "h-[80px]",
        "bg-green-200",
        " mb-2",
        "rounded-[20px]",
        "flex",
        "justify-between",
        "items-center", 
        "p-[15px]",
        )
div.setAttribute("id", `${item.id}`);
div.innerHTML = `<p class="title">${item.title}</p>`;
let btnsDiv = document.createElement("div")
let deleteBtn = document.createElement("button");
deleteBtn.classList.add();
btnsDiv.appendChild(checkBtn);
btnsDiv.appendChild(deleteBtn);
div.appendChild(btnsDiv);

todolist.appendChild("div")
    });
}