/* FitWay: ручное переключение Desktop/Mobile и автоматический режим. */
const viewButtons = document.querySelectorAll(".view-button");
const startButton = document.querySelector("#start-button");

let currentView = "auto";

function updateAutoView() {
    // CSS media query отвечает за реальную перестройку макета.
    // Атрибут нужен для наглядного определения текущего автоматического режима.
    if (currentView === "auto") {
        document.body.dataset.autoView = window.innerWidth <= 768 ? "mobile" : "desktop";
    }
}

function setView(view) {
    if (!["auto", "desktop", "mobile"].includes(view)) {
        return;
    }

    currentView = view;
    document.body.classList.remove("is-mobile", "is-desktop");

    if (view === "mobile") {
        document.body.classList.add("is-mobile");
    } else if (view === "desktop") {
        document.body.classList.add("is-desktop");
    }

    viewButtons.forEach(function (button) {
        const isActive = button.dataset.view === view;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    updateAutoView();
}

viewButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        setView(button.dataset.view);
    });
});

// В режиме Auto CSS автоматически перестраивает страницу на границе 768 px.
// Обработчик обновляет информацию о текущем режиме при изменении окна.
window.addEventListener("resize", updateAutoView);

if (startButton) {
    startButton.addEventListener("click", function () {
        startButton.textContent = "Тренировка началась! ✓";
        startButton.setAttribute("aria-pressed", "true");
        startButton.disabled = true;
    });
}

// Начальное состояние страницы.
setView("auto");
