import React from 'react';

function Modal({ show, onClose, title, children }) {

  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4>{title}</h4>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button onClick={onClose} className="button">close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal;
