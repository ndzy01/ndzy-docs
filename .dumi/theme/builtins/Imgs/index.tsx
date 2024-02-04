import { UploadOutlined } from '@ant-design/icons';
import { useMount, useSetState, useVirtualList } from 'ahooks';
import type { UploadProps } from 'antd';
import { Button, Image, Upload } from 'antd';
import React, { useRef } from 'react';
import serviceAxios from '../../../http';
import Copy from '../Copy';

export default () => {
  const containerRef = useRef<any>(null);
  const wrapperRef = useRef<any>(null);
  const [s, setS] = useSetState<{ list: any[] }>({ list: [] });
  const [value, onChange] = React.useState<number>(0);
  const [list, scrollTo] = useVirtualList(s.list, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 88,
    overscan: 10,
  });
  const getAll = () => {
    serviceAxios('/imgs').then((res) => {
      setS({ list: res.data });
    });
  };
  // const del = (id: string) => {
  //   serviceAxios.patch(`/imgs/${id}`).then(() => {
  //     getAll();
  //   });
  // };
  useMount(() => {
    getAll();
  });
  const handleChange: UploadProps['onChange'] = (info: any) => {
    if (info.file.status === 'uploading') {
      return;
    }

    if (info.file.status === 'done') {
      getAll();
    }
  };
  const props: UploadProps = {
    // action: 'http://localhost:3000/imgs/upload',
    action: 'https://ndzy-server.vercel.app/imgs/upload',
    name: 'file',
    headers: {
      authorization: 'authorization-text',
    },
    onChange: handleChange,
  };

  return (
    <div>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>上传</Button>
      </Upload>
      <div style={{ textAlign: 'right', marginBottom: 16 }}>
        <input
          style={{ width: 120 }}
          placeholder="请输入"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <button
          style={{ marginLeft: 8 }}
          type="button"
          onClick={() => {
            scrollTo(Number(value));
          }}
        >
          跳转至
        </button>
        <button style={{ marginLeft: 16 }} onClick={getAll}>
          刷新
        </button>
      </div>
      <div ref={containerRef} style={{ height: '800px', overflow: 'auto' }}>
        <div ref={wrapperRef}>
          {list.map((ele) => (
            <div
              style={{
                height: 132,
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                border: '1px solid #e8e8e8',
                marginBottom: 8,
              }}
              key={ele.index}
            >
              <Image
                style={{ minWidth: 100, minHeight: 100, maxWidth: 100, maxHeight: 100, margin: '16px 32px' }}
                src={ele.data.url}
              />
              <Copy msg={ele.data.url} />
              <span style={{ color: 'pink', display: 'inline-block', margin: '0 16px' }}>{ele.data.github}仓库</span>
              {/* <button onClick={() => del(ele.data.id)}>删除</button> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
