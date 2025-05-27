let articleBox = document.querySelectorAll(".article-box");

articleBox.forEach((article, idx) => {

    let articleOverlay = article.querySelector(".article-box-img-overlay");
    if(idx === 0 || idx === 2){
        article.addEventListener("mouseover", (evt) => {
            evt.currentTarget.style.height = "409.25px";
            articleOverlay.classList.add("article-box-img-overlay-eft")
            articleOverlay.classList.remove("article-box-img-overlay-out");
        })
        article.addEventListener("mouseleave", (evt) => {
            evt.currentTarget.style.height = "320px";
            articleOverlay.classList.remove("article-box-img-overlay-eft");
            articleOverlay.classList.add("article-box-img-overlay-out");
        })
    }
})