// 适用于 react 18
import type * as React from 'react';
import type { Root } from 'react-dom/client';
import { createRoot } from 'react-dom/client';

const MARk = '_ndzy_react_root_';
let div: any;

type ContanierType = (Element | DocumentFragment) & { [MARk]?: Root };

function renderNode(node: React.ReactElement, container: ContanierType) {
  const root = container[MARk] || createRoot(container);

  root.render(node);

  container[MARk] = root;
}

export function render(node: React.ReactElement, containerId?: string) {
  if (!document.getElementById(MARk)) {
    div = document.createElement('div');
    div.id = MARk;
    div.style = 'padding:16px';
  }

  if (containerId) {
    document.getElementById(containerId)?.appendChild(div);
  } else {
    document.body.appendChild(div);
  }

  renderNode(node, div);
}

function unmountNode(container: ContanierType) {
  container[MARk]?.unmount();

  delete container[MARk];
}

export async function unmount(containerId?: string) {
  return Promise.resolve().then(() => {
    if (div) {
      unmountNode(div);

      document.getElementById(MARk)!.parentNode!.removeChild(document.getElementById(MARk)!);

      div = undefined;
    }
  });
}
