import React, { useState } from 'react';
import { Typography } from 'antd';

function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function generateRandomString(length: number) {
  // 定义所有可能字符，包括大小写英文字母和阿拉伯数字
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = ''; // 初始化结果字符串

  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    // 对每个字符位置生成一个随机数，并添加对应的字符到结果字符串
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const { Paragraph } = Typography;
const Uuid = () => {
  const [uuid, setUuid] = useState('');
  const [s, setS] = useState('');

  return (
    <div>
      <button onClick={() => setUuid(generateUUID())}>生成</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setUuid('')}>清除</button>
      {uuid && <Paragraph copyable>{uuid}</Paragraph>}
      <hr />
      <button onClick={() => setS(generateRandomString(8))}>生成</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => setS('')}>清除</button>
      {s && <Paragraph copyable>{s}</Paragraph>}
    </div>
  );
};

export default Uuid;
