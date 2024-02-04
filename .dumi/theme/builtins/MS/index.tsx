import { useMount, useSetState, useVirtualList } from 'ahooks';
import { Button, ConfigProvider, Image, Input, InputNumber, QRCode, Select, Space, Typography } from 'antd';
import zhCn from 'antd/locale/zh_CN';
import React, { useRef } from 'react';

interface State {
  imgs: { label: string; value: string[] }[];
  size: number;
  name: string;
  list: string[];
  scrollToIndex: string;
}
interface Props {
  showQR: '1' | '0';
}

const { Paragraph } = Typography;
const MS = ({ showQR }: Props) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [s, setS] = useSetState<State>({
    imgs: [],
    size: 300,
    name: '',
    list: [],
    scrollToIndex: '',
  });
  const [list, scrollTo] = useVirtualList(s.list, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: s.size * 1.1,
    overscan: 10,
  });
  useMount(() => {
    fetch('/img_db.json').then((res) => {
      res.json().then((data) => {
        setS({ imgs: data });
      });
    });
  });

  return (
    <ConfigProvider locale={zhCn}>
      <Space>
        <InputNumber
          step={300}
          min={1}
          value={s.size}
          onChange={(v) => {
            setS({ size: Number(v) });
          }}
        />
        <Select
          style={{ width: 120 }}
          value={s.name}
          onChange={(v) => setS({ name: v, list: s.imgs.filter((item) => item.label === v)[0].value })}
          options={s.imgs.map((item) => ({ label: item.label, value: item.label }))}
        />
        {s.list.length > 0 && s.list.length}
      </Space>
      {s.name && (
        <Space.Compact style={{ width: '100%', marginTop: 16 }}>
          <Input
            style={{ width: 120 }}
            value={s.scrollToIndex}
            onChange={(e) => setS({ scrollToIndex: e.target.value })}
          />
          <Button
            onClick={() => {
              scrollTo(Number(s.scrollToIndex));
            }}
          >
            跳转
          </Button>
        </Space.Compact>
      )}

      <div ref={containerRef} style={{ height: s.size * 2.2, overflow: 'auto' }}>
        <div ref={wrapperRef}>
          {list.map((ele) => (
            <div
              style={{
                height: s.size * 1.1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              key={ele.index}
            >
              {showQR === '1' && <QRCode value={ele.data} />}
              <div style={{ width: s.size, height: s.size }}>
                <Image src={ele.data} />
              </div>
              <Paragraph copyable>{ele.data}</Paragraph>
            </div>
          ))}
        </div>
      </div>
    </ConfigProvider>
  );
};

export default MS;
