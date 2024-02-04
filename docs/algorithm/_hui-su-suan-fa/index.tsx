/**
 * title: 回溯算法
 * iframe: true
 */
import React from 'react';
import IApp from '../_components/App';
import { permute } from './permute';

const anchorList = [
  {
    key: 'img1',
    href: '#img1',
    title: '全排列',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_0e641bbe-2047-485b-a541-cc881e84dc9d_img-23.png',
  },
  {
    key: 'img2',
    href: '#img2',
    title: 'N 皇后问题',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_37e7cc07-166e-4cc2-a21e-3f071753ad09_img-24.png',
  },
];

const App = () => {
  // 全排列
  permute([1, 2, 3, 4]);

  return <IApp anchorList={anchorList} />;
};

export default App;
