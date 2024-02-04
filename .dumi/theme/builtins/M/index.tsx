import { ConfigProvider, Image } from 'antd';
import zhCn from 'antd/locale/zh_CN';
import React from 'react';

const M = (props: { [k: string]: any }) => (
  <ConfigProvider locale={zhCn}>
    <Image {...props} />
  </ConfigProvider>
);

export default M;
