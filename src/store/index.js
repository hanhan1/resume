import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from "object-path"
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    selected: 'profile',
    user:{
      id:'',
      username:''
    },
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' },
      ],
      profile: {
        name: '',
        city: 'hhhh',
        title: 'ddd',
        birthday:'eee'
      },
      workHistory: [
        { company: 'aa', content: 'my first job is' },

        { company: 'aa', content: 'my first job is' },
      ],
      education: [

        { school: 'aa', content: 'my first job is' },
        { school: 'aa', content: 'my first job is' },
      ],
      projects: [
        { name: 'aa', content: 'my first job is' },
        { name: 'aa', content: 'my first job is' },
      ],
      awards: [
        { name: 'aa', content: 'my first job is' },
        { name: 'aa', content: 'my first job is' },
      ],
      contacts: [
        { contact: 'qq', content: '21234423' },
        { contact: 'email', content: 'my first job is' },
      ],
    }
  }
  ,
  mutations: {
    initState(state,payload) {
      Object.assign(state,payload)
    },
    switchTab(state, payload) {
      state.selected = payload
      localStorage.setItem('state',JSON.stringify(state))
    },
    updateResume(state,{path,value}){
      objectPath.set(state.resume,path,value)
      localStorage.setItem('state',JSON.stringify(state))
    },
   

    setUser(state,payload){
      Object.assign(state.user,payload)
      console.log(state.user)
    },
    removeUser(state){
      state.user.id=null
    },
    
    
  }
})