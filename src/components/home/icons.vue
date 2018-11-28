<template>
    <div class="icons">
        <swiper>

            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>

<script>
    export default {
        name: "icons",
        swiperOption: {
            pagination: '.swiper-pagination',
            loop: true
        },
        data() {
            return {
                iconList: [
                    {
                        id: '001',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        desc: '景点门票'
                    },
                    {
                        id: '002',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        desc: '滑雪季'
                    },
                    {
                        id: '003',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        desc: '一日游'
                    },
                    {
                        id: '004',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                        desc: '文化古迹'
                    },
                    {
                        id: '005',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                        desc: '动植物园'
                    },
                    {
                        id: '006',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                        desc: '打卡圣地'
                    },
                    {
                        id: '007',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
                        desc: '野生动物园'
                    },
                    {
                        id: '008',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                        desc: '泡温泉'
                    },
                    {
                        id: '009',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
                        desc: '故宫'
                    },
                    {
                        id: '010',
                        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
                        desc: '全部玩乐'
                    },
                ]
            }
        },
        computed: {
            pages() {
                const pages = []
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8)  //展示第几页
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                })
                return pages
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '~@/assets/styles/variables.scss';

    .icons > > > .swiper-container {
        height: 0;
        padding-bottom: 50%;
    }

    .icons {
        margin-top: .1rem;
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        .icon {
            position: relative;
            overflow: hidden;
            float: left;
            width: 25%;
            height: 0;
            padding-bottom: 25%;
            .icon-img {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: .44rem;
                box-sizing: border-box;
                padding: .1rem;
                img {
                    display: block;
                    margin: 0 auto;
                    height: 100%;
                }
            }
            .icon-desc {
                position: absolute;
                left: 0;
                right: 0;
                bottom: .12rem;
                line-height: .44rem;
                height: .44rem;
                text-align: center;
                color: $darkTextColor;
                @include ellipsis()
            }
        }
    }
</style>