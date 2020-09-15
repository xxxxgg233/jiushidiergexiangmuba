import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router);

export default new Router({
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
