<script lang="ts" setup>
import { ref } from 'vue'
import { LinkOutlined } from '@ant-design/icons-vue'

withDefaults(defineProps<{ name: string; src: string; img?: string }>(), {
  name: '',
  src: '',
  img: '',
})
const open = ref(false)

const showDrawer = () => {
  open.value = true
}

const onClose = () => {
  open.value = false
}
</script>

<template>
  <a-button type="link" @click="showDrawer"> {{ name }}</a-button>
  <a :href="src" target="_blank">
    <LinkOutlined />
  </a>
  <a-image v-if="img" :width="50" :height="50" src="img" />
  <a-drawer
    width="96%"
    placement="right"
    :title="name"
    :open="open"
    @close="onClose"
  >
    <iframe :src="src" width="100%" height="100%"></iframe>
  </a-drawer>
</template>
