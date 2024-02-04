/**
 * title: Question
 * iframe: true
 */

import React from 'react';
import './index.less';

const Question = () => {
  // 每隔一秒打印
  let config = {
    key: setInterval(() => {
      console.log('ndzy---log---ndzy', 111, '------');
    }, 1000),
  };
  config = null;

  // 报错 let const 无变量提升
  var name1 = 'def';
  function f1() {
    console.log('ndzy---log---ndzy', name1, '------');

    let name1 = 'abc';
  }

  // undefined 变量定义提升 但是赋值不会
  var name2 = 'def';
  function f2() {
    console.log('ndzy---log---ndzy', name2, '------');

    var name2 = 'abc';
  }

  // def 本身作用域没有值 会往外层找
  var name3 = 'def';
  function f3() {
    console.log('ndzy---log---ndzy', name3, '------');

    name3 = 'abc';
  }

  // [1, 10, 100, 1000, 2, 32, 4, 7, 89]
  [1, 32, 4, 7, 89, 100, 2, 10, 1000].sort();

  return (
    <>
      <h1>等列布局</h1>
      <div className="container-a">
        <div className="list-1">
          <div className="item-1"></div>
          <div className="item-1"></div>
          <div className="item-1"></div>
          <div className="item-1"></div>
        </div>
      </div>
      <hr />
      <div className="container-a">
        <div className="list-2">
          <div className="item-2"></div>
          <div className="item-2"></div>
          <div className="item-2"></div>
          <div className="item-2"></div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Question;
