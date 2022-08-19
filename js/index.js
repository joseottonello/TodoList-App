const 
dateNumber = document.getElementById('dateNumber'),
dateMonth = document.getElementById('dateMonth'),
dateYear = document.getElementById('dateYear'),
dateText = document.getElementById('dateText'),
tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('en', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('en', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('en', { month: 'long' });
    dateYear.textContent = date.toLocaleString('en', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};


const changeTaskState = event => {
    event.target.classList.toggle('done');
};

setDate();