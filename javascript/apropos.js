let currentSlide = 0;
const slides = document.querySelectorAll('#slideapropos2, #slideapropos3');
const prevButton = document.getElementById('precedent');
const nextButton = document.getElementById('suivant');

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        if (index === currentSlide) {
            slide.style.display = 'block';
        }
    });
    

    prevButton.style.display = currentSlide === 0 ? 'none' : 'block';
    nextButton.style.display = currentSlide === slides.length - 1 ? 'none' : 'block';
}

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = 0;
    } else if (currentSlide >= slides.length) {
        currentSlide = slides.length - 1;
    }

    updateSlide();
}

// Initialize the slider
updateSlide();
