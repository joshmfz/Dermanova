document.addEventListener('DOMContentLoaded', () => {
    const sliderContainers = document.querySelectorAll('.slider-container');

    sliderContainers.forEach((container) => {
        const slider = container.querySelector('.slider');
        const arrowLeft = container.querySelector('.a-l');
        const arrowRight = container.querySelector('.a-r');

        let containerWidth = slider.getBoundingClientRect().width;

        arrowLeft.addEventListener('click', () => {
            slider.scrollLeft -= containerWidth;
        });

        arrowRight.addEventListener('click', () => {
            slider.scrollLeft += containerWidth;
        });
    });
});
