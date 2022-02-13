import React, { PureComponent } from "react";
import { toast } from "react-toastify";

export default class SearchBar extends PureComponent {
  state = {
    imageName: "",
  };

  handleImageChange = (e) => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.imageName.trim() === "") {
      toast.error("Введите критерии запроса!");
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.reset();
  };

  reset = () => {
    this.setState({ imageName: "" });
  };

  render() {
    return (
      <header>
        {/* форма поиска картинок и запроса на бэкэнд */}
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleImageChange}
          />
        </form>
      </header>
    );
  }
}
