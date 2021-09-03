import React from 'react';
import CardExcerpt from './CardExcerpt';

function List({ listName, cards }) {
  
  const renderedCards = cards.map(card => <CardExcerpt card={card} />);

  return (
    <div class="list">
      <header class="list-header">{listName}</header>
      <div className="cards">
        {renderedCards}
      </div>
    </div>
  );
}

export default List;
