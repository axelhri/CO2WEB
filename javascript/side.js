let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    // Masquer toutes les diapositives
    slides.forEach(slide => {
        slide.classList.remove('prev', 'active', 'next');
    });
    // Afficher la diapositive spécifiée par l'index
    slides[index].classList.add('active');

    if (index > 0) {
        slides[index - 1].classList.add('prev');
    }

    if (index < slides.length - 1) {
        slides[index + 1].classList.add('next');
    }
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
