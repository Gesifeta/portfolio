import React from "react";
import './modal.css'
const Modal = ({ title, content }) => {
  return (
    <div className="container-modal">
      <div className="modal">
        <div className="modal-content">
          <h2>Modal</h2>
          <p>Modal content</p>
        </div>
        <div className="modal-footer">
          <button>OK</button>
        </div>
        <div className="modal-overlay"></div>
      </div>
    </div>
  );
};

export default Modal;
