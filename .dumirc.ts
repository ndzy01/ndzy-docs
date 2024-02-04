import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'docs',
    showLineNum: true,
    nprogress: false,
    prefersColor: { default: 'light', switch: false },
    nav: {
      mode: 'append',
      value: [{ title: 'manage', link: 'https://ndzy01.gitee.io/ndzy-manage/' }],
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
