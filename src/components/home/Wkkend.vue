<template>
    <div>
        <div class="title">周末去哪</div>
        <ul>
            <li class="item border-bottom" v-for="item of list" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt="">
                </div>

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <!--<button class="item-button">查看详情</button>-->
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "wkkend",
        props:['list'],
        data() {
            return {
                recommendList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
                        desc: '德智体美劳全面发展的亲子日，这些地方该去看,美丽风景',
                        title: '京城欢乐亲子游'
                    }, {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
                        desc: '细数北京温泉，温暖你的冬天',
                        title: '京城有好泉'
                    }, {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/81/0412da9c4db66a.jpg_r_640x214_8e23871e.jpg',
                        desc: '山顶满眼彩色，此情此景醉了',
                        title: '登高望远秋色佳'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '~@/assets/styles/variables.scss';

    .title {
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }

    .item {
        .item-img-wrapper {
            overflow: hidden;
            height: 0;
            padding-bottom: 37.09%;
            .item-img {
                width: 100%;
            }
        }

        .item-info {
            padding: .1rem;
            .item-title {
                line-height: .54rem;
                font-size: .32rem;
                @include ellipsis()
            }
            .item-desc {
                line-height: .4rem;
                color: #ccc;
                @include ellipsis()
            }

        }
    }

</style>