var formEl=document.querySelector("#task-form");

//var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler=function(event){
    event.preventDefault();
    var taskNameInput=document.querySelector("input[name='task-name']").value;
    var taskTypeInput=document.querySelector("select[name='task-type']").value;
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    var taskInfoEl=document.createElement("div");
    taskInfoEl.className="task-info";
taskInfoEl.innerHTML="<h3 class='task-name'>" +taskNameInput+"</h3><span class='task-type'>"+taskTypeInput+"</span>";
//taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
listItemEl.appendChild(taskInfoEl);
   // listItemEl.textContent = "taskNameInput";
    tasksToDoEl.appendChild(listItemEl);   
}
//buttonEl.addEventListener("click",createTaskHandler);
formEl.addEventListener("submit",createTaskHandler);