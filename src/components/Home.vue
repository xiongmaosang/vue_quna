<template>
    <div>
        <Homeheader></Homeheader>
        <Swiper></Swiper>
        <Icons></Icons>
        <Recommend></Recommend>
        <Wkkend></Wkkend>
    </div>
</template>

<script>
    import Homeheader from './home/header.vue'
    import Swiper from './home/swiper.vue'
    import Icons from './home/icons.vue'
    import Recommend from './home/Recommend.vue'
    import Wkkend from './home/Wkkend.vue'

    export default {
        name: "home",
        components:{
            Homeheader,
            Swiper,
            Icons,
            Recommend,
            Wkkend
        }
    }


</script>

<style scoped lang="scss">

</style>