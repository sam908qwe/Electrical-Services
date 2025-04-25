// engineer icon hover

let engineer = document.querySelector(".serviceEng");

engineer.addEventListener('mouseover', () => {
    engineer.classList.add("engIcon-hover");
    engineer.classList.remove("outEffect");
})

engineer.addEventListener("mouseleave", (event) => {
    if(event.target === engineer) {
        engineer.classList.remove("engIcon-hover");
        engineer.classList.add("outEffect");
    }
})


//service items hover effect 

let effectBox = document.querySelectorAll(".effectBox");

effectBox.forEach((boxes) => {
    const img = boxes.querySelector("img");

    boxes.addEventListener('mouseover', () => {
        img.classList.add("service-box-imgEffect");
        img.classList.remove("service-box1-imgEffect");
    })

    boxes.addEventListener('mouseleave', () => {
        img.classList.remove('servce-box-imgEffect');
        img.classList.add('service-box1-imgEffect');
    })
})