import React from "react";

function CardExcerpt({ cardId, title }) {
  
  return (
    <div class="card" onClick={() => alert(`Display Modal for ${cardId}`)}>
      {title}
    </div>
  );
}

export default CardExcerpt;
