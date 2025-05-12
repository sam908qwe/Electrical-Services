let slideLeftBut = document.querySelector(".slide-left-but");
let slideRightBut = document.querySelector(".slide-right-but");


let testimonialSlides = document.querySelector(".testimonial-slides");

let idx = 0;
let totalWidth = testimonialSlides.children[0].offsetWidth; 
let totalSlides = testimonialSlides.children.length;
console.log(totalWidth);
console.log(totalSlides);
let displayIdx = 3;
let gap = 26;


slideLeftBut.addEventListener("click", () => {
    idx++;
    console.log(idx);
    if(idx > totalSlides - displayIdx){
        idx = 0;
    }
    testimonialSlides.style.transform = `translateX(-${idx * (totalWidth + gap)}px)`;
})


slideRightBut.addEventListener("click", () => {
    idx--;
    if (idx < 0) {
        idx = totalSlides - displayIdx; // wapas last valid index pe chala jaaye
    }
    testimonialSlides.style.transform = `translateX(-${idx * (totalWidth + gap)}px)`;
});


function infiniteSlide(){
    idx++;
    if(idx > totalSlides - displayIdx){
        idx = 0;
    }
    testimonialSlides.style.transform = `translateX(-${idx * (totalWidth + gap)}px)`;
}

setInterval(infiniteSlide, 3000);