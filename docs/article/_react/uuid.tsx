import React, { useState } from 'react';
import { Typography } from 'antd';

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const { Paragraph } = Typography;
const Uuid = () => {
  const [uuid, setUuid] = useState('');

  return (
    <div>
      <button onClick={() => setUuid(generateUUID())}>生成</button>
      <button onClick={() => setUuid('')}>清除</button>
      {uuid && <Paragraph copyable>{uuid}</Paragraph>}
    </div>
  );
};

export default Uuid;
