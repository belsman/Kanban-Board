import React from 'react';

function Modal({ show, onClose }) {

  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-body">
          <h3>You are viewing the contents of your card</h3>
        </div>
        <div className="modal-footer">
        <button onClick={onClose} className="button">close</button>
      </div>
      </div>
    </div>
  )
}

export default Modal;
