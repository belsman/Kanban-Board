import React, { useState } from "react";
import Modal from "../../components/modal/modal";

function CardExcerpt({ cardId, title }) {
  const [ showCardDetail, setShowCardDetail ] = useState(false);

  return (
    <>
      <div class="card" onClick={() => setShowCardDetail(true)}>
        {title}
      </div>
      <Modal show={showCardDetail} onClose={() => setShowCardDetail(false)} />
    </>
  );
}

export default CardExcerpt;
