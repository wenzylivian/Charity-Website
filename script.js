function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

  let index = 0;
function moveSlide(step) {
    const carousel = document.getElementById('carousel');
    const totalImages = document.querySelectorAll('.carousel img').length;
    const visibleImages = 5;
    index += step;
    if (index < 0) {
        index = totalImages - visibleImages;
    } else if (index > totalImages - visibleImages) {
        index = 0;
    }
    carousel.style.transform = `translateX(${-index * 160}px)`;
}
setInterval(() => moveSlide(1), 3000);