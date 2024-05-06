const getLocalTodo = () => {
    return JSON.parse(localStorage.getItem("thetodovalue")) || [];
}

const inputValue = document.getElementById('inputValue');
const mainTodoElem = document.querySelector('.todo-lists-elem');
let localTodoLists = getLocalTodo();

const addTodoDynamicElem = (currElem) => {
    const divElement = document.createElement("div");
    divElement.classList.add("main_todo_div"); 
    divElement.innerHTML = `<li>${currElem}</li>
    <button class="deleteBtn">Delete</button>`;
    mainTodoElem.append(divElement);
};
 
const addTodoList = (e) => {
    e.preventDefault();
    const todoListValue = inputValue.value.trim();
    inputValue.value = "";

    if (todoListValue !== "" && !localTodoLists.includes(todoListValue)) {
        localTodoLists.push(todoListValue);
        localStorage.setItem("thetodovalue", JSON.stringify(localTodoLists));
        addTodoDynamicElem(todoListValue);
    }
}

const showTodoLists = () => {
    console.log(localTodoLists);
    localTodoLists.forEach((currElem) => {
        addTodoDynamicElem(currElem);
    });
}

const removeTodoElem = (e) => {
    const todoRemove = e.target.parentElement;
    const todoListContent = todoRemove.querySelector('li').innerText;
    localTodoLists =localTodoLists.filter((curTodo) => {
        return curTodo !== todoListContent;
    });

    todoRemove.remove(); // Remove the todo item from the DOM
    localStorage.setItem("thetodovalue", JSON.stringify(localTodoLists)); // Update local storage
}

mainTodoElem.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
        removeTodoElem(e);
    }
});

// Initial rendering
showTodoLists();

document.querySelector('.btn').addEventListener('click', (e) => {
    addTodoList(e);
});