import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="relative w-full h-full max-w-md bg-white rounded-md shadow-lg">
        <button
          className="absolute top-0 right-0 m-4 p-2 text-xl"
          onClick={onClose}
          aria-label="Close Modal"
        >
          &times;
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.getElementById("root") // Ensure this element exists in your HTML
  );
};

export default Modal;
