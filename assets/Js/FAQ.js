let faqes = document.querySelectorAll(".faq");

faqes.forEach((faq) => {
    faq.addEventListener("click", () => {
        let solution = document.querySelector(".solution");
        faqes.forEach(b => {
            b.style.height = "64px";
        })
        faq.style.height = "188px";
        solution.style.display = "flex";
    });
});


// submit button section //

let submitBut = document.querySelector("#faq-message-button");

submitBut.addEventListener("mouseover", (evt) => {
    evt.currentTarget.classList.add(".faq-message-button-mouseover");
})