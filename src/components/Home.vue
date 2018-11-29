<template>
    <div>
        <Homeheader :city="city"></Homeheader>
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

    export default {
        name: "home",
        components: {
            Homeheader,
            Swiper,
            Icons,
            Recommend,
            Wkkend
        },

        data() {
            return {
                city: '',
                swiperList:[],
                iconList:[],
                recommend:[],
                weekendList:[],
            }
        },

        methods: {
            getHomeInfo() {
                axios.get('http://localhost:8080/mock/index.json ').then((res)=>{
                    res = res.data
                    if (res.data) {
                        this.city = res.data.city
                        this.swiperList = res.data.swiperList
                        this.iconList = res.data.iconList
                        this.recommend = res.data.recommendList
                        this.weekendList = res.data.weekendList
                    }
                })
            }
        },
        mounted() {
            this.getHomeInfo()
        }
    }


</script>

<style scoped lang="scss">

</style>