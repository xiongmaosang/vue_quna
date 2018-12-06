<template>
    <div>
        <div class="item" v-for="(item,index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>

            <div v-if="item.children" class="item-children">
                <!-- 自己把数据传给自己 -->
                <DetailList :list="item.children"></DetailList>  <!--根据自己的那么名字来 使用自己-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailList",
        props: ['list']
    }
</script>

<style scoped lang="scss">
    .item-title-icon{
        position: relative;
        left: .06rem;
        top: .06rem;
        display: inline-block;
        width: .36rem;
        height: .36rem;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
    }

    .item-title {
        line-height: .8rem;
        font-size: .32rem;
        padding: 0 .2rem;
    }

    .item-children{
        padding: 0 .2rem;
    }
</style>