import React from "react";
import Modal from "../../components/modal/modal";

function CardExcerpt({ cardId, title }) {
  
  return (
    <>
      <div class="card" onClick={() => alert(`Display Modal for ${cardId}`)}>
        {title}
      </div>
      <Modal />
    </>
  );
}

export default CardExcerpt;
