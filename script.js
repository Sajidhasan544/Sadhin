document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-btn");
    const menu = document.querySelector(".menu");

    toggleButton.addEventListener("click", () => {
        if (menu.classList.contains("closed")) {
            menu.classList.remove("closed");
            menu.classList.add("open");
        } else {
            menu.classList.remove("open");
            menu.classList.add("closed");
        }
    });
});
