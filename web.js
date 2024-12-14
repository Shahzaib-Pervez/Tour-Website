// Navigation Toggle Function
function toggleNav() {
    const sideNav = document.getElementById("sideNav");

    // Toggle the side navigation
    if (sideNav.style.right === "0px" || sideNav.style.right === "") {
        sideNav.style.right = "-250px";
    } else {
        sideNav.style.right = "0px";
    }
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });
}

function moveSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);

