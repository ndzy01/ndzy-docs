import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload } from 'antd';
import React from 'react';
import { changeImgBlackOrWhite, readImgToDataUrl } from './utils';

const App: React.FC = () => {
  const props1: UploadProps = {
    name: 'file',
    headers: {
      authorization: 'authorization-text',
    },
    beforeUpload(file) {
      handleChange(file);
      return false;
    },
  };

  const handleChange = async (file: any) => {
    const dataUrl = await changeImgBlackOrWhite(await readImgToDataUrl(file), file.type, 127);
    const img: any = document.getElementById('react-img-upload-test');
    img.src = dataUrl;
  };

  return (
    <div>
      <div style={{ overflow: 'scroll' }}>
        <img id="react-img-upload-test" />
      </div>
      <Upload {...props1}>
        <Button icon={<UploadOutlined />}>上传</Button>
      </Upload>
    </div>
  );
};

export default App;
