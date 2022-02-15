import React, { PureComponent } from "react";

const ImageGalleryItem = ({ id, webformatURL, tags }) => {
  return <img src={webformatURL} alt={tags} />;
};

export default ImageGalleryItem;
