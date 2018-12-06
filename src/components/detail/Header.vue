<template>
    <div>
        <router-link to="/" tag="div" v-show="showABS" class="header-abs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>

        <div class="header-fixed" v-show="!showABS" :style="opcityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail-header",
        data() {
            return {
                showABS: true,
                opcityStyle: {
                    opacity: 0
                }
            }
        },
        methods: {
            handleScroll() {
                const top = document.documentElement.scrollTop;
                if (top > 60) {
                    let opacity = top / 140
                    this.opcityStyle = {
                        opacity:opacity
                    }
                    this.showABS = false
                } else {
                    this.showABS = true
                }

            }
        },
        activated() {
            window.addEventListener('scroll', this.handleScroll)
        },
        deactivated(){
            window.removeEventListener('scroll',this.handleScroll)
        }
    }
</script>

<style scoped lang="scss">

    @import '~@/assets/styles/variables.scss';

    .header-abs {
        z-index: 3;
        position: absolute;
        left: .2rem;
        top: .2rem;
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        border-radius: .4rem;
        text-align: center;
        background: rgba(0, 0, 0, .8);

        .header-abs-back {
            color: #fff;
            font-size: .4rem;
        }
    }

    .header-fixed {
        z-index: 3;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: $headerHeight;
        line-height: $headerHeight;
        text-align: center;
        color: #fff;
        background: $bgColor;
        font-size: .32rem;

        .header-fixed-back {
            position: absolute;
            top: 0;
            left: 0;
            width: .64rem;
            text-align: center;
            font-size: .4rem;
            color: #fff;
        }
    }
</style>