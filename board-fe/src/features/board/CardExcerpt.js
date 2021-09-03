import React, { useState } from "react";
import CardDetail from "./CardDetail";

function CardExcerpt({card }) {
  const [ showCardDetail, setShowCardDetail ] = useState(false);

  return (
    <>
      <div class="card" onClick={() => setShowCardDetail(true)}>
        {card.title}
      </div>
      <CardDetail card={card} show={showCardDetail} onClose={() => setShowCardDetail(false)} />
    </>
  );
}

export default CardExcerpt;
