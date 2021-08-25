import React from 'react';

function List({ listName, cards }) {
  
  const renderedCards = cards.map(card => (
    <div class="card">
      {card.title}
    </div>
  ));

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
