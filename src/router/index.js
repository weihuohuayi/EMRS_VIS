// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// 导入页面组件：原始方法
import Home from '../views/home/Home'
import Patients from '../views/patients/Patients'
import Surgery from '../views/surgery/Surgery'
import Medicine from '../views/medicine/Medicine'

// 导入页面组件：路由懒加载方法
const HomeNews = () => import('views/home/HomeNews')
const HomeMessage = () => import('views/home/HomeMessage')

const PatDetail = () => import('views/patients/user/PatDetail')
const PatList = () => import('views/patients/list/PatList')
const CategoryList = () => import('views/patients/list/CategoryList')
const DiseaseKey = () => import('views/patients/disease/Disease')

const Profile = () => import('views/profile/Profile')

// 1. 通过Vue.use （插件） ，安装插件
Vue.use(VueRouter)

// 2. 创建VueRouter路由对象
const routes = [
  {
    path: '',
    // 路由默认值
    // 进入main page时候自动重定向到首页
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    // 元数据，描述数据的数据
    meta: {
      title: '首页'
    },
    children: [
      {
        // 配置孙组件默认路径
        path: '',
        component: HomeNews
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/patients',
    component: Patients,
    meta: {
      title: '患者信息'
    },
    children: [
      {
        // 配置孙组件默认路径
        path: '',
        component: PatList
      },
      {
        path: 'list',
        component: PatList
      },
      {
        path: 'catgory',
        component: CategoryList
      },
      {
        path: 'diseaseKey',
        component: DiseaseKey
      },
      {
        // 动态路由
        path: '/details/:bedNum',
        component: PatDetail
      }
    ]
  },
  {
    path: '/surgery',
    component: Surgery,
    meta: {
      title: '手术信息'
    }
  },
  {
    path: '/medicine',
    component: Medicine,
    meta: {
      title: '医嘱'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '用户'
    }
  }
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  // routes: routes,
  routes,
  mode: 'history' // 将网址的hash值转换为html值，去除#标识
})

// 前置钩子/前置守卫  hook/guard
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
// 3. 将我们的router对象传入到vue实例中
export default router
