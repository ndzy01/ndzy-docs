---
home: true
title: 首页
---

<br />

- traverse

> 文件区域是 vscode 中的一个概念，区域内容被 #region 和 #endregion 注释包围。

<HomeLink />

::: vue-playground Vue 交互演示

@file App.vue

```vue
<script setup>
import { ref } from 'vue'

const msg = ref('你好交互演示!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

:::
