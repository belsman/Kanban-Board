import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function BoardList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards())
  }, [])

  const boards = useSelector(state => state.boards.data);
  const renderedBoards = boards
          .map(board => <li key={board.id} className="board">{board.name}</li>);

  return <ul>{renderedBoards}</ul>
}

export default BoardList;
