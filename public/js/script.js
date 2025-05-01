function addTask() {
    const input = document.getElementById('newTask');
    const taskList = document.getElementById('taskList');
    const taskText = input.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement('li');
        listItem.classList.add('task-item');
        listItem.innerHTML = `
            <input type="checkbox" onchange="toggleComplete(this)">
            <label>${taskText}</label>
            <button onclick="removeTask(this)">×</button>
        `;
        taskList.appendChild(listItem);
        input.value = "";
        updateItemCount();
    }
}

function toggleComplete(checkbox) {
    const listItem = checkbox.parentNode;
    const label = listItem.querySelector('label');
    label.classList.toggle('completed');
    updateItemCount();
}

function removeTask(button) {
    const listItem = button.parentNode;
    listItem.remove();
    updateItemCount();
}

function updateItemCount() {
    const incompleteItems = document.querySelectorAll('.task-item:not(.completed)').length;
    document.querySelector('.footer span').textContent = `${incompleteItems} itens restantes`;
}

// Initial count update
updateItemCount();