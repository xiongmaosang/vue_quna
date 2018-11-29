<template>
    <div>
        <cityheader></cityheader>
        <citysearch></citysearch>
    </div>
</template>

<script>
    import cityheader from './header'
    import citysearch from './search'

    export default {
        name: "city",
        components:{
            cityheader,
            citysearch
        }
    }
</script>

<style scoped lang="scss">

</style>