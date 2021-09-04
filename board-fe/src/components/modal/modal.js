import React from 'react';
import { CSSTransition } from 'react-transition-group';

function Modal({ show, onClose, title, children }) {
  return (
    <CSSTransition
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className={`modal ${show ? 'show': ''}`} onClick={onClose}>
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
    </CSSTransition>
  )
}

export default Modal;
