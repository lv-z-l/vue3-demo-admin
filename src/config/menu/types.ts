import { RouteLocationNormalized } from 'vue-router'
// 菜单对象
export default interface menuConfigOption {
  key: string
  label: string
  parentKey: string
  path?: string
  icon?: string
  route?: RouteLocationNormalized
  children?: Array<menuConfigOption>
}
