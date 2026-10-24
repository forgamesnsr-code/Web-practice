// Ждем, пока страница полностью загрузится
window.onload = function () {
    const pushBtn = document.querySelector('#push');
    const input = document.querySelector('#newtask input');
    const tasksContainer = document.querySelector('#tasks');

    // Иконка корзины (SVG) для кнопки удаления задачи
    const trashIcon = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
        </svg>
    `;

    // Функция для создания и добавления новой задачи
    function addTask() {
        const text = input.value.trim();
        
        // Если поле пустое, не добавляем задачу и показываем сообщение
        if (text === "") {
            alert("Пожалуйста, введите текст задачи!");
            return;
        }

        // Создаем блок задачи
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task';
        
        // Вставляем текст задачи и кнопку с иконкой корзины
        taskDiv.innerHTML = `
            <span>${text}</span>
            <button class="delete" aria-label="Удалить">${trashIcon}</button>
        `;
        
        tasksContainer.appendChild(taskDiv);
        
        // Очищаем поле и возвращаем фокус для удобства
        input.value = '';
        input.focus();
    }

    // Обработчик клика по кнопке "Добавить"
    pushBtn.addEventListener('click', addTask);

    // Обработчик нажатия Enter в поле ввода (чтобы не кликать мышкой)
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Обработчик удаления задач (делегирование событий)
    tasksContainer.addEventListener('click', function (e) {
        // Проверяем, был ли клик по кнопке удаления
        if (e.target.closest('.delete')) {
            // Удаляем родительский блок задачи
            e.target.closest('.task').remove();
        }
    });
};