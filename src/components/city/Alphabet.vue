<template>
    <ul class="list">
        <li
                class="item" v-for="item of letters" :key="item" :ref="item"
                @touchstart.prevent="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
                @click="handleLetterClick"
        >
            {{item}}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'CityAlphabet',
        props: {
            cities: Object
        },
        computed: {
            letters() {
                const letters = []   // 存储字母的列表ABCDEFG等
                for (let i in this.cities) {
                    letters.push(i)
                }
                return letters
            }
        },
        data() {
            return {
                touchStatus: false,
                timer: null  //函数节流用
            }
        },

        methods: {
            handleLetterClick(e) {
                this.$emit('change', e.target.innerText)
            },
            handleTouchStart() {
                this.touchStatus = true
            },
            handleTouchEnd() {
                this.touchStatus = false
            },
            handleTouchMove(e) {
                if (this.touchStatus) {

                    if (this.timer) {  //优化 函数节流的作用
                        clearTimeout(this.timer)
                    }

                    this.timer = setTimeout(() => {
                        const startY = this.$refs['A'][0].offsetTop    // A字母距离顶部的高度
                        const touchY = e.touches[0].clientY - 79   //手指距离绿色顶部下的距离
                        // e.touches[0]是手指的一些信息
                        // e.touches[0].clientY 是手指距离最顶部的位置的高度
                        // 79 是绿色区域的高度

                        const index = Math.floor((touchY - startY) / 20)  // 手指的位置对应数组的索引
                        //20是每个字母的高度

                        if (index >= 0 && index < this.letters.length) {
                            this.$emit('change', this.letters[index])  //this.letters[index] 获取当前手指字母
                        }
                    }, 15)


                }
            },

        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/variables.scss';

    .list {
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 1.58rem;
        right: 0;
        bottom: 0;
        width: .4rem;
        .item {
            line-height: .4rem;
            text-align: center;
            color: $bgColor;
        }
    }

</style>
