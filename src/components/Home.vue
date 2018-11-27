<template>
    <div>
        <Homeheader></Homeheader>
        <Swiper></Swiper>
        <div>test</div>
    </div>
</template>

<script>
    import Homeheader from './home/header.vue'
    import Swiper from './home/swiper.vue'

    export default {
        name: "home",
        components:{
            Homeheader,
            Swiper
        }
    }


</script>

<style scoped lang="scss">

</style>