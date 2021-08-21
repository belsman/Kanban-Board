import React from 'react';

function List({ cards }) {
  
  const renderedCards = cards.map(card => <div className="card">{card.title}</div>);

  return (
    <div className="list" style={{ border: '1px solid red' }}>{renderedCards}</div>
  );
}

export default List;
