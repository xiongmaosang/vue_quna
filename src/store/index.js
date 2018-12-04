import Vue from "vue";
import Vuex from "vuex";

import state from './state'
import mutations from './mutations'

Vue.use(Vuex);


export default new Vuex.Store({
    state: state,
    mutations:mutations,

    // actions: {//action调用mutations的方法
    //     changeCity(ctx, city) { //ctx是上下文
    //         ctx.commit('changeCity', city)
    //     }
    // }
});
