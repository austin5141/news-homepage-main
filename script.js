const hamburger_button = document.querySelector(".hamburger-button")
const x_button = document.querySelector(".close-button")

const menu_open = document.querySelector(".menu-open")
const menu_background = document.querySelector(".menu-background")

hamburger_button.addEventListener("click", function() {
    menu_open.classList.toggle("hidden")
    menu_background.classList.toggle("hidden")
    hamburger_button.classList.toggle("hidden")
})

x_button.addEventListener("click", function() {
    menu_open.classList.toggle("hidden")
    menu_background.classList.toggle("hidden")
    hamburger_button.classList.toggle("hidden")
})