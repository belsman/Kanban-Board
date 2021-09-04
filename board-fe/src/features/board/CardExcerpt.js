import React, { useState } from "react";
import Modal from "../../components/modal/modal";

function CardExcerpt({card }) {
  const [ showCardDetail, setShowCardDetail ] = useState(false);

  return (
    <>
      <div class="card" onClick={() => setShowCardDetail(true)}>
        {card.title}
      </div>
      <Modal title={card.title} show={showCardDetail} onClose={() => setShowCardDetail(false)}>
        <p>{card.description}</p>
      </Modal>
    </>
  );
}

export default CardExcerpt;
