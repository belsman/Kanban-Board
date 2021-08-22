import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBoards } from './boardsSlice';

function BoardList() {
  const dispatch = useDispatch();

  const boards = useSelector(state => state.boards.data);
  const boardStatus = useSelector(state => state.boards.status);
  const error = useSelector(state => state.boards.error);

  useEffect(() => {
    if (boardStatus === 'idle') {
        dispatch(fetchBoards());
    }
  }, [boardStatus, dispatch]);

  let content;

  if (boardStatus === 'loading') {
    content = <div className="loader">Loading....</div>;
  } else if (boardStatus === 'succeeded') {
    const renderedBoards = boards
      .map(board => (
        <li key={board.id} className="board">
          <Link to={`/boards/${board.id}`}>{board.name}</Link>
        </li>));
    content = <ul>{renderedBoards}</ul>;
  } else if (boardStatus === 'failure') {
    content = <div>{error}</div>
  }

  return <div>{content}</div>
}

export default BoardList;