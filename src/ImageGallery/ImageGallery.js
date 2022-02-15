import React from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";

const ImageGallery = ({ pictures }) => {
  return (
    <>
      <ul className={s.gallery}>
        {pictures.map(({ id, webformatURL, tags }) => (
          <li key={id} className={s.galleryItem}>
            <ImageGalleryItem webformatURL={webformatURL} tags={tags} />
          </li>
        ))}
        {/* набор ли с картинками */}
      </ul>
      <Button />
    </>
  );
};

export default ImageGallery;
