let teamBoxes = document.querySelectorAll(".team-box");
let teamBoxContainer = document.querySelector(".team-box-container");



teamBoxes.forEach((box) => {
    const teamBoxOverlay = box.querySelector(".team-box-overlay");
    const teamShareBut = box.querySelector(".team-share-but");
    const teamSocialHandels = box.querySelector(".team-social-handels");
    box.addEventListener("mouseover", () => {
        teamBoxOverlay.classList.add("team-box-overlay-effect");
        teamBoxOverlay.classList.remove("team-box-overlay-outer");

        teamShareBut.classList.add(".team-share-but-effect");
        teamShareBut.classList.remove(".team-share-but-eftOut");

        teamSocialHandels.style.visibility = "visible"; 
        teamSocialHandels.classList.add(".team-social-handels-effect");
        teamSocialHandels.classList.remove(".team-social-handels-eftOut");
        console.log("sameer");
    })

    box.addEventListener("mouseleave", (evts) => {
            teamBoxOverlay.classList.remove("team-box-overlay-effect");
            teamBoxOverlay.classList.add("team-box-overlay-outer");

            teamShareBut.classList.remove(".team-share-but-effect");
            teamShareBut.classList.add(".team-share-but-eftOut");

            // teamSocialHandels.style.visibility = "hidden";
            teamSocialHandels.classList.remove(".team-social-handels-effect");
            teamSocialHandels.classList.add(".team-social-handels-eftOut");
    } )
})

