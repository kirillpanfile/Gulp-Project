const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const bgOverlay = document.getElementById("overlay");
if (burgerMenu && navbarMenu && bgOverlay) {
    burgerMenu.addEventListener("click", () => {
        navbarMenu.classList.toggle("is-active");
        bgOverlay.classList.toggle("is-active");
    });

    bgOverlay.addEventListener("click", () => {
        navbarMenu.classList.toggle("is-active");
        bgOverlay.classList.toggle("is-active");
    });
}
document.querySelectorAll(".menu-link").forEach((link) => {
    link.addEventListener("click", () => {
        navbarMenu.classList.remove("is-active");
        bgOverlay.classList.remove("is-active");
    });
});