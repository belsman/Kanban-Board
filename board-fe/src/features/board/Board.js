import React from 'react';

function Board({ match }) {
  const { boardId } = match.params;

  return (
    <div>Current board! with boardId: {boardId}</div>
  );
}

export default Board;
