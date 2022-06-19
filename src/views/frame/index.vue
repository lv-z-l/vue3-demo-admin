<template>
  <n-layout v-if="appConfig.siderPlacement === 'left'" class="main-page full-screen" has-sider>
    <n-layout-sider content-style="padding: 16px" show-trigger collapse-mode="width" :collapsed-width="96" bordered @update:collapsed="OnUpdateCollapsed">
      <div class="avatar flex-st-ct">
        <n-avatar :size="48" :src="logo" round />
        <span v-show="!collapsed">{{ appConfig.appName }}</span>
      </div>
      <n-menu :options="menusOptions" :root-indent="0" accordion></n-menu>
      <n-divider />
      <div class="avatar flex-ct-ct">
        <n-icon size="24">
          <LogOutOutline></LogOutOutline>
        </n-icon>
        <span v-show="!collapsed">注销</span>
      </div>
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered inverted>
        <div>
          <span>{{ route.name ? route.name : 'DefaultRouteName' }}</span>
          <div>
            <n-icon size="24">
              <SearchOutline></SearchOutline>
            </n-icon>
            <n-icon size="24">
              <ChatbubbleOutline></ChatbubbleOutline>
            </n-icon>
            <n-avatar :size="48" :src="avatar" round />
          </div>
        </div>
      </n-layout-header>
      <n-layout-content content-style="padding: 16px" :native-scrollbar="false">
        <RouterView v-slot="{ Component }">
          <KeepAlive :max="5"> <component :is="Component" /> </KeepAlive
        ></RouterView>
      </n-layout-content>
    </n-layout>
  </n-layout>
  <n-layout v-else class="main-page full-screen" has-sider sider-placement="right"></n-layout>
  <!-- <div class="open-menu-anchor">
    <RouterLink to="/test0">1111</RouterLink>
    <RouterLink to="/test0">1111</RouterLink>
    <RouterLink to="/test0">1111</RouterLink>
    <RouterLink to="/test0">1111</RouterLink>
  </div> -->
</template>

<script setup lang="tsx">
import { ref, resolveComponent } from 'vue'
import logo from '@/assets/images/logo.png'
import avatar from '@/assets/images/avatar.jpg'
import appConfig from '@/config/index'
import { useRoute, RouterLink } from 'vue-router'
import menuConfigOptions from '@/config/menu/index'
import menuConfigOption from '@/config/menu/types'
import { arrayToTree, isRealObject } from '@/utils/index'
import { NIcon } from 'naive-ui'

const menus = arrayToTree(menuConfigOptions, 'key', 'parentKey')
const route = useRoute()
const collapsed = ref(false)

// 处理菜单数据
const menusOptions = handleMenus()

function OnUpdateCollapsed(collapse: boolean) {
  collapsed.value = collapse
}

function renderIcon(icon: string) {
  if (!icon) {
    return null
  }
  // 动态引入图标组件
  // const asyncIconComp = defineAsyncComponent(async () => {
  //   const IconComponent = await import(/* @vite-ignore */ /* webpackChunkName: "@vicons/ionicons5" */ '@vicons/ionicons5')
  //   // @ts-ignore
  //   return IconComponent[icon]
  // })
  const comp = resolveComponent(icon)
  return () => (
    <NIcon>
      <comp></comp>
    </NIcon>
  )
}

function handleMenus(source = menus) {
  const res: Array<any> = []
  source.forEach((item: menuConfigOption) => {
    if (item.children && item.children.length > 0) {
      const floder = renderLabel(item)
      floder.children.push(...handleMenus(item.children))
      res.push(floder)
    } else {
      res.push(renderMenu(item))
    }
  })
  return res
}

function renderLabel(menu: any) {
  const { key, icon, label } = menu
  const children: Array<any> = []
  return {
    label,
    key,
    icon: renderIcon(icon),
    children
  }
}

function renderMenu(menu: any) {
  const { path, params, label, key, icon } = menu
  return {
    label: () => (
      <RouterLink
        to={{
          path,
          params: params || {}
        }}
      >
        {label}
      </RouterLink>
    ),
    key,
    icon: renderIcon(icon)
  }
}
</script>

<style lang="scss">
.main-page {
  .avatar {
    > .n-avatar {
      margin-right: $content-padding;
    }
    > .n-icon {
      margin-right: $content-padding;
    }
    > .n-avatar + span {
      font-size: 16px;
      line-height: 48px;
    }
    > .n-icon + span {
      font-size: 16px;
      line-height: 24px;
    }
  }
  .n-layout-header {
    height: $main-header-height;
    max-height: $main-header-height;
  }
  .n-layout-content {
    height: calc(100% - $main-header-height);
    max-height: calc(100% - $main-header-height);
  }
  .n-menu {
    max-height: $menu-height;
    height: $menu-height;
    margin-top: $content-padding;
  }
  .n-menu .n-menu-item-content {
    padding-right: $padding-zero;
  }
  .n-menu .n-menu-item-content::before {
    left: $padding-zero;
    right: $padding-zero;
  }
  .n-layout-header {
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: 0 16px;
      span {
        font-size: 24px;
      }
      > div {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .n-icon {
          padding-right: 24px;
        }
      }
    }
  }
}
// .open-menu-anchor {
//   position: fixed;
//   top: $main-header-height;
//   right: 0;
//   width: 160px;
//   max-height: 320px;
//   min-height: 160px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   background-color: rgb(24, 24, 28);
//   > a {
//     text-decoration: none;
//     font-size: 16px;
//     width: 100%;
//     line-height: 36px;
//     padding: 0 $content-padding;
//     color: rgba(255, 255, 255, 0.82);
//   }
// }
</style>
