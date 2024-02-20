import { Button, Form, Input } from 'antd';
import DocLayout from 'dumi/theme-default/layouts/DocLayout';
import React, { useEffect, useState } from 'react';
import './index.css';

type FieldType = {
  password?: string;
};

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

  return env === 'development' || token === 'ndzy' ? (
    <DocLayout />
  ) : (
    <div className="doc-login">
      <Form name="basic" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} onFinish={onFinish} autoComplete="off">
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
