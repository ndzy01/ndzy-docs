import React, { useContext } from 'react';
import { ReduxContext } from './redux';

const AppChildren = () => {
  const { state, dispatch } = useContext(ReduxContext);
  const handleClick = () => {
    dispatch({ type: 'UPDATE', payload: { loading: !state.loading } });
  };

  return <div onClick={handleClick}>loading：{String(state.loading)}</div>;
};

export default AppChildren;
