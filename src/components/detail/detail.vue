<template>
    <div>
        <DetailHeader ></DetailHeader>
        <Banner :sightName="sightName"
                :bannerImg="bannerImg"
                :gallaryImgs="gallaryImgs">
        </Banner>


        <div class="content">
            <DetailList :list='list'></DetailList>
        </div>
    </div>
</template>

<script>
    import Banner from './banner'
    import DetailHeader from './Header'
    import DetailList from './list'
    import axios from 'axios'

    export default {
        name: "detail",
        data() {
            return {
                list: [],
                sightName:'',
                bannerImg:'',
                gallaryImgs:[],
            }
        },
        components: {
            Banner,
            DetailHeader,
            DetailList
        },
        methods: {
            getDetailInfo() {
                axios.get('http://localhost:8080/mock/detail.json', {
                    params: {
                        id: this.$route.params.id
                    }
                }).then((res) => {
                    res = res.data
                    if (res.ret && res.data) {
                        const data = res.data
                        this.sightName = data.sightName

                        this.bannerImg = data.bannerImg
                        console.log(this.bannerImg);
                        this.gallaryImgs = data.gallaryImgs

                        this.list = data.categoryList
                    }

                })
            }
        },
        mounted() {
            this.getDetailInfo()
        }
    }
</script>

<style scoped lang="scss">
    .content {
        height: 50rem;
    }

</style>