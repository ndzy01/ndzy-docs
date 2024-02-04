/**
 * title: 动态规划
 * iframe: true
 */
import React from 'react';
import IApp from '../_components/App';
import { coinChange1, coinChange2, coinChange3 } from './coinChange';
import { fib1, fib2, fib3, fib4 } from './fib';

const anchorList = [
  {
    key: 'img1',
    href: '#img1',
    title: '斐波那契数',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_dd51d36e-f784-4715-888a-93e73fe5098b_img-21.png',
  },
  {
    key: 'img2',
    href: '#img2',
    title: '零钱兑换',
    img: 'https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_97f9795f-394b-4ca4-8eb9-b7b66198589a_img-22.png',
  },
];

const App = () => {
  // fib 数列
  fib1(11);
  fib2(11);
  fib3(11);
  fib4(11);

  // 零钱兑换
  coinChange1([1, 3, 5], 18);
  coinChange2([1, 3, 5], 18);
  coinChange3([1, 3, 5], 18);

  return <IApp anchorList={anchorList} />;
};

export default App;
