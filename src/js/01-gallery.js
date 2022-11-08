import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDiv = document.querySelector(".gallery");

const galleryMarkup = makeGalleryMarkup(galleryItems);

galleryDiv.insertAdjacentHTML("beforeend", galleryMarkup);

galleryDiv.addEventListener("click", onGalleryClick);

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link href="${original}">
    <img class="gallery__image" src="${preview}"
    data-source="${original}"
    alt="${description}"
    /></a></div>`;
    })
    .join("");
}

function onGalleryClick(evt) {
  evt.preventDefault();
  const url = evt.target.classList.contains("gallery__image");
  if (!url) {
    return;
  }

  const originalImg = evt.target.dataset.source;

  const modal = basicLightbox.create(`<img src="${originalImg}">`, {
    onShow: () => {
      document.addEventListener("keydown", onEscape);
    },
    onClose: () => {
      document.removeEventListener("keydown", onEscape);
    },
  });

  modal.show();

  function onEscape(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    modal.close();
  }
}
