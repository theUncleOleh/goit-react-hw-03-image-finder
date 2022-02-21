import React, { PureComponent } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from "react-loader-spinner";
import axios from "axios";
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

  // запросы к бэкэнду
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;
    if (prevName !== nextName) {
      this.setState({ loading: true });

      console.log(nextName);
      console.log(prevName);

      axios
        .get(
          `https://pixabay.com/api/?q=${nextName}&page=1&key=24437827-e20f686b1c65a4a2859f17630&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then((response) => this.setState({ pictures: response.data.hits }))
        .catch((error) => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  // модалка
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // .then(({id, webformatURL, largeImageURL}) => this.setState({id, webformatURL,largeImageURL}));
  // метод для измение строки поиска
  handleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  render() {
    const { pictures, loading, showModal, error } = this.state;
    return (
      <div className={s.app}>
        <SearchBar className={s.searchBar} onSubmit={this.handleFormSubmit} />
        {error && <p>Something went wrong: {error.message}</p>}
        {/* галерея картинок */}
        {loading && (
          <div>
            <Oval color="#00BFFF" height={80} width={80} />
          </div>
        )}
        {this.state.pictures && <ImageGallery pictures={pictures} />}

        {/* разметка модального окна */}
        {showModal && <Modal onClose={this.toggleModal} />}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
export default App;
