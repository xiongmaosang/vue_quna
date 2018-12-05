<template>
    <div class="headerWrapper">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>

        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>

        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe64a;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex';


    export default {
        name: "homeheader",
        computed: {
            ...mapState(['city']),  //我把vuex的数据映射到computed的计算属性里
            ...mapGetters(['doubleCity'])
        }
    }
</script>

<style scoped lang="scss">
    /*1rem = html font size = 50px  设置成50好算  二倍图直接除 /50/2 */
    @import '~@/assets/styles/variables.scss';

    .headerWrapper {
        display: flex;
        line-height: .86rem;
        background: $bgColor;
        color: #fff;
        .header-left {
            width: .64rem;
            float: left;
            .back-icon {
                text-align: center;
                font-size: .4rem;
            }
        }
        .header-input {
            flex: 1;
            line-height: .64rem;
            height: .64rem;
            margin-top: .12rem;
            margin-left: .2rem;
            padding-left: 0.2rem;
            background: #fff;
            border-radius: 5px;
            color: #ccc;
        }
        .header-right {
            min-width: 1.04rem;
            padding: .1rem;
            float: right;
            text-align: center;
            color: #fff;
            .arrow-icon {
                margin-left: -.04rem;
                font-size: .24rem;
            }
        }
    }
</style>