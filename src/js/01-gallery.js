// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const imgsContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCardsMarkup(galleryItems);

imgsContainer.insertAdjacentHTML('beforeend', galleryMarkup);

imgsContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
        </a>
     </div>`;
    })
    .join('');
}

function onGalleryContainerClick(evt) {
  evt.preventDefault(); // do not save img

  const isGalleryContainImg = evt.target.classList.contains('gallery__image');
  if (!isGalleryContainImg) {
    return;
  }
  evt.target.src = evt.target.dataset.source; // chance for a big picture

  const instance = basicLightbox.create(
    `
  <img src="${evt.target.src}" width="800" height="600">
  `
  );
  instance.show();

  imgsContainer.addEventListener(
    'keydown',
    evt => {
      if (evt.code === 'Escape') {
        instance.close();
      }
    },
    { once: true } // close after first click on escape
  );
}

// add loading = 'lazy';

// intersection observer - 'lazy' load
const lazyImgs = document.querySelectorAll('.gallery__image');
lazyImgs.forEach(img => {
  img.loading = 'lazy';
  img.height = '240px'; // should be for lazy works
});

console.log(lazyImgs);

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting);
    entry.target.src = entry.target.dataset.source;
    observer.unobserve(entry.target);
  });
}

const observer = new IntersectionObserver(handleIntersection);
lazyImgs.forEach(image => {
  observer.observe(image);
});
