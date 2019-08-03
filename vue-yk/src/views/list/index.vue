<template>
    <div>
        <ul>
            <li v-for="item in list" :key="item.id" @click="chooseItem(item.id)">
                <span :class="['icon',{'high':item.id === chooseId}]"></span>
                {{item.name}}{{item.detail}}
            </li>
        </ul>
        <button @click="$router.push('/add')">添加</button>
    </div>
</template>
<script>
import {mapActions,mapState,mapMutations} from 'vuex'
export default {
    methods:{
        ...mapMutations(['choose']),
        chooseItem(id){
            this.choose(id);
            this.$router.go(-1);
        }
    },
    computed:{
        ...mapState(['list','chooseId'])
    }
}
</script>

<style>
.icon{
    display: inline-block;
    width:20px;
    height: 20px;
    border-radius: 50%;
    background: gray;
}
.high{
    background: orange;
}
</style>
