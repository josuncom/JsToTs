var toDoForm = document.querySelector(".js-toDoForm "), toDoInput = toDoForm.querySelector("input"), toDoList = document.querySelector(".js-toDoList");
var TODOS_LS = "toDos";
function filterFn(toDo) {
    return toDo.id === 1;
}
var toDos = [];
function deleteToDO(event) {
    var btn = event.target;
    var li = btn.parentNode;
    toDoList.removeChild(li);
    var cleanToDos = toDos.filter(function (toDo) {
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    savetoDos();
}
function savetoDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
var idNum = 1;
function paintToDo(text) {
    var li = document.createElement("li");
    var delBtn = document.createElement("button");
    delBtn.addEventListener("click", deleteToDO);
    delBtn.innerText = "❌";
    var span = document.createElement("span");
    var newId = idNum;
    idNum += 1;
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = String(newId);
    toDoList.appendChild(li);
    var toDoObj = {
        text: text,
        id: newId,
    };
    toDos.push(toDoObj);
    savetoDos();
}
function handleSubmit(event) {
    event.preventDefault();
    var currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}
function loadToDos() {
    var loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        var parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
    else {
    }
}
function initTodo() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
initTodo();
