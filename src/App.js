import React, { PureComponent } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import SearchBar from "./Searchbar";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";

class App extends PureComponent {
  state = {
    imageName: "",
  };

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />

        {/* галерея картинок */}

        <ul class="gallery">
          {/* набор ли с картинками */}
          <ImageGalleryItem imageItem={this.state.imageName} />
        </ul>
        {/* разметка модального окна */}
        <div class="overlay">
          <div class="modal">
            <img src="" alt="" />
          </div>
        </div>
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
