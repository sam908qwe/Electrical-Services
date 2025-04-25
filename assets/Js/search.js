let searchIicon = document.querySelector(".searchIcon");
let searchOverlay = document.getElementById("searchOverlay");

searchIicon.addEventListener('click', () => {
    searchOverlay.style.display = 'flex';
})

searchOverlay.addEventListener('click', (e) => {
    if(e.target === searchOverlay) {
        searchOverlay.style.display = 'none';
    }
})