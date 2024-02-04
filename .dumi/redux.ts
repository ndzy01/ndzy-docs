import React, { createContext } from 'react';

interface State {
  loading: boolean;
}

interface Action {
  type: 'UPDATE' | 'SETLOADING';
  payload?: Partial<State>;
}

interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const initialState: State = {
  loading: false,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, ...(action.payload || {}) };

    case 'SETLOADING':
      return { ...state, ...(action.payload || {}) };

    default:
      return state;
  }
};

export const ReduxContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => {},
});
