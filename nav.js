const navContainer = document.querySelector(".nav-container");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = navContainer.getAttribute("data-visible");

    if (visibility === "false") {
        navContainer.setAttribute("data-visible", "true");
    } else {
        navContainer.setAttribute("data-visible", "false");
    }
})