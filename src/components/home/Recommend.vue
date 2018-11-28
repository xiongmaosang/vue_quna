<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommend" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "recommend",
        props:['recommend'],
        data() {
            return {
                recommendList:[
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
                        desc: '世界五大宫之首，穿越与您近在咫尺',
                        title: '故宫'
                    }, {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
                        desc: '世界五大宫之首，穿越与您近在咫尺',
                        title: '故宫'
                    }, {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
                        desc: '世界五大宫之首，穿越与您近在咫尺',
                        title: '故宫'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">

    @import '~@/assets/styles/variables.scss';

    .title {
        margin-top: .2rem;
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
    }

    .item {
        overflow: hidden;
        display: flex;
        height: 1.9rem;
        .item-img {
            width: 1.7rem;
            height: 1.7rem;
            padding: 0.1rem;
        }
        .item-info {
            flex: 1;
            padding: .1rem;
            min-width: 0;
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
            .item-button {
                line-height: .44rem;
                margin-top: .16rem;
                background: #ff9300;
                padding: 0 .2rem;
                border-radius: .06rem;
                color: #fff;
            }
        }
    }

</style>