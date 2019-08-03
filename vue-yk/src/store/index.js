import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{ //组件间共享的数据
        list:[],
        chooseId:0
    },
    mutations:{
        setList(state,list){  //第一个参数：state 第二个参数：触发函数时传的参数
            state.list = list;
        },
        addItem(state,obj){
            state.list.push(obj);
        },
        choose(state,id){
            state.chooseId = id
        }
    },
    getters:{
        show(state){
            let target = state.list.length > 0 && state.list.find(item => item.id === state.chooseId);
            console.log(target);
            return `${target.detail ? target.detail : '-- --'}`
        }
    },
    actions:{ //异步的操作
        getList({commit}){  //第一个参数：和store实例有相同的属性和方法
            axios.get('/api/list').then(res => {
                if(res.data.code === 1){
                    commit('setList',res.data.data)
                }
            })
        },
        addSync({commit},obj){
           axios.post('/api/add',obj).then(res => {
               if(res.data.code === 1){
                   commit('addItem',res.data.data)
               }
           })
        }
    }
})

// {
//     id:0,
//     name:'张三',
//     address:'北京',
//     detail:'北京八维',
//     phone:'1821212121'
// }