document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burgermenu');
    const burgerList = document.querySelector('.burgerlist');
    const slideButtons = document.querySelectorAll('.slide-button');

    burgerMenu.addEventListener('click', function() {
        burgerList.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
        
        slideButtons.forEach(button => {
            button.classList.toggle('hide-slide-buttons');
        });
    });
});
