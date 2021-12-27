import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
            likes: 0,
            isLike: false,
            more: {},
        }
    },
    mutations: {
      nameChange(state){
          state.name = 'park'; // this.name이 아닌것에 주의
      },
      updateAge(state, payload){
          state.age += payload;
      },
      addLikes(state){
          if(state.isLike){
              state.likes--;
              state.isLike=false;
          }else{
            state.likes++;
            state.isLike=true;
          }
      },
      setMore(state, data){
          state.more = data;
      }
    },
    actions: {
        getData(context){
          axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a)=>{
            a.data;
            context.commit('setMore',a.data)
          });  
        },
    },
})

export default store;