import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';

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

  const lists = board.lists;
  const renderedLists = lists.map(list => <List key={list.id} cards={list.cards} />);

  console.log("Why are we not showing!");
  console.log(renderedLists);

  return (
    <div>
      <div className="lists" style={{ display: 'flex' }}>
        {renderedLists}
      </div>
    </div>
  );
}

export default Board;
