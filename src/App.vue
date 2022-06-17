<template>
  <n-config-provider :theme="theme" :locale="cn" :date-locale="dateCn" :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <!-- <n-card> 当前操作系统的主题是 {{ osThemeRef }}。 </n-card> -->
    <router-view></router-view>
  </n-config-provider>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useOsTheme, darkTheme, zhCN, dateZhCN } from 'naive-ui'
// 使用操作系统主题
const cn = reactive(zhCN)
const dateCn = reactive(dateZhCN)
const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === 'dark' ? darkTheme : null))
</script>
