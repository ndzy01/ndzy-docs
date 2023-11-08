import { hopeTheme } from 'vuepress-theme-hope'
import { enNavbar } from './navbar/index.js'
import { enSidebar } from './sidebar/index.js'

export default hopeTheme({
  // 当前网站部署到的域名
  hostname: 'xxx',
  logo: 'https://cdn.jsdelivr.net/gh/ndzy01/img/ndzy.png',
  docsDir: 'src',
  locales: {
    '/': {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: '快乐工作，健康生活',
      displayFooter: true,
    },
  },
  // 加密
  encrypt: {
    global: true,
    admin: ['ndzy'],
  },
  plugins: {
    mdEnhance: {
      // 添加选项卡支持
      tabs: true,
      // 启用流程图
      flowchart: true,
      // 启用 figure
      figure: true,
      // 启用图片懒加载
      imgLazyload: true,
      // 启用图片标记
      imgMark: true,
      // 启用图片大小
      imgSize: true,
    },
  },
})
