import { LinkOutlined } from '@ant-design/icons';
import { useSetState } from 'ahooks';
import { Button, Drawer } from 'antd';
import React from 'react';

const Link = ({ name, src }: { src: string; name: string }) => {
  const [state, setState] = useSetState({ open: false });

  return (
    <>
      <Button type="link" onClick={() => setState({ open: true })}>
        {name}
      </Button>
      <a style={{ color: 'skyblue', marginLeft: 2 }} href={src} target="_blank">
        <LinkOutlined />
      </a>
      <Drawer
        open={state.open}
        title={
          <a href={src} target="_blank">
            {name}
          </a>
        }
        placement="right"
        width="100%"
        onClose={() => setState({ open: false })}
      >
        <iframe style={{ width: '100%', height: '100%' }} src={src} />
      </Drawer>
    </>
  );
};

export default Link;
