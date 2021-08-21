import React from 'react';
import { useSelector } from 'react-redux';

function Board({ match }) {
  const { boardId } = match.params;

  const board = useSelector(state => state.boards.data
                .find(board => board.id === Number(boardId)));

  if (!board) {
    return (
      <section>
        <h2>Board Not Found!</h2>
      </section>
    );
  }

  return (
    <div>Current board! ({board.name}) with boardId: {boardId}</div>
  );
}

export default Board;
