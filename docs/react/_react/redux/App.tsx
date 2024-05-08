import React, { useReducer } from 'react';
import AppChildren from './AppChildren';
import { initialState, reducer, ReduxContext } from './redux';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReduxContext.Provider value={{ state, dispatch }}>
      <AppChildren />
    </ReduxContext.Provider>
  );
};

export default App;
