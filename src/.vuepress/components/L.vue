<script setup>
import { ref } from 'vue'
import { LinkOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  name: String,
  src: String,
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
  <a-drawer
    width="96%"
    :title="name"
    placement="right"
    :closable="false"
    :open="open"
    @close="onClose"
  >
    <iframe :src="src" width="100%" height="100%"></iframe>
  </a-drawer>
</template>
