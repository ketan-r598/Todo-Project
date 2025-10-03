const todoInput = document.getElementsByClassName("todo-text")[0];
const addButton = document.getElementsByClassName("add-button")[0];
const todoList = document.getElementsByClassName("todo-list")[0];

todoArray = [];

// console.log(todoInput);
// console.log(addButton);
// console.log(todoList);

addButton.addEventListener("click", function () {
  const todoText = todoInput.value.trim();

  if (todoText === "") return;

  todoArray.push(todoText);
  localStorage.setItem("todoArray", JSON.stringify(todoArray));

  renderDOM();

  todoInput.value = "";
});

function createTODOListItem(todoText) {
  // create todoListItem 'li'
  // create delete button and append it to li
  // add the styling classes
  // return the final element

  todoListItem = document.createElement("li");
  todoListItem.innerText = todoText;
  todoListItem.classList.add("todo-item");

  deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";

  todoListItem.appendChild(deleteButton);

  return todoListItem;
}

function renderDOM() {
  todoArray = JSON.parse(localStorage.getItem("todoArray"));
  console.log(todoArray);
  todoListItem = todoArray[todoArray.length - 1];
  todoList.append(createTODOListItem(todoListItem));
  // todoArray.forEach((element) => {
  // todoList.appendChild(createTODOListItem(element));
  // });
}
