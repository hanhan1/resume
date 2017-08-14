<template>
  <div>
    <el-form :label-position="labelPosition" label-width="70px" @submit.prevent="signIn">
  
      <el-form-item label="用户名">
        <el-input type="text" required v-model="formData.username"></el-input>
      </el-form-item>
  
      <el-form-item label="密码">
        <el-input type="text" required v-model="formData.password"></el-input>
      </el-form-item>
      <div class="actions">
        <!--<input type="submit" value="提交">-->
        <el-button @click="signIn">登录</el-button>
    <span class="errorMessage">{{errorMessage}}</span>
      
      </div>
    </el-form>     
     
  </div>
</template>

<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      errorMessage: '',
      currentUser: null,
      labelPosition: 'top',
    }
  },
  created() {
    this.currentUser = this.getCurrentUser();

  },
  

  methods: {
    // signIn(){
    //   let{username,password}=this.formData
    //   AV.User.logIn(username,password).then(()=>{
    //     this.$emit('setUser',getAVUser())
    //   },(error)=>{
    //     this.errorMessage=getErrorMessage(error)
    //   });
    // }
    signIn: function () {
      AV.User.logIn(this.formData.username, this.formData.password).then((loginedUser) => {
        this.currentUser = this.getCurrentUser()
        this.$emit('success', getAVUser())
        this.fetchResume()
      }, (error) => {
        this.errorMessage = getErrorMessage(error)
      });
    },
    getCurrentUser: function () {
      let current = AV.User.current()
      if (current) {
        let { id, createdAt, attributes: { username } } = AV.User.current()
        return { id, username, createdAt }
      } else {
        return null
      }
    },



  }
}
</script>


