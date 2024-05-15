let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const slideWidth = slides[0].clientWidth;
const totalSlides = slides.length;

function showSlide(index) {
    const offset = -index * slideWidth;
    document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}px)`;
    currentSlideIndex = index;
}

function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1; // Revenir à la dernière diapositive lorsque vous atteignez la première
    }
    showSlide(currentSlideIndex);
}

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0; // Revenir à la première diapositive lorsque vous atteignez la dernière
    }
    showSlide(currentSlideIndex);
}

// Afficher la première diapositive au chargement de la page
showSlide(currentSlideIndex);