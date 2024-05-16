let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const slideWidth = slides[0].clientWidth;
        const totalSlides = slides.length;
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');

// Fonction pour afficher une diapositive spécifique
function showSlide(index) {
    const offset = -index * slideWidth;
    document.querySelector('.carousel-wrapper').style.transform = `translateX(${offset}px)`;
    currentSlideIndex = index;
    updateIndicators(); // Mettre à jour les indicateurs
}

// Fonction pour passer à la diapositive précédente
function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1; // Revenir à la dernière diapositive lorsque vous atteignez la première
    }
    showSlide(currentSlideIndex);
}

// Fonction pour passer à la diapositive suivante
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0 ; // Revenir à la première diapositive lorsque vous atteignez la dernière
    }
    showSlide(currentSlideIndex);
}

// Fonction pour créer les indicateurs
function createIndicators() {
    const indicatorContainer = document.querySelector('.carousel-indicators');

    // Supprimer les indicateurs existants
    indicatorContainer.innerHTML = '';

    // Créer un indicateur pour chaque diapositive
    slides.forEach((slide, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add('indicator');
        indicatorContainer.appendChild(indicator);

        // Ajouter un écouteur d'événement pour le clic sur l'indicateur
        indicator.addEventListener('click', () => {
            showSlide(index); // Afficher la diapositive correspondante au clic sur l'indicateur
        });
    });

    // Mettre à jour les indicateurs initialement
    updateIndicators();
}

// Fonction pour mettre à jour les indicateurs
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlideIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Appeler la fonction pour créer les indicateurs au chargement de la page
createIndicators();

// Afficher la première diapositive au chargement de la page
showSlide(currentSlideIndex);


