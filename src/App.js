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
import Modal from "./Modal/Modal";

class App extends PureComponent {
  state = {
    pictures: [],
    imageName: "",
    loading: false,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.setState({ loading: true });

      fetch(
        `https://pixabay.com/api/?q=${this.state.imageName}&page=1&key=24437827-e20f686b1c65a4a2859f17630&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({ pictures: data.hits });
        })
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // .then(({id, webformatURL, largeImageURL}) => this.setState({id, webformatURL,largeImageURL}));

  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    const { pictures, loading, showModal, error } = this.state;
    return (
      <div className={s.app}>
        <SearchBar className={s.searchBar} onSubmit={this.handleFormSubmit} />
        {error && <h1>Картинка {this.state.imageName} не найдена</h1>}
        {/* галерея картинок */}
        {loading && (
          <div>
            <Oval color="#00BFFF" height={80} width={80} />
          </div>
        )}
        <ImageGallery pictures={pictures} />

        {/* разметка модального окна */}
        {showModal && <Modal onClose={this.toggleModal} />}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
export default App;
