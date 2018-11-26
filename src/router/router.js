import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routers = [
        {
            path: "/",
            name: "home",
            meta:{
                auth: true,
                keep: true
            },
            component: () => // 按需加载 aboutwebpack 打包后的名字
                import(/* webpackChunkName: "home" */ "../components/Home.vue")
        },
        // {
        //     path: "/list",
        //     name: "list",
        //     meta:{
        //         auth: true,
        //         keep: true
        //     },
        //     component: () => // 按需加载 aboutwebpack 打包后的名字
        //         import(/* webpackChunkName: "list" */ "../views/List.vue")
        // }
];

export default routers