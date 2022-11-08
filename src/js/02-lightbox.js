import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryDiv = document.querySelector(".gallery");

const galleryMarkup = makeGalleryMarkup(galleryItems);

galleryDiv.insertAdjacentHTML("beforeend", galleryMarkup);

// Gallery items

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<ul class="gallery">
      <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}"
        alt="${description}"
        />
    </a>
    </li>
    </ul>`;
    })
    .join("");
}

const lightboxList = new SimpleLightbox(".gallery a", {
  captionData: "alt",
  captionDelay: 250,
  captionType: "alt",
});
