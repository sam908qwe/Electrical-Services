let teamMemBox = document.querySelectorAll(".team-mem-box");


teamMemBox.forEach((box) => {
    let socialOverlay = box.querySelector(".socialOverlay");
    box.addEventListener("mouseover", () => {
        socialOverlay.style.visibility = "visible";
        socialOverlay.classList.add("social-over-animate");
        socialOverlay.classList.remove("social-out-animate");
    })

    box.addEventListener("mouseleave", () => {
        socialOverlay.classList.remove("social-over-animate");
        socialOverlay.classList.add("social-out-animate");
    })
})