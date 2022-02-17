import React, { PureComponent } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends PureComponent {
  componentDidMount() {
    console.log(" Modal componentDidMount");

    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log(" Modal componentWillUnmount");
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("Нажали Escape");

      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.handleBackdropClick}>
        <div className={s.modal}>
          <img src="" alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}
