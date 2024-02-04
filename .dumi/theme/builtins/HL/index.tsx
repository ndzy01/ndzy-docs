import { Col, Row } from 'antd';
import React from 'react';
import L from '../L';

const index = () => {
  const links = [
    { src: 'https://ndzy01.github.io/', name: '文档' },
    { src: 'https://www.yuque.com/u22409297/fqv2ol', name: 'blog' },
    { src: 'https://www.yuque.com/u22409297/aqgf01', name: '数据结构与算法' },
    { src: 'https://labuladong.github.io/algo/di-ling-zh-bfe1b/xue-xi-sua-01220/', name: '算法小抄' },
    { src: 'http://zh.zlibrary-china.se/', name: '图书' },
    { src: 'https://github.com/liujuping', name: 'liujuping' },
    { src: 'https://pythontutor.com/javascript.html#mode=edit', name: 'javascript可视化' },
    { src: 'https://www.jsdelivr.com/package/gh/ndzy01/img?tab=stats', name: 'ndzy img 访问量统计' },
    { src: 'https://juejin.cn/post/6844904131795091464', name: 'React源码学习' },
    { src: 'https://pomb.us/build-your-own-react/', name: 'Build your own React' },
    { src: 'https://cn1.hkss-net.xyz/auth/login', name: 'vpn' },
    { src: 'https://visualgo.net/zh', name: '算法可视化' },
    { src: 'https://zhuanlan.zhihu.com/p/70443038', name: '五视图架构方法论' },
  ];
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
      {links.map((item) => (
        <Col key={item.src} span={12}>
          <L src={item.src} name={item.name} />
        </Col>
      ))}
    </Row>
  );
};

export default index;
