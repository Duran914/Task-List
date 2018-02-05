// 
const taskInput = document.querySelector('#taskInput');
const newTask = document.querySelector('#addTask');
const taskForm = document.querySelector('#task-form');
const taskList = document.querySelector('.taskItems');
const filterTask = document.querySelector('#filterTask');
const clearAllTasks =document.querySelector('#clearTasks')

loadEventListeners();

function loadEventListeners(){

taskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
taskInput.addEventListener("focus", removeBanner);
clearAllTasks.addEventListener('click', clearAll);
}

function addTask(e){
    // console.log('adding task');  
        if (taskInput.value == "") {
        errorBanner('Please enter a task'); 
        }
        else{
        const li = document.createElement('li');
        li.className = 'list-group-item mt-2';
        li.style.textAlign = 'left';
        li.appendChild(document.createTextNode(taskInput.value));

        const link = document.createElement('a');
        link.className = 'list-item text-left';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        link.style.float = 'right';
        link.style.cursor = 'pointer';
        li.appendChild(link);
        taskList.appendChild(li);

        taskInput.value = '';
    }
    e.preventDefault();
}
function removeTask(e) {
if (e.target.parentElement.classList.contains('list-item')) {
    e.target.parentElement.parentElement.remove();
  }
}

function errorBanner(err) {
    const card = document.querySelector('.card');
    const errorDiv = document.createElement('div');
    const btn = document.createElement('button');

    errorDiv.className = 'alert alert-warning fade show';
    
    btn.className = 'close';
    btn.setAttribute('data-dismiss', 'alert');
    errorDiv.appendChild(btn)

    errorDiv.appendChild(document.createTextNode(err)); 
    card.insertBefore(errorDiv, taskForm);
    newTask.setAttribute('disabled', '');
  
}

function removeBanner(){
    if (document.querySelector('.alert')) {
        document.querySelector('.alert').remove();
        newTask.removeAttribute('disabled', '');
    }
}
function clearAll() {
  let taskItem = document.querySelectorAll('.list-group-item');
  taskItem.forEach(function(task){
        task.remove();
    })

}