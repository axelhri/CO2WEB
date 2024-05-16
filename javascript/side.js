let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const slideWidth = slides[0].clientWidth;
        const totalSlides = slides.length;
        const carouselWrapper = document.querySelector('.carousel-wrapper');
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');

        // Clone first and last slides
        const firstClone = slides[0].cloneNode(true);
        const lastClone = slides[totalSlides - 1].cloneNode(true);
        
        // Append clones to the wrapper
        carouselWrapper.appendChild(firstClone);
        carouselWrapper.insertBefore(lastClone, slides[0]);

        function showSlide(index, animate = true) {
            const offset = -index * slideWidth;
            carouselWrapper.style.transition = animate ? 'transform 0.5s ease' : 'none';
            carouselWrapper.style.transform = `translateX(${offset}px)`;
            currentSlideIndex = index;
        }

        function prevSlide() {
            currentSlideIndex--;
            showSlide(currentSlideIndex);

            if (currentSlideIndex < 0) {
                setTimeout(() => {
                    currentSlideIndex = totalSlides - 1;
                    showSlide(currentSlideIndex, false);
                }, 500);
            }
        }

        function nextSlide() {
            currentSlideIndex++;
            showSlide(currentSlideIndex);

            if (currentSlideIndex >= totalSlides + 0) {
                setTimeout(() => {
                    currentSlideIndex = 0;
                    showSlide(currentSlideIndex, false);
                }, 500);
            }
        }

        // Event listeners for previous and next buttons
        if (prevButton) {
            prevButton.addEventListener('click', prevSlide);
        }

        if (nextButton) {
            nextButton.addEventListener('click', nextSlide);
        }

        // Show the first slide (considering the clone)
        showSlide(1, false);