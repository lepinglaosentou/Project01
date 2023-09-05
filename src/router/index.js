import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: index
  }
]

const router = new VueRouter({
  routes
})
// 登陆状态判断
// 路由跳转的时候 判断有没有储存token 如果没有则跳转到登陆页。
// router.beforeEach(function (to, from, next) {
//   // 去localStorage中获取到token
//   const token = localStorage.getItem('token')
//   if (to.path === '/login' || token) {
//     next()
//   } else {
//     next('/login')
//   }
// })

export default router
