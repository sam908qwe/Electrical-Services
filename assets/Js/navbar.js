let navInput = document.querySelector(".nav-input");
let navButton = document.querySelector(".navbar-search-button");

navButton.addEventListener("click", (evt) => {
    navInput.classList.add("nav-input-after");
})