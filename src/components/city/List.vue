<template>
    <div class="list" ref="wrapper">

        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.city}}</div>
                    </div>
                </div>
            </div>

            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCity(item.name)">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>

            <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list" v-for="innerItem of item" :key="innerItem.id">
                    <div class="item border-bottom" @click="handleCity(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: 'CityList',
        props:['cities','hotCities','letter'],
        computed:{
            // ...mapState(['city'])  //我把vuex的数据映射到computed的计算属性里
            ...mapState({
                city:'city'
            })  //我把vuex的数据映射到computed的计算属性里
        },
        mounted(){
            this.scroll = new Bscroll(this.$refs.wrapper)
        },
        methods:{
            handleCity(city){
                // this.$store.commit('changeCity',city)  // dispatch派发方法

                this.changeCity(city)

                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        watch:{
            letter(){  // 监听letter的变化
                if(this.letter){
                    const element = this.$refs[this.letter][0] //获取DOM元素
                    this.scroll.scrollToElement(element) // 插件的api
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/variables.scss';

    .border-topbottom {
        &:before {
            border-color: #ccc
        }

        &:after {
            border-color: #ccc
        }

    }

    .border-bottom {
        &:before {
            border-color: #ccc
        }
    }

    .list {
        overflow: hidden;
        position: absolute;
        top: 1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
        .title {
            line-height: .54rem;
            background: #eee;
            padding-left: .2rem;
            color: #666;
            font-size: .26rem;
        }

        .button-list {
            overflow: hidden;
            padding: .1rem .6rem .1rem .1rem;
            .button-wrapper {;
                float: left;
                width: 33.33%;
                .button {
                    margin: .1rem;
                    padding: .1rem 0;
                    text-align: center;
                    border: .02rem solid #ccc;
                    border-radius: .06rem;
                }
            }
        }

        .item-list {
            .item{
                line-height: .76rem;
                padding-left: .2rem;
            }

        }

    }

</style>
