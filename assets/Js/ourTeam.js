let teamBoxes = document.querySelectorAll(".team-box");



teamBoxes.forEach((box) => {
    const teamBoxOverlay = box.querySelector(".team-box-overlay");
    const teamShareButEffect = box.querySelector(".team-share-but");

    if(!teamBoxOverlay) return;

    box.addEventListener("mouseover", () => {
        teamBoxOverlay.classList.add("team-box-overlay-effect");
        teamBoxOverlay.classList.remove("team-box-overlay-outer");
        teamShareButEffect.classList.add(".team-share-but-effect");
    })

    box.addEventListener("mouseleave", (evts) => {
            teamBoxOverlay.classList.remove("team-box-overlay-effect");
            teamBoxOverlay.classList.add("team-box-overlay-outer");
    } )
})


