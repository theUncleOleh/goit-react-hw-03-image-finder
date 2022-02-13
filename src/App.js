import React, { PureComponent } from "react";
import "./App.css";
import SearchBar from "./Searchbar";

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
          <li class="gallery-item">
            <img src="" alt="" />
          </li>
        </ul>
        {/* разметка модального окна */}
        <div class="overlay">
          <div class="modal">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
