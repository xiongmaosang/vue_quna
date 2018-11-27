<template>
    <div>
        <Homeheader></Homeheader>
        <Swiper></Swiper>
        <Icons></Icons>
    </div>
</template>

<script>
    import Homeheader from './home/header.vue'
    import Swiper from './home/swiper.vue'
    import Icons from './home/icons.vue'

    export default {
        name: "home",
        components:{
            Homeheader,
            Swiper,
            Icons
        }
    }


</script>

<style scoped lang="scss">

</style>