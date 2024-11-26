import Swiper from './swiper-bundle.min.js';

export default function decorate(block) {
  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');

  Array.from(block.children).forEach((slide) => {
    const firstDiv = slide.querySelector('div:first-child');
    const pTag = firstDiv ? firstDiv.querySelector('p') : null;

    let classNames = 'swiper-slide';
    if (pTag && pTag.textContent) {
      const extractedClass = pTag.textContent.trim().replace(/\s+/g, '-').toLowerCase();
      classNames += ` ${extractedClass}`;
    }

    const picture = slide.querySelector('picture');

    if (picture) {
      const newSlide = document.createElement('div');
      newSlide.className = classNames;

      const pictureWrapper = document.createElement('div');
      pictureWrapper.appendChild(picture);

      newSlide.appendChild(pictureWrapper);

      swiperWrapper.appendChild(newSlide);
    }

    if (firstDiv) {
      firstDiv.remove();
    }
  });

  block.innerHTML = '';
  block.classList.add('swiper-container', 'block');
  block.setAttribute('data-block-name', 'carousel-0642');
  block.setAttribute('data-block-status', 'loaded');

  block.appendChild(swiperWrapper);

  const pagination = document.createElement('div');
  pagination.classList.add('swiper-pagination');
  block.appendChild(pagination);

  Swiper(block, {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}
