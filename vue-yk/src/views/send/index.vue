<template>
    <div>
        <header>
            <span @click="$router.push('/list')">送至：{{show}}</span>
        </header>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
                <img src="../../assets/logo.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/logo.png" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/logo.png" alt="">
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
    data(){
        return {
            swiperOption:{}
        }
    },
    computed:{
        ...mapGetters(['show'])
    },
    methods:{
        ...mapActions(['getList'])
    },
    created(){
        this.getList()
    }
}
</script>