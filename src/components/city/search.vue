<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音"/>
        </div>

        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCity(item.name)">{{item.name}}</li>

                <li class="search-item border-bottom" v-show="!list.length">
                    没有找到匹配数据
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import {mapMutations} from 'vuex'

    export default {
        name: 'CitySearch',
        props: ['cities'],
        data() {
            return {
                keyword: [],
                list: [],
                timer: null,  //节流
            }
        },
        mounted(){
            this.scroll = new Bscroll(this.$refs.search)
        },
        methods:{
            handleCity(city){
                // this.$store.commit('changeCity',city)  // dispatch派发方法

                this.changeCity(city)

                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
        },
        watch: {
            keyword() {
                if (this.timer) {  // 节流优化
                    clearTimeout(this.timer)
                }
                if(!this.keyword){  // 没有输入的时候为空 控制显示
                    this.list = []
                    return
                }
                this.timer = setTimeout(() => {
                    const result = []
                    for (let i in this.cities) {
                        this.cities[i].forEach((value) => {
                            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) { //如果包含
                                result.push(value)
                            }
                        })
                    }
                    this.list = result
                }, 100)
            }
        },

    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/variables.scss';

    .search {
        height: .72rem;
        padding: 0 .1rem;
        background: $bgColor;
        .search-input {
            box-sizing: border-box;
            width: 100%;
            height: .62rem;
            padding: 0 .1rem;
            line-height: .62rem;
            text-align: center;
            border-radius: .06rem;
            color: #666;
        }
    }

    .search-content {
        z-index: 1;
        overflow: hidden;
        position: absolute;
        top: 1.58rem;
        left: 0;
        right: 0;
        bottom: 0;
        background: #eee;
        .search-item {
            line-height: .62rem;
            padding-left: .2rem;
            background: #fff;
            color: #666;
        }
    }

</style>
