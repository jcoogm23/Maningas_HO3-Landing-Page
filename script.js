let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > totalSlides) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

showSlides();

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

prevButton.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 1) { slideIndex = totalSlides }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
});

nextButton.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex > totalSlides) { slideIndex = 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
});

document.getElementById("terms-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    window.open("terms.html", "_blank"); // Open terms.html in a new tab/window
});


