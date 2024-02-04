import React from 'react';
import { render, unmount } from './react-render-utils';

export default () => {
  const id = 'ndzy_docs_index_react-render';

  return (
    <div>
      <button
        style={{ marginRight: 16 }}
        onClick={() => render(<div style={{ height: 100, width: 100, background: 'red' }}>abc</div>, id)}
      >
        render
      </button>
      <button onClick={() => unmount()}>unmount</button>
      <hr />
      <button
        style={{ marginRight: 16 }}
        onClick={() => render(<div style={{ height: 100, width: 100, background: 'red' }}>abc</div>)}
      >
        render
      </button>
      <button onClick={() => unmount()}>unmount</button>
      <div id={id}></div>
    </div>
  );
};
