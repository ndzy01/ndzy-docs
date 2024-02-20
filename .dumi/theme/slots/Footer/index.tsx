import { Affix } from 'antd';
import React from 'react';
import './index.css';

export default () => {
  return (
    <Affix offsetBottom={20}>
      <p className="footer">身体健康永远是第一位的！</p>
    </Affix>
  );
};
