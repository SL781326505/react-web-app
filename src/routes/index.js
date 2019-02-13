import Boutique from 'containers/product/Boutique'
import Mansmart from 'containers/product/Mansmart'
import Common from 'containers/solution/Common'
import LargeData from 'containers/solution/LargeData'

const routes = [
  {
    name: '产品',
    path: '/app/product',
    icon: '',
    children: [
      {
        name: '精选',
        path: '/boutique',
        component: Boutique
      },
      {
        name: '人工智能',
        path: '/mansmart',
        component: Mansmart
      },
    ]
  },
  {
    name: '解决方案',
    path: '/app/solution',
    icon: 'setting',
    children: [
      {
        name: '通用',
        path: '/common',
        component: Common
      },
      {
        name: '大数据',
        path: '/largeData',
        component: LargeData
      },
    ]
  },
]

export default routes
