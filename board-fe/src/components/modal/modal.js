import React from 'react';

function Modal({ show }) {

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <h3>You are viewing the contents of your card</h3>
        </div>
        <div className="modal-footer">
        <button className="button">close</button>
      </div>
      </div>
    </div>
  )
}

export default Modal;
