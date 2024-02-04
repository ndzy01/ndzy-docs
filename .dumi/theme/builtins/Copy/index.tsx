import { Typography } from 'antd';
import React from 'react';

const { Paragraph } = Typography;
const Copy = ({ msg }: { msg: string }) => <div>{msg && <Paragraph copyable>{msg}</Paragraph>}</div>;

export default Copy;
