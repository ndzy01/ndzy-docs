import { Affix } from 'antd';
import React from 'react';

export default () => {
  return (
    <Affix offsetBottom={20}>
      <p style={{ textAlign: 'center', color: 'red', padding: 16 }}>身体健康永远是第一位的！</p>
    </Affix>
  );
};
