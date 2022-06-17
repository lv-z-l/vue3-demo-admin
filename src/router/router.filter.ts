import { Router } from 'vue-router'
import { useMainStore } from '@/store/index'

const { log } = console
const initRouterFilter = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const mainStore = useMainStore()
    log('全局前置守卫被调用', 'to:', to.path, '   from:', from.path)
    /** 1. 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)
      next()
      2. 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
      next(false)
      3.跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
      if (to.path === '/about') {
          路由到 /home
          next({path: '/home'})
          next('/')
          next({path: '/'})
          next({name: 'Home'})
      }
      如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调
      next(new Error('error'))
        if (to.path === '/about') {
          log(to.meta)
        }*/
    if (to.path !== '/login' && !mainStore.isLogin) {
      // 已经登陆
      next('/login')
    } else {
      next()
    }
  })

  router.onError(err => {
    log(err)
  })

  router.beforeResolve((to, from, next) => {
    log('全局解析守卫被调用')
    next()
  })

  router.afterEach(() => {
    log('全局后置钩子')
  })
}
export default initRouterFilter
