import menuConfigOption from '@/config/menu/types'

// 结构化数组: 将关系数组 areaArr 转为树形结构
function arrayToTree(arr: Array<menuConfigOption>, id = 'id', pid = 'pid') {
  if (!Array.isArray(arr) || !arr.length) {
    return
  }
  const map = {}
  arr.forEach(item => {
    item.children = []
    // @ts-ignore
    map[item[id]] = item
  })

  const roots: any = []
  arr.forEach(item => {
    // @ts-ignore
    const parent = map[item[pid]]
    if (parent) {
      ;(parent.children || (parent.children = [])).push(item)
    } else {
      roots.push(item)
    }
  })

  return roots
}
// 数组拍平：将树形结构转为关系化数组
function treeToArray() {}

function extend(src: object | Array<any>, dist: object | Array<any>, deep: boolean) {
  return { ...src, ...dist }
}

function isRealObject(obj: object) {
  return String.prototype.toString.call(obj)
}

function isObject(obj: object) {
  return typeof obj === 'object' && obj !== null
}

export { treeToArray, arrayToTree, extend, isObject, isRealObject }
