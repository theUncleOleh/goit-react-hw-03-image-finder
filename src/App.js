import React, { PureComponent } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
import "./App.css";
import s from "./App.module.css";

import SearchBar from "./Searchbar";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import ImageGallery from "./ImageGallery/ImageGallery";

class App extends PureComponent {
  state = {
    pictures: [],
    imageName: "",
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.setState({ loading: true });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.state.imageName}&page=1&key=24437827-e20f686b1c65a4a2859f17630&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then((res) => res.json())
          .then((data) => {
            this.setState((prevState) => ({
              pictures: [...prevState.pictures, ...data.hits],
            }));
          })
          .finally(() => this.setState({ loading: false }));
      }, 3000);
    }
  }

  // .then(({id, webformatURL, largeImageURL}) => this.setState({id, webformatURL,largeImageURL}));

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    const { pictures, loading } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />

        {/* галерея картинок */}
        {loading && (
          <div>
            <Oval color="#00BFFF" height={80} width={80} />
          </div>
        )}
        <ImageGallery pictures={pictures} />

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
