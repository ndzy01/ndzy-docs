---
title: 文章
order: 2000
---

```
npm install -g npm-check

npm-check -u 当前目录
npm-check -u -g 全局目录
```

```
编译 ts 文件
npm install -g typescript
tsc docs/**/*.ts
```

## uuid 生成器

<code src="./_react/uuid.tsx"></code>

## 图片处理 (黑白处理)

<code src="./_react/react-img-upload.tsx"></code>

## 996

```bash
curl -fsSL https://fastly.jsdelivr.net/gh/hellodigua/code996/bin/code996.sh | bash
```

## 常用函数

<code src="./_react/index.tsx"></code>

## file-saver js库

## vscode 基础设置

```json
{
  // 基础设置开始------------------------------------
  // 从资源管理器打开的文件,始终会在新的 tab 打开
  "workbench.editor.enablePreview": false,
  // 欢迎 tab 页
  "workbench.startupEditor": "none",
  // 图标
  "workbench.iconTheme": "vscode-icons",
  // 底部状态栏
  "workbench.statusBar.visible": true,
  // 资源管理器的位置
  "workbench.sideBar.location": "right",
  // 禁用 通过文件类型自动设置 tabSize
  "editor.detectIndentation": false,
  // tab 键占的字符数
  "editor.tabSize": 2,
  // 默认格式化工具
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 保存时格式化代码
  "editor.formatOnSave": false,
  // 选中高亮显示
  "editor.selectionHighlight": true,
  // 括号着色
  "editor.bracketPairColorization.enabled": true,
  // 括号着色
  "editor.guides.bracketPairs": "active",
  // 单引号
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": false,
  // 箭头函数 使用圆括号将参数括起来
  "prettier.arrowParens": "always",
  // 一行的宽度
  "prettier.printWidth": 120,
  // 行尾逗号
  "prettier.trailingComma": "all",
  // 行尾分号
  "prettier.semi": true,
  // 换行字符
  "files.eol": "\n",
  // 编码
  "files.encoding": "utf8",
  // 自动保存
  "files.autoSave": "off"
  // 基础设置结束------------------------------------
}
```

## 图片上传配置 picgo

```json
{
  "picBed": {
    "uploader": "github",
    "current": "github",
    "github": {
      // 需要修改
      "repo": "ndzy01/zbz",
      "branch": "main",
      // 必要 需要修改
      "token": "xxx",
      "path": "",
      // 需要修改
      "customUrl": "https://cdn.jsdelivr.net/gh/ndzy01/zbz"
    }
  },
  "picgoPlugins": {}
}
```

## css

```css
// rbg 最后一个参数是透明度
.separate {
  height: 1px;
  background-color: '#e5e5e5';
  margin: 32px 0;
}
```

## Promise

```js
Promise.all([]);
Promise.race(); // 返回最先返回那个
```

## h5 调试

必须连接外网 `chrome://inspect` 手机打开开发者模式，并启用 usb 调试

## 函数

```ts
const loop = (arr: any[]) => {
  if (Array.isArray(arr)) {
    arr.forEach((item) => {
      if (item.children) {
        loop(item.children);
      } else {
        // xxx
      }
    });
  }
};
```

## git actions 设置

![图1](https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_d9229d7c-2c6b-4276-ab73-d50a950c9794_img-1.jpg)

![图2](https://cdn.jsdelivr.net/gh/ndzy01/img/NDZY_5847a175-f877-4958-acfa-193dd258c3b8_img-2.jpg)

## 截图保存

```js
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function drawDOMToCanvas(target, name = 'screenshot.png') {
  const script = document.createElement('script');
  script.src = 'https://html2canvas.hertzen.com/dist/html2canvas.min.js';
  document.body.appendChild(script);

  await sleep(2000);
  // 获取要绘制的 DOM 元素
  const element = document.querySelector(`.${target}`);

  // 使用 html2canvas 将 DOM 元素转换为 Canvas
  html2canvas(element).then(function (canvas) {
    // 创建一个隐藏的a标签
    const link = document.createElement('a');
    link.style.display = 'none';

    // 将canvas转换为图像URL
    const image = canvas.toDataURL('image/png');

    // 设置a标签的下载属性和URL
    link.setAttribute('href', image);
    link.setAttribute('download', name);

    // 将a标签添加到页面中，并模拟点击，实现下载
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

drawDOMToCanvas('xxx');
```
