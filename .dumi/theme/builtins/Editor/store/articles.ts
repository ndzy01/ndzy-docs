import { makeAutoObservable } from 'mobx';
import { RootStore } from '.';
import { createAxiosInstance } from 'ndzy-utils';

interface State {
  articles: any[];
  article: Record<string, any>;
}

interface DataNode {
  title: string;
  parentId: string | null; // 父节点的 ID
  id: string;
  content: string;
  children?: DataNode[]; // 子节点数组
}

function buildTree(data: DataNode[]): DataNode[] {
  let tree: DataNode[] = [];
  let childrenOf: { [key: string]: DataNode[] } = {};

  data.forEach((item: DataNode) => {
    // 初始化每个节点的子节点数组
    childrenOf[item.id] = childrenOf[item.id] || [];
    // 将节点添加到其子节点数组中
    item.children = childrenOf[item.id];
    if (item.parentId === null) {
      // 如果parentId为null，则为根节点
      tree.push(item);
    } else {
      // 如果存在parentId，则为子节点
      childrenOf[item.parentId] = childrenOf[item.parentId] || [];
      childrenOf[item.parentId].push(item);
    }
  });

  return tree;
}
const service = createAxiosInstance('https://ndzy-article-s.vercel.app');
export class Articles {
  setLoading: (value: boolean, key?: string) => void;
  updateState: (data: Partial<State>) => void;
  resetState: (data: Partial<State>) => void;
  state: State = {
    articles: [],
    article: {},
  };

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, {}, { autoBind: true });

    this.setLoading = (value: boolean, key = 'articles') => {
      rootStore.setLoading(value, key);
    };

    this.resetState = (data) => {
      this.state = { ...this.state, ...data };
    };

    this.updateState = (data) => {
      this.state = { ...this.state, ...data };
    };
  }

  async query() {
    this.setLoading(true);

    const data: any = await service({ url: '/', method: 'GET' });

    this.updateState({ articles: buildTree(data.data || []) });

    this.setLoading(false);
  }

  async getDetail(id: string) {
    this.setLoading(true);

    const data: any = await service({ url: `/${id}`, method: 'GET' });

    this.updateState({ article: data.data[0] });

    this.setLoading(false);
  }

  async save(id: string, params: any) {
    this.setLoading(true);

    await service({ url: `/${id}`, method: 'PATCH', data: params });

    this.getDetail(id);

    this.query();

    this.setLoading(false);
  }

  async create(params: any) {
    this.setLoading(true);

    await service({ url: '/', method: 'POST', data: params });

    this.query();

    this.setLoading(false);
  }

  async del(id: string) {
    this.setLoading(true);

    await service({ url: `/${id}`, method: 'DELETE' });

    this.updateState({ article: {} });

    this.query();

    this.setLoading(false);
  }
}
