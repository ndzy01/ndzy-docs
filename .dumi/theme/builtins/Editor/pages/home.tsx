import { Button, Modal, Space, Tree } from 'antd';
import { observer } from 'ndzy-utils';
import { useStores } from '../store';
import { EditorMd } from '../components/editor-md';
import { useEffect, useState } from 'react';
import EditArticle from '../components/edit-article';
import React from 'react';
import { Layout, Spin } from 'antd';

const { Header, Sider, Content } = Layout;

const loop = (arr: any[]): any[] => {
  return arr.map((item) => {
    const newItem = { ...item, key: item.id, label: item.title, value: item.id };

    if (Array.isArray(item.children) && item.children.length > 0) {
      newItem.children = loop(item.children);
    } else {
      delete newItem.children;
    }

    return newItem;
  });
};
export const Home: React.FC<Record<string, unknown>> = observer(() => {
  const [open, setOpen] = useState(false);
  const [v, setV] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };

  const {
    loading,
    articles: {
      state: { articles, article },
      query,
      getDetail,
      updateState,
      save,
      create,
      del,
    },
  } = useStores();

  useEffect(() => {
    query();
  }, []);

  return (
    <Layout style={{ background: '#fff' }}>
      <Spin spinning={loading.articles} />
      <Layout>
        <Header style={{ background: '#fff' }}>
          <Space>
            <Button
              type="link"
              key="4"
              onClick={() => {
                setV(true);
              }}
            >
              {article?.title || '请选择文章'}
            </Button>
            <Button
              key="3"
              onClick={() => {
                updateState({ article: {} });
                setOpen(true);
              }}
            >
              新增
            </Button>
            <Button
              key="2"
              onClick={() => {
                if (!article.id) {
                  return;
                }

                setOpen(true);
              }}
            >
              编辑
            </Button>
            <Button
              key="1"
              type="primary"
              onClick={() => {
                if (!article.id) {
                  return;
                }

                del(article.id);

                setSelectedKeys([]);
              }}
            >
              删除
            </Button>
          </Space>
        </Header>
        <Content>
          <EditorMd
            type="view"
            value={article?.content}
            onChange={(v: string) => {
              updateState({ article: { ...article, content: v } });
            }}
          />
        </Content>
      </Layout>

      {open && (
        <EditArticle
          onCancel={() => setOpen(false)}
          {...article}
          open={open}
          save={save}
          create={create}
          roots={loop(articles)}
        />
      )}

      {v && (
        <Modal open={v} onCancel={() => setV(false)} footer={null}>
          <Tree
            showLine
            onExpand={onExpand}
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            treeData={loop(articles)}
            selectedKeys={selectedKeys}
            onSelect={(keys: any) => {
              setSelectedKeys(keys);
              if (keys.length) {
                getDetail(keys[0]);
              } else {
                updateState({ article: {} });
              }
              setV(false);
            }}
          />
        </Modal>
      )}
    </Layout>
  );
});
