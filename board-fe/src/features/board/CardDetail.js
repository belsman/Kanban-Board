import React from "react";
import Modal from "../../components/modal/modal";

function CardDetail({ card, show, onClose }) {

  const { title, description } = card;

  const displayContent = (
    <div>
      <p>{description}</p>
    </div>
  );

  return (
    <Modal title={title} show={show} onClose={onClose} >
      {displayContent}
    </Modal>
  )
}

export default CardDetail;