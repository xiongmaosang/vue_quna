<template>
    <transition>
        <slot></slot>   <!--slot此时就是子组件Gallary-->
    </transition>
</template>

<script>
    export default {
        name: "fade"
    }
</script>

<style scoped lang="scss">
    .v-enter, .v-leave-to {
        opacity: 0
    }

    .v-enter-active, .v-leave-active {
        transition: opacity .5s
    }
</style>




