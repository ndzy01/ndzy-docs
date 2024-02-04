import { Button, Form, Input } from 'antd';
import DocLayout from 'dumi/theme-default/layouts/DocLayout';
import React, { useEffect, useState } from 'react';

const env = process.env.NODE_ENV;
const GlobalLayout = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token') || '';
    setToken(token);
  }, []);

  const onFinish = (values: any) => {
    setToken(values.password);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  type FieldType = {
    password?: string;
  };

  return env === 'development' || token === 'ndzy' ? (
    <DocLayout />
  ) : (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType> label="密码" name="password" rules={[{ required: true, message: '密码不能为空！' }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GlobalLayout;
