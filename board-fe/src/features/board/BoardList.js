import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function BoardList() {
  const dispatch = useDispatch();

  const boards = useSelector(state => state.boards.data);
  const boardStatus = useSelector(state => state.boards.status);
  const error = useSelector(state => state.boards.error);

  useEffect(() => {
    dispatch(fetchBoards())
  }, [fetchBoards, dispatch]);

  let content;

  if (boardStatus === 'loading') {
    content = <div className="loader">Loading....</div>;
  } else if (boardStatus === 'succeeded') {
    content = boards
      .map(board => <li key={board.id} className="board">{board.name}</li>);
  } else if (boardStatus === 'failure') {
    content = <div>{error}</div>
  }

  return <ul>{content}</ul>
}

export default BoardList;
