import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function BoardList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards())
  }, [])

  return (<div>{renderedBoards}</div>)
}

export default BoardList;
