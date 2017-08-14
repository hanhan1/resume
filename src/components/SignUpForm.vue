<template>
  <div>
    <el-form :label-position="labelPosition" label-width="70px"  @submit.prevent="signUp">
    
        <el-form-item label="用户名">
        <el-input type="text" v-model="formData.username" required></el-input>
        </el-form-item>
      
        <el-form-item label="密码">
        <el-input type="password" v-model="formData.password" required></el-input>
        </el-form-item>
      <div class="actions">
        <!--<input type="submit" value="提交">-->
         <el-button  @click="signUp">注册</el-button>
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
      errorMessage:'',
      currentUser:null,
      labelPosition:'top',
    }
  },
  
  created() {
     this.currentUser = this.getCurrentUser();
  },
  methods: {
    // signUp() {
    //   let { username, password } = this.formData
    //   var user = new AV.User();
    //   user.setUsername(username);
    //   user.setPassword(password);
    //   user.signUp().then(() => {
    //   }, (error) => {
    //    this.errorMessage=getErrorMessage(error)
    //   });
    // }

    signUp: function () {
      let user = new AV.User();
      user.setUsername(this.formData.username);
      user.setPassword(this.formData.password);
      user.signUp().then((loginedUser) => {
        this.currentUser = this.getCurrentUser()
        this.$emit('success',getAVUser()) 
      }, (error) => {
       this.errorMessage=getErrorMessage(error)
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

