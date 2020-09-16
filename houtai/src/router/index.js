import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router);

// 这段代码为了解决 element-ui 同路由强制跳转到同路由报错问题，原因是 element-ui和路由的版本冲突！
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

import store from "@/store"

let router =  new Router({
  mode: "history",
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/login")
    },
    {
      path: "/index",
      name: "layout",
      component: () => import("@/pages/layout"),
      children: [
        {
          path:'/',
          name:'index',
          component:()=>import('@/components/index')
        },
        {
          path: "/role",
          name: "role",
          meta: {
            title: "角色管理"
          },
          component: () => import("@/components/view/role")
        },
        {
          path: "/menu",
          name: "menu",
          meta: {
            title: "菜单管理"
          },
          component: () => import("@/components/view/menu")
        },
        {
          path: "/user",
          name: "user",
          meta: {
            title: "管理员管理"
          },
          component: () => import("@/components/view/user")
        },
        {
          path: "/category",
          name: "category",
          meta: {
            title: "商品分类"
          },
          component: () => import("@/components/view/category")
        },
        {
          path: "/specs",
          name: "specs",
          meta: {
            title: "商品规格"
          },
          component: () => import("@/components/view/specs")
        },
        {
          path: "/goods",
          name: "goods",
          meta: {
            title: "商品管理"
          },
          component: () => import("@/components/view/goods")
        },
        {
          path: "/member",
          name: "member",
          meta: {
            title: "会员管理"
          },
          component: () => import("@/components/view/member")
        },
        {
          path: "/banner",
          name: "banner",
          meta: {
            title: "轮播管理"
          },
          component: () => import("@/components/view/banner")
        },
        {
          path: "/seckill",
          name: "seckill",
          meta: {
            title: "秒杀管理"
          },
          component: () => import("@/components/view/seckill")
        }
      ]
    },
    {
      path: "*",
      redirect: '/index'
    }
  ]
});

router.beforeEach((to,from,next)=>{
  if (to.path=="/login"){  // 1、要去的地址是登录页面！
    document.title = to.meta.title
    next();   
  }else{  // 2、不是登录页面！就需要判断是否登录了！登录了才可以访问！
    if(localStorage.getItem("userinfo")){  // 登录了！
      let whiteList = store.getters['user/menus_url'];
      whiteList.push('/index')
      if(whiteList.includes(to.path)){  // 去的地址在 该用户可以访问的地址池中！
        document.title = to.meta.title
        next();
      }
    }else{ // 没有登录就想访问是直接跳转到登录页面！
      next('/login')
    }
  }
})

export default router
