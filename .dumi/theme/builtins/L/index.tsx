import { LinkOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import './index.css';

const Link = ({ name, src }: { src: string; name: string }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button type="link" onClick={() => setOpen(true)}>
        {name}
      </Button>
      <a className="doc-l-a" href={src} target="_blank">
        <LinkOutlined />
      </a>
      <Drawer
        open={open}
        title={
          <a href={src} target="_blank">
            {name}
          </a>
        }
        placement="right"
        width="100%"
        onClose={() => setOpen(false)}
      >
        <iframe className="doc-l-iframe" src={src} />
      </Drawer>
    </>
  );
};

export default Link;
