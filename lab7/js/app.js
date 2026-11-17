
const buttons = document.querySelectorAll(".view-button");

let currentView = "auto";

// Переключение режима страницы
function setView(view) {
    currentView = view;

    document.body.classList.remove("is-mobile", "is-desktop");

    if (view === "mobile") {
        document.body.classList.add("is-mobile");
    }

    if (view === "desktop") {
        document.body.classList.add("is-desktop");
    }

    buttons.forEach(function(button) {
        button.classList.remove("active");

        if (button.dataset.view === view) {
            button.classList.add("active");
        }
    });
}

// Обработка нажатий на кнопки
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        setView(button.dataset.view);
    });
});

// При изменении размера окна обновляется Auto
window.addEventListener("resize", function() {
    if (currentView === "auto") {
        setView("auto");
    }
});

// Начальный режим
setView("auto");

// Кнопка начала тренировки
const startButton = document.querySelector("#start-button");

startButton.addEventListener("click", function() {
    startButton.textContent = "Тренировка началась! ✓";
});
