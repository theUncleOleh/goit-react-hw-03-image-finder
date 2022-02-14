import React, { PureComponent } from "react";

// export default class ImageGalleryItem extends PureComponent {
//     state = {
//     id: '',
//     webformatURL: '',
//     largeImageURL: '',
//     }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.imageItem !== this.props.imageItem) {
//       console.log("приветтт");
//       fetch(
//         `https://pixabay.com/api/?q=${this.props.imageItem}&page=1&key=24437827-e20f686b1c65a4a2859f17630&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then((res) => res.json())
//         .then(({id, webformatURL, largeImageURL}) => console.log(({id, webformatURL, largeImageURL})))
//         // .then(({id, webformatURL, largeImageURL}) => this.setState({id, webformatURL,largeImageURL}));
//     }
//   }

//   render() {
//     return (
//       <li class="gallery-item">
//           {/* {this.state.id && <div>{this.state.id}</div> } */}
//           <img src="" alt="" />
//       </li>
//     );
//   }
// }
