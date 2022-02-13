import React, { PureComponent } from "react";

export default class ImageGalleryItem extends PureComponent {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imageItem !== this.props.imageItem) {
      console.log("приветтт");
      fetch(
        `https://pixabay.com/api/?q=${this.props.imageItem}&page=1&key=24437827-e20f686b1c65a4a2859f17630&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then(console.log);
    }
  }

  render() {
    return (
      <li class="gallery-item">
        <img src="" alt={this.props.imageItem} />
      </li>
    );
  }
}
