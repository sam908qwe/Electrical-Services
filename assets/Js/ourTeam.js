let teamBoxes = document.querySelectorAll(".team-box");
let teamBoxContainer = document.querySelector(".team-box-container");



teamBoxes.forEach((box) => {
    const teamBoxOverlay = box.querySelector(".team-box-overlay");

    if(!teamBoxOverlay) return;

    box.addEventListener("mouseover", () => {
        teamBoxOverlay.classList.add("team-box-overlay-effect");
        teamBoxOverlay.classList.remove("team-box-overlay-outer");
    })

    box.addEventListener("mouseleave", (evts) => {
            teamBoxOverlay.classList.remove("team-box-overlay-effect");
            teamBoxOverlay.classList.add("team-box-overlay-outer");
    } )
})


