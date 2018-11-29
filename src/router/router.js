import Vue from "vue";
import Router from "vue-router";


Vue.use(Router);

const routers = [
        {
            path: "/",
            name: "header",
            meta:{
                auth: true,
                keep: true
            },
            component: () => // 按需加载 aboutwebpack 打包后的名字
                import(/* webpackChunkName: "homeheader" */ "../components/Home.vue")
        }, {
            path: "/city",
            name: "city",
            meta:{
                auth: true,
                keep: true
            },
            component: () => // 按需加载 aboutwebpack 打包后的名字
                import(/* webpackChunkName: "list" */ "../components/city/City.vue")
        }
];

export default routers