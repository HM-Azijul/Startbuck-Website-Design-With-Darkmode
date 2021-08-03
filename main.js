const body = document.querySelector("body");
const themeSwitch = document.querySelector(".theme-switch");

themeSwitch.addEventListener("click", () => {
    themeSwitch.classList.toggle("active");
    body.classList.toggle("dark");
});

const menuToggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
});