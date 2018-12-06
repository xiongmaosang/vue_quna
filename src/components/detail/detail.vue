<template>
    <div>
        <DetailHeader></DetailHeader>
        <Banner></Banner>

        <div class="content"></div>
    </div>
</template>

<script>
    import Banner from './banner'
    import DetailHeader from './Header'

    export default {
        name: "detail",
        components:{
            Banner,
            DetailHeader
        }
    }
</script>

<style scoped lang="scss">
    .content{
        height: 50rem;
    }

</style>