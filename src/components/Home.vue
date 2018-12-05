<template>
    <div>
        <Homeheader></Homeheader>
        <Swiper :list="swiperList"></Swiper>
        <Icons :list="iconList"></Icons>
        <Recommend :recommend="recommend"></Recommend>
        <Wkkend :list="weekendList"></Wkkend>
    </div>
</template>

<script>
    import axios from 'axios'
    import Homeheader from './home/header.vue'
    import Swiper from './home/swiper.vue'
    import Icons from './home/icons.vue'
    import Recommend from './home/Recommend.vue'
    import Wkkend from './home/Wkkend.vue'
    import {mapState} from 'vuex'

    export default {
        name: "home",
        components: {
            Homeheader,
            Swiper,
            Icons,
            Recommend,
            Wkkend
        },
        computed:{
            ...mapState(['city'])
        },
        data() {
            return {
                lastCity:'',
                swiperList:[],
                iconList:[],
                recommend:[],
                weekendList:[],
            }
        },

        methods: {
            getHomeInfo() {
                axios.get('http://localhost:8080/mock/index.json?city='+this.city).then((res)=>{
                    res = res.data
                    if (res.data) {
                        this.swiperList = res.data.swiperList
                        this.iconList = res.data.iconList
                        this.recommend = res.data.recommendList
                        this.weekendList = res.data.weekendList
                    }
                })
            }
        },
        mounted() {
            this.lastCity = this.city;
            this.getHomeInfo()
        },
        activated() {
            if(this.lastCity !== this.city){
                this.lastCity = this.city;
                this.getHomeInfo()
            }
        }
    }


</script>

<style scoped lang="scss">

</style>