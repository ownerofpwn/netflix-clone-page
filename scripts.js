document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carouselContent = document.querySelector('.carousel-content');

    let offset = 0;

    prevButton.addEventListener('click', () => {
        offset -= 220; // Adjust offset based on carousel item width
        if (offset < 0) offset = 0;
        carouselContent.style.transform = `translateX(-${offset}px)`;
    });

    nextButton.addEventListener('click', () => {
        offset += 220; // Adjust offset based on carousel item width
        if (offset > (carouselContent.scrollWidth - carouselContent.clientWidth)) {
            offset = carouselContent.scrollWidth - carouselContent.clientWidth;
        }
        carouselContent.style.transform = `translateX(-${offset}px)`;
    });
});
