<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img"
                 src="http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_600x330_b40971b4.jpg" alt="">

            <div class="banner-info">
                <div class="banner-title">
                    dalian
                </div>

                <div class="banner-number">
                    <span class="iconfont">&#xe692;</span>
                    39
                </div>
            </div>
        </div>

        <Gallary @close="handleGallaryClose" :imgs="imgs" v-show="showGallaty"></Gallary>
    </div>
</template>

<script>
    import Gallary from '../common/gallary/Gallary';

    export default {
        name: "banner",
        data() {
            return {
                imgs: ['http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_600x330_b40971b4.jpg','http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_600x330_95a1ab2b.jpg'],
                showGallaty: false
            }
        },
        methods: {
            handleBannerClick() {
                this.showGallaty = true
            },
            handleGallaryClose(){
                this.showGallaty = false
            }
        },
        components: {
            Gallary
        }
    }
</script>


<style lang="scss" scoped>
    .banner {
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        .banner-img {
            width: 100%;
        }
        .banner-info {
            display: flex;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: .6rem;
            color: #fff;
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

            .banner-title {
                flex: 1;
                font-size: .32rem;
                padding: 0 .2rem;
            }

            .banner-number {
                height: .32rem;
                line-height: .32rem;
                margin-top: .14rem;
                padding: 0 .4rem;
                border-radius: .2rem;
                background: rgba(0, 0, 0, .8);
                font-size: .24rem;
            }

            .banner-icon {
                font-size: .24rem;
            }
        }
    }
</style>



