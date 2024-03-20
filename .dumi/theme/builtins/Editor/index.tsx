import React from 'react';
import { withStores } from './store';
import { Home } from './pages/home';

const Editor = () => {
  return <Home />;
};

export default withStores(Editor);
