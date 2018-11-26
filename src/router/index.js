import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
    scrollBehavior:()=>({y:0}),
    routes: routes
})

// router.beforeEach((to, from, next) => {
    // let token = getCookie('session');
    // let require = to.matched.some(record => { return record.meta.auth});
    // if ((!token || token === null) && require) {
    //     router.replace({//未登录
    //         path: '/',
    //     })
    //     next();
    // } else {//已登录
    //     next();
    // }
// })

export default router