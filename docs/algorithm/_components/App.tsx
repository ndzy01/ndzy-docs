import { Anchor, Col, Divider, Image, Row } from 'antd';
import React from 'react';

const App = ({ anchorList }: { anchorList: any[] }) => {
  return (
    <Row>
      <Col span={8}>
        <Anchor items={anchorList} />
      </Col>
      <Col span={8}>
        {anchorList.map((item: any) => {
          return (
            <div key={item.key} id={item.key}>
              <h1>{item.title}</h1>
              <Image src={item.img} />
              <Divider />
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default App;
