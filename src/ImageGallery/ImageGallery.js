import React from "react";

const ImageGallery = ({ pictures }) => {
  return (
    <ul class="gallery">
      {pictures.map((picture) => (
        <li class="gallery-item" key={picture.id}>
          <img src={picture.webformatURL} alt={picture.tags} />
        </li>
      ))}
      {/* набор ли с картинками */}
    </ul>
  );
};

export default ImageGallery;
