let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    // Masquer toutes les diapositives
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    // Afficher la diapositive spécifiée par l'index
    slides[index].classList.add('active');
}

function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; // Aller à la dernière diapositive
    }
    showSlide(currentSlideIndex);
}

function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; // Revenir à la première diapositive
    }
    showSlide(currentSlideIndex);
}

// Afficher la première diapositive au chargement de la page
showSlide(currentSlideIndex);
