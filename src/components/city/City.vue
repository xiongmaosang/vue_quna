<template>
    <div>
        <cityheader></cityheader>
        <citysearch :cities="cities"></citysearch>
        <cityList :cities="cities" :hotCities="hotCities" :letter="letter"></cityList>
        <Alphabet :cities="cities" @change="handleLetterChange"></Alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import cityheader from './header'
    import citysearch from './search'
    import cityList from './List'
    import Alphabet from './Alphabet'

    export default {
        name: "city",
        components:{
            cityheader,
            citysearch,
            cityList,
            Alphabet,
        },
        data(){
          return {
              cities:{},
              hotCities:[],
              letter:''
          }
        },
        methods:{
            handleLetterChange(val){
                this.letter = val
            }
        },
        mounted(){
            axios.get('http://localhost:8080/mock/city.json').then((res)=>{
                res = res.data
                if(res.ret && res.data){
                    this.cities = res.data.cities;
                    this.hotCities = res.data.hotCities;
                }
            })
        }
    }
</script>

<style scoped lang="scss">

</style>