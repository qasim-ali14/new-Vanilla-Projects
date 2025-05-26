 const carousel = document.querySelector('#medicalCarousel');
  const carouselInstance = new bootstrap.Carousel(carousel);

  document.querySelector('#prevArrow').addEventListener('click', () => {
    carouselInstance.prev();
  });

  document.querySelector('#nextArrow').addEventListener('click', () => {
    carouselInstance.next();
  });