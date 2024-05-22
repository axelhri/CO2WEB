let currentSlide = 0;
const slides = document.querySelectorAll('.slidetexte1, .slidetexte2');
const prevButton = document.getElementById('precedent');
const nextButton = document.getElementById('suivant');

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('slide-active', 'slide-prev', 'slide-next');
        slide.style.display = 'none'; // Cacher toutes les diapositives par défaut

        if (index === currentSlide) {
            slide.classList.add('slide-active');
            slide.style.display = 'block'; // Afficher la diapositive active
        } else if (index < currentSlide) {
            slide.classList.add('slide-prev');
        } else {
            slide.classList.add('slide-next');
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
