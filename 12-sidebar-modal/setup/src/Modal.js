import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

// We can't set up the state value to decide when to toggle the modal inside the modal itself cause the button for it is somewhere else (Home.js)
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
