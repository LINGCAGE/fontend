import { createRouter, createWebHistory } from 'vue-router';

// 定義路由集合
// name：路由的名稱，path：路由的路徑，component：該路由對應的頁面組件
const routes = [
    { name: "test", path: "/test", component: () => import('../components/test.vue') },
    { name: "demo", path: "/demo", component: () => import('../views/demo.vue')},
    { name: "search", path: "/search", component: () => import('../components/LTB_search_word.vue')},
    { name:  "log_", path: "/log_", component:() => import('../components/LTB_login.vue')},
]

// 定義路由轉換器
// history：web history，routes：標準寫法是routes: routes，但如果上面定義的路由集合的名字爲routes，就可以簡寫爲routes
const router = createRouter({
    history: createWebHistory(),
    routes
})

// 導出路由轉換器
export default router