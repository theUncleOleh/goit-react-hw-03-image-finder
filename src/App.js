import React, { PureComponent } from "react";
import "./App.css";
import SearchBar from "./Searchbar";

class App extends PureComponent {
  state = {
    imageList: [],
  };

  render() {
    return (
      <header>
        <form>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default App;
