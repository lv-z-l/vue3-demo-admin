<template>
  <n-space style="justify-content: center">
    <n-button>Default</n-button>
    <n-button type="tertiary"> Tertiary </n-button>
    <n-button type="primary"> Primary </n-button>
    <n-button type="info"> Info </n-button>
    <n-button type="success"> Success </n-button>
    <n-button type="warning"> Warning </n-button>
    <n-button type="error"> Error </n-button>
    <n-button @click="updateName">updateName</n-button>
  </n-space>
  <div>{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <div>{{ nodeEnv }}</div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store/index'
import { onMounted } from 'vue'

const nodeEnv = import.meta.env.VITE_APP_WEB_URL

const mainStore = useMainStore()

onMounted(() => {
  console.log(import.meta.env.VITE_APP_WEB_URL)
})

function updateName() {
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了'
  })
}
</script>
