import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'docs',
    showLineNum: true,
    nprogress: false,
    prefersColor: { default: 'light', switch: false },
    nav: {
      mode: 'append',
      value: [
        { title: 'todo', link: 'https://www.ndzy01.com/ndzy-todos/' },
        { title: 'docs', link: 'https://www.ndzy01.com/ndzy-docs/' },
        { title: 'project', link: 'https://www.ndzy01.com/ndzy-project/' },
      ],
    },
  },
  base: '/ndzy-docs/',
  publicPath: '/ndzy-docs/',
  mfsu: false,
  codeSplitting: { jsStrategy: 'granularChunks', jsStrategyOptions: {} },
  logo: 'https://cdn.jsdelivr.net/gh/ndzy01/img/ndzy.png',
  favicons: ['https://cdn.jsdelivr.net/gh/ndzy01/img/ndzy.png'],
  // devtool: 'source-map',
});
