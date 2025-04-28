let teamBoxes = document.querySelectorAll(".team-box");



teamBoxes.forEach((box) => {
    const teamBoxOverlay = box.querySelector(".team-box-overlay");
    const teamShareBut = box.querySelector(".team-share-but");
    

    if(!teamBoxOverlay) return;

    box.addEventListener("mouseover", () => {
        teamBoxOverlay.classList.add("team-box-overlay-effect");
        teamBoxOverlay.classList.remove("team-box-overlay-outer");
        teamShareBut.classList.add("team-share-but-effect");
        teamShareBut.classList.remove("team-share-but-outeft")
    })

    box.addEventListener("mouseleave", (evts) => {
            teamBoxOverlay.classList.remove("team-box-overlay-effect");
            teamBoxOverlay.classList.add("team-box-overlay-outer");
            teamShareBut.classList.remove("team-share-but-effect");
            teamShareBut.classList.add("team-share-but-outeft");
    } )
})