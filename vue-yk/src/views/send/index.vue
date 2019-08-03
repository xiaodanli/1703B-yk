<template>
    <div>
        <header>
            <span>送至：</span>
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
export default {
    data(){
        return {
            swiperOption:{}
        }
    }
}
</script>