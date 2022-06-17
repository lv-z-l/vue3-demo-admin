import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import initRouterFilter from './router.filter'
import dynamicImportRoute from './dynamic.import'

const menuRoutes = dynamicImportRoute()

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/frame/Login.vue') // 注意这里要带上文件后缀.vue
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/common/notfound/404.vue') },
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/frame/index.vue'),
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'test0',
        component: () => import('@/views/test_store/index.vue')
      },
      // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
      { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/common/notfound/404.vue') }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

initRouterFilter(router)

export default router
