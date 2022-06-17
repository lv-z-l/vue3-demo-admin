import menuConfigOption from './types'

const menuConfigOptions: Array<menuConfigOption> = [
  { key: 'menu_0', label: '菜单0', parentKey: '0', icon: 'Link', path: '/test0' },
  { key: 'menu_1', label: '菜单1', parentKey: '0', icon: 'LinkOutline' },
  { key: 'menu_2', label: '菜单2', parentKey: 'menu_1', icon: 'Link', path: '/test2' }
]
export default menuConfigOptions
