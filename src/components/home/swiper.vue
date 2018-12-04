<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">

            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>

            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        props: {
            list: Array
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    loop: true
                },
                swiperList:[{
                    id:'00001',
                    imgUrl:'http://img1.qunarzz.com/sight/p0/1811/a1/a1073f0733c6da8aa3.img.jpg_600x330_ff35533c.jpg'
                },{
                    id:'00002',
                    imgUrl:'https://img1.qunarzz.com/p/tts9/1807/b4/620b7a0f0932fb02.jpg_r_640x420x90_5afc5d1d.jpg'
                }]
            }
        },
        computed: {
            showSwiper() {
                // return this.list.length
                return true
            }
        }
    }
</script>

<style scoped lang="scss">
    .wrapper >>> .swiper-pagination-bullet-active {
        background: #fff
    }
    .wrapper {
        overflow: hidden;
        width: 100%;
        height: 1.2rem;
        padding-bottom: 31.25%;
        background: #eee;
        .swiper-img {
            width: 100%;
            height: 3.5rem;
        }
    }


</style>