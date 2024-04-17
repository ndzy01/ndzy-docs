import { Button, Form, Input, Modal, TreeSelect } from 'antd';
import { EditorMd } from './editor-md';
import React from 'react';

const EditArticle = ({ title, content, id, open, save, create, onCancel, roots }: any) => {
  return (
    <Modal width={1200} title={id ? '编辑文章' : '新增文章'} open={open} onCancel={onCancel} footer={null}>
      <Form
        initialValues={{ title, content }}
        onFinish={(v) => {
          if (id) {
            save(id, { ...v });
          } else {
            create({ ...v });
          }

          onCancel();
        }}
        autoComplete="off"
      >
        {!id && (
          <Form.Item name="parentId" label="父级目录">
            <TreeSelect
              showSearch
              style={{ width: '100%' }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="请选择父级目录"
              allowClear
              treeDefaultExpandAll
              treeData={roots}
            />
          </Form.Item>
        )}

        <Form.Item name="title" label="标题" rules={[{ required: true, message: '标题不能为空' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="content" label="内容" rules={[{ required: true, message: '内容不能为空' }]}>
          <EditorMd />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditArticle;
