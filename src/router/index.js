import Vue from "vue"
import Router from "vue-router"
import home from "@/components/C-Home.vue"
import list from "@/components/C-list.vue"
import scroll from "@/components/C-scroll.vue"
import scrollView from "@/view/V-scroll-animation.vue"
import scrollAnime from "@/components/C-img-scroll-animetion.vue"

Vue.use(Router) // プラグイン（どこでも使える機能）を適用するために記載

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/", // URL
      name: "home",
      component: home, // 上記URLのときに表示するコンポーネント
    },
    {
      path: "/list", // URL
      name: "list",
      component: list, // 上記URLのときに表示するコンポーネント
    },
    {
      path: "/scroll", // URL
      name: "scroll",
      component: scroll, // 上記URLのときに表示するコンポーネント
    },
    {
      path: "/scrollView", // URL
      name: "scrollView",
      component: scrollView, // 上記URLのときに表示するコンポーネント
    },
    {
      path: "/scrollAnime", // URL
      name: "scrollAnime",
      component: scrollAnime, // 上記URLのときに表示するコンポーネント
    },
  ],
})
  
  // const scrollBehavior = (to, from, savedPosition) => {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { top: 0 }
  //   }
  // }
  
  // const router = createRouter({
  //   history: createWebHistory(process.env.BASE_URL),
  //   routes,
  //   scrollBehavior, //追加
  // })
  